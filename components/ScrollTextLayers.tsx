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
                        className="fixed inset-0 pointer-events-none z-10 flex flex-col items-center justify-end pb-[10vh] md:pb-[15vh] px-6 text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                  >
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1D1D1F] mb-4">
                              Sony WH-1000XM6
                        </h2>
                        <p className="text-2xl md:text-4xl font-medium text-[#4A4A4A] mb-6 tracking-tight">
                              Silence, perfected.
                        </p>
                        <p className="max-w-xl text-lg md:text-xl text-[#6E6E73] font-light">
                              Engineered for clarity in a noisy world.
                        </p>
                  </motion.div>

                  {/* 2. Engineering Reveal */}
                  <motion.div
                        style={{ opacity: opacityEngineering, y: yEngineering }}
                        className="fixed inset-0 pointer-events-none z-10 flex items-center justify-start px-8 md:px-24 drop-shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                  >
                        <div className="max-w-md">
                              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6 leading-tight">
                                    Precision-engineered <br />
                                    for silence.
                              </h3>
                              <div className="space-y-4">
                                    <p className="text-xl text-[#4A4A4A] leading-relaxed font-light">
                                          Custom drivers and acoustic chambers deliver balance, depth, and all-day comfort.
                                    </p>
                              </div>
                        </div>
                  </motion.div>

                  {/* 3. Noise Cancelling */}
                  <motion.div
                        style={{ opacity: opacityNoise, y: yNoise }}
                        className="fixed inset-0 pointer-events-none z-10 flex items-center justify-end px-8 md:px-24 text-right drop-shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                  >
                        <div className="max-w-md ml-auto">
                              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6 leading-tight">
                                    Adaptive noise <br />
                                    cancelling, <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#1D1D1F] to-[#0050FF]/80">redefined.</span>
                              </h3>
                              <ul className="space-y-4 text-xl text-[#4A4A4A] font-light list-none">
                                    <li>Multi-directional microphones</li>
                                    <li>Real-time environmental adjustment</li>
                                    <li>Pure sound, anywhere</li>
                              </ul>
                        </div>
                  </motion.div>

                  {/* 4. Sound & Upscaling */}
                  <motion.div
                        style={{ opacity: opacitySound, y: ySound }}
                        className="fixed inset-0 pointer-events-none z-10 flex items-center justify-start px-8 md:px-24 drop-shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                  >
                        <div className="max-w-md">
                              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6 leading-tight flex items-baseline gap-[1px]">
                                    Immersive, <br />
                                    lifelike sound.
                                    <span className="w-2 h-2 rounded-full bg-[#00AEEF] shadow-[0_0_15px_#00AEEF] mb-1"></span>
                              </h3>
                              <div className="space-y-4">
                                    <p className="text-xl text-[#4A4A4A] leading-relaxed font-light">
                                          Every detail. Every layer. Every moment.
                                    </p>
                              </div>
                        </div>
                  </motion.div>

                  {/* 5. Reassembly & CTA */}
                  <motion.div
                        style={{ opacity: opacityEnd, y: yEnd, pointerEvents: pointerEnd as any }}
                        className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-white/70 backdrop-blur-md transition-all duration-700 pb-20"
                  >
                        <div className="mt-[30vh] flex flex-col items-center text-center px-4 relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1D1D1F] mb-4">
                                    Hear everything. Feel nothing else.
                              </h2>
                              <p className="text-2xl md:text-3xl text-[#4A4A4A] font-medium mb-12 tracking-tight">
                                    WH-1000XM6. Designed for focus.
                              </p>

                              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                                    <div className="rounded-full bg-gradient-to-r from-[#0050FF] to-[#00AEEF] p-[1px] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_40px_rgba(0,80,255,0.2)]">
                                          <button className="px-10 py-4 bg-white text-[#1D1D1F] font-semibold rounded-full transition-colors duration-300 pointer-events-auto hover:bg-slate-50 w-full h-full flex items-center justify-center">
                                                Experience WH-1000XM6
                                          </button>
                                    </div>
                                    <button className="px-8 py-4 bg-transparent text-[#4A4A4A] hover:text-[#1D1D1F] font-medium rounded-full transition-colors duration-300 pointer-events-auto hover:bg-black/5 hover:-translate-y-1 border border-transparent">
                                          See full specs
                                    </button>
                              </div>
                        </div>
                  </motion.div>
            </>
      );
}
