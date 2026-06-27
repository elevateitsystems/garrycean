"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ShieldCheck, Zap, Database, ArrowRight, Sparkles, Globe, Layers, FileText, Monitor, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Consolidated Billing",
      desc: "Remove manual calculations from client invoicing. Our PSA solution directly connects device tracking logs to your billing engine, matching tier contracts.",
      icon: Zap,
      benefits: ["Automated billing profiles", "Prorated adjustments", "Direct QuickBooks & Xero Sync"],
      image: "/invoice-image.png",
      imageAlt: "Consolidated Billing workspace preview - Invoice management",
      color: "blue",
      tag: "Finance",
      stats: "83% faster billing",
    },
    {
      title: "Unified RMM Monitoring",
      desc: "Get immediate endpoint alerts without keeping tabs open across three browser screens. Alerts are automatically logged directly into the CRM database as trackable status tickets.",
      icon: ShieldCheck,
      benefits: ["Instant alerts feed", "Custom automation actions", "Continuous state monitoring"],
      image: "/rmm-monitoring.png",
      imageAlt: "Unified RMM Monitoring workspace preview - Endpoint monitoring dashboard",
      color: "purple",
      tag: "Monitoring",
      stats: "99.9% uptime",
    },
    {
      title: "Integrated CRM Pipelines",
      desc: "Ensure seamless handoffs between sales leads and service provisioning. Unified workspaces sync client status profiles across every module instantly.",
      icon: Database,
      benefits: ["Smooth lead onboarding", "Shared client profile timeline", "Comprehensive activity logs"],
      image: "/crm-pipeline.png",
      imageAlt: "Integrated CRM Pipelines workspace preview - Sales pipeline dashboard",
      color: "emerald",
      tag: "CRM",
      stats: "2x faster onboarding",
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
        badge: "bg-blue-100 text-blue-700",
        shadow: "shadow-blue-500/20",
        ring: "ring-blue-500/20",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200/50",
        iconBg: "bg-purple-100",
        iconText: "text-purple-600",
        gradient: "from-purple-500 to-purple-600",
        badge: "bg-purple-100 text-purple-700",
        shadow: "shadow-purple-500/20",
        ring: "ring-purple-500/20",
      },
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200/50",
        iconBg: "bg-emerald-100",
        iconText: "text-emerald-600",
        gradient: "from-emerald-500 to-emerald-600",
        badge: "bg-emerald-100 text-emerald-700",
        shadow: "shadow-emerald-500/20",
        ring: "ring-emerald-500/20",
      },
    };
    return styles[color as keyof typeof styles] || styles.blue;
  };

  return (
    <div className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-16 sm:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto container px-6 lg:px-8">
        {/* Header with Premium Design */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-blue-500/20">
            <Sparkles className="h-3.5 w-3.5" />
            Bespoke Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Custom Solutions for <br />
            <span className="text-blue-600">Operational Harmony</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Engineered to streamline business processes, maximize time savings, 
            and provide operational transparency.
          </p>
        </motion.div>

        {/* Premium Solutions Cards */}
        <div className="space-y-32">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            const colors = getColorStyles(sol.color);
            // Alternate layout: even index = image right, odd index = image left
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`relative flex flex-col lg:flex-row items-center gap-16 lg:gap-20 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Decorative Number */}
                <div className="absolute -top-8 -left-8 text-8xl font-black text-slate-100/50 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content Side - with more padding and spacing */}
                <div className="flex-1 space-y-6 relative z-10 pr-0 lg:pr-8">
                  {/* Tag and Icon Row */}
                  <div className="flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.iconText} shadow-lg ${colors.shadow}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${colors.badge}`}>
                      {sol.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                      <Layers className="h-3 w-3" />
                      Module {index + 1}
                    </span>
                  </div>

                  {/* Title with Gradient Underline */}
                  <div className="relative">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                      {sol.title}
                    </h2>
                    <div className={`absolute -bottom-1 left-0 w-16 h-1 rounded-full bg-gradient-to-r ${colors.gradient}`} />
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-lg max-w-lg">
                    {sol.desc}
                  </p>

                  {/* Benefits with Premium Checkmarks */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {sol.benefits.map((benefit, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                        className="flex items-center gap-2.5 text-sm text-slate-600 group"
                      >
                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${colors.iconBg} ${colors.iconText}`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="group-hover:text-slate-900 transition-colors">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stats Badge */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                      <Globe className="h-4 w-4" />
                      <span className="text-sm font-semibold">{sol.stats}</span>
                    </div>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:gap-2.5 transition-all duration-300 group"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Image Side with Premium Card Design */}
                <motion.div 
                  className="flex-1 w-full max-w-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`relative rounded-3xl overflow-hidden border ${colors.border} shadow-2xl ${colors.shadow} group`}>
                    {/* Top Gradient Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.gradient} z-10`} />
                    
                    {/* Image Container */}
                    <div className="relative w-full h-[340px] bg-slate-100">
                      <Image
                        src={sol.image}
                        alt={sol.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                      
                      {/* Floating Badge on Image */}
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20 shadow-lg">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          </div>
                          <span className="text-xs font-medium text-slate-700">Live demo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-500 rounded-2xl blur opacity-30" />
            <div className="relative bg-white rounded-2xl px-8 py-6 border border-slate-200/80 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">JD</div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-bold text-purple-600">SK</div>
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-600">MR</div>
                  </div>
                  <span className="text-sm text-slate-600">
                    <span className="font-bold text-slate-900">2,000+</span> MSPs trust us
                  </span>
                </div>
                <div className="w-px h-8 bg-slate-200 hidden sm:block" />
                <Link
                  href="/trial"
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:bg-blue-700 transition-all duration-200"
                >
                  Start Your Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}