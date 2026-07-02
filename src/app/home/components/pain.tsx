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
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200/50", iconBg: "bg-blue-100", badgeBg: "bg-blue-100", badgeText: "text-blue-700" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200/50", iconBg: "bg-purple-100", badgeBg: "bg-purple-100", badgeText: "text-purple-700" },
      amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200/50", iconBg: "bg-amber-100", badgeBg: "bg-amber-100", badgeText: "text-amber-700" },
      rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200/50", iconBg: "bg-rose-100", badgeBg: "bg-rose-100", badgeText: "text-rose-700" },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="bg-slate-50 py-10 sm:py-24 lg:py-32 -mt-12 sm:-mt-20 lg:-mt-24">
      <div className="mx-auto container px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl text-center mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-blue-500/20">
            <Briefcase className="h-3.5 w-3.5" />
            Common Challenges
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Managing your Clients Shouldn&apos;t Feel Like <br className="hidden sm:block" />{" "}
            <span className="text-blue-600">Juggling Chaos</span>
          </h2>
          
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
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
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
                  y: -6,
                  transition: { duration: 0.2 }
                }}
                className={`group relative bg-white rounded-3xl border ${colors.border} hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col min-h-[340px] sm:min-h-[360px]`}
              >
                {/* Top colored bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${colors.bg}`} />
                
                <div className="p-6 sm:p-8 pt-8 flex-1 flex flex-col">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${colors.badgeBg} ${colors.badgeText} whitespace-nowrap`}>
                      {point.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] sm:text-base">
                      {point.description}
                    </p>
                  </div>

                  {/* Bottom decorative element */}
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-2">
                    <div className="flex -space-x-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs text-slate-400">Impacting your business</span>
                  </div>
                </div>
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
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            These challenges are holding your MSP back.{" "}
            <span className="font-semibold text-blue-600">It&apos;s time for a better way.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}