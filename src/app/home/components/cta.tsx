"use client";   // ← Required for animations

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="w-full bg-gradient-to-b from-brand-blue/70 via-brand-blue to-blue-600 px-6 lg:px-8 overflow-hidden">
      <div className="relative px-6 py-20 sm:px-12 md:py-24 text-center">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#ffffff15_0%,transparent_70%)]" />

        <div className="relative max-w-2xl mx-auto space-y-6">
          
          {/* Heading with animation */}
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight"
          >
            Ready to Transform Your MSP Operations?
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg text-blue-100 max-w-xl mx-auto"
          >
            Join hundreds of MSPs who've ditched the chaos for clarity. Start your free 14-day trial—no credit card required.
          </motion.p>

          {/* Buttons with stagger animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/trial"
                className="rounded-[10px] bg-white px-8 py-3.5 text-sm font-bold text-brand-blue shadow-lg hover:bg-slate-50 transition-all inline-block"
              >
                Start Free Trial
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-[10px] border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}