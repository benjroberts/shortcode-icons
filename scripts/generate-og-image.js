const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Start a simple static file server to serve the website files from the project root
const server = http.createServer((req, res) => {
  const cleanUrl = req.url.split('?')[0];
  // Serve files from root directory
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
  console.log('Local static server running on port 8086');
  
  try {
    console.log('Launching headless browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Set viewport size for social sharing image (1200x630 is standard)
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 2 // High-DPI/Retina rendering for ultra-crisp logos and text
    });
    
    console.log('Navigating to builder page...');
    await page.goto('http://localhost:8086/og-image-builder.html');
    
    console.log('Waiting for logos to render on canvas...');
    await page.waitForFunction(() => typeof window.OGImageReady !== 'undefined' && window.OGImageReady === true);
    
    // Small delay to ensure any text anti-aliasing/rendering completes
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log('Capturing screenshot...');
    const outputPath = path.join(__dirname, '..', 'og-image-v3.png');
    await page.screenshot({
      path: outputPath,
      type: 'png'
    });
    
    console.log(`Successfully generated high-fidelity OG image at: ${outputPath}`);
    
    await browser.close();
    server.close();
    process.exit(0);
  } catch (err) {
    console.error('Error during OG image generation:', err);
    server.close();
    process.exit(1);
  }
});
