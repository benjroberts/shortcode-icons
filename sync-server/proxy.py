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

# Start radicale process
radicale_process = subprocess.Popen([
    "radicale",
    "--hosts", f"127.0.0.1:{RADICALE_PORT}"
])

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
        if self.path == "/api/contacts" or self.path == "/api/contacts.json":
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            contacts = get_contacts_from_filesystem()
            self.wfile.write(json.dumps(contacts).encode("utf-8"))
            return
            
        self.proxy_request("GET")
        
    def do_POST(self):
        self.proxy_request("POST")
        
    def do_PUT(self):
        self.proxy_request("PUT")
        
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
        url = f"http://127.0.0.1:{RADICALE_PORT}{self.path}"
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
