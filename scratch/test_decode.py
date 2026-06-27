import json
import base64
import os

def main():
    json_path = "/Users/benroberts/Sites/shortcode/sync-server/contacts.json"
    with open(json_path, "r", encoding="utf-8") as f:
        contacts = json.load(f)
    
    for contact in contacts:
        if contact.get("id") == "slack":
            photo_b64 = contact.get("photoBase64")
            if photo_b64:
                # Decoded
                img_data = base64.b64decode(photo_b64)
                output_path = "/Users/benroberts/Sites/shortcode/scratch/slack_contact.jpg"
                with open(output_path, "wb") as out_f:
                    out_f.write(img_data)
                print(f"SUCCESS: Decoded Slack contact image to {output_path}")
                return
    print("FAILED: Could not find Slack photo data.")

if __name__ == "__main__":
    main()
