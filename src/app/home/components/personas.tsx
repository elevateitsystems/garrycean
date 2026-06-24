"use client";

import React from "react";
import { Server, Compass, HelpCircle, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Personas() {
  const options = [
    {
      title: "Managed Service Providers",
      icon: Server,
      desc: "Manage IT infrastructure contracts, automate billing for recurring services, and provide clients with real-time service status updates.",
    },
    {
      title: "IT Consultants",
      icon: Compass,
      desc: "Track project hours, send professional proposals, and manage multiple clients with ease. Convert quotes to contracts seamlessly.",
    },
    {
      title: "Tech Support Companies",
      icon: HelpCircle,
      desc: "Organize support tickets, track response times, and give clients access to a knowledge base. Link support incidents to SLAs and contracts.",
    },
    {
      title: "Software Companies",
      icon: Code2,
      desc: "Manage software licenses, subscriptions, and implementation projects. Track renewals and automate invoicing for subscription services.",
    },
  ];

  return (
    <section className="bg-slate-50 pt-12 pb-24 sm:pb-32 sm:pt-16">
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
            Built for{" "}
            <span className="text-brand-blue"> Service Providers Like You</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Whether you're a solo consultant or managing a team of 50+, StackMSP
            scales with your business.
          </p>
        </motion.div>

        {/* Cards Grid with Stagger Animation */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {options.map((opt, index) => {
            const Icon = opt.icon;
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
                className="bg-white border border-slate-200 p-8 rounded-[6px] hover:border-brand-blue/35 transition-all duration-300 shadow-sm"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-[6px] bg-blue-50 text-brand-blue mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {opt.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {opt.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}