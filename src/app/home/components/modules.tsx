"use client";

import React from "react";
import {
  Users,
  FileText,
  CreditCard,
  Award,
  Group,
  LineChart,
  ShieldAlert,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Modules() {
  const capabilities = [
    {
      title: "Centralized Client Hub",
      desc: "Store all client information, contacts, service history, and documents in one secure database. Give clients instant access through a professional self-service portal.",
      icon: Users,
      className: "md:col-span-2 lg:col-span-2",
      gradient: "from-blue-500/10 to-indigo-500/10",
    },
    {
      title: "Smart Contracts",
      desc: "Build professional contracts with our rich text editor or upload templates. Track status, renewals, and approvals automatically.",
      icon: FileText,
      className: "md:col-span-1 lg:col-span-1",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "Automated Invoicing",
      desc: "Create detailed invoices in seconds, link them to contracts, and set up recurring billing. Track payments and reduce errors.",
      icon: CreditCard,
      className: "md:col-span-1 lg:col-span-1",
      gradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      title: "Powerful Proposals",
      desc: "Design beautiful quotes and proposals with drag-and-drop ease. Track when clients view them and convert wins into contracts instantly.",
      icon: Award,
      className: "md:col-span-1 lg:col-span-1",
      gradient: "from-amber-500/10 to-orange-500/10",
    },
    {
      title: "Real-Time Analytics",
      desc: "Get instant visibility into revenue, client growth, outstanding invoices, and team performance with customizable dashboards and reports.",
      icon: LineChart,
      className: "md:col-span-2 lg:col-span-2",
      gradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
      title: "Team & Project Management",
      desc: "Assign roles, manage permissions, and use Kanban boards to keep projects and workloads organized.",
      icon: Group,
      className: "md:col-span-1 lg:col-span-1",
      gradient: "from-violet-500/10 to-purple-500/10",
    },
    {
      title: "Self-Service Client Portal",
      desc: "Give clients 24/7 access to documents, contracts, tickets, and your knowledge base — reducing back-and-forth emails and boosting satisfaction.",
      icon: ShieldAlert,
      className: "md:col-span-1 lg:col-span-2",
      gradient: "from-rose-500/10 to-red-500/10",
    },
    {
      title: "Knowledge Base",
      desc: "Build a comprehensive help center with articles, guides, and FAQs. Empower clients to find answers instantly and reduce support tickets.",
      icon: BookOpen,
      className: "md:col-span-1 lg:col-span-2",
      gradient: "from-fuchsia-500/10 to-violet-500/10",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 text-slate-100">
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-blue-500/10 blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-indigo-500/10 blur-[128px]" />

      <div className="mx-auto container px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-4">
            Platform Capabilities
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
            Everything Your MSP Needs, <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              All in One Place
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From first contact to final invoice, stackmsp streamlines your entire 
            operation with powerful, easy-to-use tools built specifically for service providers.
          </p>
        </motion.div>

        {/* Bento Grid with Staggered Animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px]"
        >
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
                  },
                }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 ${cap.className}`}
              >
                {/* Micro Ambient Glow behind icon on Hover */}
                <div
                  className={`absolute -left-10 -top-10 -z-10 h-32 w-32 rounded-full bg-gradient-to-br ${cap.gradient} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Card Top: Icon & Arrow Link */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 text-blue-400 border border-slate-700/50 group-hover:text-white group-hover:border-blue-500/30 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Card Bottom: Typography */}
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-3 group-hover:text-slate-300 transition-colors leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA after features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:bg-blue-700 transition-all duration-200"
          >
            Explore All Features
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}