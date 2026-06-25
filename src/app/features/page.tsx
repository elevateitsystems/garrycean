"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import FeatureDetail from "./components/feature-detail";



export default function FeaturesPage() {
  const features = [
    {
      title: "Advanced PSA Modules",
      desc: "Run a full professional services automation system without the database delays or heavy interface structures of legacy systems.",
      points: [
        "Interactive Ticket Boards & Kanban queues",
        "Configurable SLA profiles and smart warnings",
        "Automated resource time logs and trackers",
        "Integrated client knowledge bases"
      ],
      icon: Zap,
    },
    {
      title: "Unified CRM & Accounts",
      desc: "Stop syncing accounts. Leads are converted into active billing clients within the same unified dashboard system.",
      points: [
        "Lead capture tools and intelligent routing",
        "Custom fields tailored for MSP client structures",
        "Interactive activity timeline trackers",
        "Aggregated workspace audit logs"
      ],
      icon: Shield,
    },
    {
      title: "Script Orchestration",
      desc: "Deploy custom configurations or execute automated remedies across endpoints dynamically and securely.",
      points: [
        "Secure script storage with authorization locks",
        "Dynamic environment parameter injection",
        "Task scheduler matching custom rules",
        "Real-time task feedback and status logs"
      ],
      icon: Workflow,
    },
  ];

  return (
    <div className="bg-slate-50 ">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 pt-24 pb-20 text-white">
        <div className="mx-auto container px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mt-10 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono tracking-widest">POWERFUL PLATFORM</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter leading-tight">
              Everything you need.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Integrated in one stack.
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
              Engineered specifically to solve data synchronization problems and eliminate tool bloat.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto container px-6 lg:px-8 -mt-12 relative z-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <FeatureDetail {...feature} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="bg-white py-20 border-t border-b border-slate-100">
        <div className="mx-auto container px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                Built for real MSP workflows
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xl font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">One Source of Truth</h3>
                    <p className="text-slate-600">No more switching between 5 different tools. Everything lives in one beautifully connected platform.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xl font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Automation-First Design</h3>
                    <p className="text-slate-600">From ticket creation to invoicing — repetitive tasks are handled automatically so your team can focus on high-value work.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xl font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Enterprise Grade Security</h3>
                    <p className="text-slate-600">Role-based permissions, audit logs, SOC2-ready infrastructure, and client data isolation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="/dashboard-demo.png" 
                alt="StackMSP Platform Interface" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm uppercase tracking-widest opacity-75">Live Platform</p>
                <p className="text-2xl font-semibold">Real workflows. Real results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrations CTA */}
      <div className="mx-auto container px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold mb-3">Want to check out all integrations?</h2>
            <p className="text-slate-400">
              We support active connections with RMM tools, accounting software, cloud providers, and more.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 transition-all whitespace-nowrap"
          >
            Request Full Integrations List
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}