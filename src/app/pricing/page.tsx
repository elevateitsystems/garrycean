"use client";

import React from "react";
import Link from "next/link";
import { Check, Sparkles, Zap, ArrowRight, Shield, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      credits: "8,400",
      desc: "For small operations starting to unify their workflows.",
      features: [
        "Up to 5 operator seats",
        "CRM & ticketing base",
        "Up to 150 monitored devices",
        "Standard API key access",
        "Next-business-day email support"
      ],
      cta: "Start 14-day free trial",
      popular: false,
      color: "blue"
    },
    {
      name: "Growth",
      price: "$349",
      period: "/month",
      credits: "17,600",
      desc: "Designed for scaling teams requiring detailed automations.",
      features: [
        "Up to 15 operator seats",
        "Advanced automation & script engine",
        "Up to 1,000 monitored devices",
        "Custom webhook support",
        "Priority 24/7 help desk access"
      ],
      cta: "Start 14-day free trial",
      popular: true,
      color: "purple"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      credits: "40,100",
      desc: "Custom structures for large organizations matching compliance standards.",
      features: [
        "Unlimited operator seats",
        "Dedicated database clusters",
        "Unlimited monitored devices",
        "Custom feature integrations",
        "Assigned account manager & setup team"
      ],
      cta: "Contact Enterprise Sales",
      popular: false,
      color: "emerald"
    }
  ];

  const allFeatures = [
    { icon: Zap, text: "Unlimited Gmail, Outlook & SMTP" },
    { icon: Zap, text: "Automated follow-up sequences" },
    { icon: Shield, text: "Built-in email rotation" },
    { icon: Shield, text: "Client portal" },
    { icon: Users, text: "AI-personalised opening lines" },
    { icon: Users, text: "Branded reporting" },
    { icon: Briefcase, text: "Pre-vetted site database" },
    { icon: Briefcase, text: "Team management" },
  ];

  const getColorStyles = (color: string) => {
    const styles = {
      blue: {
        border: "border-blue-200/50",
        bg: "bg-blue-50",
        text: "text-blue-600",
        ring: "ring-blue-500/20",
        gradient: "from-blue-500 to-blue-600",
        shadow: "shadow-blue-500/20",
        badge: "bg-blue-100 text-blue-700",
      },
      purple: {
        border: "border-purple-200/50",
        bg: "bg-purple-50",
        text: "text-purple-600",
        ring: "ring-purple-500/20",
        gradient: "from-purple-500 to-purple-600",
        shadow: "shadow-purple-500/20",
        badge: "bg-purple-100 text-purple-700",
      },
      emerald: {
        border: "border-emerald-200/50",
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        ring: "ring-emerald-500/20",
        gradient: "from-emerald-500 to-emerald-600",
        shadow: "shadow-emerald-500/20",
        badge: "bg-emerald-100 text-emerald-700",
      },
    };
    return styles[color as keyof typeof styles] || styles.blue;
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-16 sm:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto container px-6 lg:px-8">
        {/* Header with Premium Design */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className=" mt-10 inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-brand-blue/20">
            <Sparkles className="h-3.5 w-3.5" />
            Link Pro Pricing
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            One credit pool.{" "}
            <span className="text-brand-blue">Every feature.</span>
          </h1>
          
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            One pool covers everything — keywords, enrichment, emails, AI. 
            No caps per feature. Use your credits however campaigns demand.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 mt-8 bg-white rounded-full p-1.5 border border-slate-200/80 shadow-sm">
            <button className="px-6 py-2 rounded-full bg-brand-blue text-white text-sm font-semibold transition-all">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full text-slate-500 hover:text-slate-700 text-sm font-semibold transition-all">
              Annual <span className="text-xs text-emerald-500">~20%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const colors = getColorStyles(plan.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                  plan.popular
                    ? `border-brand-blue shadow-2xl ring-2 ring-brand-blue/10 scale-105 z-10 ${colors.shadow}`
                    : `border-slate-200/80 shadow-lg hover:shadow-xl hover:border-slate-300`
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-brand-blue to-purple-500 text-white text-center py-1.5 text-xs font-bold tracking-wider uppercase">
                      <Sparkles className="h-3 w-3 inline mr-1.5" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`p-8 pt-${plan.popular ? '10' : '8'} flex-1 flex flex-col`}>
                  {/* Plan Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                        <p className="mt-1 text-sm text-slate-500 min-h-[40px]">{plan.desc}</p>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${colors.bg} ${colors.text}`}>
                        {plan.credits} credits
                      </span>
                    </div>
                    
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black tracking-tight text-slate-900">{plan.price}</span>
                      <span className="text-sm font-semibold text-slate-500">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3.5 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${colors.bg} ${colors.text}`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={plan.price === "Custom" ? "/contact" : "/trial"}
                    className={`group w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg ${colors.shadow} hover:shadow-xl hover:scale-105`
                        : `bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300`
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* All Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              ON EVERY PLAN, <span className="text-brand-blue">WITHOUT EXCEPTION</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 leading-tight">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Trial CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-brand-blue/5 via-purple-500/5 to-emerald-500/5 rounded-3xl border border-slate-200/50 p-8 md:p-10 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl" />
            
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold border border-brand-blue/20 mb-4">
                <Sparkles className="h-3 w-3" />
                $7 trial
              </span>
              
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Not ready to commit? <br />
                <span className="text-brand-blue">Try Link Pro for $7.</span>
              </h3>
              
              <p className="mt-2 text-slate-500 max-w-md mx-auto">
                One-time payment. Full platform access, no subscription required. 
                Run real campaigns and see results before choosing a plan.
              </p>
              
              <Link
                href="/trial"
                className="group inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-purple-500 text-white font-bold shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 transition-all hover:scale-105"
              >
                Start for $7 →
                <span className="text-sm text-blue-200 font-normal">One-time, no subscription.</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-slate-500">
            Need custom limits or an SLA?{" "}
            <Link href="/contact" className="text-brand-blue font-semibold hover:underline">
              Talk to us →
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}