"use client";   // ← This is the fix

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function CommandCenter() {
  return (
    <section className="bg-slate-50 pt-24 pb-12 sm:pt-32 sm:pb-32 border-t border-slate-200 overflow-hidden">
      <div className="mx-auto container px-6 lg:px-8">
        
        {/* Title Content Block */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Your Command Center for{" "}
            <span className="text-brand-blue">MSP Operations</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            See everything that matters at a glance. Our intuitive dashboard
            puts critical information right where you need it.
          </motion.p>
        </motion.div>

        {/* Dashboard UI Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl rounded-[6px] border border-slate-200 bg-white p-3 shadow-2xl"
          whileHover={{ scale: 1.01 }}
        >
          {/* Browser Top Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between border-b border-slate-100 pb-2 px-2 mb-3"
          >
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs text-slate-400 font-mono">
              dashboard.stackmsp.com/kanban
            </span>
            <span className="w-12" />
          </motion.div>

          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative w-full aspect-[16/9] overflow-hidden rounded-[6px] bg-slate-950"
            whileHover={{ scale: 1.015 }}
          >
            <Image
              src="/dashboard-demo.png"
              alt="StackMSP Dashboard Preview"
              fill
              className="object-contain transition-transform duration-700 hover:scale-105"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}