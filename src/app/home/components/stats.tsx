"use client";

import React from "react";
import { Clock, TrendingUp, CheckSquare, Layers, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Stats() {
  const impacts = [
    {
      stat: "-15h",
      unit: "/ week",
      title: "Save Time Every Week",
      desc: "Automate repetitive tasks like invoicing, contract generation, and client follow-ups. Spend less time on admin and more time growing your business.",
      icon: Clock,
      label: "ADMIN REDUCTION"
    },
    {
      stat: "100%",
      unit: "accuracy",
      title: "Increase Billing Accuracy",
      desc: "Eliminate billing errors with automated invoice generation linked to contracts. Track every service delivered and ensure nothing falls through the cracks.",
      icon: TrendingUp,
      label: "REVENUE RECOVERY"
    },
    {
      stat: "4.8x",
      unit: "engagement",
      title: "Improve Client Satisfaction",
      desc: "Give clients instant access to their information through the self-service portal. Reduce response times with centralized communication.",
      icon: CheckSquare,
      label: "PORTAL ADOPTION"
    },
    {
      stat: "3.5x",
      unit: "capacity",
      title: "Scale Without Overhead",
      desc: "Manage more clients without adding administrative staff. Our platform grows with you, adapting to your business needs as you expand.",
      icon: Layers,
      label: "OPERATIONAL SCALE"
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Structural Accent Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200/60" />

      <div className="mx-auto container px-6 lg:px-8">
        
        {/* Perfectly Centered Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 ring-1 ring-inset ring-blue-600/10 mb-5">
            Performance Metrics
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            The Measurable Impact on <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Your Entire MSP
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Transform your internal metrics through native, zero-latency business process automation.
          </p>
        </div>

        {/* High-End Clean Stats Matrix Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200/80 rounded-2xl overflow-hidden shadow-sm shadow-slate-100"
        >
          {impacts.map((imp, index) => {
            const Icon = imp.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                  },
                }}
                className="group relative flex flex-col justify-between p-8 sm:p-10 bg-white border-b border-r border-slate-200/80 hover:bg-slate-50/50 transition-colors duration-300"
              >
                {/* Decorative Hover Node Accent */}
                <div className="absolute top-4 right-4 h-6 w-6 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                  <ArrowUpRight className="h-3 w-3 text-slate-400" />
                </div>

                {/* Top Module: Metric Numbers */}
                <div>
                  <div className="flex items-baseline gap-1 text-slate-900 tracking-tighter mb-1">
                    <span className="text-4xl sm:text-5xl font-black font-sans bg-gradient-to-b from-slate-950 to-slate-800 bg-clip-text text-transparent">
                      {imp.stat}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 font-mono tracking-tight lowercase">
                      {imp.unit}
                    </span>
                  </div>
                  
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 block mb-8">
                    // {imp.label}
                  </span>
                </div>

                {/* Bottom Module: Description Texts */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-5 w-5 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="h-3 w-3" />
                    </div>
                    <h3 className="text-base font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {imp.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                    {imp.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}