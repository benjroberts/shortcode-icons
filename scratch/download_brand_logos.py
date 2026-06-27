import urllib.request
import ssl
import hashlib
import os

def get_wikimedia_url(filename):
    # Standard format: https://upload.wikimedia.org/wikipedia/commons/a/ab/Filename.svg
    # where 'a' and 'b' are the first two chars of MD5(filename)
    filename_clean = filename.replace(' ', '_')
    md5 = hashlib.md5(filename_clean.encode('utf-8')).hexdigest()
    char1 = md5[0]
    char2 = md5[1]
    return f"https://upload.wikimedia.org/wikipedia/commons/{char1}/{char1}{char2}/{filename_clean}"

def download_file(url, dest):
    print(f"Downloading from: {url}")
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            content = response.read()
        
        # Write file
        with open(dest, "wb") as f:
            f.write(content)
        print(f"SUCCESS: Saved to {dest} ({len(content)} bytes)")
        return True
    except Exception as e:
        print(f"Failed download: {e}")
        return False

def main():
    logo_dir = "/Users/benroberts/Sites/shortcode/logos"
    
    # 1. Lowe's
    lowes_url = get_wikimedia_url("Lowes Companies Logo.svg")
    download_file(lowes_url, os.path.join(logo_dir, "lowes.svg"))
    
    # 2. Slack
    slack_url = get_wikimedia_url("Slack Logo Icon.svg")
    download_file(slack_url, os.path.join(logo_dir, "slack.svg"))
    
    # 3. Southwest
    southwest_url = get_wikimedia_url("Southwest Airlines logo 2014.svg")
    download_file(southwest_url, os.path.join(logo_dir, "southwest.svg"))

    # 4. Lululemon
    lululemon_url = get_wikimedia_url("Lululemon Athletica logo.svg")
    download_file(lululemon_url, os.path.join(logo_dir, "lululemon.svg"))

if __name__ == "__main__":
    main()
