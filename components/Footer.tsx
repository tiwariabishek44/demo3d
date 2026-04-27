"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Globe, ArrowUpRight } from "lucide-react";

const FOOTER_SECTIONS = [
      {
            title: "Collection",
            links: [
                  { name: "Rock-100x Carbon", href: "/product" },
                  { name: "Rock-100x Pro", href: "/product" },
                  { name: "Rock-100x Studio", href: "/product" },
                  { name: "Rock-100x Zen", href: "/product" },
            ],
      },
      {
            title: "Technology",
            links: [
                  { name: "Adaptive ANC", href: "#" },
                  { name: "Acoustic Chambers", href: "#" },
                  { name: "Hi-Res Audio", href: "#" },
                  { name: "Sustainability", href: "#" },
            ],
      },
      {
            title: "Support",
            links: [
                  { name: "Product Help", href: "#" },
                  { name: "Service & Repair", href: "#" },
                  { name: "Order Status", href: "#" },
                  { name: "Contact", href: "#" },
            ],
      },
      {
            title: "Company",
            links: [
                  { name: "Our Story", href: "#" },
                  { name: "Careers", href: "#" },
                  { name: "Press Room", href: "#" },
                  { name: "Legal", href: "#" },
            ],
      },
];

export default function Footer() {
      const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
      };

      return (
            <footer className="relative bg-[#F5F5F7] pt-32 pb-16 overflow-hidden">
                  {/* Subtle Background Branding */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none">
                        <span className="text-[20vw] font-black text-black/[0.02] tracking-tighter leading-none whitespace-nowrap">
                              PRECISION AUDIO
                        </span>
                  </div>

                  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                        {/* Top Feature Bar */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-20 border-b border-black/5 mb-20">
                              <div className="max-w-md">
                                    <h3 className="text-4xl font-bold tracking-tighter text-[#1D1D1F] mb-6">
                                          Stay in the loop.
                                    </h3>
                                    <p className="text-lg text-[#6E6E73] leading-relaxed mb-8">
                                          Sign up for the latest stories, technical reveals, and exclusive drops.
                                    </p>
                                    <div className="flex gap-4">
                                          <input
                                                type="email"
                                                placeholder="your@email.com"
                                                className="flex-1 bg-white border border-black/10 rounded-2xl px-6 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0050FF]/20 transition-all"
                                          />
                                          <button className="px-8 py-4 bg-[#1D1D1F] text-white rounded-2xl text-[14px] font-bold uppercase tracking-widest hover:bg-[#424245] transition-all">
                                                Join
                                          </button>
                                    </div>
                              </div>

                              <button
                                    onClick={scrollToTop}
                                    className="flex items-center gap-2 text-[14px] font-bold text-[#1D1D1F] uppercase tracking-widest hover:opacity-60 transition-opacity"
                              >
                                    Back to Top <ArrowUpRight className="w-4 h-4" />
                              </button>
                        </div>

                        {/* Main Links Grid - Larger Typography */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 mb-32">
                              {FOOTER_SECTIONS.map((section) => (
                                    <div key={section.title} className="flex flex-col gap-8">
                                          <h4 className="text-[14px] font-black uppercase tracking-[0.4em] text-[#1D1D1F]">
                                                {section.title}
                                          </h4>
                                          <ul className="flex flex-col gap-5">
                                                {section.links.map((link) => (
                                                      <li key={link.name}>
                                                            <Link
                                                                  href={link.href}
                                                                  className="text-[16px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors font-medium tracking-tight"
                                                            >
                                                                  {link.name}
                                                            </Link>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>
                              ))}
                        </div>

                        {/* Social & Legal Bottom Area */}
                        <div className="flex flex-col gap-12 pt-12 border-t border-black/5">
                              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                    <div className="flex flex-col gap-2">
                                          <h2 className="text-2xl font-bold tracking-tighter text-[#1D1D1F]">Rock-100xmag</h2>
                                          <p className="text-[13px] text-[#86868B]">A flagship vision for high-fidelity personal audio.</p>
                                    </div>

                                    <div className="flex gap-8">
                                          <a href="#" className="text-[#86868B] hover:text-[#1D1D1F] transition-colors">
                                                <Twitter className="w-6 h-6" />
                                          </a>
                                          <a href="#" className="text-[#86868B] hover:text-[#1D1D1F] transition-colors">
                                                <Instagram className="w-6 h-6" />
                                          </a>
                                          <a href="#" className="text-[#86868B] hover:text-[#1D1D1F] transition-colors">
                                                <Youtube className="w-6 h-6" />
                                          </a>
                                          <a href="#" className="text-[#86868B] hover:text-[#1D1D1F] transition-colors">
                                                <Facebook className="w-6 h-6" />
                                          </a>
                                    </div>
                              </div>

                              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[13px] text-[#86868B]">
                                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                                          <p>Copyright © 2026 Rock Tech Inc.</p>
                                          <a href="#" className="hover:text-[#1D1D1F] underline-offset-4 hover:underline transition-colors">Privacy Policy</a>
                                          <a href="#" className="hover:text-[#1D1D1F] underline-offset-4 hover:underline transition-colors">Terms of Use</a>
                                          <a href="#" className="hover:text-[#1D1D1F] underline-offset-4 hover:underline transition-colors">Sales Policy</a>
                                          <a href="#" className="hover:text-[#1D1D1F] underline-offset-4 hover:underline transition-colors">Legal</a>
                                    </div>

                                    <div className="flex items-center gap-2 py-2 px-4 rounded-full bg-black/5 text-[#1D1D1F] font-bold tracking-tight cursor-pointer hover:bg-black/10 transition-all">
                                          <Globe className="w-4 h-4" />
                                          <span>United Kingdom (English)</span>
                                    </div>
                              </div>
                        </div>
                  </div>
            </footer>
      );
}
