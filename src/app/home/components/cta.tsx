"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-24 sm:py-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(59,130,246,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_70%_70%,rgba(165,243,252,0.15),transparent_70%)]" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium tracking-widest text-white/90 uppercase">Limited Time Offer</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter text-white leading-tight">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              MSP Operations?
            </span>
          </h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            Join hundreds of MSPs who've ditched the chaos for clarity. Start your free 14-day trial—no credit card required.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            {/* Primary Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/trial"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-semibold bg-white text-slate-950 rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:-translate-x-0 transition-transform duration-700" />
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold border border-white/30 hover:border-white/50 bg-white/10 backdrop-blur-xl text-white rounded-2xl transition-all hover:bg-white/15"
              >
                Contact Sales
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Signals */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-slate-400 pt-6"
          >
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-white/30" /> No credit card required
            </div>
            <div>14 days free</div>
            <div>Cancel anytime</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}