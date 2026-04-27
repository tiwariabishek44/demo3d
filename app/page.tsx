"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import ScrollTextLayers from "@/components/ScrollTextLayers";
import SequenceCanvas from "@/components/SequenceCanvas";

export default function Home() {
  const canvasSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative bg-[#F5F5F7] min-h-screen">
      <Navbar />

      {/* Dedicated hero section — no product, full focus on the intro story. */}
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Ambient atmospheric blobs — slow breathing motion to give the empty canvas life. */}
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-32 left-1/2 h-160 w-160 -translate-x-1/2 rounded-full bg-[#0050FF]/10 blur-[110px]"
        />
        <motion.div
          aria-hidden
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -bottom-40 left-1/2 h-140 w-140 -translate-x-1/2 rounded-full bg-[#00AEEF]/10 blur-[110px]"
        />

        {/* Ghosted product silhouette — first frame as atmospheric backdrop. */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <img
            src="/headphones/ezgif-frame-001.jpg"
            alt=""
            className="h-[72vh] w-auto max-w-[80vw] object-contain blur-sm"
          />
        </motion.div>

        {/* Staggered entry: kicker → headline → tagline. */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-6 text-xs uppercase tracking-[0.4em] text-[#6E6E73]"
        >
          Rock-100xmag
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-6 text-6xl md:text-8xl font-bold tracking-tight text-[#1D1D1F] leading-[0.95]"
        >
          Silence, perfected.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-2xl text-xl md:text-2xl text-[#4A4A4A] font-light leading-relaxed"
        >
          Engineered for clarity in a noisy world.
        </motion.p>

        {/* Scroll cue — text + a brand-blue dot travelling down the rail to suggest direction. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6E6E73]">
            Scroll to explore
          </span>
          <div className="relative h-14 w-px bg-[#1D1D1F]/15">
            <motion.span
              animate={{ y: [0, 56], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeIn",
                times: [0, 0.15, 0.85, 1],
              }}
              className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#0050FF] shadow-[0_0_10px_rgba(0,80,255,0.5)]"
            />
          </div>
        </motion.div>
      </section>

      {/*
        Canvas section. Height drives overall framer speed — shorter container = faster
        scroll-through (frame scrub + slogan transitions both scale with this). 1500vh is a
        balanced midpoint between github's slow 4000vh and the snappier 500vh "normal."
      */}
      <div ref={canvasSectionRef} className="relative h-[1500vh] w-full">
        <SequenceCanvas scrollTargetRef={canvasSectionRef} />
        <ScrollTextLayers scrollTargetRef={canvasSectionRef} />
      </div>
    </main>
  );
}
