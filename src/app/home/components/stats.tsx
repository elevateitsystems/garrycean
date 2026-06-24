"use client";

import React from "react";
import { Clock, TrendingUp, CheckSquare, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Stats() {
  const impacts = [
    {
      title: "Save Time Every Week",
      desc: "Automate repetitive tasks like invoicing, contract generation, and client follow-ups. Spend less time on admin and more time growing your business.",
      icon: Clock,
    },
    {
      title: "Increase Billing Accuracy",
      desc: "Eliminate billing errors with automated invoice generation linked to contracts. Track every service delivered and ensure nothing falls through the cracks.",
      icon: TrendingUp,
    },
    {
      title: "Improve Client Satisfaction",
      desc: "Give clients instant access to their information through the self-service portal. Reduce response times with centralized communication.",
      icon: CheckSquare,
    },
    {
      title: "Scale Without Overhead",
      desc: "Manage more clients without adding administrative staff. Our platform grows with you, adapting to your business needs as you expand.",
      icon: Layers,
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            The Measurable Impact on{" "}
            <span className="text-brand-blue"> Your MSP </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Transform your operations with powerful automation and streamlined
            workflows.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {impacts.map((imp, index) => {
            const Icon = imp.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  },
                }}
                whileHover={{ y: -4 }}
                className="flex gap-6 items-start p-6 bg-slate-50 rounded-[6px] border border-slate-100 hover:border-brand-blue/20 transition-all duration-300"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-[6px] bg-blue-50 text-brand-blue shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {imp.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
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