"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PRODUCTS = [
  {
    id: 1,
    name: "Rock-100x Carbon",
    price: "$349",
    tag: "Flagship",
    image: "/headphones/ezgif-frame-001.jpg",
    description: "Our most advanced noise cancelling headphones yet. Experience orchestral clarity in total silence.",
    featured: true
  },
  {
    id: 2,
    name: "Rock-100x Air",
    price: "$299",
    tag: "Lightweight",
    image: "/headphones/ezgif-frame-040.jpg",
    description: "Designed for all-day comfort without compromising sound."
  },
  {
    id: 3,
    name: "Rock-100x Studio",
    price: "$449",
    tag: "Professional",
    image: "/headphones/ezgif-frame-080.jpg",
    description: "Flat frequency response for critical listening."
  },
  {
    id: 4,
    name: "Rock-100x Pure",
    price: "$249",
    tag: "Essential",
    image: "/headphones/ezgif-frame-120.jpg",
    description: "Essential features, uncompromising build quality."
  },
  {
    id: 5,
    name: "Rock-100x Onyx",
    price: "$599",
    tag: "Premium",
    image: "/headphones/ezgif-frame-160.jpg",
    description: "Hand-finished materials in a strictly limited run.",
    featured: true
  },
  {
    id: 6,
    name: "Rock-100x Sport",
    price: "$199",
    tag: "New",
    image: "/headphones/ezgif-frame-200.jpg",
    description: "Sweat-resistant and secure for intense workouts."
  },
  {
    id: 7,
    name: "Rock-100x Pro",
    price: "$499",
    tag: "Advanced ANC",
    image: "/headphones/ezgif-frame-015.jpg",
    description: "Industry-leading noise cancellation with proprietary chip-driven analysis."
  },
  {
    id: 8,
    name: "Rock-100x Go",
    price: "$179",
    tag: "Portable",
    image: "/headphones/ezgif-frame-055.jpg",
    description: "Ultra-compact folding design for global travelers and commuters."
  },
  {
    id: 9,
    name: "Rock-100x Pulse",
    price: "$219",
    tag: "Fitness",
    image: "/headphones/ezgif-frame-105.jpg",
    description: "In-ear biometric tracking with high-fidelity acoustics for the elite athlete."
  },
  {
    id: 10,
    name: "Rock-100x Zen",
    price: "$279",
    tag: "Focus",
    image: "/headphones/ezgif-frame-145.jpg",
    description: "Tuned specifically for deep work, meditation, and acoustic immersion."
  },
  {
    id: 11,
    name: "Rock-100x Reference",
    price: "$649",
    tag: "Audiophile",
    image: "/headphones/ezgif-frame-185.jpg",
    description: "The gold standard for studio monitoring and pure audio reproduction."
  },
  {
    id: 12,
    name: "Rock-100x Pulse Air",
    price: "$229",
    tag: "New Arrival",
    image: "/headphones/ezgif-frame-225.jpg",
    description: "Breathable mesh architecture meets heavy-hitting bass response."
  }
];

export default function ProductGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <section className="bg-white py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="flex flex-col mb-32 gap-6 items-center text-center">
          <motion.p
            variants={itemVariants}
            className="text-[11px] font-black uppercase tracking-[0.6em] text-[#0050FF]"
          >
            The Full Lineup
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-7xl md:text-9xl font-bold tracking-tighter text-[#1D1D1F] leading-[0.85]"
          >
            Choose your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#1D1D1F] to-[#424245]">
              perfect sound.
            </span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(450px,auto)]">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href="/product"
              className={`block ${product.featured ? "md:col-span-2 md:row-span-2" : "col-span-1"
                }`}
            >
              <motion.div
                variants={itemVariants}
                className="group relative flex flex-col h-full overflow-hidden rounded-[3rem] bg-[#F5F5F7] transition-all duration-1000 ease-[0.22,1,0.36,1] hover:shadow-[0_60px_100px_rgba(0,0,0,0.08)] hover:-translate-y-2"
              >
                {/* Top Section: Heroic Name */}
                <div className="p-12 pb-0 z-10 flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0050FF]/70">
                      {product.tag}
                    </span>
                    <h3 className={`font-bold tracking-tighter text-[#1D1D1F] leading-[0.9] ${product.featured ? 'text-6xl md:text-8xl max-w-md' : 'text-4xl md:text-5xl max-w-[200px]'
                      }`}>
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <span className="text-2xl font-bold tracking-tighter text-[#1D1D1F]">
                      {product.price}
                    </span>
                    <div className="px-8 py-3 rounded-full bg-[#1D1D1F] text-white text-[11px] font-black uppercase tracking-widest transition-all duration-500 hover:bg-[#0050FF] hover:scale-110 active:scale-95 shadow-xl shadow-black/5 cursor-pointer">
                      Buy
                    </div>
                  </div>
                </div>

                {/* Middle Section: Image Area */}
                <div className={`relative flex items-center justify-center overflow-hidden flex-1 ${product.featured ? 'p-16 pt-0' : 'p-8 pt-4'}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105 group-hover:-rotate-2"
                  />

                  {/* Decorative Atmospheric Blob (Featured Only) */}
                  {product.featured && (
                    <div className="absolute inset-x-0 bottom-0 top-1/2 -z-10 bg-radial-[at_50%_100%] from-[#0050FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  )}
                </div>

                {/* Bottom Section: Minimal Description */}
                <div className="p-12 pt-0 z-10">
                  <p className={`text-[#6E6E73] font-medium tracking-tight leading-relaxed max-w-sm ${product.featured ? 'text-xl' : 'text-sm'}`}>
                    {product.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
