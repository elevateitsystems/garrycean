"use client";

import React from "react";
import { Settings, UserCheck, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Steps() {
  const roadmap = [
    {
      num: "01",
      icon: Settings,
      title: "Set Up Your Workspace",
      desc: "Sign up in seconds and customize your workspace. Set your initial configuration and integration and start adding your clients.",
    },
    {
      num: "02",
      icon: UserCheck,
      title: "Invite Your Team & Clients",
      desc: "Add team members with role-based permissions. Invite clients to access their secure portal where they can view documents, approve contracts, and stay updated on their services.",
    },
    {
      num: "03",
      icon: Activity,
      title: "Run Your MSP Like a Pro",
      desc: "Manage new leads, proposals and contracts, and onboard customers with a Kanban board. Automate your IT service, manage tickets and send invoices. Automate workflows to free up time for growing your business.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto container px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">Quick Setup</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Get Your Entire MSP Operation{" "}
            <span className="bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
              Running In Less Than An Hour.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Get your entire MSP operation running on StackMSP in less than an hour.
          </p>
        </motion.div>

        {/* Roadmap Steps with Stagger Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {roadmap.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" }
                  },
                }}
                whileHover={{ y: -6 }}
                className="relative bg-white border border-slate-200 p-8 rounded-[6px] shadow-sm"
              >
                <span className="absolute top-4 right-6 text-6xl font-black text-slate-100 select-none">
                  {step.num}
                </span>
                <div className="h-12 w-12 flex items-center justify-center rounded-[6px] bg-blue-50 text-brand-blue mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}