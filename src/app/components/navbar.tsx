"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/resources", label: "Resources" },
    { href: "/company", label: "Company" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return pathname === path || (path !== "/" && pathname?.startsWith(path));
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 transition-all duration-300 pointer-events-none h-[72px] sm:h-24">
        <header 
          className={`mx-auto max-w-[1470px] w-full pointer-events-auto rounded-full border transition-all duration-500 flex items-center ${
            isScrolled 
              ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-[0_14px_45px_-12px_rgba(15,23,42,0.12)] h-14 sm:h-16 px-4 sm:px-6" 
              : "bg-white/85 backdrop-blur-sm border-slate-200/60 h-16 sm:h-20 px-4 sm:px-8"
          }`}
        >
          <div className="flex w-full items-center justify-between relative">
            
            {/* Logo Container - Responsive */}
            <div className="flex items-center shrink-0">
              <Link href="/" className="flex items-center relative group">
                <Image
                  src="/logo.png"
                  alt="StackMSP Logo"
                  width={isScrolled ? 120 : 150}
                  height={isScrolled ? 40 : 50}
                  className={`object-contain transition-all duration-300 group-hover:scale-[1.01] ${
                    isScrolled ? "h-[40px] sm:h-[44px]" : "h-[44px] sm:h-[54px]"
                  } w-auto`}
                  priority
                />
              </Link>
            </div>

            {/* Centered Navigation Track - Desktop */}
            <nav className="hidden md:flex items-center p-2 bg-slate-50 rounded-full border border-slate-200/80 absolute left-1/2 -translate-x-1/2 shadow-inner">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 lg:px-5 py-2 text-[10px] lg:text-xs font-black uppercase tracking-widest transition-colors duration-300 z-10 whitespace-nowrap ${
                      active ? "text-slate-950" : "text-slate-600 hover:text-slate-950"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white rounded-full shadow-[0_3px_10px_-2px_rgba(15,23,42,0.1)] border border-slate-200 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Hub */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              {/* Free Trial Button - Desktop */}
              <Link
                href="/trial"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white shadow-md hover:bg-blue-600 border border-slate-900 hover:border-blue-700 active:scale-[0.97] transition-all duration-300"
              >
                Free Trial
                <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center rounded-full bg-slate-950 text-white p-2.5 hover:bg-blue-600 transition-colors duration-300 border border-slate-900 hover:border-blue-700"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>

          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-[72px] sm:top-[76px] left-4 right-4 z-40 md:hidden"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 p-6 max-h-[70vh] overflow-y-auto">
                {/* Mobile Free Trial Button */}
                <Link
                  href="/trial"
                  className="flex items-center justify-between w-full rounded-2xl bg-slate-950 px-6 py-4 text-sm font-bold text-white hover:bg-blue-600 transition-colors duration-300 border border-slate-900 hover:border-blue-700 mb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, index) => {
                    const active = isActive(link.href);
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            active
                              ? "bg-blue-50 text-blue-600"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span>{link.label}</span>
                          {active && (
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile Footer Links - Removed Login */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-center gap-4 px-4 text-xs text-slate-400">
                    <span>© 2024 StackMSP</span>
                    <span className="w-px h-4 bg-slate-200" />
                    <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy</Link>
                    <span className="w-px h-4 bg-slate-200" />
                    <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}