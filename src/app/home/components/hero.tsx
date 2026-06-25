"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle, Zap, Users, BarChart3 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mt-[80px] relative overflow-hidden min-h-[95vh] flex items-center justify-center pt-16 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 ml-16">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto container px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="flex-1 flex flex-col justify-center space-y-6 text-left max-w-2xl  ">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-semibold w-fit border border-brand-blue/20"
            >
              <Zap className="h-3.5 w-3.5" />
              The All-in-One Platform Built for Modern MSPs
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900"
            >
              The All-in-One{" "}
              <span className="text-brand-blue">Platform Built</span> <br />
              for Modern MSPs.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              Each tool is production-quality and independently priced — no bundles, no bloat. 
              Start with what moves the needle now. Add more when you're ready. Pay only for what's active.
            </motion.p>

            {/* CTA Buttons - Two distinct CTAs like in screenshot */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/trial"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 hover:bg-brand-blue/95 transition-all duration-200"
                >
                  Try LinkPro for $7
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-blue/20 bg-white px-6 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-blue/5 hover:border-brand-blue/40 transition-all duration-200"
                >
                  Join AEO waitlist
                </Link>
              </motion.div>
            </motion.div>

            {/* Pricing Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-slate-500"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                LinkPro: $7 one-time trial
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                AEO Optimizer Pro: free waitlist
              </span>
            </motion.div>

            {/* Trust Section - "Trusted by..." */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4"
            >
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Users className="h-4 w-4 text-brand-blue" />
                <span className="font-medium text-slate-700">Trusted by SEO teams & agencies</span>
                <span className="text-slate-400">—</span>
                <span className="text-slate-500 text-xs">link builders, content strategists, and in-house teams</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative w-full max-w-2xl"
          >
            {/* Browser Window Mockup */}
            <div className="ml-20 mt-7 relative rounded-xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden">
              
              {/* Browser Chrome */}
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 bg-slate-50/80">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-mono">Your Uprankly Stack</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Content Area - Shows stack items */}
              <div className="p-5 bg-white ml-10">
                <div className="space-y-3">
                  {/* Stack Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="text-sm font-bold text-slate-800">Your Uprankly Stack</h3>
                    <span className="text-xs text-slate-400">Active</span>
                  </div>

                  {/* Stack Items */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-3 bg-slate-50/80 rounded-lg border border-slate-100">
                      <div>
                        <span className="text-sm font-semibold text-slate-800">LinkPro</span>
                        <p className="text-xs text-slate-500">Complete link building workflow — prospect, enrich, outreach, track.</p>
                      </div>
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                        +24 links built
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50/80 rounded-lg border border-slate-100">
                      <div>
                        <span className="text-sm font-semibold text-slate-800">SEO Tracker</span>
                        <p className="text-xs text-slate-500">Track rankings, authority, and visibility over time.</p>
                      </div>
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/50">
                        Active
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50/80 rounded-lg border border-slate-100">
                      <div>
                        <span className="text-sm font-semibold text-slate-800">Social Pro</span>
                        <p className="text-xs text-slate-500">SEO-informed social content — from one workspace.</p>
                      </div>
                      <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50">
                        Early Access
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50/80 rounded-lg border border-slate-100 opacity-60">
                      <div>
                        <span className="text-sm font-semibold text-slate-800">AEO Optimizer Pro</span>
                        <p className="text-xs text-slate-500">Build topical authority and get cited by AI engines.</p>
                      </div>
                      <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200/50">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-3 -right-3 bg-white rounded-lg shadow-xl border border-slate-200/80 px-4 py-2.5 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center text-[10px] font-bold text-brand-blue">1</div>
                  <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center text-[10px] font-bold text-emerald-600">2</div>
                  <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px] font-bold text-amber-600">3</div>
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-slate-700">Tools live</span>
                  <span className="text-slate-400 block -mt-0.5">Start building now</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}