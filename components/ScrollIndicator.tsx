"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
      return (
            <div className="flex flex-col items-center gap-4">
                  <motion.p
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="text-[11px] font-black uppercase tracking-[0.6em] text-[#1D1D1F] translate-x-[0.3em]"
                  >
                        Scroll
                  </motion.p>

                  <div className="flex flex-col items-center">
                        <div className="w-[26px] h-[44px] rounded-full border-2 border-[#1D1D1F]/30 flex justify-center p-1.5 overflow-hidden mb-2">
                              <motion.div
                                    animate={{
                                          y: [0, 16, 0],
                                          opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                          duration: 2,
                                          repeat: Infinity,
                                          ease: "easeInOut",
                                    }}
                                    className="w-1.5 h-1.5 rounded-full bg-[#0050FF]"
                              />
                        </div>

                        <div className="w-px h-12 bg-linear-to-b from-[#1D1D1F]/40 to-transparent relative overflow-hidden">
                              <motion.div
                                    animate={{ y: [-48, 48] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 w-full h-full bg-linear-to-b from-transparent via-[#0050FF] to-transparent"
                              />
                        </div>
                  </div>
            </div>
      );
}
