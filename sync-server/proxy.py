import http.server
import urllib.request
import urllib.error
import json
import os
import re
import subprocess
import sys

RADICALE_PORT = 8081
PROXY_PORT = 8080

# Start radicale process and capture output
log_file = open("/radicale.log", "w", buffering=1)
log_file.write("Starting proxy helper...\n")

# Find radicale executable dynamically
import shutil
radicale_cmd = None

if os.path.exists("/app/bin/python") and os.path.exists("/app/bin/radicale"):
    radicale_cmd = ["/app/bin/python", "/app/bin/radicale"]
else:
    for path in ["/app/bin/radicale", "/usr/local/bin/radicale", "/usr/bin/radicale", "/usr/sbin/radicale"]:
        if os.path.exists(path):
            radicale_cmd = [path]
            break

if not radicale_cmd:
    which_path = shutil.which("radicale")
    if which_path:
        radicale_cmd = [which_path]
    elif os.path.exists("/app/bin/python"):
        radicale_cmd = ["/app/bin/python", "-m", "radicale"]
    else:
        radicale_cmd = ["python3", "-m", "radicale"]

log_file.write(f"Resolved Radicale execution command: {radicale_cmd}\n")
def populate_radicale_from_json():
    json_path = "/contacts.json"
    if not os.path.exists(json_path):
        json_path = os.path.join(os.path.dirname(__file__), "contacts.json")
        if not os.path.exists(json_path):
            return
            
    try:
        with open(json_path, "r", encoding="utf-8") as f:
            contacts = json.load(f)
    except Exception as e:
        sys.stderr.write(f"Error loading contacts.json: {e}\n")
        return
        
    for user in ["public", "admin"]:
        collection_dir = f"/var/lib/radicale/collections/collection-root/{user}/shortcode-icons-selected"
        os.makedirs(collection_dir, exist_ok=True)
        
        props_path = os.path.join(collection_dir, ".Radicale.props")
        if not os.path.exists(props_path):
            try:
                with open(props_path, "w", encoding="utf-8") as f:
                    json.dump({
                        "D:displayname": "Short Code Icons",
                        "tag": "VADDRESSBOOK"
                    }, f)
            except Exception as e:
                sys.stderr.write(f"Error writing .Radicale.props for {user}: {e}\n")
                
        valid_filenames = set()
        for c in contacts:
            brand_id = c.get("id")
            if not brand_id:
                continue
            filename = f"{brand_id}.vcf"
            valid_filenames.add(filename)
            
            fullName = c.get("fullName", c.get("name", ""))
            name = c.get("name", "")
            shortcodes = c.get("shortcodes", [])
            photoBase64 = c.get("photoBase64", "")
            sms = c.get("sms", "")
            category = c.get("category", "services")
            
            if photoBase64.startswith("data:"):
                try:
                    photoBase64 = photoBase64.split(",")[1]
                except Exception:
                    pass
                    
            vcf = "BEGIN:VCARD\r\n"
            vcf += "VERSION:3.0\r\n"
            vcf += f"UID:{brand_id}\r\n"
            vcf += f"FN:{fullName}\r\n"
            vcf += f"N:;{fullName};;;\r\n"
            vcf += f"ORG:{name}\r\n"
            vcf += "X-ABShowAs:COMPANY\r\n"
            for sc in shortcodes:
                vcf += f"TEL;TYPE=CELL:{sc}\r\n"
            if photoBase64:
                folded_photo = ""
                for i in range(0, len(photoBase64), 70):
                    folded_photo += photoBase64[i:i+70] + "\r\n "
                folded_photo = folded_photo.rstrip(" \r\n")
                vcf += f"PHOTO;ENCODING=b;TYPE=JPEG:{folded_photo}\r\n"
            if sms:
                vcf += f"NOTE:{sms}\r\n"
            if category:
                vcf += f"CATEGORIES:{category}\r\n"
            vcf += "END:VCARD\r\n"
            
            file_path = os.path.join(collection_dir, filename)
            try:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(vcf)
            except Exception as e:
                sys.stderr.write(f"Error writing vCard file {filename} for {user}: {e}\n")
                
        try:
            for item in os.listdir(collection_dir):
                if item.endswith(".vcf") and item not in valid_filenames:
                    os.remove(os.path.join(collection_dir, item))
        except Exception as e:
            sys.stderr.write(f"Error cleaning up old vCards for {user}: {e}\n")

# Populate Radicale database from contacts.json
try:
    populate_radicale_from_json()
    log_file.write("Successfully synchronized Radicale database from contacts.json\n")
except Exception as err:
    log_file.write(f"Failed to sync Radicale from contacts.json: {err}\n")
log_file.flush()

radicale_process = subprocess.Popen(
    radicale_cmd + ["--hosts", f"127.0.0.1:{RADICALE_PORT}"],
    stdout=log_file,
    stderr=log_file
)

def get_contacts_from_filesystem():
    possible_paths = [
        "/var/lib/radicale/collections",
        "/data/collections",
        "/data"
    ]
    
    collections_dir = None
    for p in possible_paths:
        if os.path.exists(p) and os.path.isdir(p):
            collections_dir = p
            break
            
    if not collections_dir:
        return []
        
    contacts = []
    
    # Recursively find all .vcf files
    for root, dirs, files in os.walk(collections_dir):
        for file in files:
            if file.endswith(".vcf"):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                        vcard_text = f.read()
                        contact = parse_vcard(vcard_text)
                        if contact:
                            contacts.append(contact)
                except Exception as e:
                    print(f"Error reading {file_path}: {e}", file=sys.stderr)
                    
    # Sort contacts alphabetically by name
    contacts.sort(key=lambda x: x.get("name", "").lower())
    return contacts

def parse_vcard(vcard_text):
    # Unfold lines: a newline followed by a space or horizontal tab
    unfolded = re.sub(r'\r?\n[ \t]', '', vcard_text)
    lines = unfolded.splitlines()
    
    has_begin = False
    has_end = False
    
    name = ""
    fullName = ""
    shortcodes = []
    photoBase64 = ""
    sms = ""
    category = "services"
    
    for line in lines:
        if not line.strip():
            continue
        if line.startswith("BEGIN:VCARD"):
            has_begin = True
            continue
        if line.startswith("END:VCARD"):
            has_end = True
            continue
            
        colon_idx = line.find(":")
        if colon_idx == -1:
            continue
            
        key_part = line[:colon_idx]
        val_part = line[colon_idx+1:]
        
        key_segments = key_part.split(";")
        key = key_segments[0].upper()
        
        if key == "FN":
            fullName = val_part.strip()
        elif key == "ORG":
            name = val_part.split(";")[0].strip()
        elif key == "TEL":
            cleaned = re.sub(r'[^\d+*#]', '', val_part).strip()
            if cleaned:
                shortcodes.append(cleaned)
        elif key == "PHOTO":
            params = [p.upper() for p in key_segments[1:]]
            is_base64 = any("ENCODING=B" in p or "ENCODING=BASE64" in p or "BASE64" in p for p in params)
            if is_base64 or val_part.startswith("/9j/"):
                photoBase64 = val_part.strip()
        elif key == "NOTE":
            sms = val_part.strip()
        elif key == "CATEGORIES":
            category = val_part.split(",")[0].strip().lower()
            
    if not has_begin or not has_end:
        return None
        
    if not name:
        name = fullName or "Unknown Brand"
    if not fullName:
        fullName = name
        
    brand_id = re.sub(r'[^a-z0-9]', '', name.lower())
    
    return {
        "id": brand_id,
        "name": name,
        "fullName": fullName,
        "shortcodes": shortcodes,
        "photoBase64": photoBase64,
        "sms": sms,
        "category": category
    }

class ProxyHandler(http.server.BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PROPFIND, PROPPATCH, REPORT, PUT, MOVE, DELETE, LOCK, UNLOCK")
        self.send_header("Access-Control-Allow-Headers", "User-Agent, Authorization, Content-type, Depth, If-match, If-None-Match, Lock-Token, Timeout, Destination, Overwrite, X-client, X-Requested-With")
        self.send_header("Access-Control-Expose-Headers", "Etag")
        self.end_headers()

    def do_GET(self):
        clean_path = self.path.split('?')[0].rstrip('/')
        if clean_path in ("/api/contacts", "/api/contacts.json"):
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            json_path = "/contacts.json"
            if not os.path.exists(json_path):
                json_path = os.path.join(os.path.dirname(__file__), "contacts.json")
            try:
                with open(json_path, "r", encoding="utf-8") as f:
                    self.wfile.write(f.read().encode("utf-8"))
            except Exception as e:
                contacts = get_contacts_from_filesystem()
                self.wfile.write(json.dumps(contacts).encode("utf-8"))
        elif clean_path in ("/subscription.mobileconfig", "/shortcode-subscription.mobileconfig"):
            self.send_response(200)
            self.send_header("Content-Type", "application/x-apple-aspen-config")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            profile_path = "/shortcode-subscription.mobileconfig"
            if not os.path.exists(profile_path):
                profile_path = os.path.join(os.path.dirname(__file__), "..", "shortcode-subscription.mobileconfig")
                if not os.path.exists(profile_path):
                    profile_path = os.path.join(os.path.dirname(__file__), "shortcode-subscription.mobileconfig")
            try:
                with open(profile_path, "rb") as f:
                    self.wfile.write(f.read())
            except Exception as e:
                self.wfile.write(f"Failed to load profile: {e}".encode("utf-8"))
            return

        elif clean_path == "/api/debug":
            self.send_response(200)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            try:
                with open("/radicale.log", "r") as f:
                    logs = f.read()
                self.wfile.write(logs.encode("utf-8"))
            except Exception as e:
                self.wfile.write(f"Failed to read logs: {e}".encode("utf-8"))
            return
            
        self.proxy_request("GET")
        
    def do_POST(self):
        self.proxy_request("POST")
        
    def do_PUT(self):
        self.proxy_request("PUT")
        
    def do_MKCOL(self):
        self.proxy_request("MKCOL")
        
    def do_DELETE(self):
        self.proxy_request("DELETE")
        
    def do_PROPFIND(self):
        self.proxy_request("PROPFIND")
        
    def do_PROPPATCH(self):
        self.proxy_request("PROPPATCH")
        
    def do_REPORT(self):
        self.proxy_request("REPORT")
        
    def do_MOVE(self):
        self.proxy_request("MOVE")
        
    def do_LOCK(self):
        self.proxy_request("LOCK")
        
    def do_UNLOCK(self):
        self.proxy_request("UNLOCK")
        
    def proxy_request(self, method):
        path = self.path
        clean_path = path.split('?')[0].rstrip('/')
        if clean_path == "/.well-known/carddav" or clean_path.startswith("/principals"):
            self.send_response(301)
            self.send_header("Location", "https://sync.shortcodeicons.com/public/shortcode-icons-selected/")
            self.end_headers()
            return

        if path.startswith(("/css/", "/js/", "/images/")):
            path = "/.web" + path
        url = f"http://127.0.0.1:{RADICALE_PORT}{path}"
        headers = {k: v for k, v in self.headers.items() if k.lower() != 'host'}
        
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length) if content_length > 0 else None
        
        req = urllib.request.Request(url, data=body, headers=headers, method=method)
        try:
            with urllib.request.urlopen(req) as res:
                self.send_response(res.status)
                for k, v in res.getheaders():
                    if k.lower() != 'transfer-encoding':
                        self.send_header(k, v)
                if not res.getheader("Access-Control-Allow-Origin"):
                    self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(res.read())
        except urllib.error.HTTPError as e:
            self.send_response(e.code)
            for k, v in e.headers.items():
                if k.lower() != 'transfer-encoding':
                    self.send_header(k, v)
            if not e.headers.get("Access-Control-Allow-Origin"):
                self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(e.read())
        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "text/plain")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(f"Proxy error: {e}".encode("utf-8"))

def run_server():
    server_address = ('', PROXY_PORT)
    httpd = http.server.HTTPServer(server_address, ProxyHandler)
    print(f"Proxy server running on port {PROXY_PORT}, forwarding to Radicale on port {RADICALE_PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        radicale_process.terminate()

if __name__ == "__main__":
    run_server()
