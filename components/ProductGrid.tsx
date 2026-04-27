"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { formatPrice, showcaseProducts } from "@/lib/product";

export default function ProductGrid() {
  return (
    <section id="lineup" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-xs uppercase tracking-[0.4em] text-[#6E6E73]">The lineup</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#1D1D1F] md:text-6xl">
          Find your sound.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[#4A4A4A]">
          Four headphones engineered around different listening lifestyles.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {showcaseProducts.map((product, i) => (
            <motion.div
              key={product.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href="/product" className="group block">
                <div className="relative mb-5 aspect-4/5 overflow-hidden rounded-3xl bg-[#F5F5F7] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 50% 70%, ${product.accent}1F, transparent 60%)`,
                    }}
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#6E6E73]">
                  {product.tagline}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#1D1D1F] md:text-2xl">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <p className="text-base font-semibold tabular-nums text-[#1D1D1F]">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-sm tabular-nums text-[#6E6E73] line-through">
                    {formatPrice(product.originalPrice)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
