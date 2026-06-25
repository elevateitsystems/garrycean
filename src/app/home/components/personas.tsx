"use client";

import React from "react";
import { Server, Compass, HelpCircle, Code2, Sparkles, ArrowRight, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Personas() {
  const options = [
    {
      title: "Managed Service Providers",
      icon: Server,
      desc: "Manage IT infrastructure contracts, automate billing for recurring services, and provide clients with real-time service status updates.",
      tag: "MSP",
      color: "blue",
      stat: "2,400+ clients",
    },
    {
      title: "IT Consultants",
      icon: Compass,
      desc: "Track project hours, send professional proposals, and manage multiple clients with ease. Convert quotes to contracts seamlessly.",
      tag: "Consulting",
      color: "purple",
      stat: "1,800+ projects",
    },
    {
      title: "Tech Support Companies",
      icon: HelpCircle,
      desc: "Organize support tickets, track response times, and give clients access to a knowledge base. Link support incidents to SLAs and contracts.",
      tag: "Support",
      color: "emerald",
      stat: "50K+ tickets",
    },
    {
      title: "Software Companies",
      icon: Code2,
      desc: "Manage software licenses, subscriptions, and implementation projects. Track renewals and automate invoicing for subscription services.",
      tag: "SaaS",
      color: "amber",
      stat: "3,200+ licenses",
    },
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
        shadow: "shadow-blue-500/20",
        badge: "bg-blue-100 text-blue-700",
        hover: "hover:border-blue-300",
        ring: "ring-blue-500/20",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200/50",
        iconBg: "bg-purple-100",
        iconText: "text-purple-600",
        gradient: "from-purple-500 to-purple-600",
        shadow: "shadow-purple-500/20",
        badge: "bg-purple-100 text-purple-700",
        hover: "hover:border-purple-300",
        ring: "ring-purple-500/20",
      },
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200/50",
        iconBg: "bg-emerald-100",
        iconText: "text-emerald-600",
        gradient: "from-emerald-500 to-emerald-600",
        shadow: "shadow-emerald-500/20",
        badge: "bg-emerald-100 text-emerald-700",
        hover: "hover:border-emerald-300",
        ring: "ring-emerald-500/20",
      },
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-200/50",
        iconBg: "bg-amber-100",
        iconText: "text-amber-600",
        gradient: "from-amber-500 to-amber-600",
        shadow: "shadow-amber-500/20",
        badge: "bg-amber-100 text-amber-700",
        hover: "hover:border-amber-300",
        ring: "ring-amber-500/20",
      },
    };
    return styles[color as keyof typeof styles] || styles.blue;
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-12 pb-24 sm:pb-32 sm:pt-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30" />
      </div>

      <div className="relative mx-auto container px-6 lg:px-8">
        
        {/* Header with Premium Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-semibold border border-brand-blue/20">
            <Users className="h-3.5 w-3.5" />
            Who We Serve
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Built for{" "}
            <span className="text-brand-blue">Service Providers Like You</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Whether you're a solo consultant or managing a team of 50+, StackMSP
            scales with your business.
          </p>
        </motion.div>

        {/* Premium Cards Grid */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {options.map((opt, index) => {
            const Icon = opt.icon;
            const colors = getColorStyles(opt.color);
            
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
                className={`group relative bg-white rounded-2xl border ${colors.border} ${colors.hover} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Top Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}`} />
                
                {/* Content */}
                <div className="p-7 pt-8">
                  {/* Icon with Glow */}
                  <div className="relative mb-5">
                    <div className={`absolute -inset-1 ${colors.iconBg} rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`relative flex h-14 w-14 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconText} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Tag Badge */}
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${colors.badge} mb-3`}>
                    {opt.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-brand-blue transition-colors duration-300">
                    {opt.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {opt.desc}
                  </p>

                  {/* Stats and Learn More */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      {opt.stat}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-2">
                      Learn More
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-slate-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white px-6 py-4 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span className="text-sm text-slate-600">
                <span className="font-bold text-slate-900">4.9/5</span> average rating
              </span>
            </div>
            <span className="w-px h-6 bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-brand-blue" />
              <span className="text-sm text-slate-600">
                <span className="font-bold text-slate-900">2,000+</span> service providers
              </span>
            </div>
            <span className="w-px h-6 bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm text-slate-600">
                <span className="font-bold text-brand-blue">100+</span> countries
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}