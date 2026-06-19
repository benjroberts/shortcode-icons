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
    "python3",
    "-m",
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

def get_admin_panel_html():
    return r"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Short Code Icons - Admin Panel</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #090d16;
      --panel: rgba(17, 24, 39, 0.7);
      --border: rgba(255, 255, 255, 0.08);
      --accent: #10b981;
      --accent-hover: #059669;
      --text: #f3f4f6;
      --text-muted: #9ca3af;
      --radius: 12px;
      --danger: #ef4444;
      --danger-hover: #dc2626;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #090d16 0%, #061c15 100%);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    header {
      background: rgba(9, 13, 22, 0.8);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
      padding: 1rem 2rem;
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    h1 {
      font-family: 'Outfit', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(to right, #10b981, #34d399);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .btn {
      padding: 0.6rem 1.2rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .btn-primary {
      background: var(--accent);
      color: #040d0a;
    }
    .btn-primary:hover {
      background: var(--accent-hover);
    }
    
    .btn-secondary {
      background: rgba(255, 255, 255, 0.08);
      color: var(--text);
      border: 1px solid var(--border);
    }
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    .btn-danger {
      background: var(--danger);
      color: white;
    }
    .btn-danger:hover {
      background: var(--danger-hover);
    }
    
    main {
      flex: 1;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
    
    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      gap: 1rem;
    }
    
    .search-wrapper {
      position: relative;
      flex: 1;
      max-width: 400px;
    }
    
    .search-input {
      width: 100%;
      padding: 0.6rem 1rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text);
      font-size: 0.875rem;
      outline: none;
      transition: border-color 0.2s;
    }
    .search-input:focus {
      border-color: var(--accent);
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }
    
    .card {
      background: var(--panel);
      backdrop-filter: blur(12px);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: transform 0.2s, border-color 0.2s;
    }
    .card:hover {
      transform: translateY(-2px);
      border-color: rgba(16, 185, 129, 0.3);
    }
    
    .card-header {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    
    .card-logo {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      overflow: hidden;
      background: #1e293b;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .card-logo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .card-logo-fallback {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
      background: #1f2937;
      color: #9ca3af;
    }
    
    .card-meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    
    .card-name {
      font-family: 'Outfit', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
    }
    
    .badges {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    
    .badge {
      font-size: 0.75rem;
      padding: 0.15rem 0.5rem;
      border-radius: 99px;
      font-weight: 500;
      background: rgba(255, 255, 255, 0.08);
      color: var(--text-muted);
    }
    .badge-accent {
      background: rgba(16, 185, 129, 0.15);
      color: var(--accent);
    }
    
    .sms-preview {
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 0.75rem;
      font-size: 0.8rem;
    }
    
    .sms-header {
      display: flex;
      justify-content: space-between;
      color: var(--text-muted);
      margin-bottom: 0.25rem;
      font-weight: 600;
      font-size: 0.75rem;
    }
    
    .sms-body {
      color: #e5e7eb;
      line-height: 1.4;
    }
    
    .card-actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      margin-top: auto;
    }
    
    /* Login Overlay */
    .login-overlay {
      position: fixed;
      inset: 0;
      background: var(--bg);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
      padding: 1rem;
    }
    
    .login-box {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 2rem;
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-muted);
    }
    
    .input {
      width: 100%;
      padding: 0.75rem 1rem;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text);
      outline: none;
      transition: border-color 0.2s;
    }
    .input:focus {
      border-color: var(--accent);
    }
    
    /* Modal Dialog */
    .dialog {
      background: #0d1527;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 2rem;
      color: var(--text);
      max-width: 500px;
      width: 100%;
      margin: auto;
      outline: none;
    }
    .dialog::backdrop {
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(8px);
    }
    
    .dialog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    
    .dialog-title {
      font-family: 'Outfit', sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
    }
    
    .dialog-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    
    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
      margin-top: 1.5rem;
    }
    
    .logo-upload-preview {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .upload-preview-box {
      width: 64px;
      height: 64px;
      border-radius: 8px;
      border: 1px dashed var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.2);
    }
    .upload-preview-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    /* Toast Notification */
    .toast {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #10b981;
      color: #040d0a;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 1000;
    }
    .toast.visible {
      transform: translateY(0);
      opacity: 1;
    }
    .toast.error {
      background: var(--danger);
      color: white;
    }
  </style>
</head>
<body>

  <header>
    <h1>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      Short Code Icons Admin
    </h1>
    <div style="display: flex; gap: 1rem; align-items: center;">
      <span id="admin-user-display" style="font-size: 0.875rem; color: var(--text-muted);"></span>
      <button class="btn btn-secondary" onclick="logout()">Logout</button>
    </div>
  </header>

  <main>
    <div class="controls">
      <div class="search-wrapper">
        <input type="text" class="search-input" id="search-bar" placeholder="Search brands or shortcodes..." oninput="handleSearch(this.value)">
      </div>
      <button class="btn btn-primary" onclick="openAddModal()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Add Icon Contact
      </button>
    </div>

    <div class="grid" id="contacts-grid">
      <!-- Cards rendered dynamically -->
    </div>
  </main>

  <!-- Login Modal -->
  <div class="login-overlay" id="login-overlay">
    <div class="login-box">
      <h2 style="font-family: 'Outfit'; font-weight: 700; text-align: center;">Admin Login</h2>
      <div class="form-group">
        <label for="login-pass">Radicale Admin Password</label>
        <input type="password" class="input" id="login-pass" placeholder="Enter password..." onkeydown="if(event.key === 'Enter') handleLogin()">
      </div>
      <button class="btn btn-primary" style="justify-content: center;" onclick="handleLogin()">Login</button>
    </div>
  </div>

  <!-- Add/Edit Contact Dialog -->
  <dialog class="dialog" id="contact-dialog">
    <div class="dialog-header">
      <h3 class="dialog-title" id="modal-title">Add Brand Icon</h3>
      <button class="btn btn-secondary" style="padding: 0.3rem 0.6rem;" onclick="closeModal()">✕</button>
    </div>
    <div class="dialog-form">
      <div class="form-group">
        <label for="brand-name">Brand Name</label>
        <input type="text" class="input" id="brand-name" placeholder="e.g. Acorns" required>
      </div>
      <div class="form-group">
        <label for="brand-fullname">Full Display Name</label>
        <input type="text" class="input" id="brand-fullname" placeholder="e.g. Acorns Alerts" required>
      </div>
      <div class="form-group">
        <label for="brand-category">Category</label>
        <select class="input" id="brand-category" style="background-color: #090d16;">
          <option value="finance">Finance</option>
          <option value="retail">Retail</option>
          <option value="tech">Tech</option>
          <option value="services">Services</option>
          <option value="utilities">Utilities</option>
        </select>
      </div>
      <div class="form-group">
        <label for="brand-shortcodes">Shortcodes (Comma separated)</label>
        <input type="text" class="input" id="brand-shortcodes" placeholder="e.g. 22676" required>
      </div>
      <div class="form-group">
        <label for="brand-sms">Example SMS Message</label>
        <textarea class="input" id="brand-sms" rows="3" placeholder="Message content..." style="resize: none;" required></textarea>
      </div>
      <div class="form-group">
        <label>Logo Image</label>
        <div class="logo-upload-preview">
          <div class="upload-preview-box" id="logo-preview-container">
            <span style="font-size: 1.5rem; color: var(--border);">+</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.5rem; flex: 1;">
            <input type="file" id="logo-file" accept="image/*" onchange="handleLogoUpload(event)" style="display: none;">
            <button class="btn btn-secondary" style="width: fit-content;" onclick="document.getElementById('logo-file').click()">Choose Image</button>
            <span style="font-size: 0.75rem; color: var(--text-muted);">PNG or JPEG. Automatically cropped to 192x192.</span>
          </div>
        </div>
      </div>
      <div class="dialog-actions">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" id="save-btn" onclick="saveContact()">Save Contact</button>
      </div>
    </div>
  </dialog>

  <div class="toast" id="toast">Message here</div>

  <script>
    let adminPassword = '';
    let contacts = [];
    let filteredContacts = [];
    let editingContactId = null;
    let uploadedLogoBase64 = '';
    let collectionUrl = '';
    
    // Check if already logged in via session
    window.onload = () => {
      const savedPass = sessionStorage.getItem('radicale_admin_password');
      if (savedPass) {
        adminPassword = savedPass;
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('admin-user-display').textContent = 'Authenticated: admin';
        initializeAdmin();
      }
    };
    
    function handleLogin() {
      const pass = document.getElementById('login-pass').value.trim();
      if (!pass) return;
      adminPassword = pass;
      sessionStorage.setItem('radicale_admin_password', pass);
      document.getElementById('login-overlay').style.display = 'none';
      document.getElementById('admin-user-display').textContent = 'Authenticated: admin';
      initializeAdmin();
    }
    
    function logout() {
      sessionStorage.removeItem('radicale_admin_password');
      location.reload();
    }
    
    async function initializeAdmin() {
      try {
        collectionUrl = await discoverCollection();
        await loadContacts();
      } catch (err) {
        showToast("Initialization failed. Verification password may be incorrect.", "error");
        logout();
      }
    }
    
    async function discoverCollection() {
      const defaultUrl = '/public/shortcode-icons-selected/';
      try {
        const authHeader = 'Basic ' + btoa('public:public');
        const response = await fetch('/public/', {
          method: 'PROPFIND',
          headers: {
            'Authorization': authHeader,
            'Depth': '1',
            'Content-Type': 'text/xml'
          }
        });
        if (!response.ok) return defaultUrl;
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const responses = xmlDoc.getElementsByTagNameNS('DAV:', 'response');
        for (let i = 0; i < responses.length; i++) {
          const hrefEl = responses[i].getElementsByTagNameNS('DAV:', 'href')[0];
          const resourcetypeEl = responses[i].getElementsByTagNameNS('DAV:', 'resourcetype')[0];
          if (hrefEl && resourcetypeEl) {
            const isAddressbook = resourcetypeEl.getElementsByTagNameNS('urn:ietf:params:xml:ns:carddav', 'addressbook').length > 0;
            if (isAddressbook) {
              return hrefEl.textContent;
            }
          }
        }
        return defaultUrl;
      } catch (e) {
        return defaultUrl;
      }
    }
    
    async function loadContacts() {
      try {
        const response = await fetch('/api/contacts');
        if (!response.ok) throw new Error("Load failed");
        contacts = await response.json();
        filteredContacts = [...contacts];
        renderGrid();
      } catch (err) {
        showToast("Failed to load contacts.", "error");
      }
    }
    
    function renderGrid() {
      const grid = document.getElementById('contacts-grid');
      grid.innerHTML = '';
      
      if (filteredContacts.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No contacts found.</div>';
        return;
      }
      
      filteredContacts.forEach(contact => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let logoHtml = `<div class="card-logo-fallback">${(contact.name || '??').substring(0, 2).toUpperCase()}</div>`;
        if (contact.photoBase64) {
          logoHtml = `<img src="data:image/jpeg;base64,${contact.photoBase64}" alt="${contact.name}">`;
        }
        
        card.innerHTML = `
          <div class="card-header">
            <div class="card-logo">${logoHtml}</div>
            <div class="card-meta">
              <div class="card-name">${contact.name}</div>
              <div class="badges">
                <span class="badge badge-accent">${contact.category}</span>
                <span class="badge">${contact.shortcodes.join(', ')}</span>
              </div>
            </div>
          </div>
          <div class="sms-preview">
            <div class="sms-header">
              <span>${contact.shortcodes[0] || ''}</span>
              <span>Today</span>
            </div>
            <div class="sms-body">${contact.sms || ''}</div>
          </div>
          <div class="card-actions">
            <button class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="openEditModal('${contact.id}')">Edit</button>
            <button class="btn btn-danger" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="deleteContact('${contact.id}', '${contact.fullName}')">Delete</button>
          </div>
        `;
        grid.appendChild(card);
      });
    }
    
    function handleSearch(q) {
      const query = q.toLowerCase().trim();
      filteredContacts = contacts.filter(c => 
        c.name.toLowerCase().includes(query) ||
        c.fullName.toLowerCase().includes(query) ||
        c.shortcodes.some(sc => sc.includes(query))
      );
      renderGrid();
    }
    
    function handleLogoUpload(e) {
      const file = e.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement('canvas');
          canvas.width = 192;
          canvas.height = 192;
          const ctx = canvas.getContext('2d');
          
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, 192, 192);
          
          const minDim = Math.min(img.width, img.height);
          const sx = (img.width - minDim) / 2;
          const sy = (img.height - minDim) / 2;
          ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, 192, 192);
          
          uploadedLogoBase64 = canvas.toDataURL('image/jpeg', 0.85).split(',')[1];
          document.getElementById('logo-preview-container').innerHTML = `<img src="data:image/jpeg;base64,${uploadedLogoBase64}">`;
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
    
    function openAddModal() {
      editingContactId = null;
      uploadedLogoBase64 = '';
      document.getElementById('modal-title').textContent = 'Add Brand Contact';
      document.getElementById('brand-name').value = '';
      document.getElementById('brand-fullname').value = '';
      document.getElementById('brand-category').value = 'finance';
      document.getElementById('brand-shortcodes').value = '';
      document.getElementById('brand-sms').value = '';
      document.getElementById('logo-preview-container').innerHTML = '<span style="font-size: 1.5rem; color: var(--border);">+</span>';
      document.getElementById('contact-dialog').showModal();
    }
    
    function openEditModal(id) {
      const contact = contacts.find(c => c.id === id);
      if (!contact) return;
      
      editingContactId = id;
      uploadedLogoBase64 = contact.photoBase64;
      
      document.getElementById('modal-title').textContent = 'Edit Brand Contact';
      document.getElementById('brand-name').value = contact.name;
      document.getElementById('brand-fullname').value = contact.fullName;
      document.getElementById('brand-category').value = contact.category;
      document.getElementById('brand-shortcodes').value = contact.shortcodes.join(', ');
      document.getElementById('brand-sms').value = contact.sms;
      
      if (contact.photoBase64) {
        document.getElementById('logo-preview-container').innerHTML = `<img src="data:image/jpeg;base64,${contact.photoBase64}">`;
      } else {
        document.getElementById('logo-preview-container').innerHTML = '<span style="font-size: 1.5rem; color: var(--border);">+</span>';
      }
      
      document.getElementById('contact-dialog').showModal();
    }
    
    function closeModal() {
      document.getElementById('contact-dialog').close();
    }
    
    async function ensureCollectionExists() {
      const authHeader = 'Basic ' + btoa('admin:' + adminPassword);
      const response = await fetch(collectionUrl, {
        method: 'PROPFIND',
        headers: {
          'Authorization': authHeader,
          'Depth': '0'
        }
      });
      
      if (response.status === 404) {
        console.log("Collection doesn't exist. Creating collection...");
        const mkcolXml = `<?xml version="1.0" encoding="utf-8" ?>
<D:mkcol xmlns:D="DAV:" xmlns:C="urn:ietf:params:xml:ns:carddav">
  <D:set>
    <D:prop>
      <D:resourcetype>
        <D:collection />
        <C:addressbook />
      </D:resourcetype>
      <D:displayname>Short Code Icons</D:displayname>
    </D:prop>
  </D:set>
</D:mkcol>`;

        const createRes = await fetch(collectionUrl, {
          method: 'MKCOL',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'text/xml'
          },
          body: mkcolXml
        });
        
        if (!createRes.ok) {
          throw new Error("Failed to create collection");
        }
        console.log("Collection successfully created!");
      }
    }
    
    async function saveContact() {
      const name = document.getElementById('brand-name').value.trim();
      const fullName = document.getElementById('brand-fullname').value.trim();
      const category = document.getElementById('brand-category').value;
      const shortcodesText = document.getElementById('brand-shortcodes').value.trim();
      const sms = document.getElementById('brand-sms').value.trim();
      
      if (!name || !fullName || !shortcodesText || !sms) {
        showToast("Please fill in all fields.", "error");
        return;
      }
      
      const shortcodes = shortcodesText.split(',').map(sc => sc.trim().replace(/[^\d+*#]/g, '')).filter(Boolean);
      if (shortcodes.length === 0) {
        showToast("Please provide at least one valid shortcode.", "error");
        return;
      }
      
      const saveBtn = document.getElementById('save-btn');
      saveBtn.disabled = true;
      saveBtn.textContent = 'Saving...';
      
      const brandId = editingContactId || name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const filename = `${brandId}.vcf`;
      
      let vcf = 'BEGIN:VCARD\\r\\nVERSION:3.0\\r\\n';
      vcf += `FN:${fullName}\\r\\n`;
      vcf += `N:;${fullName};;;\\r\\n`;
      vcf += `ORG:${name}\\r\\n`;
      vcf += 'X-ABShowAs:COMPANY\\r\\n';
      shortcodes.forEach(sc => {
        vcf += `TEL;TYPE=CELL:${sc}\\r\\n`;
      });
      if (uploadedLogoBase64) {
        vcf += `PHOTO;ENCODING=b;TYPE=JPEG:${uploadedLogoBase64}\\r\\n`;
      }
      vcf += `NOTE:${sms}\\r\\n`;
      vcf += `CATEGORIES:${category}\\r\\n`;
      vcf += 'END:VCARD\\r\\n';
      
      const authHeader = 'Basic ' + btoa('admin:' + adminPassword);
      const url = `${collectionUrl}${filename}`;
      
      try {
        await ensureCollectionExists();
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'text/vcard;charset=utf-8'
          },
          body: vcf
        });
        
        if (!response.ok) {
          throw new Error("PUT failed");
        }
        
        showToast("Successfully saved contact!");
        closeModal();
        await loadContacts();
      } catch (err) {
        showToast("Failed to save contact. Session may have expired.", "error");
      } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = 'Save Contact';
      }
    }
    
    async function deleteContact(id, fullName) {
      if (!confirm(`Are you sure you want to delete "${fullName}"? This will permanently remove it from the CardDAV server.`)) {
        return;
      }
      
      const filename = `${id}.vcf`;
      const authHeader = 'Basic ' + btoa('admin:' + adminPassword);
      const url = `${collectionUrl}${filename}`;
      
      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Authorization': authHeader
          }
        });
        
        if (!response.ok) {
          throw new Error("DELETE failed");
        }
        
        showToast("Successfully deleted contact!");
        await loadContacts();
      } catch (err) {
        showToast("Failed to delete contact.", "error");
      }
    }
    
    function showToast(message, type = 'success') {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.className = 'toast visible';
      if (type === 'error') {
        toast.classList.add('error');
      }
      setTimeout(() => {
        toast.classList.remove('visible');
      }, 4000);
    }
  </script>
</body>
</html>"""

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
            contacts = get_contacts_from_filesystem()
            self.wfile.write(json.dumps(contacts).encode("utf-8"))
            return
            
        elif clean_path in ("/admin", "/admin/index.html"):
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(get_admin_panel_html().encode("utf-8"))
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
