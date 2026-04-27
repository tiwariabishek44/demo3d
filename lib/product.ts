import { BatteryCharging, Bluetooth, Clock3, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const productName = "Vibe-Wireless Headphone";
export const productSubtitle = "Premium wireless · Adaptive ANC";
export const productDescription =
  "Bluetooth wireless headphone with adaptive ANC, ~30 hours of playback, custom 40mm drivers, plush adjustable headband, and complimentary engraving.";

export const rating = 4.8;
export const reviewCount = 124;

export type Finish = {
  key: string;
  name: string;
  sku: string;
  price: number;
  originalPrice: number;
  delivery: string;
  image: string;
  accent: string;
};

export const finishes: Finish[] = [
  {
    key: "midnight",
    name: "Midnight Black",
    sku: "RCK-VIBE-MBK-01",
    price: 3700,
    originalPrice: 4900,
    delivery: "2-3 business days",
    image: "https://rocktechshop.com/wp-content/uploads/2023/03/1-4-600x700.jpg",
    accent: "#8A919C",
  },
  {
    key: "platinum",
    name: "Platinum Silver",
    sku: "RCK-VIBE-PLS-02",
    price: 3780,
    originalPrice: 5000,
    delivery: "2-4 business days",
    image: "https://rocktechshop.com/wp-content/uploads/2023/03/1-3-600x500.jpg",
    accent: "#D7DEE6",
  },
  {
    key: "graphite",
    name: "Graphite Smoke",
    sku: "RCK-VIBE-GSM-03",
    price: 3740,
    originalPrice: 4950,
    delivery: "2-4 business days",
    image: "https://rocktechshop.com/wp-content/uploads/2023/03/1-600x500.jpg",
    accent: "#707781",
  },
  {
    key: "arctic",
    name: "Arctic White",
    sku: "RCK-VIBE-AWT-04",
    price: 3790,
    originalPrice: 5000,
    delivery: "3-4 business days",
    image: "https://rocktechshop.com/wp-content/uploads/2024/03/1-3-600x500.jpg",
    accent: "#F6F7F9",
  },
];

export type QuickFact = { icon: LucideIcon; title: string; sub: string };

export const quickFacts: QuickFact[] = [
  { icon: BatteryCharging, title: "30 hr playback", sub: "With ANC engaged" },
  { icon: Sparkles, title: "40 mm driver", sub: "Balanced over-ear profile" },
  { icon: Bluetooth, title: "Bluetooth wireless", sub: "Reliable low-latency pairing" },
  { icon: Clock3, title: "Free engraving", sub: "Personalize on request" },
];

export const galleryFrames = [1, 60, 120, 180].map(
  (n) => `/headphones/ezgif-frame-${String(n).padStart(3, "0")}.jpg`
);

export type ShowcaseProduct = {
  key: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  image: string;
  accent: string;
};

export const showcaseProducts: ShowcaseProduct[] = [
  { key: "vibe-wireless", name: "Vibe-Wireless", tagline: "Adaptive ANC · 30 hr", price: 3700, originalPrice: 4900, image: "/headphones/ezgif-frame-001.jpg", accent: "#0050FF" },
  { key: "vibe-pro-studio", name: "Vibe-Pro Studio", tagline: "Studio-grade · Pro ANC", price: 5400, originalPrice: 6200, image: "/headphones/ezgif-frame-017.jpg", accent: "#7A4FFF" },
  { key: "vibe-lite-daily", name: "Vibe-Lite Daily", tagline: "Lightweight · Everyday", price: 2400, originalPrice: 2900, image: "/headphones/ezgif-frame-033.jpg", accent: "#00AEEF" },
  { key: "vibe-air-open", name: "Vibe-Air Open", tagline: "Open-back · Spatial", price: 4200, originalPrice: 4900, image: "/headphones/ezgif-frame-049.jpg", accent: "#FF6B6B" },
  { key: "vibe-sport", name: "Vibe-Sport Active", tagline: "Sweatproof · Sport fit", price: 3200, originalPrice: 3900, image: "/headphones/ezgif-frame-065.jpg", accent: "#2ECC71" },
  { key: "vibe-max", name: "Vibe-Max Reference", tagline: "Audiophile · Hi-Res", price: 6500, originalPrice: 7800, image: "/headphones/ezgif-frame-081.jpg", accent: "#F39C12" },
  { key: "vibe-mini", name: "Vibe-Mini Travel", tagline: "Foldable · Compact", price: 2800, originalPrice: 3400, image: "/headphones/ezgif-frame-097.jpg", accent: "#E84393" },
  { key: "vibe-plus", name: "Vibe-Plus Comfort", tagline: "All-day cushion · Plush", price: 3900, originalPrice: 4500, image: "/headphones/ezgif-frame-113.jpg", accent: "#5B6EFF" },
  { key: "vibe-stream", name: "Vibe-Stream Live", tagline: "Streaming · Built-in mic", price: 3600, originalPrice: 4200, image: "/headphones/ezgif-frame-129.jpg", accent: "#00D9C0" },
  { key: "vibe-anc-pro", name: "Vibe-ANC Pro", tagline: "Hybrid ANC · 40 hr", price: 4800, originalPrice: 5600, image: "/headphones/ezgif-frame-145.jpg", accent: "#FF4757" },
  { key: "vibe-bass", name: "Vibe-Bass Drop", tagline: "Deep bass · DJ tuned", price: 3500, originalPrice: 4100, image: "/headphones/ezgif-frame-161.jpg", accent: "#A55EEA" },
  { key: "vibe-studio-mix", name: "Vibe-Studio Mix", tagline: "Flat response · Mix-ready", price: 5800, originalPrice: 6900, image: "/headphones/ezgif-frame-177.jpg", accent: "#20BF6B" },
  { key: "vibe-eco", name: "Vibe-Eco Light", tagline: "Recycled · Carbon neutral", price: 2900, originalPrice: 3500, image: "/headphones/ezgif-frame-193.jpg", accent: "#FA8231" },
  { key: "vibe-pulse", name: "Vibe-Pulse Beat", tagline: "Workout · Pulse sync", price: 3300, originalPrice: 3900, image: "/headphones/ezgif-frame-209.jpg", accent: "#45AAF2" },
  { key: "vibe-edge", name: "Vibe-Edge Wireless", tagline: "Edge AI · Adaptive EQ", price: 4500, originalPrice: 5200, image: "/headphones/ezgif-frame-225.jpg", accent: "#FECB2E" },
];

export function formatPrice(value: number) {
  return `₨ ${value.toLocaleString("en-NP", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function calculateDiscount(price: number, originalPrice: number) {
  if (originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
