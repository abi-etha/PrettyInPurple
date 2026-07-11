# Pretty in Purple Boutique — Website

A ready-to-launch boutique site: Home, Shop, About, and Contact pages, styled
around your logo (purple script, bow, hearts). No account needed to run it —
just static files.

## What's inside

- `index.html` — Home page with hero, featured collections, quick links
- `shop.html` — Product grid with category filters and an "Inquiry List" (like a cart, but no checkout/payment)
- `about.html` — Your story (placeholder text — see below)
- `contact.html` — Contact form + your inquiry list gets sent along with your message
- `css/styles.css` — All the styling (colors, fonts, layout)
- `js/products.js` — Your product catalog (currently placeholder items)
- `js/script.js` — Cart, filtering, and navigation logic

No customer data, passwords, or payments are ever stored. The "Inquiry List"
just lives in the visitor's browser (localStorage) until they hit send, and
resets after each message.

## 1. Swap in your real products

Open `js/products.js`. Each product looks like this:

```js
{ id: "p1", name: "Lilac Drop Earrings", category: "Jewelry", price: 28, emoji: "💜", desc: "Dainty amethyst-tone drops with a gold-plated hook." }
```

- `category` must be one of: Jewelry, Accessories, Seasonal, Purple Collection
  (or add your own — just also add it to the `CATEGORIES` list right below)
- `emoji` is a placeholder image. To use a real photo instead, replace the
  `.product-image` emoji in `js/script.js` with an `<img>` tag pointing to a
  photo in a new `/images` folder (ask me and I can wire this up for you).

## 2. Add your real "About" story

Open `about.html` and replace the bracketed placeholder paragraphs (and
`[Sister's name]`) with the real story, mission, and behind-the-scenes notes.

## 3. Connect the contact form (so messages actually arrive)

The form uses [Formspree](https://formspree.io) — free, no backend needed.

1. Create a free account at formspree.io
2. Create a new form, get your Form ID (looks like `mzbqwxyz`)
3. Open `contact.html`, find this line near the top of the form:
   `action="https://formspree.io/f/YOUR_FORM_ID"`
4. Replace `YOUR_FORM_ID` with your real ID

Until this is set up, the form will show an error instead of sending.

## 4. Add social links

In `contact.html`, find the `.social-links` section near the bottom and
replace the `#` hrefs with real Instagram/TikTok/Pinterest URLs.

## 5. Publish the site

Any of these work great and are free:

- **Netlify Drop** (easiest): go to app.netlify.com/drop, drag this whole
  `pretty-in-purple` folder in, done.
- **Cloudflare Pages**: connect a GitHub repo containing these files.
- **GitHub Pages**: push this folder to a repo and enable Pages in settings.

## Notes for later (optional upgrades)

- Real product photos instead of emoji placeholders
- A "Lookbook" gallery page
- An email newsletter signup ("Purple Club")
- Seasonal drop landing pages
- A QR-code micro-site for craft fairs/business cards

Just ask and these can be added on top of this foundation.
