"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50/80 py-24 sm:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20"
          >
            <HelpCircle className="h-4 w-4 text-brand-blue" />
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">Support Center</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            Got questions about onboarding, feature migrations, or security standards? We have answers.
          </motion.p>
        </motion.div>

        {/* FAQ Items with Stagger Animation */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`group relative bg-white rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? "border-brand-blue/30 shadow-lg shadow-brand-blue/5 scale-[1.01]" 
                    : "border-slate-200/80 hover:border-slate-300/80 hover:shadow-md"
                }`}
              >
                {/* Glow effect */}
                {isOpen && (
                  <div className="absolute -inset-px bg-gradient-to-r from-brand-blue/20 via-blue-400/20 to-brand-blue/20 rounded-xl blur-sm -z-10" />
                )}

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-all duration-200"
                >
                  <span className="flex items-start gap-4 pr-4">
                    <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen 
                        ? "bg-brand-blue text-white shadow-md shadow-brand-blue/30" 
                        : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                    }`}>
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform" />
                      )}
                    </span>
                    <span className={`text-base font-semibold transition-colors duration-200 ${
                      isOpen ? "text-brand-blue" : "text-slate-800 group-hover:text-slate-900"
                    }`}>
                      {faq.q}
                    </span>
                  </span>
                  <span className={`shrink-0 transition-all duration-300 ${isOpen ? "text-brand-blue" : "text-slate-400"}`}>
                    {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </span>
                </button>

                {/* Animated Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100/80">
                        <div className="flex gap-4">
                          <div className="w-7 shrink-0" />
                          <div className="flex-1">
                            {faq.a}
                            <div className="mt-3 flex items-center gap-2 text-xs text-brand-blue/70">
                              <span className="inline-block h-1 w-1 rounded-full bg-brand-blue/50" />
                              <span>Still have questions? <button className="font-semibold hover:text-brand-blue transition-colors">Contact support →</button></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-blue/20 to-blue-400/20 border-2 border-white flex items-center justify-center text-xs font-bold text-brand-blue">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-800">Still have questions?</p>
              <p className="text-xs text-slate-500">Our team is here to help 24/7</p>
            </div>
            <button className="rounded-lg bg-brand-blue px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-blue/25 hover:bg-brand-blue/95 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}