"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  
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
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-slate-800/40 bg-white backdrop-blur-md shadow-lg">
      <div className="mx-auto flex container h-20 items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="StackMSP Logo"
              width={160}
              height={53}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-1 transition-colors hover:text-brand-blue ${
                  isActive(link.href) ? "text-brand-blue" : "text-slate-600"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-brand-blue transition-all duration-300 rounded-full ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>
        </div>
        {/* <div className="flex items-center gap-3"> */}
          {/* Sign In Button */}
          {/* <Link
            href="/login"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold text-brand-blue hover:bg-brand-blue/5 transition-all duration-200"
          >
            Sign In
          </Link> */}
          
          {/* Free Trial Button */}
          <Link
            href="/trial"
            className="group inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-blue/20 hover:bg-brand-blue/95 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Free Trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        {/* </div> */}
      </div>
    </header>
  );
}