"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    { 
      q: "Do you have pricing plans?", 
      a: "Yes, we offer flexible subscription tiers starting at $149/month designed to scale alongside your client workspace volume and device limitations.",
      tag: "WORKSPACE_BILLING"
    },
    { 
      q: "What is your refund policy?", 
      a: "All subscriptions come with a 30-day money-back guarantee, allowing your team to test features risk-free. No hard contracts required.",
      tag: "GUARANTEE_TERMS" 
    },
    { 
      q: "How secure is the data layer?", 
      a: "StackMSP enforces strict enterprise-level encryption, multi-factor authentication requirements, and role-based access control policies across all modules.",
      tag: "COMPLIANCE_SECURITY"
    },
    { 
      q: "Is customer support 24/7?", 
      a: "Yes. Our priority escalation teams handle platform issues 24/7, keeping your core business operations up and running smoothly around the clock.",
      tag: "TECHNICAL_SLA"
    },
    { 
      q: "Can we build custom features?", 
      a: "Absolutely. StackMSP features open REST API access points and secure webhook endpoints, allowing internal developers to build custom workflow widgets.",
      tag: "DEVELOPER_APIS"
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Structural Top/Bottom Boundary Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200/60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200/60" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Centered Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-slate-500 border border-slate-200/80 mb-5">
            <HelpCircle className="h-3 w-3 text-slate-400" /> Support Desk
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-5 text-base text-slate-500 leading-relaxed">
            Got questions about onboarding, feature migrations, or security configurations? Find instant clear telemetry below.
          </p>
        </div>

        {/* Minimal Stacked Accordion Layout */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`group rounded-xl border transition-all duration-300 overflow-hidden relative ${
                  isOpen 
                    ? "bg-slate-50/50 border-slate-300/80 shadow-sm" 
                    : "bg-white border-slate-200/60 hover:border-slate-300"
                }`}
              >
                {/* Left Active Accent Track */}
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-blue-600 transition-transform duration-300 ${
                  isOpen ? "scale-y-100" : "scale-y-0"
                }`} />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors duration-200"
                >
                  <div className="flex flex-col gap-1.5 pr-6">
                    <span className="text-[9px] font-mono font-bold text-slate-400 tracking-widest uppercase">
                      // {faq.tag}
                    </span>
                    <span className={`text-base font-bold tracking-tight transition-colors ${
                      isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                    }`}>
                      {faq.q}
                    </span>
                  </div>
                  
                  <div className={`h-8 w-8 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:text-slate-600 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-white border-slate-300 text-slate-900" : ""
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated Inner Container */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed font-medium">
                        <p className="max-w-3xl text-slate-500">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Clean, Premium Footnote CTA */}
        <div className="mt-16 text-center pt-8 border-t border-slate-100">
          <p className="text-sm font-medium text-slate-600">
            Can&apos;t find the exact technical specifications you need?{" "}
            <button className="text-blue-600 font-bold hover:text-blue-700 underline underline-offset-4 decoration-2 transition-colors">
              Speak with an infrastructure engineer →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}