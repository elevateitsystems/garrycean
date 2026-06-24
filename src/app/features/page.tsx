import React from "react";
import FeatureDetail from "./components/feature-detail";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Features | StackMSP",
  description: "Explore the advanced capabilities of StackMSP including built-in PSA, unified monitoring, and script orchestration.",
};

export default function FeaturesPage() {
  const list = [
    {
      title: "Advanced PSA Modules",
      desc: "Run a full professional services automation system without the database delays or heavy interface structures of legacy systems.",
      points: [
        "Interactive Ticket Boards & Boards queues",
        "Configurable SLA profiles and warnings",
        "Automated resource time logs and trackers",
        "Integrated client knowledge bases"
      ]
    },
    {
      title: "Unified CRM & Accounts",
      desc: "Stop syncing accounts. Leads are converted into active billing clients within the same unified dashboard system.",
      points: [
        "Lead capture tools and routing configurations",
        "Custom fields tailored for client structures",
        "Interactive activity timeline trackers",
        "Aggregated workspace audit logs"
      ]
    },
    {
      title: "Script Orchestration",
      desc: "Deploy custom configurations or execute automated remedies across endpoints dynamically and securely.",
      points: [
        "Secure script storage with authorization locks",
        "Dynamic environment parameter injection",
        "Task scheduler matching custom rules",
        "Real-time task feedback and status logs"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
            Everything you need. <br />
            <span className="text-brand-blue">Integrated in one stack.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Engineered specifically to solve data synchronization problems and eliminate tool bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <FeatureDetail key={idx} {...item} />
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-brand-dark text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Want to check out all integrations?</h2>
            <p className="text-gray-400 text-sm">We support active connections with external storage, monitoring, and cloud services.</p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-blue/90 transition-colors shrink-0"
          >
            Request Integrations List
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
