/* Pretty in Purple Boutique — shared site behavior
   Cart is stored in localStorage only. No accounts, no
   payment processing, no server-side data storage. */

const CART_KEY = "piph_inquiry_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find((i) => i.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  }
  saveCart(cart);
  showToast(`Added "${product.name}" to your inquiry list 💜`);
}

function removeFromCart(id) {
  const cart = getCart().filter((i) => i.id !== id);
  saveCart(cart);
  renderCartDrawer();
}

function updateCartCount() {
  const countEls = document.querySelectorAll(".cart-count");
  const count = getCart().reduce((sum, i) => sum + i.qty, 0);
  countEls.forEach((el) => (el.textContent = count));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* ---------- Nav toggle ---------- */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
}

/* ---------- Cart drawer ---------- */
function renderCartDrawer() {
  const itemsEl = document.getElementById("cartItems");
  const summaryEl = document.getElementById("cartSummaryField");
  if (!itemsEl) return;

  const cart = getCart();
  if (cart.length === 0) {
    itemsEl.innerHTML = `<p class="cart-empty">Your inquiry list is empty.<br>Browse the shop and add a few favorites 💜</p>`;
  } else {
    itemsEl.innerHTML = cart
      .map(
        (i) => `
      <div class="cart-item">
        <div>
          <div class="cart-item-name">${i.name} ${i.qty > 1 ? `× ${i.qty}` : ""}</div>
          <div class="cart-item-price">$${(i.price * i.qty).toFixed(2)}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${i.id}')" aria-label="Remove">✕</button>
      </div>`
      )
      .join("");
  }

  if (summaryEl) {
    const summary = cart.map((i) => `${i.name} (x${i.qty}) - $${(i.price * i.qty).toFixed(2)}`).join("\n");
    summaryEl.value = summary || "No items selected yet.";
  }
}

function initCartDrawer() {
  const overlay = document.getElementById("cartOverlay");
  const drawer = document.getElementById("cartDrawer");
  const openBtns = document.querySelectorAll(".nav-cart-btn");
  const closeBtn = document.getElementById("cartClose");

  function open() {
    renderCartDrawer();
    overlay.classList.add("open");
    drawer.classList.add("open");
  }
  function close() {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
  }

  openBtns.forEach((btn) => btn.addEventListener("click", open));
  if (closeBtn) closeBtn.addEventListener("click", close);
  if (overlay) overlay.addEventListener("click", close);
}

/* ---------- Shop page: product grid + filters ---------- */
function initShop() {
  const grid = document.getElementById("productGrid");
  if (!grid || typeof PRODUCTS === "undefined") return;

  const filtersEl = document.getElementById("filters");
  let activeCategory = "All";

  function renderGrid() {
    const list = activeCategory === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);
    grid.innerHTML = list
      .map(
        (p) => `
      <div class="product-card">
        <div class="product-image">${p.emoji}<span class="sparkle">✨</span></div>
        <div class="product-info">
          <div class="product-category">${p.category}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="product-footer">
            <span class="product-price">$${p.price}</span>
            <button class="btn btn-primary btn-small" onclick='addToCart(${JSON.stringify(p)})'>Add 🎀</button>
          </div>
        </div>
      </div>`
      )
      .join("");
  }

  if (filtersEl) {
    filtersEl.innerHTML = CATEGORIES.map(
      (c) => `<button class="filter-btn ${c === "All" ? "active" : ""}" data-cat="${c}">${c}</button>`
    ).join("");

    filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        filtersEl.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderGrid();
      });
    });
  }

  renderGrid();
}

/* ---------- Home page: featured collections ---------- */
function initFeatured() {
  const el = document.getElementById("featuredCarousel");
  if (!el) return;
  const featured = [
    { emoji: "💜", name: "Purple Collection" },
    { emoji: "💍", name: "Jewelry Edit" },
    { emoji: "🎀", name: "Accessories" },
    { emoji: "❄️", name: "Seasonal Drops" }
  ];
  el.innerHTML = featured
    .map(
      (f) => `<div class="collection-card"><div class="emoji">${f.emoji}</div><h3>${f.name}</h3></div>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initCartDrawer();
  initShop();
  initFeatured();
  updateCartCount();
});
