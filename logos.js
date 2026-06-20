// Logo rendering module using preloaded SVG assets.
// Supports both multi-colored (color) and tintable monochromatic (mono) SVGs.

// NOTE: Always keep this list sorted alphabetically by brand key.
export const BrandStyles = {
  acorns: { type: 'mono', bg: '#00A86B', fg: '#FFFFFF', padding: 0.2 },
  adidas: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  adobe: { type: 'mono', bg: '#FF0000', fg: '#FFFFFF', padding: 0.22 },
  affirm: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.2 },
  airbnb: { type: 'mono', bg: '#FF5A5F', fg: '#FFFFFF', padding: 0.2 },
  airtable: { type: 'mono', bg: '#1868F2', fg: '#FFFFFF', padding: 0.2 },
  ally: { type: 'mono', bg: '#4B0082', fg: '#FFFFFF', padding: 0.2 },
  amazon: { type: 'mono', bg: '#131921', fg: '#FF9900', padding: 0.22 },
  americanairlines: { type: 'mono', bg: '#0078D2', fg: '#FFFFFF', padding: 0.18 },
  americanexpress: { type: 'mono', bg: '#FFFFFF', fg: '#0070CD', padding: 0.15 },
  apple: { type: 'mono', bg: '#161617', fg: '#FFFFFF', padding: 0.22 },
  att: { type: 'mono', bg: '#009FDB', fg: '#FFFFFF', padding: 0.2 },
  authy: { type: 'color', bg: '#FFFFFF', padding: 0.2 },
  avis: { type: 'mono', bg: '#D4121A', fg: '#FFFFFF', padding: 0.2 },
  bankofamerica: { type: 'mono', bg: '#002C77', fg: '#FFFFFF', padding: 0.2 },
  benchmade: { type: 'mono', bg: '#0F172A', fg: '#FFFFFF', padding: 0.2 },
  bestbuy: { type: 'color', bg: '#0046BE', padding: 0.15 },
  bookingcom: { type: 'mono', bg: '#003580', fg: '#FFFFFF', padding: 0.2 },
  budget: { type: 'color', bg: '#00285F', padding: 0.18 },
  burgerking: { type: 'mono', bg: '#F5EBDC', fg: '#D62300', padding: 0.15 },
  canva: { type: 'mono', bg: '#00C4CC', fg: '#FFFFFF', padding: 0.2 },
  capitalone: { type: 'color', bg: '#FFFFFF', padding: 0.18 },
  cashapp: { type: 'color', bg: '#00D632', padding: 0.22 },
  chase: { type: 'mono', bg: '#004B87', fg: '#FFFFFF', padding: 0.22 },
  chickfilay: { type: 'mono', bg: '#E5173F', fg: '#FFFFFF', padding: 0.2 },
  chime: { type: 'mono', bg: '#25C974', fg: '#FFFFFF', padding: 0.2 },
  chipotle: { type: 'color', bg: '#FFFFFF', padding: 0.02 },
  circlek: { type: 'color', bg: '#FFFFFF', padding: 0.15 },
  citibank: { type: 'color', bg: '#003B70', padding: 0.15 },
  cloudflare: { type: 'mono', bg: '#FAAD14', fg: '#FFFFFF', padding: 0.22 },
  coinbase: { type: 'mono', bg: '#0052FF', fg: '#FFFFFF', padding: 0.22 },
  costco: { type: 'color', bg: '#FFFFFF', padding: 0.18 },
  creditkarma: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.2 },
  cvs: { type: 'color', bg: '#CC0000', padding: 0 },
  delta: { type: 'mono', bg: '#002244', fg: '#FFFFFF', padding: 0.18 },
  discord: { type: 'mono', bg: '#5865F2', fg: '#FFFFFF', padding: 0.2 },
  discover: { type: 'mono', bg: '#FF6000', fg: '#FFFFFF', padding: 0.2 },
  disneyplus: { type: 'mono', bg: '#113CCF', fg: '#FFFFFF', padding: 0.2 },
  dominos: { type: 'color', bg: '#006491', padding: 0.15 },
  doordash: { type: 'mono', bg: '#FF3008', fg: '#FFFFFF', padding: 0.22 },
  dropbox: { type: 'mono', bg: '#0061FE', fg: '#FFFFFF', padding: 0.22 },
  dunkin: { type: 'mono', bg: '#FF671F', fg: '#FFFFFF', padding: 0.18 },
  ebay: { type: 'color', bg: '#FFFFFF', padding: 0.18 },
  enterprise: { type: 'mono', bg: '#005A36', fg: '#FFFFFF', padding: 0.2 },
  etrade: { type: 'mono', bg: '#1E0A3D', fg: '#FFFFFF', padding: 0.2 },
  eventbrite: { type: 'mono', bg: '#F15C22', fg: '#FFFFFF', padding: 0.2 },
  expedia: { type: 'mono', bg: '#F3A51A', fg: '#FFFFFF', padding: 0.2 },
  fedex: { type: 'mono', bg: '#4D148C', fg: '#FFFFFF', padding: 0.2 },
  fidelity: { type: 'mono', bg: '#008A00', fg: '#FFFFFF', padding: 0.2 },
  figma: { type: 'mono', bg: '#1E1E1E', fg: '#FFFFFF', padding: 0.2 },
  gap: { type: 'mono', bg: '#00005F', fg: '#FFFFFF', padding: 0.2 },
  github: { type: 'mono', bg: '#181717', fg: '#FFFFFF', padding: 0.2 },
  google: { type: 'color', bg: '#FFFFFF', padding: 0.15 },
  grubhub: { type: 'mono', bg: '#F63440', fg: '#FFFFFF', padding: 0.2 },
  hertz: { type: 'mono', bg: '#FFF200', fg: '#000000', padding: 0.2 },
  hilton: { type: 'mono', bg: '#002F6C', fg: '#FFFFFF', padding: 0.2 },
  hm: { type: 'mono', bg: '#E5001C', fg: '#FFFFFF', padding: 0.2 },
  homedepot: { type: 'color', bg: '#F96302', padding: 0 },
  hulu: { type: 'mono', bg: '#1CE783', fg: '#000000', padding: 0.22 },
  hyatt: { type: 'mono', bg: '#002F6C', fg: '#FFFFFF', padding: 0.2 },
  ikea: { type: 'mono', bg: '#0058A3', fg: '#FFC220', padding: 0.15 },
  instacart: { type: 'mono', bg: '#FFFFFF', fg: '#43B02A', padding: 0.18 },
  klarna: { type: 'mono', bg: '#FFB3C7', fg: '#000000', padding: 0.2 },
  kohls: { type: 'color', bg: '#1C1C1C', padding: 0 },
  kroger: { type: 'color', bg: '#FFFFFF', padding: 0.15 },
  linkedin: { type: 'mono', bg: '#0A66C2', fg: '#FFFFFF', padding: 0.2 },
  lowes: { type: 'color', bg: '#FFFFFF', padding: 0.15 },
  lululemon: { type: 'mono', bg: '#E3000F', fg: '#FFFFFF', padding: 0.2 },
  lyft: { type: 'mono', bg: '#FF00BF', fg: '#FFFFFF', padding: 0.25 },
  macys: { type: 'mono', bg: '#E11A22', fg: '#FFFFFF', padding: 0.2 },
  marriott: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.2 },
  mastercard: { type: 'mono', bg: '#0A3A60', fg: '#FFFFFF', padding: 0.15 },
  max: { type: 'mono', bg: '#FFFFFF', fg: '#002EF6', padding: 0.2 },
  mcdonalds: { type: 'mono', bg: '#F11A22', fg: '#FFC72C', padding: 0.15 },
  meta: { type: 'color', bg: '#FFFFFF', padding: 0.22 },
  microsoft: { type: 'color', bg: '#FFFFFF', padding: 0.22 },
  mintmobile: { type: 'mono', bg: '#95D600', fg: '#FFFFFF', padding: 0.2 },
  netflix: { type: 'mono', bg: '#000000', fg: '#E50914', padding: 0.2 },
  nike: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.25 },
  nordstrom: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  notion: { type: 'mono', bg: '#FFFFFF', fg: '#000000', padding: 0.2 },
  okta: { type: 'mono', bg: '#FFFFFF', fg: '#007DC1', padding: 0.24 },
  panerabread: { type: 'mono', bg: '#325232', fg: '#FFFFFF', padding: 0.2 },
  papajohns: { type: 'mono', bg: '#005A36', fg: '#FFFFFF', padding: 0.2 },
  paramountplus: { type: 'mono', bg: '#0057E7', fg: '#FFFFFF', padding: 0.2 },
  patreon: { type: 'mono', bg: '#FF424D', fg: '#FFFFFF', padding: 0.2 },
  paypal: { type: 'color', bg: '#FFFFFF', padding: 0.18 },
  peacock: { type: 'color', bg: '#000000', padding: 0.18 },
  petsmart: { type: 'mono', bg: '#E51837', fg: '#FFFFFF', padding: 0.2 },
  pinterest: { type: 'mono', bg: '#E60023', fg: '#FFFFFF', padding: 0.2 },
  pizzahut: { type: 'mono', bg: '#EE1C25', fg: '#FFFFFF', padding: 0.15 },
  postmates: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.2 },
  progressive: { type: 'mono', bg: '#002C77', fg: '#FFFFFF', padding: 0.2 },
  reddit: { type: 'mono', bg: '#FF4500', fg: '#FFFFFF', padding: 0.2 },
  riteaid: { type: 'color', bg: '#00356B', padding: 0.18 },
  robinhood: { type: 'mono', bg: '#00C805', fg: '#000000', padding: 0.2 },
  schwab: { type: 'mono', bg: '#00A0E0', fg: '#FFFFFF', padding: 0.2 },
  sephora: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  seveneleven: { type: 'color', bg: '#FFFFFF', padding: 0.15 },
  shipt: { type: 'mono', bg: '#FFC400', fg: '#000000', padding: 0.2 },
  shopify: { type: 'mono', bg: '#96BF48', fg: '#FFFFFF', padding: 0.2 },
  signal: { type: 'mono', bg: '#3A76F0', fg: '#FFFFFF', padding: 0.2 },
  skims: { type: 'mono', bg: '#E2D1C3', fg: '#1C1613', padding: 0.22 },
  slack: { type: 'color', bg: '#FFFFFF', padding: 0.2 },
  slateauto: { type: 'color', bg: '#3A4D5C', padding: 0 },
  snapchat: { type: 'mono', bg: '#FFFC00', fg: '#FFFFFF', padding: 0.2 },
  sofi: { type: 'mono', bg: '#0052FF', fg: '#FFFFFF', padding: 0.2 },
  southwest: { type: 'color', bg: '#FFFFFF', padding: 0.18 },
  spectrum: { type: 'mono', bg: '#003057', fg: '#FFFFFF', padding: 0.2 },
  spotify: { type: 'mono', bg: '#1DB954', fg: '#FFFFFF', padding: 0.2 },
  squarespace: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  starbucks: { type: 'mono', bg: '#006241', fg: '#FFFFFF', padding: 0.15 },
  steam: { type: 'mono', bg: '#171A21', fg: '#FFFFFF', padding: 0.2 },
  stripe: { type: 'mono', bg: '#635BFF', fg: '#FFFFFF', padding: 0.25 },
  subway: { type: 'color', bg: '#008C44', padding: 0.18 },
  sweetgreen: { type: 'mono', bg: '#13322B', fg: '#FFFFFF', padding: 0.2 },
  tacobell: { type: 'mono', bg: '#702082', fg: '#FFFFFF', padding: 0.2 },
  target: { type: 'mono', bg: '#CC0000', fg: '#FFFFFF', padding: 0.18 },
  telegram: { type: 'mono', bg: '#24A1DE', fg: '#FFFFFF', padding: 0.2 },
  ticketmaster: { type: 'mono', bg: '#026CDF', fg: '#FFFFFF', padding: 0.2 },
  tiktok: { type: 'mono', bg: '#010101', fg: '#FFFFFF', padding: 0.2 },
  tmobile: { type: 'mono', bg: '#E20074', fg: '#FFFFFF', padding: 0.2 },
  turbotax: { type: 'mono', bg: '#0077C5', fg: '#FFFFFF', padding: 0.2 },
  twitch: { type: 'mono', bg: '#9146FF', fg: '#FFFFFF', padding: 0.2 },
  uber: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.25 },
  ulta: { type: 'mono', bg: '#FFFFFF', fg: '#000000', padding: 0.18 },
  united: { type: 'mono', bg: '#002244', fg: '#FFFFFF', padding: 0.2 },
  ups: { type: 'mono', bg: '#351C15', fg: '#FFB500', padding: 0.18 },
  usps: { type: 'mono', bg: '#002561', fg: '#FFFFFF', padding: 0.18 },
  vanguard: { type: 'mono', bg: '#800000', fg: '#FFFFFF', padding: 0.2 },
  venmo: { type: 'mono', bg: '#008CFF', fg: '#FFFFFF', padding: 0.25 },
  verizon: { type: 'color', bg: '#000000', padding: 0.2 },
  visa: { type: 'mono', bg: '#1A1F71', fg: '#FFFFFF', padding: 0.18 },
  vitaminshoppe: { type: 'color', bg: '#002855', padding: 0 },
  vrbo: { type: 'mono', bg: '#0D47A1', fg: '#FFFFFF', padding: 0.2 },
  walgreens: { type: 'color', bg: '#FFFFFF', padding: 0.15 },
  walmart: { type: 'mono', bg: '#0071DC', fg: '#FFC220', padding: 0.2 },
  wayfair: { type: 'color', bg: '#FFFFFF', padding: 0.2 },
  wellsfargo: { type: 'mono', bg: '#D11242', fg: '#F4B224', padding: 0.2 },
  wendys: { type: 'mono', bg: '#E11A22', fg: '#FFFFFF', padding: 0.15 },
  wix: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.2 },
  xfinity: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  zara: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  zoom: { type: 'mono', bg: '#2D8CFF', fg: '#FFFFFF', padding: 0.2 },

};

const LogoImages = {};
const LogoLoadFailed = {};
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
        if (img.naturalWidth === 0) {
          LogoLoadFailed[brandId] = true;
        }
        resolve();
      } else {
        img.onload = () => {
          if (img.naturalWidth === 0) {
            LogoLoadFailed[brandId] = true;
          }
          resolve();
        };
        img.onerror = () => {
          console.error(`Failed to load SVG logo for: ${brandId}`);
          LogoLoadFailed[brandId] = true;
          resolve(); // Resolve anyway so the UI can draw whatever is available
        };
      }
    });
  })
);

// Helper function to dynamically calculate a high-contrast text color based on background color luminance
function getContrastColor(hexColor) {
  if (!hexColor) return '#FFFFFF';
  let color = hexColor.replace('#', '');
  if (color.length === 3) {
    color = color.split('').map(c => c + c).join('');
  }
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  
  // Calculate relative luminance: 0.299*R + 0.587*G + 0.114*B
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#1F2937' : '#FFFFFF';
}

// Shared canvas drawing function
function drawBrandLogo(ctx, brandId, size) {
  const style = BrandStyles[brandId];
  if (!style) return;

  const img = LogoImages[brandId];
  
  // 1. Draw solid background color
  ctx.fillStyle = style.bg || '#FFFFFF';
  ctx.fillRect(0, 0, size, size);

  if (!img || LogoLoadFailed[brandId] || !img.complete || img.naturalWidth === 0) {
    // If not loaded, draw text initials fallback inside the canvas
    const fgColor = style.fg || getContrastColor(style.bg);
    ctx.fillStyle = fgColor;
    ctx.font = `bold ${Math.round(size * 0.4)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(brandId.substring(0, 2).toUpperCase(), size / 2, size / 2);
    return;
  }

  // 2. Compute sizing with padding, preserving aspect ratio
  const padding = style.padding !== undefined ? style.padding * size : 0;
  const maxDestSize = size - 2 * padding;

  let destWidth = maxDestSize;
  let destHeight = maxDestSize;

  // Use natural dimensions if available to calculate aspect ratio
  const imgRatio = (img.naturalWidth && img.naturalHeight) ? (img.naturalWidth / img.naturalHeight) : 1;
  if (imgRatio > 1) {
    // Landscape / wide logo
    destHeight = maxDestSize / imgRatio;
  } else if (imgRatio < 1) {
    // Portrait / tall logo
    destWidth = maxDestSize * imgRatio;
  }

  // Center horizontally and vertically inside the canvas
  const offsetX = (size - destWidth) / 2;
  const offsetY = (size - destHeight) / 2;

  // 3. Draw logo
  if (style.type === 'mono') {
    // Tint monochromatic SVGs using an offscreen canvas
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = size;
    tempCanvas.height = size;
    const tempCtx = tempCanvas.getContext('2d');

    // Draw SVG onto offscreen canvas
    tempCtx.drawImage(img, offsetX, offsetY, destWidth, destHeight);

    // Fill with official brand foreground color
    tempCtx.globalCompositeOperation = 'source-in';
    tempCtx.fillStyle = style.fg || '#FFFFFF';
    tempCtx.fillRect(0, 0, size, size);

    // Render tinted canvas back to parent
    ctx.drawImage(tempCanvas, 0, 0);
  } else {
    // Directly draw colored SVG
    ctx.drawImage(img, offsetX, offsetY, destWidth, destHeight);
  }
}

// Export object matching old BrandLogos interface with a Proxy fallback to prevent crashes
const BrandLogosTarget = {};
brands.forEach(brandId => {
  BrandLogosTarget[brandId] = (ctx, size) => drawBrandLogo(ctx, brandId, size);
});

export const BrandLogos = new Proxy(BrandLogosTarget, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return (ctx, size) => {
      console.warn(`BrandLogos: missing style config for '${String(prop)}'`);
      // Safe fallback rendering inside the canvas
      ctx.fillStyle = '#E5E7EB';
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = '#4B5563';
      ctx.font = `bold ${Math.round(size * 0.4)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(prop).substring(0, 2).toUpperCase(), size / 2, size / 2);
    };
  }
});
