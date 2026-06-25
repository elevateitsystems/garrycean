"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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
  
  const navLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return pathname === path || (path !== "/" && pathname?.startsWith(path));
  };

  return (
    /* Increased container tracking weight from h-20 to h-24 to hold a larger structural frame */
    <div className="fixed top-0 left-0 right-0 z-50 w-full px-6 lg:px-8 pt-5 transition-all duration-300 pointer-events-none h-24">
      <header 
        className={`mx-auto max-w-[1470px] w-full pointer-events-auto rounded-full border transition-all duration-500 flex items-center ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-[0_14px_45px_-12px_rgba(15,23,42,0.12)] h-16 px-6" 
            : "bg-white/85 backdrop-blur-sm border-slate-200/60 h-20 px-8"
        }`}
      >
        <div className="flex w-full items-center justify-between relative">
          
          {/* Logo Container with weighted sizing */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center relative group">
              <Image
                src="/logo.png"
                alt="StackMSP Logo"
                width={150}
                height={50}
                className="h-[54px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                priority
              />
            </Link>
          </div>

          {/* Centered Navigation Track with increased padding weights */}
          <nav className="hidden md:flex items-center p-2 bg-slate-50 rounded-full border border-slate-200/80 absolute left-1/2 -translate-x-1/2 shadow-inner">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 text-xs font-black uppercase tracking-widest transition-colors duration-300 z-10 whitespace-nowrap ${
                    active ? "text-slate-950" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {link.label}
                  {/* Background pill morph animation */}
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

          {/* Right Action Hub with weighted action buttons */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Bold Tech Telemetry Tag */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-mono font-black text-slate-600 uppercase tracking-wider select-none">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEM_OK
            </div>

            <Link
              href="/trial"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white shadow-md hover:bg-blue-600 border border-slate-900 hover:border-blue-700 active:scale-[0.97] transition-all duration-300"
            >
              Free Trial
              <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

        </div>
      </header>
    </div>
  );
}