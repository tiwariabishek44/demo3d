"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

type NavbarProps = {
      onLogoClick?: () => void;
};

export default function Navbar({ onLogoClick }: NavbarProps) {
      const { scrollY } = useScroll();

      // Transition background and blur slightly later for a cleaner hero entrance
      const background = useTransform(
            scrollY,
            [10, 100],
            ["rgba(245, 245, 247, 0)", "rgba(245, 245, 247, 0.72)"]
      );
      const backdropFilter = useTransform(
            scrollY,
            [10, 100],
            ["blur(0px) saturate(100%)", "blur(20px) saturate(180%)"]
      );
      const borderColor = useTransform(
            scrollY,
            [10, 100],
            ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.08)"]
      );

      return (
            <motion.nav
                  style={{
                        background,
                        backdropFilter,
                        borderBottomWidth: 1,
                        borderColor,
                  }}
                  className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between px-6 md:px-12 transition-colors duration-500"
            >
                  {/* Left: Logo - Leaner and more refined */}
                  <div className="flex items-center">
                        {onLogoClick ? (
                              <button
                                    type="button"
                                    onClick={onLogoClick}
                                    className="hover:opacity-70 transition-opacity"
                              >
                                    <img src="/Rock_logo-scaled.jpg" alt="Rocktech" className="h-8 md:h-10 w-auto object-contain" />
                              </button>
                        ) : (
                              <Link
                                    href="/"
                                    className="hover:opacity-70 transition-opacity"
                              >
                                    <img src="/Rock_logo-scaled.jpg" alt="Rocktech" className="h-8 md:h-10 w-auto object-contain" />
                              </Link>
                        )}
                  </div>

                  {/* Center: Links - Technical and precise typography */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10 text-[17px] font-semibold tracking-tight text-[#4A4A4A]">
                        <a href="#overview" className="hover:text-[#0050FF] transition-colors uppercase">Overview</a>
                        <a href="#technology" className="hover:text-[#0050FF] transition-colors uppercase">Technology</a>
                        <a href="#noise-cancelling" className="hover:text-[#0050FF] transition-colors uppercase">Noise Cancelling</a>
                        <a href="#specs" className="hover:text-[#0050FF] transition-colors uppercase">Specs</a>
                  </div>

                  {/* Right: CTA - Compact and utility-focused */}
                  <div className="flex items-center justify-end scale-90 md:scale-100">
                        <Link
                              href="/product"
                              className="px-4 py-1.5 rounded-full bg-[#1D1D1F] text-white text-[17px] font-semibold tracking-tight hover:bg-[#424245] transition-colors shadow-sm"
                        >
                              Buy
                        </Link>
                  </div>
            </motion.nav>
      );
}
