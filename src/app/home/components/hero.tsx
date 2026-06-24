"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mt-[80px] relative overflow-hidden min-h-[95vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-sky-100 to-white">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105" />
      
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="flex-1 flex flex-col justify-center space-y-6 text-left">
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900"
            >
              The All-in-One Platform{" "}
              <span className="text-brand-blue">Built for Modern</span> <br /> MSPs
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed font-light"
            >
              Streamline operations, automate workflows, and scale your managed
              services business with confidence. Everything you need to manage
              clients, contracts, invoicing, and team collaboration in one
              powerful platform.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/trial"
                  className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-blue/20 hover:bg-brand-blue/95 transition-all duration-200 transform hover:-translate-y-[1px]"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-1.5 rounded-[6px] border border-brand-blue/30 bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue hover:bg-brand-blue/5 transition-all"
                >
                  <Play className="h-4 w-4 text-brand-blue fill-brand-blue" />
                  Watch Demo
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Signals */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-blue-200/50 text-slate-600 text-xs"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-blue" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-blue" />
                <span>1-Month Free Trial</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side Image / Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="flex-1 relative rounded-[6px] border border-blue-200/50 bg-white/80 p-1.5 shadow-2xl backdrop-blur-sm overflow-hidden w-full"
            whileHover={{ scale: 1.02 }}
          >
            {/* Browser Top Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-between border-b border-blue-200/50 pb-1.5 px-2 mb-1.5"
            >
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] text-slate-600 font-mono font-medium">
                OUR PRIMARY GOAL
              </span>
              <span className="w-8" />
            </motion.div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="relative w-full h-[clamp(200px,40vw,500px)] rounded-[6px] overflow-hidden"
            >
              <Image
                src="/stackmsp-landing.jpg"
                alt="StackMSP System Visualization Dashboard"
                fill
                className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}