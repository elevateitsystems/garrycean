"use client";

import React from "react";
import { FileSpreadsheet, Hourglass, EyeOff, Smile, Briefcase, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Pain() {
  const painPoints = [
    {
      icon: FileSpreadsheet,
      title: "Scattered Information",
      description:
        "Client data is stuck across spreadsheets, scattered emails, and physical filing cabinets.",
      badge: "PROBLEM",
      color: "blue",
    },
    {
      icon: Hourglass,
      title: "Manual Processes",
      description:
        "Wasting hours every week on manual invoicing, contract drafts, and repetitive admin work.",
      badge: "INEFFICIENCY",
      color: "purple",
    },
    {
      icon: EyeOff,
      title: "No Operational Visibility",
      description:
        "Struggling to track project statuses, team workload distribution, and vital business performance metrics.",
      badge: "CHALLENGE",
      color: "amber",
    },
    {
      icon: Smile,
      title: "Poor Client Experience",
      description:
        "Clients feel frustrated due to slow email responses and a complete lack of modern self-service options.",
      badge: "ISSUE",
      color: "rose",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200/50",
        iconBg: "bg-blue-100",
        badgeBg: "bg-blue-100",
        badgeText: "text-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200/50",
        iconBg: "bg-purple-100",
        badgeBg: "bg-purple-100",
        badgeText: "text-purple-700",
      },
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-200/50",
        iconBg: "bg-amber-100",
        badgeBg: "bg-amber-100",
        badgeText: "text-amber-700",
      },
      rose: {
        bg: "bg-rose-50",
        text: "text-rose-600",
        border: "border-rose-200/50",
        iconBg: "bg-rose-100",
        badgeBg: "bg-rose-100",
        badgeText: "text-rose-700",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto container px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl text-center mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border border-blue-500/20">
            <Briefcase className="h-3.5 w-3.5" />
            Common Challenges
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Managing your Clients Shouldn't Feel Like <br />{" "}
            <span className="text-blue-600">Juggling Chaos</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Are you tired of switching between multiple tools just to get work done?
          </p>
        </motion.div>

        {/* Pain Points Grid - 4 Columns with fixed card size */}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1472px] mx-auto"
        >
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            const colors = getColorClasses(point.color);
            
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
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className={`group relative bg-white rounded-2xl border ${colors.border} hover:shadow-xl transition-all duration-300 overflow-hidden h-[356px] flex flex-col`}
              >
                {/* Top colored bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${colors.bg}`} />
                
                <div className="p-8 pt-9 flex-1 flex flex-col">
                  {/* Icon and Badge Row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${colors.iconBg} ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold ${colors.badgeBg} ${colors.badgeText}`}>
                      {point.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {point.description}
                    </p>
                  </div>

                  {/* Bottom decorative element */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2">
                    <div className="flex -space-x-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs text-slate-400">Impacting your business</span>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-slate-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            These challenges are holding your MSP back. <span className="font-semibold text-blue-600">It's time for a better way.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}