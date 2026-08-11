(function () {
  const { COMPANY, CATEGORIES, INDUSTRIES, FAQS, getCategory, getProduct } = window.CATALOG;
  const ICONS = {
    phone: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    chevronDown: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    chevronRight: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    chevronLeft: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    mapPin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    shield: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    truck: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
    checkCircle: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>',
    globe: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    warehouse: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 8.35V20a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V8.35a2 2 0 0 1 1.16-1.81l8-3.63a2 2 0 0 1 1.67 0l8 3.63A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/></svg>',
    message: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
    menu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    x: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    whatsapp: '<svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true"><path fill="#FFFFFF" d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.79 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.712.888.788 0 2.578-.53 2.878-1.404.13-.373.13-.702.086-1.017-.13-.83-1.734-1.29-2.06-1.404zM16.026 25.62c-1.633 0-3.24-.4-4.686-1.15L6.87 26.05l1.62-4.343c-.9-1.522-1.35-3.258-1.35-5.008 0-5.02 4.083-9.104 9.103-9.104 5.02 0 9.103 4.084 9.103 9.104 0 5.02-4.083 9.104-9.103 9.104zm0-19.997c-6.014 0-10.9 4.884-10.9 10.897 0 1.906.472 3.796 1.375 5.4L4 28l6.35-2.09c1.573.83 3.33 1.27 5.1 1.27 6.014 0 10.899-4.882 10.899-10.895s-4.885-10.898-10.898-10.898z"/></svg>',
  };

  const state = { mobileOpen: false, activeImageIdx: 0, heroSlide: 0 };
  let heroTimer = null;

  function esc(s) { return String(s == null ? '' : s); }

  function parseRoute() {
    const hash = location.hash.replace(/^#\/?/, '');
    const parts = hash.split('/').filter(Boolean).map(decodeURIComponent);
    if (parts.length === 0) return { page: 'home' };
    if (parts[0] === 'products' && parts.length === 1) return { page: 'products' };
    if (parts[0] === 'products' && parts.length === 2) return { page: 'category', categorySlug: parts[1] };
    if (parts[0] === 'products' && parts.length >= 3) return { page: 'product', categorySlug: parts[1], productSlug: parts[2] };
    if (parts[0] === 'about') return { page: 'about' };
    if (parts[0] === 'contact') return { page: 'contact' };
    return { page: 'home' };
  }

  function navigate(hash) {
    state.mobileOpen = false;
    state.activeImageIdx = 0;
    window.scrollTo(0, 0);
    location.hash = hash;
  }
  window.appNavigate = navigate;

  function whatsappUrlFor(productName) {
    return 'https://wa.me/971551893786?text=' + encodeURIComponent('Hi, I would like to enquire about ' + productName + '.');
  }

  function headerHtml(route) {
    const navProductsActive = route.page === 'products' || route.page === 'category' || route.page === 'product';
    return `
    <header class="site">
      <div class="topbar">
        <div class="topbar-inner container">
          <div class="topbar-links">
            <a href="${COMPANY.phoneHref}">${ICONS.phone} ${esc(COMPANY.phone)}</a>
            <a href="${COMPANY.mobileHref}">${ICONS.phone} ${esc(COMPANY.mobile)}</a>
            <a href="mailto:${COMPANY.email}">${ICONS.mail} ${esc(COMPANY.email)}</a>
          </div>
          <div style="opacity:.9">${esc(COMPANY.address)}</div>
        </div>
      </div>
      <div class="navbar container">
        <div class="brand" onclick="appNavigate('#/')">
          <img src="logo.webp" alt="Al Maas Al Malaki logo" width="48" height="48"/>
          <div><div class="brand-name">Al Maas Al Malaki</div><div class="brand-sub">Building Materials Trading</div></div>
        </div>
        <nav class="desktop-nav">
          <button class="nav-link ${route.page === 'home' ? 'active' : ''}" onclick="appNavigate('#/')">Home</button>
          <div class="products-item">
            <button class="nav-link ${navProductsActive ? 'active' : ''}" onclick="appNavigate('#/products')" style="display:flex;align-items:center;gap:4px">Products ${ICONS.chevronDown}</button>
            <div class="dropdown-menu">
              ${CATEGORIES.map((c) => `
                <div>
                  <span class="dropdown-cat-name" onclick="appNavigate('#/products/${c.slug}')">${esc(c.name)}</span>
                  <div>${c.navProducts.map((p) => `<span class="dropdown-prod" onclick="appNavigate('#/products/${c.slug}/${p.slug}')">${esc(p.name)}</span>`).join('')}</div>
                </div>`).join('')}
            </div>
          </div>
          <button class="nav-link ${route.page === 'about' ? 'active' : ''}" onclick="appNavigate('#/about')">About Us</button>
          <button class="nav-link ${route.page === 'contact' ? 'active' : ''}" onclick="appNavigate('#/contact')">Contact Us</button>
          <button class="enquire-btn" onclick="appNavigate('#/contact')">Enquire Now</button>
        </nav>
        <button class="mobile-toggle" onclick="window.appToggleMobile()">${state.mobileOpen ? ICONS.x : ICONS.menu}</button>
      </div>
      <div class="mobile-menu ${state.mobileOpen ? 'open' : ''}">
        <div class="mobile-menu-inner">
          <button class="mobile-link" onclick="appNavigate('#/')">Home</button>
          <button class="mobile-link" onclick="appNavigate('#/products')">Products</button>
          <div class="mobile-cats">
            ${CATEGORIES.map((c) => `<button class="mobile-cat-link" onclick="appNavigate('#/products/${c.slug}')">${esc(c.name)}</button>`).join('')}
          </div>
          <button class="mobile-link" onclick="appNavigate('#/about')">About Us</button>
          <button class="mobile-link" onclick="appNavigate('#/contact')">Contact Us</button>
        </div>
      </div>
    </header>`;
  }

  function footerHtml() {
    return `
    <footer class="site">
      <div class="container footer-grid">
        <div>
          <div class="footer-brand"><img src="logo.webp" alt="Al Maas Al Malaki logo" width="48" height="48"/><div class="name">Al Maas Al Malaki</div></div>
          <p>Trusted steel stockist, supplier, importer and exporter serving the UAE and the wider GCC market.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div class="footer-links">
            <button onclick="appNavigate('#/')">Home</button>
            <button onclick="appNavigate('#/products')">Products</button>
            <button onclick="appNavigate('#/about')">About Us</button>
            <button onclick="appNavigate('#/contact')">Contact Us</button>
          </div>
        </div>
        <div>
          <h3>Categories</h3>
          <div class="footer-links">
            ${CATEGORIES.map((c) => `<button onclick="appNavigate('#/products/${c.slug}')">${esc(c.name)}</button>`).join('')}
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <div class="footer-contact">
            <div>${ICONS.mapPin} ${esc(COMPANY.address)}</div>
            <div>${ICONS.phone} <a href="${COMPANY.phoneHref}">${esc(COMPANY.phone)}</a></div>
            <div>${ICONS.phone} <a href="${COMPANY.mobileHref}">${esc(COMPANY.mobile)}</a></div>
            <div>${ICONS.mail} <a href="mailto:${COMPANY.email}" style="word-break:break-all">${esc(COMPANY.email)}</a></div>
            <div>${ICONS.clock} ${esc(COMPANY.hours)}</div>
          </div>
        </div>
      </div>
      <div class="footer-bottom"><div class="footer-bottom-inner">© 2026 Al Maas Al Malaki Bldg. Mat. Tr. All rights reserved.</div></div>
    </footer>
    <a href="${COMPANY.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="whatsapp-btn">${ICONS.whatsapp}</a>`;
  }

  function heroHtml() {
    const images = ['hero-steel.jpg', 'hero-2.png', 'hero-4.png', 'hero-5.png'];
    return `
    <section class="hero">
      ${images.map((img, i) => `<img class="hero-slide ${i === state.heroSlide ? 'active' : ''}" data-hero-slide="${i}" src="${img}" alt="Steel warehouse — Al Maas Al Malaki UAE stockyard"/>`).join('')}
      <div class="hero-overlay"></div>
      <div class="hero-dots">
        ${images.map((_, i) => `<button class="hero-dot ${i === state.heroSlide ? 'active' : ''}" onclick="window.appGoToHeroSlide(${i})" aria-label="Go to slide ${i + 1}"></button>`).join('')}
      </div>
      <div class="container hero-content">
        <span class="hero-badge">Steel Stockist • UAE &amp; GCC</span>
        <h1>Your Trusted Steel Supplier in the UAE and GCC</h1>
        <p>${esc(COMPANY.name)} — steel importers, exporters and stockists of structural steel, MS products, pipes &amp; tubes, sheets &amp; coils, stainless steel, aluminium and mesh &amp; gratings. Deep stock, certified quality, GCC-wide delivery.</p>
        <div class="hero-actions">
          <button class="btn-primary" onclick="appNavigate('#/products')">Explore Our Products ${ICONS.arrowRight}</button>
          <button class="btn-outline-light" onclick="appNavigate('#/contact')">Contact Us</button>
        </div>
      </div>
    </section>`;
  }

  function categoryCardHtml(c) {
    return `
    <div class="card" onclick="appNavigate('#/products/${c.slug}')">
      <div class="img-wrap"><img src="${c.image}" alt="${esc(c.name)} supplier UAE — Al Maas Al Malaki"/></div>
      <div class="body">
        <h3>${esc(c.name)}</h3>
        <p>${esc(c.short)}</p>
        <span class="view">View Category ${ICONS.arrowRight}</span>
      </div>
    </div>`;
  }

  function homeHtml() {
    return `
    ${heroHtml()}
    <section class="section container intro-flex">
      <div>
        <h2 class="section-title">A Reliable Name in Steel Trading Since Day One</h2>
        <p>Based in the Al Sajaa Industrial Area, Sharjah, Al Maas Al Malaki Building Materials Trading is a full-service steel stockist and trading house serving contractors, EPC firms, fabricators, workshops and OEMs across the UAE and the wider GCC region — Saudi Arabia, Oman, Kuwait, Qatar and Bahrain.</p>
        <p>We combine a deep, ready stock of structural and mild steel, pipes, tubes, sheets, coils, stainless steel and aluminium with certified quality (EN 10204 3.1 MTC), competitive pricing and dependable delivery — so your project keeps moving.</p>
      </div>
      <div class="stats-grid">
        <div class="stat-card">${ICONS.shield}<div class="t">Certified Quality</div><div class="d">Mill test certificates on all steel products.</div></div>
        <div class="stat-card">${ICONS.truck}<div class="t">GCC-Wide Delivery</div><div class="d">UAE, KSA, Oman, Qatar, Kuwait, Bahrain.</div></div>
        <div class="stat-card">${ICONS.clock}<div class="t">24/7 Enquiries</div><div class="d">WhatsApp support around the clock.</div></div>
        <div class="stat-card">${ICONS.checkCircle}<div class="t">Wide Stock Range</div><div class="d">Structural, MS, SS, pipes, sheets &amp; more.</div></div>
      </div>
    </section>
    <section class="section section-gray">
      <div class="container">
        <div class="center"><h2 class="section-title">Our Product Range</h2><p class="section-sub">Seven core categories covering the full spectrum of steel trading in the UAE.</p></div>
        <div class="cards-grid">${CATEGORIES.map(categoryCardHtml).join('')}</div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="industries-head">
          <div><h2 class="section-title">Industries We Serve</h2><p>Our steel products power projects across construction, oil &amp; gas, infrastructure, manufacturing and more — throughout the UAE and GCC.</p></div>
          <div class="scroll-btns">
            <button class="round-btn" onclick="window.appScrollIndustries(-380)" aria-label="Previous">${ICONS.chevronLeft}</button>
            <button class="round-btn" onclick="window.appScrollIndustries(380)" aria-label="Next">${ICONS.chevronRight}</button>
          </div>
        </div>
        <div class="industries-scroller" id="industriesScroller">
          ${INDUSTRIES.map((ind) => `
            <article class="industry-card">
              <div class="img-wrap"><img src="${ind.image}" alt="${esc(ind.title)} — steel supplied by Al Maas Al Malaki UAE"/></div>
              <div class="body"><h3>${esc(ind.title)}</h3><p>${esc(ind.desc)}</p></div>
            </article>`).join('')}
        </div>
      </div>
    </section>
    <section class="section section-gray">
      <div class="container" style="max-width:768px">
        <div class="center"><h2 class="section-title">Frequently Asked Questions</h2><p class="section-sub">Common questions about ordering steel from Al Maas Al Malaki in the UAE &amp; GCC.</p></div>
        <div class="faq-list">
          ${FAQS.map((f) => `<details class="faq-item"><summary><span>${esc(f.q)}</span><span class="plus">+</span></summary><p>${esc(f.a)}</p></details>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function productsHtml() {
    return `
    <section class="banner"><div class="container">
      <h1>Our Steel Products</h1>
      <p>Al Maas Al Malaki stocks a comprehensive range of steel and building materials — organised into seven core categories. Each category page lists specifications, applications and enquiry options for every product we supply across the UAE and GCC.</p>
    </div></section>
    <section class="section container">
      <div class="cards-grid">
        ${CATEGORIES.map((c) => `
        <div class="card" onclick="appNavigate('#/products/${c.slug}')">
          <div class="img-wrap"><img src="${c.image}" alt="${esc(c.name)} — Al Maas Al Malaki UAE"/></div>
          <div class="body">
            <h3>${esc(c.name)}</h3>
            <p>${esc(c.short)}</p>
            <div style="margin-top:12px;font-size:12px;color:#6b7280">${c.products.length} products</div>
            <span class="view">View Category ${ICONS.arrowRight}</span>
          </div>
        </div>`).join('')}
      </div>
    </section>`;
  }

  function categoryHtml(cat) {
    return `
    <section class="banner banner-sm"><div class="container">
      <nav class="crumbs">
        <button onclick="appNavigate('#/')">Home</button>${ICONS.chevronRight}
        <button onclick="appNavigate('#/products')">Products</button>${ICONS.chevronRight}
        <span>${esc(cat.name)}</span>
      </nav>
      <h1>${esc(cat.name)}</h1>
      <p style="max-width:900px">${esc(cat.intro)}</p>
    </div></section>
    <section class="section container">
      <h2 class="section-title" style="margin-bottom:24px">${esc(cat.name)} Product Range</h2>
      <div class="cards-grid">
        ${cat.products.map((p) => `
        <div class="card" onclick="appNavigate('#/products/${cat.slug}/${p.slug}')">
          <div class="img-wrap" style="background:#f3f4f6"><img src="${p.image || cat.image}" alt="${esc(p.name)} supplier UAE – Al Maas Al Malaki"/></div>
          <div class="body">
            <h3 style="font-size:15px;font-weight:600">${esc(p.name)}</h3>
            <p>${esc(p.teaser)}</p>
            <span class="view">View Product ${ICONS.arrowRight}</span>
          </div>
        </div>`).join('')}
      </div>
    </section>`;
  }

  function productHtml(cat, product) {
    const images = [product.image, product.image2, product.image3, product.image4].filter(Boolean);
    if (images.length === 0) images.push(cat.image);
    const active = images[state.activeImageIdx] || images[0];
    const related = cat.products.filter((p) => p.slug !== product.slug).slice(0, 4);
    return `
    <section class="crumbs-gray"><div class="container" style="padding:12px 16px">
      <nav class="crumbs">
        <button onclick="appNavigate('#/')">Home</button>${ICONS.chevronRight}
        <button onclick="appNavigate('#/products')">Products</button>${ICONS.chevronRight}
        <button onclick="appNavigate('#/products/${cat.slug}')">${esc(cat.name)}</button>${ICONS.chevronRight}
        <span style="color:#111827">${esc(product.name)}</span>
      </nav>
    </div></section>
    <section class="container product-flex">
      <div>
        <div class="product-img"><img src="${active}" alt="${esc(product.name)} supplier UAE – Al Maas Al Malaki"/></div>
        ${images.length > 1 ? `<div class="thumb-row">${images.map((img, i) => `<div class="thumb ${i === state.activeImageIdx ? 'active' : ''}" onclick="window.appSelectImage(${i})"><img src="${img}" alt="${esc(product.name)} thumbnail"/></div>`).join('')}</div>` : ''}
      </div>
      <div>
        <div class="kicker">${esc(cat.name)}</div>
        <h1>${esc(product.name)}</h1>
        <p>${esc(product.teaser)}</p>
        <div class="product-actions">
          <a href="${whatsappUrlFor(product.name)}" target="_blank" rel="noopener noreferrer" class="btn-primary">${ICONS.message} Enquire Now</a>
          <button class="btn-outline-navy" onclick="appNavigate('#/contact')">Contact Sales</button>
        </div>
        <div style="margin-top:32px">
          <h2 style="margin:0 0 12px;font-size:18px;font-weight:700;color:var(--navy)">Specifications</h2>
          <div class="specs-table"><table><tbody>
            ${product.specs.map((s) => `<tr><td>${esc(s.label)}</td><td>${esc(s.value)}</td></tr>`).join('')}
          </tbody></table></div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="about-box">
        <h2>About ${esc(product.name)}</h2>
        <p>${esc(product.description)}</p>
        <div class="about-flex">
          <div>
            <h3>Applications</h3>
            <div class="apps-list">${product.applications.map((a) => `<div>${ICONS.check} ${esc(a)}</div>`).join('')}</div>
          </div>
          <div>
            <h3>Why choose Al Maas Al Malaki for ${esc(product.name)}?</h3>
            <p style="margin-top:8px;font-size:14px;color:#374151;line-height:1.7">As one of the UAE's most established steel stockists, we combine deep ready stock at our Sharjah yard with certified quality (EN 10204 3.1 MTC), transparent pricing and reliable GCC-wide delivery. Contact our team at ${esc(COMPANY.phone)} or ${esc(COMPANY.mobile)} for a fast quotation on ${esc(product.name)}.</p>
          </div>
        </div>
      </div>
    </section>
    ${related.length > 0 ? `
    <section class="container" style="padding-bottom:48px">
      <h2 class="section-title" style="margin-bottom:24px">Related ${esc(cat.name)} Products</h2>
      <div class="cards-grid" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
        ${related.map((p) => `
        <div class="card" onclick="appNavigate('#/products/${cat.slug}/${p.slug}')">
          <div class="img-wrap" style="background:#f3f4f6"><img src="${p.image || cat.image}" alt="${esc(p.name)} supplier UAE"/></div>
          <div class="body" style="padding:16px"><h3 style="font-size:14px">${esc(p.name)}</h3><span class="view" style="font-size:12px;margin-top:8px">View ${ICONS.arrowRight}</span></div>
        </div>`).join('')}
      </div>
    </section>` : ''}`;
  }

  function aboutHtml() {
    return `
    <section class="banner"><div class="container">
      <h1>About Al Maas Al Malaki</h1>
      <p>A trusted name in steel trading — stockist, importer, exporter and supplier — serving the UAE and GCC.</p>
    </div></section>
    <section class="container about-flex-page">
      <div class="about-main">
        <h2>Our Story</h2>
        <p>Founded to serve the growing infrastructure and construction market of the UAE, ${esc(COMPANY.name)} has grown into an established steel trading company with a solid reputation for reliability, quality and service. From our headquarters and stockyard in Al Sajaa Industrial Area, Sharjah, we handle the full spectrum of steel trading — stockist, importer, exporter and supplier — across every major product category the industry needs.</p>
        <p>Our clients include EPC contractors, fabricators, workshops, oil &amp; gas service companies, marine operators, HVAC and roofing contractors, and OEMs across the UAE, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain. What ties them together is a need for dependable supply of certified steel — and that is exactly what we deliver.</p>
        <h2 class="mt">What We Offer</h2>
        <p>Structural steel, mild steel (MS) products, steel pipes and tubes, sheets and coils, stainless steel, aluminium and mesh &amp; gratings — all backed by mill test certificates and traceability. Whether you need a single beam ex-stock or bulk indent supply of coils and plates, our commercial and logistics team is ready to help.</p>
        <h2 class="mt">Why Customers Trust Us</h2>
        <ul>
          <li>Wide, ready stock across seven product categories</li>
          <li>Certified quality — EN 10204 3.1 mill test certificates</li>
          <li>Transparent, competitive pricing</li>
          <li>GCC-wide delivery from our Sharjah stockyard</li>
          <li>24/7 enquiry response via WhatsApp and email</li>
          <li>Personalised service from an experienced trading team</li>
        </ul>
      </div>
      <aside class="about-aside">
        <div class="stat-card">${ICONS.warehouse}<div class="t">Sharjah Stockyard</div><div class="d">Deep ready stock at Al Sajaa Industrial Area.</div></div>
        <div class="stat-card">${ICONS.shield}<div class="t">Certified Quality</div><div class="d">EN 10204 3.1 MTC on all steel products.</div></div>
        <div class="stat-card">${ICONS.globe}<div class="t">UAE &amp; GCC Reach</div><div class="d">Serving 6 GCC countries with reliable logistics.</div></div>
        <div class="stat-card">${ICONS.clock}<div class="t">Working Hours</div><div class="d">${esc(COMPANY.hours)}</div></div>
        <button class="get-in-touch" onclick="appNavigate('#/contact')">Get In Touch</button>
      </aside>
    </section>`;
  }

  function contactHtml() {
    return `
    <section class="banner"><div class="container">
      <h1>Contact Us</h1>
      <p>Get in touch for pricing, availability, mill certificates and delivery options across the UAE and GCC.</p>
    </div></section>
    <section class="container contact-flex">
      <div class="contact-form">
        <h2>Send Us a Message</h2>
        <form id="contactForm">
          <div class="form-grid">
            <div class="field"><label>Name <span class="req">*</span></label><input name="name" type="text" required maxlength="200"/></div>
            <div class="field"><label>Email <span class="req">*</span></label><input name="email" type="email" required maxlength="200"/></div>
            <div class="field"><label>Phone</label><input name="phone" type="tel" maxlength="200"/></div>
          </div>
          <div class="field"><label>Message</label><textarea name="message" required rows="5" maxlength="2000"></textarea></div>
          <button type="submit" class="submit-btn">Send Enquiry</button>
          <p class="sent-msg hidden" id="sentMsg">Opening your email client — thank you!</p>
        </form>
      </div>
      <aside class="contact-aside">
        <div class="info-card">${ICONS.mapPin}<div class="label">Address</div><div class="value">${esc(COMPANY.address)}</div></div>
        <div class="info-card">${ICONS.phone}<div class="label">Phone</div><div class="value"><a href="${COMPANY.phoneHref}">${esc(COMPANY.phone)}</a></div></div>
        <div class="info-card">${ICONS.phone}<div class="label">Mobile</div><div class="value"><a href="${COMPANY.mobileHref}">${esc(COMPANY.mobile)}</a></div></div>
        <div class="info-card">${ICONS.mail}<div class="label">Email</div><div class="value" style="word-break:break-all"><a href="mailto:${COMPANY.email}">${esc(COMPANY.email)}</a></div></div>
        <div class="info-card">${ICONS.clock}<div class="label">Working Hours</div><div class="value">${esc(COMPANY.hours)}</div></div>
      </aside>
    </section>
    <section class="container" style="padding-bottom:64px">
      <h2 class="section-title" style="margin-bottom:16px">Find Us</h2>
      <div class="map-wrap"><iframe title="Al Maas Al Malaki location on Google Maps" src="${COMPANY.mapsEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
      <a href="${COMPANY.mapsPlaceUrl}" target="_blank" rel="noopener noreferrer" class="map-link">View larger map →</a>
    </section>`;
  }

  function render() {
    const route = parseRoute();
    let body = '';
    if (route.page === 'home') body = homeHtml();
    else if (route.page === 'products') body = productsHtml();
    else if (route.page === 'category') {
      const cat = getCategory(route.categorySlug);
      body = cat ? categoryHtml(cat) : homeHtml();
    } else if (route.page === 'product') {
      const res = getProduct(route.categorySlug, route.productSlug);
      body = res ? productHtml(res.category, res.product) : homeHtml();
    } else if (route.page === 'about') body = aboutHtml();
    else if (route.page === 'contact') body = contactHtml();

    document.getElementById('app').innerHTML = headerHtml(route) + '<main>' + body + '</main>' + footerHtml();

    if (route.page === 'home') startHeroTimer(); else stopHeroTimer();

    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const name = String(data.get('name') || '').trim();
        const email = String(data.get('email') || '').trim();
        const phone = String(data.get('phone') || '').trim();
        const message = String(data.get('message') || '').trim();
        if (!name || !email || !message) return;
        const body2 = 'Name: ' + name + '%0APhone: ' + phone + '%0AEmail: ' + email + '%0A%0A' + encodeURIComponent(message);
        window.location.href = 'mailto:' + COMPANY.email + '?subject=Enquiry from ' + encodeURIComponent(name) + '&body=' + body2;
        document.getElementById('sentMsg').classList.remove('hidden');
        form.reset();
      });
    }
  }

  function startHeroTimer() {
    stopHeroTimer();
    heroTimer = setInterval(() => {
      state.heroSlide = (state.heroSlide + 1) % 4;
      updateHeroDom();
    }, 3000);
  }
  function stopHeroTimer() { if (heroTimer) { clearInterval(heroTimer); heroTimer = null; } }
  function updateHeroDom() {
    document.querySelectorAll('.hero-slide').forEach((el, i) => el.classList.toggle('active', i === state.heroSlide));
    document.querySelectorAll('.hero-dot').forEach((el, i) => el.classList.toggle('active', i === state.heroSlide));
  }
  window.appGoToHeroSlide = function (i) {
    state.heroSlide = i;
    updateHeroDom();
    startHeroTimer();
  };
  window.appToggleMobile = function () {
    state.mobileOpen = !state.mobileOpen;
    render();
  };
  window.appSelectImage = function (i) {
    state.activeImageIdx = i;
    render();
  };
  window.appScrollIndustries = function (dx) {
    const el = document.getElementById('industriesScroller');
    if (el) el.scrollBy({ left: dx, behavior: 'smooth' });
  };

  window.addEventListener('hashchange', render);
  document.addEventListener('DOMContentLoaded', render);
})();
