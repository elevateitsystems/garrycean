"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { 
      q: "Do you have pricing plan?", 
      a: "Yes, we offer flexible subscription tiers starting at $149/month designed to scale alongside your client workspace volume and device limitations." 
    },
    { 
      q: "What is your refund policy?", 
      a: "All subscriptions come with a 30-day money-back guarantee, allowing your team to test features risk-free. No hard contracts required." 
    },
    { 
      q: "How standard is security?", 
      a: "StackMSP enforces strict enterprise-level encryption, multi-factor authentication requirements, and role-based access control policies across all modules." 
    },
    { 
      q: "Is customer support 24/7?", 
      a: "Yes. Our priority escalation teams handle platform issues 24/7, keeping your core business operations up and running smoothly around the clock." 
    },
    { 
      q: "Can we build custom features?", 
      a: "Absolutely. StackMSP features open REST API access points and secure webhook endpoints, allowing internal developers to build custom workflow widgets." 
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
         <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
           <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Got questions about onboarding, feature migrations, or security standards? We have answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-[6px] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left text-slate-800 font-bold hover:text-brand-blue transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-brand-blue shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-brand-blue shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
