/* Placeholder product catalog for Pretty in Purple Boutique.
   Replace with real items, photos, and prices any time —
   see README.md for instructions. Each product uses an emoji
   placeholder image until real photos are added. */

const PRODUCTS = [
  { id: "p1", name: "Lilac Drop Earrings", category: "Jewelry", price: 28, emoji: "💜", desc: "Dainty amethyst-tone drops with a gold-plated hook." },
  { id: "p2", name: "Violet Charm Necklace", category: "Jewelry", price: 34, emoji: "📿", desc: "Layered chain with a hand-set violet charm pendant." },
  { id: "p3", name: "Bow Stack Rings (Set of 3)", category: "Jewelry", price: 22, emoji: "💍", desc: "Mixed-metal stacking rings with a signature bow detail." },
  { id: "p4", name: "Plum Pearl Bracelet", category: "Jewelry", price: 26, emoji: "📿", desc: "Freshwater pearls dipped in a soft plum hue." },
  { id: "p5", name: "Lavender Silk Scarf", category: "Accessories", price: 32, emoji: "🧣", desc: "Featherweight silk-blend scarf in dreamy lavender." },
  { id: "p6", name: "Heart Clasp Handbag", category: "Accessories", price: 58, emoji: "👜", desc: "Structured mini bag with a heart-shaped clasp closure." },
  { id: "p7", name: "Pastel Bow Hair Clip Set", category: "Accessories", price: 16, emoji: "🎀", desc: "Set of 3 bow clips in lilac, cream, and blush." },
  { id: "p8", name: "Purple Petal Sunglasses", category: "Accessories", price: 24, emoji: "🕶️", desc: "Oversized frames with a soft lavender tint." },
  { id: "p9", name: "Winter Frost Snowflake Studs", category: "Seasonal", price: 20, emoji: "❄️", desc: "Limited seasonal studs with a frosted shimmer finish." },
  { id: "p10", name: "Spring Bloom Anklet", category: "Seasonal", price: 18, emoji: "🌸", desc: "Delicate chain anklet with tiny blossom charms." },
  { id: "p11", name: "Signature Purple Bow Necklace", category: "Purple Collection", price: 38, emoji: "🎀", desc: "Our icon piece — the bow from our logo, cast in metal." },
  { id: "p12", name: "Deep Plum Statement Ring", category: "Purple Collection", price: 30, emoji: "💜", desc: "A bold plum stone set in a brushed gold band." }
];

const CATEGORIES = ["All", "Jewelry", "Accessories", "Seasonal", "Purple Collection"];
