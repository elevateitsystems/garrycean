import React from "react";
import { Settings, UserCheck, Activity } from "lucide-react";

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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
           <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Get your entire MSP operation <span className="text-brand-blue"> running in less than an hour.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Get your entire MSP operation running on StackMSP in less than an
            hour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roadmap.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
