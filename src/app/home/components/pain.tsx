"use client";

import React from "react";
import { FileSpreadsheet, Hourglass, EyeOff, Smile } from "lucide-react";
import { motion } from "framer-motion";

export default function Pain() {
  const painPoints = [
    {
      icon: FileSpreadsheet,
      title: "Scattered Information",
      description:
        "Client data is stuck across spreadsheets, scattered emails, and physical filing cabinets.",
    },
    {
      icon: Hourglass,
      title: "Manual Processes",
      description:
        "Wasting hours every week on manual invoicing, contract drafts, and repetitive admin work.",
    },
    {
      icon: EyeOff,
      title: "No Operational Visibility",
      description:
        "Struggling to track project statuses, team workload distribution, and vital business performance metrics.",
    },
    {
      icon: Smile,
      title: "Poor Client Experience",
      description:
        "Clients feel frustrated due to slow email responses and a complete lack of modern self-service options.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl text-center mx-auto mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Managing your Clients Shouldn't Feel Like <br />{" "}
            <span className="text-brand-blue">Juggling Chaos</span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Are you tired of switching between multiple tools just to get work done?
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {painPoints.map((point, index) => {
            const Icon = point.icon;
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
                className="flex gap-6 p-8 bg-white rounded-[6px] border border-slate-200/80 hover:border-brand-blue/35 transition-all duration-300 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[6px] bg-blue-50 text-red-500">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {point.description}
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