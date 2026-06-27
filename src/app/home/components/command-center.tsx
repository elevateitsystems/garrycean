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

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-[1150px] mx-auto"
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
                whileHover={{ y: -4 }}
                className={`relative bg-white rounded-2xl border ${colors.border} p-5 shadow-sm hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">
                      {stat.value}
                    </p>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold mt-1 ${colors.change}`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconText} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                {/* Bottom Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-full w-1/2 bg-gradient-to-r ${colors.gradient} rounded-full`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dashboard UI Visualization with Premium Design */}
        <motion.div 
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto max-w-6xl"
        >
          {/* Main Card with Glow Effect */}
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/10 via-purple-500/10 to-emerald-500/10 rounded-3xl blur-2xl opacity-50" />
            
            {/* Card */}
            <div className="relative rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm shadow-2xl overflow-hidden">
              
              {/* Top Bar with Premium Design */}
              <div className="flex items-center justify-between border-b border-slate-200/50 px-6 py-4 bg-gradient-to-r from-slate-50/80 to-white/80">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-400 shadow-lg shadow-rose-400/30" />
                    <span className="h-3 w-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/30" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/30" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono bg-slate-100 px-3 py-1 rounded-full">
                    dashboard.stackmsp.com
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Bell className="h-3.5 w-3.5" />
                    <span className="bg-brand-blue text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      3
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>
              </div>

              {/* Image Container with Premium Overlay */}
              <div className="relative w-full bg-slate-950/5">
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src="/dashboard-preview.png"
                    alt="StackMSP Dashboard Preview"
                    fill
                    className="object-contain transition-transform duration-1000 hover:scale-105"
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Status Badge */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-slate-200/50 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">
                          JD
                        </div>
                        <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-bold text-purple-600">
                          SK
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-600">
                          MR
                        </div>
                      </div>
                      <div className="border-l border-slate-200 pl-3">
                        <p className="text-xs font-semibold text-slate-700">Team Online</p>
                        <p className="text-[10px] text-slate-400">8 members active</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Top Right Floating Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-brand-blue to-purple-500 text-white rounded-xl px-4 py-2 shadow-lg shadow-brand-blue/30"
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      <span className="text-xs font-bold">Live Demo</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="flex items-center justify-between border-t border-slate-200/50 px-6 py-3 bg-gradient-to-r from-white/80 to-slate-50/80">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    System operational
                  </span>
                  <span className="w-px h-4 bg-slate-200" />
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Activity className="h-3.5 w-3.5 text-blue-400" />
                    Last updated: 2m ago
                  </span>
                </div>
                <Link 
                  href="#" 
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:gap-2.5 transition-all duration-300"
                >
                  View full dashboard
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-6 bg-white px-6 py-4 rounded-2xl border border-slate-200/80 shadow-sm">
            <span className="text-sm text-slate-600">
              <span className="font-bold text-slate-900">1,200+</span> dashboards live
            </span>
            <span className="w-px h-6 bg-slate-200" />
            <span className="text-sm text-slate-600">
              ⚡ <span className="font-semibold text-brand-blue">99.9%</span> uptime
            </span>
            <span className="w-px h-6 bg-slate-200 hidden sm:block" />
            <span className="text-sm text-slate-600 hidden sm:block">
              🚀 <span className="font-semibold text-slate-900">4.9/5</span> rating
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}