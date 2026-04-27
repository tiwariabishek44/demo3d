"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";

import Navbar from "@/components/Navbar";
import {
  calculateDiscount,
  finishes,
  formatPrice,
  galleryFrames,
  productDescription,
  productName,
  productSubtitle,
  quickFacts,
  rating,
  reviewCount,
} from "@/lib/product";

export default function ProductPage() {
  const [selectedFinish, setSelectedFinish] = useState(finishes[0]);
  const [selectedFrame, setSelectedFrame] = useState(galleryFrames[0]);
  const [quantity, setQuantity] = useState(1);

  const discount = calculateDiscount(selectedFinish.price, selectedFinish.originalPrice);

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6E6E73] transition-colors hover:text-[#1D1D1F]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to story
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div
              key={selectedFrame}
              className="relative aspect-square overflow-hidden rounded-3xl bg-[#F5F5F7]"
            >
              <img
                src={selectedFrame}
                alt={productName}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(circle at center, ${selectedFinish.accent}22, transparent 60%)`,
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {galleryFrames.map((frame) => {
                const isActive = frame === selectedFrame;
                return (
                  <button
                    key={frame}
                    type="button"
                    onClick={() => setSelectedFrame(frame)}
                    aria-label="View product angle"
                    className={`aspect-square overflow-hidden rounded-2xl border-2 bg-[#F5F5F7] transition-all ${
                      isActive
                        ? "border-[#0050FF] shadow-[0_8px_20px_rgba(0,80,255,0.18)]"
                        : "border-transparent hover:border-black/10"
                    }`}
                  >
                    <img src={frame} alt="" className="h-full w-full object-cover" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Commerce */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#6E6E73]">Rock-100xmag</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#1D1D1F] md:text-5xl">
                {productName}
              </h1>
              <p className="mt-2 text-sm font-medium text-[#0050FF]">{productSubtitle}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i <= Math.round(rating)
                        ? "fill-[#FFB800] text-[#FFB800]"
                        : "fill-[#E5E5EA] text-[#E5E5EA]"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#1D1D1F]">{rating}</span>
              <span className="text-sm text-[#6E6E73]">·</span>
              <span className="text-sm text-[#6E6E73]">{reviewCount} reviews</span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <p className="text-4xl font-semibold tabular-nums text-[#1D1D1F]">
                {formatPrice(selectedFinish.price)}
              </p>
              <p className="text-xl tabular-nums text-[#6E6E73] line-through">
                {formatPrice(selectedFinish.originalPrice)}
              </p>
              {discount > 0 && (
                <span className="inline-flex items-center rounded-full bg-[#0050FF]/10 px-3 py-1 text-xs font-semibold tracking-wider text-[#0050FF]">
                  Save {discount}%
                </span>
              )}
            </div>

            <p className="text-base leading-relaxed text-[#4A4A4A]">{productDescription}</p>

            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#6E6E73]">
                Color: <span className="font-semibold text-[#1D1D1F]">{selectedFinish.name}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {finishes.map((finish) => {
                  const isActive = finish.key === selectedFinish.key;
                  return (
                    <button
                      key={finish.key}
                      type="button"
                      onClick={() => setSelectedFinish(finish)}
                      aria-label={`Select ${finish.name}`}
                      className="group flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-2 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0050FF]/40"
                    >
                      <span
                        className="block h-7 w-7 rounded-full border transition-all"
                        style={{
                          background:
                            finish.name === "Arctic White"
                              ? "linear-gradient(135deg, #f5f6f8 0%, #a3adb7 100%)"
                              : `linear-gradient(135deg, ${finish.accent} 0%, #1D1D1F 100%)`,
                          borderColor: isActive ? "#0050FF" : "rgba(0,0,0,0.08)",
                          boxShadow: isActive ? "0 0 0 2px #0050FF44" : "none",
                        }}
                      />
                      <span className="text-sm font-medium text-[#1D1D1F]">{finish.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-stretch gap-3">
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
                <span className="font-medium text-[#1D1D1F]">{selectedFinish.delivery}</span> delivery · SKU{" "}
                <span className="tabular-nums">{selectedFinish.sku}</span>
              </p>
              <p>Free engraving · 14-day returns · 1-year warranty</p>
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
