"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Clock, 
  Bell,
  CheckCircle2,
  Activity,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function CommandCenter() {
  const stats = [
    { label: "Active Clients", value: "247", change: "+12%", icon: Users, color: "blue" },
    { label: "Open Tickets", value: "18", change: "-4", icon: Activity, color: "amber" },
    { label: "Revenue MTD", value: "$48.2K", change: "+8.3%", icon: BarChart3, color: "emerald" },
    { label: "Avg Response", value: "2.4m", change: "-18%", icon: Clock, color: "purple" },
  ];

  const getColorStyles = (color: string) => {
    const styles = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200/50",
        iconBg: "bg-blue-100",
        iconText: "text-blue-600",
        gradient: "from-blue-500 to-blue-600",
        glow: "shadow-blue-500/20",
        change: "text-emerald-600 bg-emerald-50",
      },
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-200/50",
        iconBg: "bg-amber-100",
        iconText: "text-amber-600",
        gradient: "from-amber-500 to-amber-600",
        glow: "shadow-amber-500/20",
        change: "text-amber-600 bg-amber-50",
      },
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200/50",
        iconBg: "bg-emerald-100",
        iconText: "text-emerald-600",
        gradient: "from-emerald-500 to-emerald-600",
        glow: "shadow-emerald-500/20",
        change: "text-emerald-600 bg-emerald-50",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200/50",
        iconBg: "bg-purple-100",
        iconText: "text-purple-600",
        gradient: "from-purple-500 to-purple-600",
        glow: "shadow-purple-500/20",
        change: "text-emerald-600 bg-emerald-50",
      },
    };
    return styles[color as keyof typeof styles] || styles.blue;
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-24 pb-12 sm:pt-32 sm:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30" />
      </div>

      <div className="relative mx-auto container px-6 lg:px-8">
        
        {/* Title Content Block with Premium Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-semibold border border-brand-blue/20">
            <Sparkles className="h-3.5 w-3.5" />
            Real-Time Operations
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Your Command Center for{" "}
            <span className="text-brand-blue">MSP Operations</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            See everything that matters at a glance. Our intuitive dashboard
            puts critical information right where you need it.
          </p>
        </motion.div>

        {/* Stats Row - Four Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1150px] mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = getColorStyles(stat.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`relative bg-white rounded-2xl border ${colors.border} p-6 shadow-sm hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider ">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-slate-900 mt-1.5">
                      {stat.value}
                    </p>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold mt-2 ${colors.change}`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconText} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                
                {/* Bottom Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-full w-1/2 bg-gradient-to-r ${colors.gradient} rounded-full`} />
                </div>

                {/* Subtle Glow Effect on Hover */}
                <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${colors.gradient} blur-xl -z-10`} />
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
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white px-6 py-4 rounded-2xl border border-slate-200/80 shadow-sm">
            <span className="text-sm text-slate-600">
              <span className="font-bold text-slate-900">1,200+</span> dashboards live
            </span>
            <span className="w-px h-6 bg-slate-200 hidden sm:block" />
            <span className="text-sm text-slate-600">
              ⚡ <span className="font-semibold text-brand-blue">99.9%</span> uptime
            </span>
            <span className="w-px h-6 bg-slate-200 hidden sm:block" />
            <span className="text-sm text-slate-600">
              🚀 <span className="font-semibold text-slate-900">4.9/5</span> rating
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}