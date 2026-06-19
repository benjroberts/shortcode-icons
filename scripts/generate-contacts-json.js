const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Start a simple static file server to serve the website files
const server = http.createServer((req, res) => {
  const cleanUrl = req.url.split('?')[0];
  let filePath = path.join(__dirname, '..', cleanUrl === '/' ? 'index.html' : cleanUrl);
  
  const ext = path.extname(filePath);
  let contentType = 'text/html';
  if (ext === '.js') contentType = 'text/javascript';
  else if (ext === '.css') contentType = 'text/css';
  else if (ext === '.svg') contentType = 'image/svg+xml';
  else if (ext === '.png') contentType = 'image/png';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(8086, async () => {
  console.log('Local test server running on port 8086');
  
  try {
    console.log('Launching headless browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Navigate to local server
    await page.goto('http://localhost:8086/');
    
    console.log('Waiting for logos to load in browser...');
    await page.waitForFunction(() => typeof window.LogosLoaded !== 'undefined');
    await page.evaluate(() => window.LogosLoaded);
    
    console.log('Extracting contacts with base64 JPEG logos...');
    const contacts = await page.evaluate(() => {
      return window.DirectoryData.map(brand => {
        const vcard = window.buildContactVcardString(brand);
        let photoBase64 = '';
        if (vcard) {
          const match = vcard.match(/PHOTO;ENCODING=b;TYPE=JPEG:([\s\S]+?)(?=\r\n[A-Z]|$)/i);
          if (match) {
            photoBase64 = match[1].replace(/\r?\n\s/g, '').trim();
          }
        }
        return {
          id: brand.id,
          name: brand.name,
          fullName: brand.fullName,
          category: brand.category,
          shortcodes: brand.shortcodes,
          sms: brand.sms,
          photoBase64: photoBase64
        };
      });
    });
    
    console.log(`Successfully generated data for ${contacts.length} contacts.`);
    
    // Save to sync-server/contacts.json
    const outputPath = path.join(__dirname, '..', 'sync-server', 'contacts.json');
    fs.writeFileSync(outputPath, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(`Saved contacts.json to ${outputPath}`);
    
    await browser.close();
    server.close();
    process.exit(0);
  } catch (err) {
    console.error('Error during contacts generation:', err);
    server.close();
    process.exit(1);
  }
});
