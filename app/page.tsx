"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Navbar from "@/components/Navbar";
import ScrollTextLayers from "@/components/ScrollTextLayers";
import SequenceCanvas from "@/components/SequenceCanvas";
import ProductGrid from "@/components/ProductGrid";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const canvasSectionRef = useRef<HTMLDivElement>(null);

  // Track global scroll for hero parallax effects
  const { scrollYProgress: globalScrollY } = useScroll();

  // Parallax transforms for hero blobs
  const blob1Y = useTransform(globalScrollY, [0, 0.1], [0, -150]);
  const blob2Y = useTransform(globalScrollY, [0, 0.1], [0, 150]);
  const heroOpacity = useTransform(globalScrollY, [0, 0.08], [1, 0]);
  const heroScale = useTransform(globalScrollY, [0, 0.08], [1, 0.96]);
  const silhouetteScale = useTransform(globalScrollY, [0, 0.07], [1, 1.05]);
  const silhouetteBlur = useTransform(globalScrollY, [0, 0.07], ["blur(4px)", "blur(12px)"]);

  return (
    <main className="relative bg-[#F5F5F7] min-h-screen">
      <Navbar />

      {/* Dedicated hero section — no product, full focus on the intro story. */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        {/* Ambient atmospheric blobs — now with scroll-linked depth-parallax. */}
        <motion.div
          aria-hidden
          style={{ y: blob1Y }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-32 left-1/2 h-160 w-160 -translate-x-1/2 rounded-full bg-[#0050FF]/15 blur-[120px]"
        />
        <motion.div
          aria-hidden
          style={{ y: blob2Y }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -bottom-40 left-1/2 h-140 w-140 -translate-x-1/2 rounded-full bg-[#00AEEF]/15 blur-[120px]"
        />

        {/* Ghosted product silhouette — recedes with scroll. */}
        <motion.div
          aria-hidden
          style={{ scale: silhouetteScale, filter: silhouetteBlur }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <img
            src="/headphones/ezgif-frame-001.jpg"
            alt=""
            className="h-[75vh] w-auto max-w-[85vw] object-contain"
          />
        </motion.div>

        {/* Staggered entry: kicker → headline → tagline. */}
        <motion.div className="relative z-10 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 text-xs font-bold uppercase tracking-[0.5em] text-[#6E6E73]/80"
          >
            Rock-100xmag
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 text-6xl md:text-9xl font-bold tracking-tighter text-[#1D1D1F] leading-[0.9] text-center"
          >
            Silence, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#1D1D1F] to-[#424245]">perfected.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-xl md:text-2xl text-[#4A4A4A] font-light leading-relaxed px-4"
          >
            Engineered for absolute clarity in a noisy world.
          </motion.p>
        </motion.div>

        {/* Scroll cue — text + a brand-blue dot travelling down the rail. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pointer-events-none absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-5"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6E6E73]">
            Scroll to explore
          </span>
          <div className="relative h-16 w-px bg-[#1D1D1F]/10">
            <motion.span
              animate={{ y: [0, 64], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 1],
              }}
              className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#0050FF] shadow-[0_0_15px_rgba(0,80,255,0.4)]"
            />
          </div>
        </motion.div>
        {/* Scroll Indicator — Fades out quickly as discovery begins. */}
        <motion.div
          style={{ opacity: useTransform(globalScrollY, [0, 0.02], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ScrollIndicator />
        </motion.div>
      </motion.section>

      {/*
        Canvas section. Height drives overall framer speed.
      */}
      <div ref={canvasSectionRef} className="relative h-[1500vh] w-full">
        <SequenceCanvas scrollTargetRef={canvasSectionRef} />
        <ScrollTextLayers scrollTargetRef={canvasSectionRef} />
      </div>

      <ProductGrid />
    </main>
  );
}
