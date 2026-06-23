import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
      <section className="w-full bg-gradient-to-b from-brand-blue/70 via-brand-blue to-blue-600 px-6 lg:px-8">
  <div className="relative px-6 py-20 sm:px-12 md:py-24 text-center">
    
    {/* background glow */}
    <div className="absolute inset-0 " />

    <div className="relative max-w-2xl mx-auto space-y-6">
      
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
        Ready to Transform Your MSP Operations?
      </h2>

      <p className="text-lg text-blue-100 max-w-xl mx-auto">
        Join hundreds of MSPs who've ditched the chaos for clarity. Start your free 14-day trial—no credit card required.
      </p>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        
        <Link
          href="/trial"
          className="rounded-[10px] bg-white px-6 py-3 text-sm font-bold text-brand-blue shadow-lg hover:bg-slate-50 transition-all transform hover:-translate-y-1"
        >
          Start Free Trial
        </Link>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-1.5 rounded-[10px] border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
        >
          Contact Us
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

      </div>
    </div>
  </div>
</section>
  );
}