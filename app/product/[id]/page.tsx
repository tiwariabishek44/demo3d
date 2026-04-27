"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";

import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/lib/data";

// Fallback static elements for missing JSON data to keep the rich UI
import {
  quickFacts,
  galleryFrames,
} from "@/lib/product";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  // Find product dynamically
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const baseImage = product.images.length > 0 ? product.images[0] : galleryFrames[0];
  const images = [baseImage, baseImage, baseImage, baseImage]; // Duplicate to show thumbnails
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const ratingValue = parseFloat(product.rating || "0") || 0;

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-32">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6E6E73] transition-colors hover:text-[#1D1D1F]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to store
        </button>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div
              key={selectedIndex}
              className="relative aspect-square overflow-hidden rounded-3xl bg-[#F5F5F7] p-8"
            >
              <img
                src={images[selectedIndex]}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-contain p-8"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(circle at center, #0050FF11, transparent 60%)`,
                }}
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((frame, idx) => {
                  const isActive = idx === selectedIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      aria-label={`View product angle ${idx + 1}`}
                      className={`aspect-square overflow-hidden rounded-2xl border-2 bg-[#F5F5F7] transition-all p-2 ${isActive
                        ? "border-[#0050FF] shadow-[0_8px_20px_rgba(0,80,255,0.18)]"
                        : "border-transparent hover:border-black/10"
                        }`}
                    >
                      <img src={frame} alt="" className="h-full w-full object-contain" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Commerce */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#6E6E73]">{product.category}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#1D1D1F] md:text-5xl">
                {product.name}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i <= Math.round(ratingValue)
                      ? "fill-[#FFB800] text-[#FFB800]"
                      : "fill-[#E5E5EA] text-[#E5E5EA]"
                      }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#1D1D1F]">{product.rating}</span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <p className="text-4xl font-semibold tabular-nums text-[#1D1D1F]">
                {product.price.current}
              </p>
              {product.price.original && product.price.original !== product.price.current && product.price.original !== "N/A" && (
                <p className="text-xl tabular-nums text-[#6E6E73] line-through">
                  {product.price.original}
                </p>
              )}
              {product.price.discount && product.price.discount !== "0%" && (
                <span className="inline-flex items-center rounded-full bg-[#0050FF]/10 px-3 py-1 text-xs font-semibold tracking-wider text-[#0050FF]">
                  Save {product.price.discount}
                </span>
              )}
            </div>

            {/* Dynamic Technical Specs rendering if available */}
            {product.technical_specs && (
              <div className="space-y-2 mt-4 text-sm text-[#4A4A4A]">
                <h4 className="font-semibold text-black uppercase tracking-widest text-[11px] mb-3">Technical Specs</h4>
                <ul className="space-y-3 border-l-2 border-black/5 pl-4">
                  {Object.entries(product.technical_specs).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-semibold capitalize text-[#1D1D1F]">{key.replace('_', ' ')}: </span>
                      <span className="text-[#6E6E73]">{String(value)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap items-stretch gap-3 mt-6">
              <div className="flex items-center gap-1 rounded-full border border-black/[0.08] bg-white p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="grid h-10 w-10 place-items-center rounded-full text-[#1D1D1F]/70 transition-colors hover:bg-black/5 hover:text-[#1D1D1F] disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  −
                </button>
                <span className="min-w-10 text-center text-sm font-semibold tabular-nums text-[#1D1D1F]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(9, q + 1))}
                  disabled={quantity >= 9}
                  aria-label="Increase quantity"
                  className="grid h-10 w-10 place-items-center rounded-full text-[#1D1D1F]/70 transition-colors hover:bg-black/5 hover:text-[#1D1D1F] disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="flex min-w-45 flex-1 items-center justify-center gap-2 rounded-full border border-[#1D1D1F]/15 bg-white px-6 py-3 text-sm font-semibold text-[#1D1D1F] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1D1D1F]/30 hover:bg-[#F5F5F7]"
              >
                <ShoppingBag className="h-4 w-4" />
                Add to cart
              </button>
              <button
                type="button"
                className="flex min-w-45 flex-1 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#0050FF] to-[#00AEEF] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,80,255,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,80,255,0.32)]"
              >
                Buy now
              </button>
            </div>

            <div className="space-y-2 border-t border-black/[0.06] pt-5 text-sm text-[#6E6E73]">
              <p>
                <span className="font-medium text-[#1D1D1F]">2-3 business days</span> delivery · SKU{" "}
                <span className="tabular-nums">RCK-{product.id.padStart(4, '0')}</span>
              </p>
              <p>Free delivery · 14-day returns · 1-year warranty</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#6E6E73]">Highlights</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1D1D1F] md:text-4xl">
            Engineered for the everyday.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="rounded-2xl border border-black/[0.06] bg-[#F5F5F7] p-6 transition-colors hover:border-black/[0.12] hover:bg-[#EFEFF1]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0050FF] shadow-[0_4px_12px_rgba(0,80,255,0.12)]">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-base font-semibold text-[#1D1D1F]">{title}</p>
                <p className="mt-1 text-sm leading-6 text-[#6E6E73]">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
