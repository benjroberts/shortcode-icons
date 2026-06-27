const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const cleanUrl = req.url.split('?')[0];
  let filePath = path.join(__dirname, '..', cleanUrl);
  
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

server.listen(8087, async () => {
  console.log('Preview server running on port 8087');
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Set a viewport that fits our 3x3 grid cleanly
    await page.setViewport({
      width: 700,
      height: 700,
      deviceScaleFactor: 2
    });
    
    console.log('Navigating to preview page...');
    await page.goto('http://localhost:8087/scratch/preview_logos.html');
    
    console.log('Waiting for logos to render...');
    await page.waitForFunction(() => typeof window.PreviewReady !== 'undefined' && window.PreviewReady === true);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const outputPath = '/Users/benroberts/.gemini/antigravity/brain/fa31d16b-a423-45eb-91bd-760c37feefae/logos_preview.png';
    console.log('Capturing screenshot...');
    await page.screenshot({
      path: outputPath,
      type: 'png'
    });
    
    console.log(`Saved screenshot to: ${outputPath}`);
    await browser.close();
    server.close();
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    server.close();
    process.exit(1);
  }
});
