import { BrandLogos } from './logos.js';

// Dataset of 30 common automated SMS shortcodes
const DirectoryData = [
  // TECH & SECURITY
  {
    id: "google",
    name: "Google",
    fullName: "Google Verification",
    category: "tech",
    shortcodes: ["22000", "24444"],
    sms: "G-765359 is your Google verification code. Don't share your code with anyone."
  },
  {
    id: "microsoft",
    name: "Microsoft",
    fullName: "Microsoft Security",
    category: "tech",
    shortcodes: ["87892", "69525"],
    sms: "Use 123456 as Microsoft account security code."
  },
  {
    id: "apple",
    name: "Apple",
    fullName: "Apple ID Verification",
    category: "tech",
    shortcodes: ["81961"],
    sms: "Your Apple ID verification code is: 987654. Do not share."
  },
  {
    id: "meta",
    name: "Meta / Facebook",
    fullName: "Meta Security",
    category: "tech",
    shortcodes: ["32665"],
    sms: "123456 is your Facebook security code."
  },
  {
    id: "okta",
    name: "Okta",
    fullName: "Okta Verify",
    category: "tech",
    shortcodes: ["65821"],
    sms: "Okta Verify: 123456 is your verification code."
  },
  {
    id: "authy",
    name: "Authy / Shop Pay",
    fullName: "Shop Pay & Authy",
    category: "tech",
    shortcodes: ["22395"],
    sms: "Shop Pay: Your login code is 123456."
  },

  // FINANCE
  {
    id: "chase",
    name: "Chase Bank",
    fullName: "Chase Alerts",
    category: "finance",
    shortcodes: ["24273"],
    sms: "Chase Alert: Large transaction of $50.00 at Target."
  },
  {
    id: "paypal",
    name: "PayPal",
    fullName: "PayPal Security",
    category: "finance",
    shortcodes: ["72975"],
    sms: "PayPal: Your security code is 123456."
  },
  {
    id: "venmo",
    name: "Venmo",
    fullName: "Venmo Verification",
    category: "finance",
    shortcodes: ["86753"],
    sms: "Venmo: 123456 is your code. Don't share it."
  },
  {
    id: "cashapp",
    name: "Cash App",
    fullName: "Cash App Verification",
    category: "finance",
    shortcodes: ["28515"],
    sms: "Cash App: 123-456 is your sign-in code."
  },

  // RETAIL
  {
    id: "homedepot",
    name: "Home Depot",
    fullName: "Home Depot Orders",
    category: "retail",
    shortcodes: ["433768", "38698"],
    sms: "HOME DEPOT: Your order #12345 is ready for pickup."
  },
  {
    id: "walmart",
    name: "Walmart",
    fullName: "Walmart Alerts",
    category: "retail",
    shortcodes: ["85166", "60989"],
    sms: "Walmart Pharmacy: Your prescription is ready."
  },
  {
    id: "target",
    name: "Target",
    fullName: "Target Alerts",
    category: "retail",
    shortcodes: ["827438"],
    sms: "Target: 20% off your next order! Use code SAVE20."
  },
  {
    id: "kohls",
    name: "Kohl's",
    fullName: "Kohl's Mobile",
    category: "retail",
    shortcodes: ["56457"],
    sms: "KOHL'S: Take an extra 15% off with code SUNNY15."
  },
  {
    id: "amazon",
    name: "Amazon",
    fullName: "Amazon Delivery",
    category: "retail",
    shortcodes: ["38356", "20961"],
    sms: "Your Amazon package is out for delivery."
  },
  {
    id: "bestbuy",
    name: "Best Buy",
    fullName: "Best Buy Orders",
    category: "retail",
    shortcodes: ["228289"],
    sms: "Best Buy: Your order is ready for pickup."
  },
  {
    id: "costco",
    name: "Costco",
    fullName: "Costco Alerts",
    category: "retail",
    shortcodes: ["267826"],
    sms: "Costco: Thank you for shopping! Receipt details in link."
  },

  // SERVICES & UTILITIES
  {
    id: "ups",
    name: "UPS",
    fullName: "UPS Tracking",
    category: "services",
    shortcodes: ["69877"],
    sms: "UPS: Package 1Z12345 will be delivered tomorrow."
  },
  {
    id: "fedex",
    name: "FedEx",
    fullName: "FedEx Tracking",
    category: "services",
    shortcodes: ["46339"],
    sms: "FedEx: Package tracking update: Out for delivery."
  },
  {
    id: "usps",
    name: "USPS",
    fullName: "USPS Text Tracking",
    category: "services",
    shortcodes: ["28777", "69975"],
    sms: "USPS Text Tracking: Package delivered."
  },
  {
    id: "walgreens",
    name: "Walgreens",
    fullName: "Walgreens Pharmacy",
    category: "services",
    shortcodes: ["92547"],
    sms: "Walgreens: Your prescription #12345 is ready."
  },
  {
    id: "cvs",
    name: "CVS Pharmacy",
    fullName: "CVS Alerts",
    category: "services",
    shortcodes: ["287747"],
    sms: "CVS: Your order is ready for pickup."
  },
  {
    id: "budget",
    name: "Budget",
    fullName: "Budget Rent A Car",
    category: "services",
    shortcodes: ["90607"],
    sms: "BUDGET: Summer savings are here. Get up to 35% off."
  },
  {
    id: "slateauto",
    name: "Slate Auto",
    fullName: "Slate Auto Updates",
    category: "services",
    shortcodes: ["68406"],
    sms: "Slate Auto: One week until we announce the price."
  },
  {
    id: "vitaminshoppe",
    name: "The Vitamin Shoppe",
    fullName: "The Vitamin Shoppe",
    category: "services",
    shortcodes: ["848747"],
    sms: "The Vitamin Shoppe: For dads on the grind, 20% off energy."
  },

  // FOOD & DELIVERY
  {
    id: "starbucks",
    name: "Starbucks",
    fullName: "Starbucks Rewards",
    category: "food",
    shortcodes: ["78645"],
    sms: "Starbucks: Happy Hour starts today at 2 PM!"
  },
  {
    id: "doordash",
    name: "DoorDash",
    fullName: "DoorDash Delivery",
    category: "food",
    shortcodes: ["366747"],
    sms: "DoorDash: Your dasher is arriving soon."
  },
  {
    id: "dominos",
    name: "Domino's",
    fullName: "Domino's Tracker",
    category: "food",
    shortcodes: ["366466"],
    sms: "Domino's: Your order is in the oven."
  },
  {
    id: "uber",
    name: "Uber",
    fullName: "Uber updates",
    category: "food",
    shortcodes: ["82371", "92929"],
    sms: "Uber: Your verification code is 1234."
  },
  {
    id: "lyft",
    name: "Lyft",
    fullName: "Lyft updates",
    category: "food",
    shortcodes: ["59381"],
    sms: "Lyft: Ride code 1234. Your driver is 2 mins away."
  }
];

// App State
let selectedCategory = 'all';
let searchQuery = '';
let isMultiSelectMode = false;
let selectedBrandIds = new Set();

// DOM Elements
const gridContainer = document.getElementById('directory-grid');
const searchBar = document.getElementById('search-bar');
const categoryFilters = document.getElementById('category-filters');
const multiSelectCheckbox = document.getElementById('chk-multi-select');
const floatingBatchBar = document.getElementById('floating-batch-bar');
const batchSelectedCount = document.getElementById('batch-selected-count');
const btnBatchDownload = document.getElementById('btn-batch-download');
const btnBatchClear = document.getElementById('btn-batch-clear');
const btnDownloadAll = document.getElementById('btn-download-all');

// Modals
const instructionsDialog = document.getElementById('instructions-dialog');
const btnShowGuide = document.getElementById('btn-show-guide');
const btnCloseDialog = document.getElementById('btn-close-dialog');

// Phone Mockup Elements
const phoneMockup = document.getElementById('phone-mockup');
const phoneChatList = document.getElementById('phone-chat-list');
const toggleBoring = document.getElementById('toggle-boring');
const toggleBranded = document.getElementById('toggle-branded');

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  renderPhoneMockup();
  setupEventListeners();

  // Redraw when custom fonts load. This solves the canvas text-loading bug
  // where text draws as invisible or uses fallbacks because web fonts load async.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      renderGrid();
      renderPhoneMockup();
    });
  }
});

// Event Listeners
function setupEventListeners() {
  // Search
  searchBar.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderGrid();
  });

  // Category Filter
  categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-chip')) {
      document.querySelector('.filter-chip.active').classList.remove('active');
      e.target.classList.add('active');
      selectedCategory = e.target.dataset.category;
      renderGrid();
    }
  });

  // Multi-Select Mode Toggle
  multiSelectCheckbox.addEventListener('change', (e) => {
    isMultiSelectMode = e.target.checked;
    if (isMultiSelectMode) {
      document.body.classList.add('select-mode');
    } else {
      document.body.classList.remove('select-mode');
      clearSelection();
    }
  });

  // Batch actions
  btnBatchClear.addEventListener('click', clearSelection);
  btnBatchDownload.addEventListener('click', downloadSelectedVcard);

  // Hero Download All
  btnDownloadAll.addEventListener('click', () => {
    downloadCombinedVcard(DirectoryData, "sms-avatars-all.vcf");
  });

  // Instruction Dialog Modal Events
  btnShowGuide.addEventListener('click', () => {
    instructionsDialog.showModal();
  });

  btnCloseDialog.addEventListener('click', () => {
    instructionsDialog.close();
  });

  // Close dialog on clicking backdrop
  instructionsDialog.addEventListener('click', (e) => {
    const rect = instructionsDialog.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      instructionsDialog.close();
    }
  });

  // Phone Mockup Toggles
  toggleBoring.addEventListener('click', () => {
    toggleBoring.classList.add('active');
    toggleBranded.classList.remove('active');
    phoneMockup.classList.remove('branded-mode');
  });

  toggleBranded.addEventListener('click', () => {
    toggleBranded.classList.add('active');
    toggleBoring.classList.remove('active');
    phoneMockup.classList.add('branded-mode');
  });

  // Privacy Modal
  const privacyDialog = document.getElementById('privacy-dialog');
  const btnShowPrivacy = document.getElementById('btn-show-privacy');
  const btnClosePrivacy = document.getElementById('btn-close-privacy');

  btnShowPrivacy.addEventListener('click', () => privacyDialog.showModal());
  btnClosePrivacy.addEventListener('click', () => privacyDialog.close());
  privacyDialog.addEventListener('click', (e) => {
    const rect = privacyDialog.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      privacyDialog.close();
    }
  });

  // Submit Modal
  const submitDialog = document.getElementById('submit-dialog');
  const btnSubmitCode = document.getElementById('btn-submit-code');
  const btnCloseSubmit = document.getElementById('btn-close-submit');
  const submitForm = document.getElementById('submit-shortcode-form');

  btnSubmitCode.addEventListener('click', () => submitDialog.showModal());
  btnCloseSubmit.addEventListener('click', () => submitDialog.close());
  submitDialog.addEventListener('click', (e) => {
    const rect = submitDialog.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      submitDialog.close();
    }
  });

  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Gather form data and convert to JSON for Web3Forms API
    const formData = new FormData(submitForm);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Disable submit button and show loading state
    const submitBtn = submitForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
    .then(async (response) => {
      const res = await response.json();
      if (response.status === 200) {
        alert("Thank you! Your suggestion was sent successfully. We'll add the logo in our next release.");
      } else {
        alert("Oops! Submission failed: " + (res.message || "Please try again later."));
      }
    })
    .catch(error => {
      console.error("Web3Forms Submission Error:", error);
      alert("Network error. Please check your internet connection and try again.");
    })
    .finally(() => {
      // Re-enable button, clear inputs, and close dialog
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
      submitForm.reset();
      submitDialog.close();
    });
  });

  // Share Modal
  const shareDialog = document.getElementById('share-dialog');
  const btnHeaderShare = document.getElementById('btn-header-share');
  const btnCloseShare = document.getElementById('btn-close-share');
  const btnModalCopyLink = document.getElementById('btn-modal-copy-link');
  const copyBtnText = document.getElementById('copy-btn-text');

  if (btnHeaderShare) {
    btnHeaderShare.addEventListener('click', () => shareDialog.showModal());
  }
  btnCloseShare.addEventListener('click', () => shareDialog.close());
  shareDialog.addEventListener('click', (e) => {
    const rect = shareDialog.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      shareDialog.close();
    }
  });

  btnModalCopyLink.addEventListener('click', () => {
    navigator.clipboard.writeText("https://shortcodeicons.com").then(() => {
      const originalText = copyBtnText.textContent;
      copyBtnText.textContent = "Copied!";
      setTimeout(() => {
        copyBtnText.textContent = originalText;
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });
}

// Render Directory Grid
function renderGrid() {
  gridContainer.innerHTML = '';
  const template = document.getElementById('card-template');

  const filteredData = DirectoryData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery) ||
                          item.fullName.toLowerCase().includes(searchQuery) ||
                          item.shortcodes.some(sc => sc.includes(searchQuery)) ||
                          item.sms.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  filteredData.forEach(item => {
    const clone = template.content.cloneNode(true);
    const cardEl = clone.querySelector('.card');
    
    cardEl.dataset.id = item.id;
    if (selectedBrandIds.has(item.id)) {
      cardEl.classList.add('selected');
      clone.querySelector('.card-checkbox').checked = true;
    }

    // Canvas drawing
    const canvas = clone.querySelector('.logo-canvas');
    const ctx = canvas.getContext('2d');
    BrandLogos[item.id](ctx, 128);

    // Meta details
    clone.querySelector('.card-brand-name').textContent = item.name;
    clone.querySelector('.card-badge.cat').textContent = getCategoryLabel(item.category);
    clone.querySelector('.card-badge.shortcodes').textContent = item.shortcodes.join(', ');
    
    // SMS Preview
    clone.querySelector('.sms-sender').textContent = item.shortcodes[0];
    clone.querySelector('.sms-text').textContent = item.sms;

    // Card interactions
    cardEl.addEventListener('click', (e) => {
      // Ignore click if button was clicked
      if (e.target.closest('.btn-card-action')) return;
      
      if (isMultiSelectMode) {
        toggleSelection(item.id, cardEl);
      }
    });

    // Checkbox interaction
    const checkbox = clone.querySelector('.card-checkbox');
    checkbox.addEventListener('change', (e) => {
      toggleSelection(item.id, cardEl, e.target.checked);
    });

    // Download buttons
    clone.querySelector('.btn-download-vcf').addEventListener('click', (e) => {
      e.stopPropagation();
      downloadSingleVcard(item);
    });

    clone.querySelector('.btn-download-png').addEventListener('click', (e) => {
      e.stopPropagation();
      downloadLogoPng(item.id, item.name);
    });

    gridContainer.appendChild(clone);
  });
}

// Render Phone Mockup Chat Items (One-time render)
function renderPhoneMockup() {
  phoneChatList.innerHTML = '';
  
  // Random name generator helper
  const firstNames = ["Liam", "Noah", "Oliver", "James", "Elijah", "William", "Henry", "Lucas", "Benjamin", "Emma", "Olivia", "Ava", "Sophia", "Isabella", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor"];
  
  const getRandomContact = () => {
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    return {
      name: `${first} ${last}`,
      initials: `${first[0]}${last[0]}`
    };
  };

  const contact1 = getRandomContact();
  const contact2 = getRandomContact();
  
  // Custom mock chat items matching the screenshot context + brand options
  const mockChats = [
    { type: 'brand', id: 'budget', shortcode: '90607', text: 'BUDGET: Summer savings are here. Get up to 35% off your rental when yo...', time: 'Yesterday' },
    { type: 'contact', name: contact1.name, initials: contact1.initials, bg: '#D97706', text: "basically another fitness app but it's great because every app I have ever u...", time: 'Yesterday' },
    { type: 'contact', name: contact2.name, initials: contact2.initials, bg: '#059669', text: "You laughed at \"Got it. You gotta add voiceover on those videos. I almost tri...", time: 'Yesterday' },
    { type: 'brand', id: 'google', shortcode: '22000', text: 'G-765359 is your Google verification code. Don\'t share your code with any...', time: 'Wednesday' },
    { type: 'brand', id: 'slateauto', shortcode: '68406', text: 'Slate Auto: One week until we announce the price and open preorde...', time: 'Wednesday' },
    { type: 'brand', id: 'homedepot', shortcode: '433768', text: 'HOME DEPOT: They\'re Here > 4th of July Appliance Deals + Free Delivery...', time: 'Wednesday' },
    { type: 'brand', id: 'kohls', shortcode: '56457', text: 'KOHL\'S: Get 20% off with coupon + earn Kohl\'s Cash! Time\'s running out t...', time: 'Wednesday' }
  ];

  mockChats.forEach(chat => {
    const itemEl = document.createElement('div');
    itemEl.className = 'phone-chat-item';

    const avatarEl = document.createElement('div');
    avatarEl.className = 'phone-chat-avatar';

    const infoEl = document.createElement('div');
    infoEl.className = 'phone-chat-info';

    const nameEl = document.createElement('div');
    nameEl.className = 'phone-chat-name';

    const msgEl = document.createElement('div');
    msgEl.className = 'phone-chat-msg';
    msgEl.textContent = chat.text;

    const timeEl = document.createElement('div');
    timeEl.className = 'phone-chat-time';
    timeEl.textContent = chat.time;

    if (chat.type === 'contact') {
      avatarEl.innerHTML = `<div class="avatar-contact" style="background-color: ${chat.bg}; color: white;">${chat.initials}</div>`;
      nameEl.innerHTML = `<div class="name-contact">${chat.name}</div>`;
    } else {
      const brandObj = DirectoryData.find(d => d.id === chat.id);
      const brandedName = brandObj ? brandObj.fullName : chat.shortcode;
      
      avatarEl.innerHTML = `
        <div class="avatar-boring">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
        </div>
        <div class="avatar-branded">
          <canvas width="64" height="64"></canvas>
        </div>
      `;
      
      nameEl.innerHTML = `
        <div class="name-boring">${chat.shortcode}</div>
        <div class="name-branded">${brandedName}</div>
      `;

      // Draw the logo on the mockup canvas immediately
      const canvas = avatarEl.querySelector('canvas');
      const ctx = canvas.getContext('2d');
      BrandLogos[chat.id](ctx, 64);
    }

    infoEl.appendChild(nameEl);
    infoEl.appendChild(msgEl);
    
    itemEl.appendChild(avatarEl);
    itemEl.appendChild(infoEl);
    itemEl.appendChild(timeEl);

    phoneChatList.appendChild(itemEl);
  });
}

// Multi-selection management
function toggleSelection(brandId, cardEl, forceState = null) {
  const checkbox = cardEl.querySelector('.card-checkbox');
  const isSelected = forceState !== null ? forceState : !selectedBrandIds.has(brandId);

  if (isSelected) {
    selectedBrandIds.add(brandId);
    cardEl.classList.add('selected');
    checkbox.checked = true;
  } else {
    selectedBrandIds.delete(brandId);
    cardEl.classList.remove('selected');
    checkbox.checked = false;
  }

  updateFloatingBar();
}

function clearSelection() {
  selectedBrandIds.clear();
  document.querySelectorAll('.card.selected').forEach(card => {
    card.classList.remove('selected');
    card.querySelector('.card-checkbox').checked = false;
  });
  updateFloatingBar();
}

function updateFloatingBar() {
  const count = selectedBrandIds.size;
  batchSelectedCount.textContent = count;
  
  if (count > 0 && isMultiSelectMode) {
    floatingBatchBar.classList.add('visible');
  } else {
    floatingBatchBar.classList.remove('visible');
  }
}

// vCard Generation Engine

// Helper to draw the logo to an offscreen canvas and return raw base64 PNG data
function getBase64PngLogo(brandId) {
  const canvas = document.createElement('canvas');
  canvas.width = 192;
  canvas.height = 192;
  const ctx = canvas.getContext('2d');
  BrandLogos[brandId](ctx, 192);
  const dataUrl = canvas.toDataURL('image/png');
  return dataUrl.split(',')[1];
}

// Helper to fold lines longer than 75 characters (RFC 2426 compliance)
function buildVcardPhotoLine(base64) {
  const header = 'PHOTO;ENCODING=b;TYPE=PNG:';
  const line = header + base64;
  const maxLength = 75;
  
  if (line.length <= maxLength) {
    return line;
  }

  let result = '';
  // First line takes the header and the beginning of the base64 string
  result += line.substring(0, maxLength) + '\r\n';

  // Subsequent lines must start with a single white space character
  let i = maxLength;
  while (i < line.length) {
    result += ' ' + line.substring(i, i + 74) + '\r\n';
    i += 74;
  }
  
  return result.trimEnd();
}

// Compile a single brand into its vCard block
function buildContactVcardString(brand) {
  const base64Photo = getBase64PngLogo(brand.id);
  const photoLine = buildVcardPhotoLine(base64Photo);

  let vcf = `BEGIN:VCARD\r\n`;
  vcf += `VERSION:3.0\r\n`;
  vcf += `FN:${brand.fullName}\r\n`;
  vcf += `N:${brand.name};${brand.fullName.replace(brand.name, '').trim()};;;\r\n`;
  
  // Add all shortcodes as cellular numbers
  brand.shortcodes.forEach(sc => {
    vcf += `TEL;TYPE=CELL:${sc}\r\n`;
  });

  vcf += `${photoLine}\r\n`;
  vcf += `END:VCARD\r\n`;
  return vcf;
}

// Compile and download a vCard for a single brand
function downloadSingleVcard(brand) {
  const vcfString = buildContactVcardString(brand);
  const filename = `${brand.id}-shortcode.vcf`;
  downloadFile(vcfString, filename, 'text/vcard;charset=utf-8');
}

// Compile and download a combined vCard for selected brands
function downloadSelectedVcard() {
  const selectedBrands = DirectoryData.filter(item => selectedBrandIds.has(item.id));
  if (selectedBrands.length === 0) return;
  
  downloadCombinedVcard(selectedBrands, "shortcode-studio-selected.vcf");
  clearSelection();
  multiSelectCheckbox.checked = false;
  isMultiSelectMode = false;
  document.body.classList.remove('select-mode');
}

// Universal combined vCard download
function downloadCombinedVcard(brands, filename) {
  let combinedVcf = '';
  brands.forEach(brand => {
    combinedVcf += buildContactVcardString(brand);
  });
  downloadFile(combinedVcf, filename, 'text/vcard;charset=utf-8');
}

// Trigger file download in browser
function downloadFile(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Draw and download high-res logo as PNG
function downloadLogoPng(brandId, brandName) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  BrandLogos[brandId](ctx, 512);

  const url = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = url;
  a.download = `${brandId}-logo.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// UI Category Mappings
function getCategoryLabel(category) {
  switch (category) {
    case 'tech': return 'Tech & Sec';
    case 'finance': return 'Finance';
    case 'retail': return 'Retail';
    case 'services': return 'Utility';
    case 'food': return 'Food & Deliv';
    default: return 'Other';
  }
}
