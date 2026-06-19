// Logo rendering module using preloaded SVG assets.
// Supports both multi-colored (color) and tintable monochromatic (mono) SVGs.

export const BrandStyles = {
  google: { type: 'color', bg: '#FFFFFF', padding: 0.15 },
  microsoft: { type: 'color', bg: '#FFFFFF', padding: 0.22 },
  apple: { type: 'mono', bg: '#161617', fg: '#FFFFFF', padding: 0.22 },
  meta: { type: 'color', bg: '#FFFFFF', padding: 0.22 },
  okta: { type: 'mono', bg: '#0F2C59', fg: '#FFFFFF', padding: 0.24 },
  authy: { type: 'color', bg: '#FFFFFF', padding: 0.2 },
  chase: { type: 'mono', bg: '#004B87', fg: '#FFFFFF', padding: 0.22 },
  paypal: { type: 'color', bg: '#FFFFFF', padding: 0.18 },
  venmo: { type: 'mono', bg: '#008CFF', fg: '#FFFFFF', padding: 0.25 },
  cashapp: { type: 'color', bg: '#00D632', padding: 0.22 },
  homedepot: { type: 'color', bg: '#F96302', padding: 0 },
  walmart: { type: 'mono', bg: '#0071DC', fg: '#FFC220', padding: 0.2 },
  target: { type: 'mono', bg: '#CC0000', fg: '#FFFFFF', padding: 0.18 },
  kohls: { type: 'color', bg: '#1C1C1C', padding: 0 },
  amazon: { type: 'mono', bg: '#131921', fg: '#FF9900', padding: 0.22 },
  bestbuy: { type: 'color', bg: '#0046BE', padding: 0.15 },
  costco: { type: 'color', bg: '#E31837', padding: 0 },
  ups: { type: 'mono', bg: '#351C15', fg: '#FFB500', padding: 0.18 },
  fedex: { type: 'mono', bg: '#4D148C', fg: '#FFFFFF', padding: 0.2 },
  usps: { type: 'mono', bg: '#002561', fg: '#FFFFFF', padding: 0.18 },
  walgreens: { type: 'color', bg: '#E31837', padding: 0 },
  cvs: { type: 'color', bg: '#CC0000', padding: 0 },
  budget: { type: 'color', bg: '#EE3124', padding: 0 },
  slateauto: { type: 'color', bg: '#3A4D5C', padding: 0 },
  vitaminshoppe: { type: 'color', bg: '#002855', padding: 0 },
  starbucks: { type: 'mono', bg: '#006241', fg: '#FFFFFF', padding: 0.15 },
  doordash: { type: 'mono', bg: '#FF3008', fg: '#FFFFFF', padding: 0.22 },
  dominos: { type: 'color', bg: '#006491', padding: 0.15 },
  uber: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.25 },
  lyft: { type: 'color', bg: '#FF00BF', padding: 0.2 }
};

const LogoImages = {};
const brands = Object.keys(BrandStyles);

// Preload SVG assets in the browser
brands.forEach(brandId => {
  const img = new Image();
  img.src = `logos/${brandId}.svg`;
  LogoImages[brandId] = img;
});

// Promise that resolves when all SVG logos have successfully loaded (or failed to load)
export const LogosLoaded = Promise.all(
  brands.map(brandId => {
    return new Promise(resolve => {
      const img = LogoImages[brandId];
      if (img.complete) {
        resolve();
      } else {
        img.onload = () => resolve();
        img.onerror = () => {
          console.error(`Failed to load SVG logo for: ${brandId}`);
          resolve(); // Resolve anyway so the UI can draw whatever is available
        };
      }
    });
  })
);

// Shared canvas drawing function
function drawBrandLogo(ctx, brandId, size) {
  const style = BrandStyles[brandId];
  if (!style) return;

  const img = LogoImages[brandId];
  
  // 1. Draw solid background color
  ctx.fillStyle = style.bg || '#FFFFFF';
  ctx.fillRect(0, 0, size, size);

  if (!img || !img.complete || img.naturalWidth === 0) {
    // If not loaded, draw text initials fallback inside the canvas
    ctx.fillStyle = style.fg || '#FFFFFF';
    ctx.font = `bold ${size * 0.4}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(brandId.substring(0, 2).toUpperCase(), size / 2, size / 2);
    return;
  }

  // 2. Compute sizing with padding
  const padding = style.padding !== undefined ? style.padding * size : 0;
  const destSize = size - 2 * padding;
  const offset = padding;

  // 3. Draw logo
  if (style.type === 'mono') {
    // Tint monochromatic SVGs using an offscreen canvas
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = size;
    tempCanvas.height = size;
    const tempCtx = tempCanvas.getContext('2d');

    // Draw SVG onto offscreen canvas
    tempCtx.drawImage(img, offset, offset, destSize, destSize);

    // Fill with official brand foreground color
    tempCtx.globalCompositeOperation = 'source-in';
    tempCtx.fillStyle = style.fg || '#FFFFFF';
    tempCtx.fillRect(0, 0, size, size);

    // Render tinted canvas back to parent
    ctx.drawImage(tempCanvas, 0, 0);
  } else {
    // Directly draw colored SVG
    ctx.drawImage(img, offset, offset, destSize, destSize);
  }
}

// Export object matching old BrandLogos interface
export const BrandLogos = {};
brands.forEach(brandId => {
  BrandLogos[brandId] = (ctx, size) => drawBrandLogo(ctx, brandId, size);
});
