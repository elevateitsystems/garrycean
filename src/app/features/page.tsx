"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Workflow, 
  Users, 
  FileText, 
  CreditCard, 
  Award, 
  Group, 
  LineChart, 
  Check, 
  Cpu,
  Database,
  BookOpen,
  Monitor,
  Ticket,
  Clock,
  RefreshCw
} from "lucide-react";
import { motion } from "framer-motion";

// Feature Detail Component - Fixed for consistent card sizes
function FeatureDetail({ title, desc, points, icon: Icon, color, cta, ctaLink }: any) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-200",
    amber: "bg-amber-50 text-amber-600 border-amber-200",
    rose: "bg-rose-50 text-rose-600 border-rose-200",
    cyan: "bg-cyan-50 text-cyan-600 border-cyan-200",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-200",
    orange: "bg-orange-50 text-orange-600 border-orange-200",
    teal: "bg-teal-50 text-teal-600 border-teal-200",
  };

  const colors = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className={`h-12 w-12 flex items-center justify-center rounded-2xl ${colors} transition-colors duration-300 group-hover:scale-110`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">{desc}</p>
      <ul className="space-y-3">
        {points.map((pt: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
            <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FeaturesPage() {
  const features = [
    {
      title: "Centralized Client Hub",
      desc: "Store all client information, contacts, service history, and documents in one secure database. Give clients instant access through a professional self-service portal.",
      points: [
        "Rich client profiles with contacts, assets, and notes",
        "Document storage and version history",
        "Activity timeline and communication logs",
        "Role-based access controls",
        "Self-service client portal (documents, contracts, tickets, knowledge base)"
      ],
      icon: Users,
      color: "blue",
      cta: "Start Managing Clients Today — Free Trial",
      ctaLink: "/trial",
    },
    {
      title: "Smart Contract Creation",
      desc: "Build professional contracts with our rich text editor or upload templates. Track status, renewals, and approvals automatically.",
      points: [
        "Built-in rich text editor or custom template uploads",
        "E-signatures and approval workflows",
        "Renewal date tracking and automated notifications",
        "Contract status dashboard (Active, Pending, Expiring)",
        "Version history and audit trail"
      ],
      icon: FileText,
      color: "purple",
      cta: "Create Your First Contract Free",
      ctaLink: "/trial",
    },
    {
      title: "Billing Coordination",
      desc: "Keep billing organized by connecting clients, contracts, and service details in stackmsp before preparing invoices in QuickBooks.",
      points: [
        "Organize billable services by client and contract",
        "Keep contract and billing details easy to reference",
        "Prepare invoice-ready information for QuickBooks",
        "Reduce missed charges and manual follow-ups",
        "Improve visibility into client billing activity"
      ],
      icon: CreditCard,
      color: "emerald",
      cta: "Streamline Your Billing Now",
      ctaLink: "/trial",
    },
    {
      title: "Win More Deals",
      desc: "Design beautiful quotes and proposals with drag-and-drop ease. Track when clients view them and convert wins into contracts instantly.",
      points: [
        "Drag-and-drop proposal builder",
        "Template library with branding",
        "Real-time view tracking",
        "One-click conversion to contracts",
        "Custom pricing tables and terms"
      ],
      icon: Award,
      color: "amber",
      cta: "Start Winning More Deals",
      ctaLink: "/trial",
    },
    {
      title: "Empower Your Team",
      desc: "Assign tasks, manage workloads, and keep every project on track with powerful collaboration features designed for service teams.",
      points: [
        "Kanban boards for projects and tickets",
        "Task assignment and deadlines",
        "Team workload and availability views",
        "Role-based permissions",
        "Time tracking and reporting"
      ],
      icon: Group,
      color: "rose",
      cta: "Build a More Efficient Team",
      ctaLink: "/trial",
    },
    {
      title: "Real-Time Insights",
      desc: "Track performance, client activity, sales, tickets, and operations with clear dashboards.",
      points: [
        "Interactive KPI dashboards",
        "Revenue and growth trends",
        "Client profitability analysis",
        "Team performance metrics",
        "Exportable reports"
      ],
      icon: LineChart,
      color: "cyan",
      cta: "Get Your Business Insights",
      ctaLink: "/trial",
    },
    {
      title: "Self-Service Portal",
      desc: "Give clients a secure portal to submit requests, view updates, and manage information.",
      points: [
        "24/7 client access to documents and contracts",
        "Ticket submission and status tracking",
        "Knowledge base access",
        "Secure document sharing",
        "Client profile management"
      ],
      icon: Shield,
      color: "indigo",
      cta: "Enable Client Self-Service",
      ctaLink: "/trial",
    },
    {
      title: "Knowledge Base",
      desc: "Store guides, SOPs, FAQs, and internal documentation in one easy-to-access place.",
      points: [
        "Article creation and organization",
        "Searchable knowledge repository",
        "Internal and external access controls",
        "Version history for documents",
        "Quick reference for support teams"
      ],
      icon: BookOpen,
      color: "teal",
      cta: "Build Your Knowledge Base",
      ctaLink: "/trial",
    },
    {
      title: "Asset & Device Management",
      desc: "Track client devices, assets, users, warranties, and important system details.",
      points: [
        "Complete asset inventory and tracking",
        "Warranty and license management",
        "Device history and audit logs",
        "Client asset associations",
        "Automated alerts for expirations"
      ],
      icon: Monitor,
      color: "orange",
      cta: "Manage Assets Effectively",
      ctaLink: "/trial",
    },
    {
      title: "Incident & Ticket Management",
      desc: "Manage support requests, assign technicians, track status, and resolve issues faster.",
      points: [
        "Ticket creation and assignment",
        "Priority and SLA tracking",
        "Internal team collaboration",
        "Client communication history",
        "Resolution time analytics"
      ],
      icon: Ticket,
      color: "purple",
      cta: "Streamline Support Now",
      ctaLink: "/trial",
    },
    {
      title: "Workflow Automation",
      desc: "Automate repetitive tasks, reminders, approvals, notifications, and client follow-ups.",
      points: [
        "Custom workflow builder",
        "Automated notifications and reminders",
        "Approval routing and escalations",
        "Task automation rules",
        "Integration with client actions"
      ],
      icon: Workflow,
      color: "indigo",
      cta: "Automate Your Workflows",
      ctaLink: "/trial",
    },
    {
      title: "Client Lifecycle Tracking",
      desc: "Manage the complete client journey from prospect to onboarding to long-term retention.",
      points: [
        "Client onboarding workflows",
        "Milestone tracking",
        "Client health scoring",
        "Retention and churn analysis",
        "Historical activity timeline"
      ],
      icon: RefreshCw,
      color: "rose",
      cta: "Track Client Lifecycles",
      ctaLink: "/trial",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 pt-32 pb-20 text-white">
        <div className="mx-auto container px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono tracking-widest">MSP SOFTWARE FEATURES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Explore Powerful Features <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Built for MSPs
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
              Explore powerful features for MSPs including client portals, smart contracts, invoicing, proposals, team tools, and real-time analytics.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid - 3 Columns with Equal Heights */}
      <div className="mx-auto container px-6 lg:px-8 -mt-12 relative z-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="h-full flex"
            >
              <FeatureDetail {...feature} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Value Proposition Section - Updated Image */}
      <div className="bg-white py-20 border-t border-b border-slate-100">
        <div className="mx-auto container px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Built for Real MSP Workflows
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Single Source of Truth</h3>
                    <p className="text-slate-600">No more switching between 5 different tools. Everything lives in one beautifully connected platform.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Automation-First Design</h3>
                    <p className="text-slate-600">From ticket creation to invoicing — repetitive tasks are handled automatically so your team can focus on high-value work.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Enterprise Grade Security</h3>
                    <p className="text-slate-600">Role-based permissions, audit logs, SOC2-ready infrastructure, and client data isolation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image 
                src="/dashboard-preview.png" 
                alt="StackMSP Features Dashboard" 
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm uppercase tracking-widest opacity-75">Features Overview</p>
                <p className="text-2xl font-semibold">12 powerful tools. One platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Detail Sections - Full Width Cards */}
      <div className="mx-auto container px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Every Feature Designed for <br />
            <span className="text-blue-600">MSP Success</span>
          </h2>
          <p className="mt-4 text-slate-500">
            From client onboarding to final invoice — stackmsp handles it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.slice(0, 12).map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className={`h-14 w-14 flex items-center justify-center rounded-2xl bg-${feature.color}-50 text-${feature.color}-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  <Link
                    href={feature.ctaLink}
                    className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-blue-600 hover:gap-3 transition-all duration-300"
                  >
                    {feature.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="mx-auto container px-6 lg:px-8 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-3">Ready to Transform Your MSP?</h2>
            <p className="text-slate-400">
              Start your free trial today and see how stackmsp can streamline your operations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all"
            >
              Start Your Free Trial
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}