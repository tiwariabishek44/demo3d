"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

type NavbarProps = {
      onLogoClick?: () => void;
};

export default function Navbar({ onLogoClick }: NavbarProps) {
      const { scrollY } = useScroll();
      const background = useTransform(
            scrollY,
            [0, 50],
            ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.7)"]
      );
      const backdropFilter = useTransform(
            scrollY,
            [0, 50],
            ["blur(0px)", "blur(20px)"]
      );
      const borderColor = useTransform(
            scrollY,
            [0, 50],
            ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.06)"]
      );

      return (
            <motion.nav
                  style={{
                        background,
                        backdropFilter,
                        borderBottomWidth: 1,
                        borderColor,
                  }}
                  className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 m-0 transition-all duration-300"
            >
                  {/* Left: Logo */}
                  <div className="flex-1">
                        {onLogoClick ? (
                              <button
                                    type="button"
                                    onClick={onLogoClick}
                                    className="text-[#1D1D1F] text-lg font-bold tracking-tight text-left"
                              >
                                    Rock-100xmag
                              </button>
                        ) : (
                              <Link
                                    href="/"
                                    className="text-[#1D1D1F] text-lg font-bold tracking-tight text-left"
                              >
                                    Rock-100xmag
                              </Link>
                        )}
                  </div>

                  {/* Center: Links */}
                  <div className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium tracking-wide text-[#4A4A4A]">
                        <a href="#overview" className="hover:text-[#1D1D1F] transition-colors">Overview</a>
                        <a href="#technology" className="hover:text-[#1D1D1F] transition-colors">Technology</a>
                        <a href="#noise-cancelling" className="hover:text-[#1D1D1F] transition-colors">Noise Cancelling</a>
                        <a href="#specs" className="hover:text-[#1D1D1F] transition-colors">Specs</a>
                  </div>

                  {/* Right: CTA */}
                  <div className="flex flex-1 justify-end">
                        <Link
                              href="/product"
                              className="block rounded-full bg-linear-to-r from-[#0050FF] to-[#00AEEF] p-px hover:-translate-y-px transition-all duration-300 hover:shadow-[0_4px_15px_rgba(0,80,255,0.15)]"
                        >
                              <span className="block px-5 py-2 rounded-full font-medium text-sm bg-white text-[#1D1D1F] hover:bg-slate-50 transition-colors w-full h-full">
                                    Experience Rock-100xmag
                              </span>
                        </Link>
                  </div>
            </motion.nav>
      );
}
