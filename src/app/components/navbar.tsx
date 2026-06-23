"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
       "border-b border-slate-800/40 bg-white text-brand-blue backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="StackMSP Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            <Link
              href="/solutions"
              className="hover:text-brand-blue transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/features"
              className="hover:text-brand-blue transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="hover:text-brand-blue transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="hover:text-brand-blue transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          <Link
            href="/trial"
            className="rounded-[6px] bg-brand-blue px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand-blue/15 hover:bg-brand-blue/95 transition-all"
          >
            Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
}
