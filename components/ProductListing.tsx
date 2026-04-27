"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
      {
            id: 1,
            name: "Rhythm Earbuds",
            tagline: "Unmatched Clarity.",
            price: "$149",
            image: "/home/master-x/.gemini/antigravity/brain/c2834dd7-5ba5-471e-bb64-34fdffb668f5/rhythm_earbuds_matte_black_1777268920960.png",
            color: "Matte Black",
      },
      {
            id: 2,
            name: "Move Smartwatch",
            tagline: "Performance on your wrist.",
            price: "$299",
            image: "/home/master-x/.gemini/antigravity/brain/c2834dd7-5ba5-471e-bb64-34fdffb668f5/move_smartwatch_metallic_black_1777268988216.png",
            color: "Silver / Black",
      },
      {
            id: 3,
            name: "Thunder Speaker",
            tagline: "Feel the Bass.",
            price: "$199",
            image: null, // Quota exceeded for image gen, using placeholder
            color: "Textured Black",
            description: "Cylindrical body with RGB lighting."
      },
      {
            id: 4,
            name: "Vibe Headphones",
            tagline: "Pure Audio Bliss.",
            price: "$349",
            image: null, // Quota exceeded for image gen, using placeholder
            color: "Matte Black + Red Accent",
            description: "Over-ear luxury with signature red accents."
      },
];

export default function ProductListing() {
      return (
            <section className="relative z-30 bg-white py-24 px-6 md:px-12">
                  <div className="max-w-7xl mx-auto">
                        <header className="mb-16 text-center">
                              <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4"
                              >
                                    The Rock Ecosystem
                              </motion.h2>
                              <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-xl text-[#4A4A4A] max-w-2xl mx-auto font-light"
                              >
                                    Engineering premium audio and tech for the modern lifestyle.
                              </motion.p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {products.map((product, idx) => (
                                    <motion.div
                                          key={product.id}
                                          initial={{ opacity: 0, y: 30 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ delay: idx * 0.1 }}
                                          className="group relative bg-[#FAFAFB] rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
                                    >
                                          <div className="relative aspect-square mb-8 rounded-2xl overflow-hidden flex items-center justify-center bg-white">
                                                {product.image ? (
                                                      <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                      />
                                                ) : (
                                                      <div className="flex flex-col items-center justify-center p-6 text-center">
                                                            <div className="w-24 h-24 bg-slate-100 rounded-full mb-4 flex items-center justify-center">
                                                                  <span className="text-3xl">✦</span>
                                                            </div>
                                                            <span className="text-sm font-semibold text-[#1D1D1F] mb-1">{product.name}</span>
                                                            <span className="text-xs text-[#6E6E73]">{product.color}</span>
                                                      </div>
                                                )}

                                                {/* Hover overlay for cart */}
                                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                      <button className="bg-white/90 backdrop-blur-sm text-[#1D1D1F] px-6 py-2 rounded-full font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                            Quick View
                                                      </button>
                                                </div>
                                          </div>

                                          <div>
                                                <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">{product.name}</h3>
                                                <p className="text-sm text-[#6E6E73] mb-4 font-light">{product.tagline}</p>
                                                <div className="flex items-center justify-between">
                                                      <span className="text-xl font-bold text-[#1D1D1F]">{product.price}</span>
                                                      <button className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-colors duration-300 shadow-sm">
                                                            +
                                                      </button>
                                                </div>
                                          </div>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}
