import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, Zap, Database } from "lucide-react";

export const metadata = {
  title: "Solutions | StackMSP",
  description: "Bespoke operational solutions designed for modern RMM, CRM and PSA workloads.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Consolidated Billing",
      desc: "Remove manual calculations from client invoicing. Our PSA solution directly connects device tracking logs to your billing engine, matching tier contracts.",
      icon: Zap,
      benefits: ["Automated billing profiles", "Prorated adjustments", "Direct QuickBooks & Xero Sync"]
    },
    {
      title: "Unified RMM Monitoring",
      desc: "Get immediate endpoint alerts without keeping tabs open across three browser screens. Alerts are automatically logged directly into the CRM database as trackable status tickets.",
      icon: ShieldCheck,
      benefits: ["Instant alerts feed", "Custom automation actions", "Continuous state monitoring"]
    },
    {
      title: "Integrated CRM Pipelines",
      desc: "Ensure seamless handoffs between sales leads and service provisioning. Unified workspaces sync client status profiles across every module instantly.",
      icon: Database,
      benefits: ["Smooth lead onboarding", "Shared client profile timeline", "Comprehensive activity logs"]
    }
  ];

  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
            Custom Solutions for <span className="text-brand-blue">Operational Harmony</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Engineered to streamline business processes, maximize time savings, and provide operational transparency.
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 py-8 border-b border-slate-200 last:border-0 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 space-y-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-brand-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-brand-dark">{sol.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{sol.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sol.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-brand-blue shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full max-w-lg bg-white p-8 rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center min-h-[300px]">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-extrabold text-slate-100 uppercase tracking-wider select-none">
                      {sol.title.split(" ")[0]}
                    </div>
                    <p className="text-xs text-slate-400 font-mono">Workspace module visualize preview</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
