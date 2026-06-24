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
} from "lucide-react";
import { motion } from "framer-motion";

export default function Modules() {
  const capabilities = [
    {
      title: "Centralized Client Hub",
      desc: "Store all client information, contacts, and history in one organized database. Give clients secure portal access to view their services, documents, and tickets.",
      icon: Users,
    },
    {
      title: "Smart Contract Creation",
      desc: "Generate professional contracts with our built-in rich text editor or upload your own templates. Track contract status, renewal dates, and automatically notify clients for reviews.",
      icon: FileText,
    },
    {
      title: "Automated Invoicing",
      desc: "Create detailed invoices in seconds, link them to contracts, and track payment status. Support for recurring billing, custom line items, and multiple payment methods.",
      icon: CreditCard,
    },
    {
      title: "Win More Deals",
      desc: "Build stunning proposals and quotes with drag-and-drop editor. Track when clients view them and convert accepted proposals into contracts with one click.",
      icon: Award,
    },
    {
      title: "Empower Your Team",
      desc: "Manage employees, assign roles, and control permissions. Use Kanban boards to organize projects and keep everyone aligned on priorities and deadlines.",
      icon: Group,
    },
    {
      title: "Real-Time Insights",
      desc: "Get instant visibility into revenue, client growth, outstanding invoices, and team performance. Interactive charts and customizable widgets put your KPIs front and center.",
      icon: LineChart,
    },
    {
      title: "Self-Service Portal",
      desc: "Give clients 24/7 access to their documents, contracts, and account information. They can review and approve documents, reducing back-and-forth emails.",
      icon: ShieldAlert,
    },
    {
      title: "Knowledge Base",
      desc: "Build a comprehensive help center with articles, guides, and FAQs. Reduce support tickets by empowering clients and team members to find answers instantly.",
      icon: BookOpen,
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
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
            Everything Your MSP Needs, <br />{" "}
            <span className="text-brand-blue">All in One Place</span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            From client onboarding to final invoice, StackMSP handles it all
            with powerful features designed for modern service providers.
          </p>
        </motion.div>

        {/* Features Grid with Stagger Animation */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
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
                className="flex flex-col justify-between p-6 bg-slate-50 rounded-[6px] border border-slate-200/60 hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="h-12 w-12 flex items-center justify-center rounded-[6px] bg-blue-100/60 text-brand-blue mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {cap.desc}
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