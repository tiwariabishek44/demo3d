"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollTextLayers() {
      const { scrollYProgress } = useScroll();

      // Opacities for different narrative beats
      const opacityHero = useTransform(scrollYProgress, [0, 0.05, 0.12, 0.15], [1, 1, 1, 0]);
      const yHero = useTransform(scrollYProgress, [0.12, 0.15], [0, -50]);

      const opacityEngineering = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
      const yEngineering = useTransform(scrollYProgress, [0.15, 0.2], [50, 0]);

      const opacityNoise = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
      const yNoise = useTransform(scrollYProgress, [0.4, 0.45], [50, 0]);

      const opacitySound = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
      const ySound = useTransform(scrollYProgress, [0.65, 0.7], [50, 0]);

      const opacityEnd = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
      const yEnd = useTransform(scrollYProgress, [0.85, 0.9], [50, 0]);
      const pointerEnd = useTransform(scrollYProgress, (v) => (v > 0.88 ? "auto" : "none"));

      return (
            <>
                  {/* 1. Hero / Intro */}
                  <motion.div
                        style={{ opacity: opacityHero, y: yHero }}
                        className="fixed inset-0 pointer-events-none z-10 flex flex-col items-center justify-end pb-[10vh] md:pb-[15vh] px-6 text-center"
                  >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-4">
                              Sony WH‑1000XM6
                        </h2>
                        <p className="text-xl md:text-3xl font-medium text-[#1D1D1F]/90 mb-6">
                              Silence, perfected.
                        </p>
                        <p className="max-w-xl text-md md:text-lg text-[#424245] font-light">
                              Flagship wireless noise cancelling, re‑engineered for a world that never stops.
                        </p>
                  </motion.div>

                  {/* 2. Engineering Reveal */}
                  <motion.div
                        style={{ opacity: opacityEngineering, y: yEngineering }}
                        className="fixed inset-0 pointer-events-none z-10 flex items-center justify-start px-8 md:px-24"
                  >
                        <div className="max-w-md">
                              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-6 leading-tight">
                                    Precision-engineered <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D1D1F] to-[#0050FF]">
                                          for silence.
                                    </span>
                              </h3>
                              <div className="space-y-4">
                                    <p className="text-lg text-[#424245] leading-relaxed font-light">
                                          Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
                                    </p>
                                    <p className="text-lg text-[#424245] leading-relaxed font-light">
                                          Every component is tuned for balance, power, and comfort—hour after hour.
                                    </p>
                              </div>
                        </div>
                  </motion.div>

                  {/* 3. Noise Cancelling */}
                  <motion.div
                        style={{ opacity: opacityNoise, y: yNoise }}
                        className="fixed inset-0 pointer-events-none z-10 flex items-center justify-end px-8 md:px-24 text-right"
                  >
                        <div className="max-w-md ml-auto">
                              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-6 leading-tight">
                                    Adaptive noise <br />
                                    cancelling, <span className="text-[#0050FF]">redefined.</span>
                              </h3>
                              <ul className="space-y-4 text-lg text-[#424245] font-light list-none">
                                    <li>Multi-microphone array listens in every direction.</li>
                                    <li>Real-time noise analysis adjusts to your environment.</li>
                                    <li>Your music stays pure—planes, trains, and crowds fade away.</li>
                              </ul>
                        </div>
                  </motion.div>

                  {/* 4. Sound & Upscaling */}
                  <motion.div
                        style={{ opacity: opacitySound, y: ySound }}
                        className="fixed inset-0 pointer-events-none z-10 flex items-center justify-start px-8 md:px-24"
                  >
                        <div className="max-w-md">
                              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-6 leading-tight">
                                    Immersive, <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0050FF] to-[#1D1D1F]">
                                          lifelike sound.
                                    </span>
                              </h3>
                              <div className="space-y-4">
                                    <p className="text-lg text-[#424245] leading-relaxed font-light">
                                          High-performance drivers unlock detail, depth, and texture in every track.
                                    </p>
                                    <p className="text-lg text-[#424245] leading-relaxed font-light">
                                          AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.
                                    </p>
                              </div>
                        </div>
                  </motion.div>

                  {/* 5. Reassembly & CTA */}
                  <motion.div
                        style={{ opacity: opacityEnd, y: yEnd, pointerEvents: pointerEnd as any }}
                        className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-transparent backdrop-blur-[2px] transition-all duration-700 pb-20"
                  >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F7] via-[#F5F5F7]/80 to-transparent opacity-100 -z-10"></div>
                        <div className="mt-[40vh] flex flex-col items-center text-center px-4 relative z-10">
                              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-4">
                                    Hear everything. Feel nothing else.
                              </h2>
                              <p className="text-xl md:text-2xl text-[#424245] font-medium mb-10">
                                    WH‑1000XM6. Designed for focus, crafted for comfort.
                              </p>

                              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 mt-4">
                                    <button className="px-8 py-4 bg-[#1D1D1F] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] pointer-events-auto">
                                          Experience WH‑1000XM6
                                    </button>
                                    <button className="px-8 py-4 bg-transparent border border-[#1D1D1F]/20 text-[#1D1D1F] font-medium rounded-full hover:bg-black/5 transition-colors duration-300 pointer-events-auto">
                                          See full specs
                                    </button>
                              </div>

                              <p className="text-sm text-[#424245]/60 tracking-wider uppercase font-medium">
                                    Engineered for airports, offices, and everything in between.
                              </p>
                        </div>
                  </motion.div>
            </>
      );
}
