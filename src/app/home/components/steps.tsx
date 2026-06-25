"use client";

import React from "react";
import { Settings, UserCheck, Activity, ArrowRight } from "lucide-react";
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
      desc: "Add team members with role-based permissions. Invite clients to access their secure portal where they can view documents, approve contracts, and stay updated.",
    },
    {
      num: "03",
      icon: Activity,
      title: "Run Your MSP Like a Pro",
      desc: "Manage new leads, proposals, and contracts with a Kanban board. Automate your IT service, manage tickets, and send invoices to free up growth time.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Premium Mesh Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_65%)] pointer-events-none -z-10" />

      <div className="mx-auto container px-6 lg:px-8">
        
        {/* Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-24 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Onboarding Pipeline</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Get Your Entire MSP Operation <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Running In Less Than An Hour
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Transition smoothly to a unified dashboard without interrupting active customer contracts or billing streams.
          </p>
        </motion.div>

        {/* Dynamic Connected Process Track */}
        <div className="relative">
          {/* Timeline Connector Line (Hidden on Mobile) */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 hidden lg:block -z-10" />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              },
            }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10"
          >
            {roadmap.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                    },
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-white border border-slate-200/80 p-8 sm:p-10 rounded-2xl shadow-[0_15px_40px_-15px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.06)] hover:border-blue-500/30 transition-all duration-300"
                >
                  {/* Premium Outlined Step Indicator */}
                  <span className="absolute top-6 right-8 text-5xl font-black text-slate-100 tracking-tighter select-none font-sans group-hover:text-blue-500/5 group-hover:scale-105 transition-all duration-300">
                    {step.num}
                  </span>

                  {/* Step Icon App Container */}
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-700 shadow-inner group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-700 transition-all duration-300 mb-8">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>

                  {/* Micro Process Arrow Link for step cards 1 and 2 */}
                  {index < 2 && (
                    <div className="absolute -right-4 top-[44px] bg-slate-50 border border-slate-200 rounded-full h-6 w-6 hidden lg:flex items-center justify-center shadow-sm z-20">
                      <ArrowRight className="h-3 w-3 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  )}

                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}