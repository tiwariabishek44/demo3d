"use client";

import type { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollTextLayersProps = {
      scrollTargetRef: RefObject<HTMLElement | null>;
};

export default function ScrollTextLayers({ scrollTargetRef }: ScrollTextLayersProps) {
      const { scrollYProgress } = useScroll({
            target: scrollTargetRef,
            offset: ["start start", "end start"],
      });

      // Engineering starts after a small delay so the canvas has a beat of breathing room
      // as the dedicated hero scrolls off; fade windows are tightened (0.03 wide instead of
      // 0.05) so transitions between beats feel snappier.
      const opacityEngineering = useTransform(scrollYProgress, [0.05, 0.08, 0.27, 0.3], [0, 1, 1, 0]);
      const yEngineering = useTransform(scrollYProgress, [0.05, 0.08], [50, 0]);
      // Headline color settles from a clearly-readable gray into near-black, so the slogan
      // softens its entrance without becoming invisible against the canvas background.
      const colorEngineering = useTransform(scrollYProgress, [0.05, 0.12], ["#6E6E73", "#1D1D1F"]);

      const opacityNoise = useTransform(scrollYProgress, [0.3, 0.33, 0.52, 0.55], [0, 1, 1, 0]);
      const yNoise = useTransform(scrollYProgress, [0.3, 0.33], [50, 0]);

      const opacitySound = useTransform(scrollYProgress, [0.55, 0.58, 0.77, 0.8], [0, 1, 1, 0]);
      const ySound = useTransform(scrollYProgress, [0.55, 0.58], [50, 0]);

      const opacityEnd = useTransform(scrollYProgress, [0.8, 0.83, 1], [0, 1, 1]);
      const yEnd = useTransform(scrollYProgress, [0.8, 0.83], [50, 0]);
      const pointerEnd = useTransform(scrollYProgress, (v) => (v > 0.82 ? "auto" : "none"));

      return (
            <>
                  {/* 1. Engineering Reveal */}
                  <motion.div
                        style={{ opacity: opacityEngineering, y: yEngineering }}
                        className="fixed inset-0 pointer-events-none z-10 flex items-center justify-start px-8 md:px-24"
                  >
                        <div className="max-w-xl">
                              <p className="mb-8 text-xs font-bold uppercase tracking-[0.5em] text-[#6E6E73]/80">
                                    Acoustic engineering
                              </p>
                              <motion.h3
                                    style={{ color: colorEngineering }}
                                    className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]"
                              >
                                    Precision-engineered <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-b from-[#1D1D1F] to-[#424245]">
                                          for silence.
                                    </span>
                              </motion.h3>
                              <p className="max-w-lg text-lg md:text-xl text-[#4A4A4A] font-light leading-relaxed">
                                    Custom drivers, sealed acoustic chambers, and optimised airflow deliver studio-grade clarity—tuned for balance, power, and comfort, hour after hour.
                              </p>
                        </div>
                  </motion.div>

                  {/* 2. Noise Cancelling */}
                  <motion.div
                        style={{ opacity: opacityNoise, y: yNoise }}
                        className="fixed inset-0 pointer-events-none z-10 flex items-center justify-end px-8 md:px-24 text-right"
                  >
                        <div className="max-w-xl ml-auto">
                              <p className="mb-8 text-xs font-bold uppercase tracking-[0.5em] text-[#6E6E73]/80">
                                    Adaptive noise cancelling
                              </p>
                              <h3 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter text-[#1D1D1F] leading-[0.95]">
                                    Silence, <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-b from-[#1D1D1F] to-[#0050FF]">
                                          redefined.
                                    </span>
                              </h3>
                              <ul className="space-y-4 text-lg md:text-xl text-[#4A4A4A] font-light leading-relaxed list-none">
                                    <li>A multi-microphone array listens in every direction.</li>
                                    <li>Real-time analysis adapts to your environment.</li>
                                    <li>Planes, trains, and crowds quietly fade away.</li>
                              </ul>
                        </div>
                  </motion.div>

                  {/* 3. Sound & Upscaling */}
                  <motion.div
                        style={{ opacity: opacitySound, y: ySound }}
                        className="fixed inset-0 pointer-events-none z-10 flex items-center justify-start px-8 md:px-24"
                  >
                        <div className="max-w-xl">
                              <p className="mb-8 text-xs font-bold uppercase tracking-[0.5em] text-[#6E6E73]/80">
                                    Lifelike audio
                              </p>
                              <h3 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter text-[#1D1D1F] leading-[0.95]">
                                    Immersive, <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-b from-[#1D1D1F] to-[#424245]">
                                          lifelike sound.
                                    </span>
                              </h3>
                              <p className="max-w-lg text-lg md:text-xl text-[#4A4A4A] font-light leading-relaxed">
                                    High-performance drivers reveal detail, depth, and texture in every track. AI upscaling restores clarity to compressed audio—every note alive.
                              </p>
                        </div>
                  </motion.div>

                  {/* 4. Closing CTA */}
                  <motion.div
                        style={{ opacity: opacityEnd, y: yEnd, pointerEvents: pointerEnd as any }}
                        className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-transparent backdrop-blur-[2px] transition-all duration-700 pb-20"
                  >
                        <div className="absolute inset-0 bg-linear-to-t from-[#F5F5F7] via-[#F5F5F7]/80 to-transparent opacity-100 -z-10"></div>
                        <div className="mt-[40vh] flex flex-col items-center text-center px-6 relative z-10">
                              <p className="mb-8 text-xs font-bold uppercase tracking-[0.5em] text-[#6E6E73]/80">
                                    Rock-100xmag
                              </p>
                              <h2 className="mb-8 text-6xl md:text-8xl font-bold tracking-tighter text-[#1D1D1F] leading-[0.9]">
                                    Hear everything. <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-b from-[#1D1D1F] to-[#424245]">
                                          Feel nothing else.
                                    </span>
                              </h2>
                              <p className="max-w-2xl text-xl md:text-2xl text-[#4A4A4A] font-light leading-relaxed mb-12">
                                    Designed for focus, crafted for comfort.
                              </p>

                              <div className="flex flex-col sm:flex-row items-center gap-5 mb-10">
                                    <button className="block rounded-full bg-linear-to-r from-[#0050FF] to-[#00AEEF] p-px hover:-translate-y-px transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,80,255,0.2)] pointer-events-auto">
                                          <span className="block px-8 py-4 rounded-full font-medium text-base bg-[#1D1D1F] text-white">
                                                Experience Rock-100xmag
                                          </span>
                                    </button>
                                    <button className="px-8 py-4 bg-transparent border border-[#1D1D1F]/15 text-[#1D1D1F] font-medium text-base rounded-full hover:bg-[#1D1D1F]/5 transition-colors duration-300 pointer-events-auto">
                                          See full specs
                                    </button>
                              </div>

                              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6E6E73]/80">
                                    Engineered for airports, offices, and everything in between.
                              </p>
                        </div>
                  </motion.div>
            </>
      );
}
