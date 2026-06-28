"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Shield, Users, Briefcase, HelpCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: "$99.99",
      annualPrice: "$89.99",
      period: "/month",
      desc: "For solo consultants & small teams",
      features: [
        "1 super admin",
        "Client Hub",
        "Contracts & Invoicing",
        "Proposal Builder",
        "Analytics",
        "Team Tools",
        "Client Portal"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "blue",
      savings: "Save 10% with annual billing",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For established MSPs and larger teams",
      features: [
        "Unlimited seats",
        "Dedicated custom domain",
        "24/7 priority support",
        "Advanced security & compliance",
        "Dedicated account manager",
        "Custom onboarding"
      ],
      cta: "Contact Sales Team",
      popular: false,
      color: "purple",
      isEnterprise: true,
    },
  ];

  // Additional Seats Table Data
  const seatPricing = [
    { role: "Sales", first5: "$59.99", next5: "$49.99", plus11: "$44.99" },
    { role: "Admin", first5: "$59.99", next5: "$49.99", plus11: "$44.99" },
    { role: "Technical Officer", first5: "$89.99", next5: "$69.99", plus11: "$59.99" },
    { role: "IT Manager", first5: "$89.99", next5: "$69.99", plus11: "$59.99" },
    { role: "Super Admin", first5: "$109.99", next5: "$99.99", plus11: "$79.99" },
  ];

  // Feature Comparison Table - Updated with Starter including more features
  const comparisonFeatures = [
    { feature: "Clients", starter: "Up to 10", enterprise: "Unlimited" },
    { feature: "Client Self-Service Portal", starter: "✓", enterprise: "✓" },
    { feature: "Contracts & Templates", starter: "Basic", enterprise: "Advanced + API" },
    { feature: "Automated Invoicing", starter: "Basic", enterprise: "Full" },
    { feature: "Proposals & e-Signatures", starter: "✓", enterprise: "✓" },
    { feature: "Team Management & Kanban", starter: "✓", enterprise: "✓" },
    { feature: "Real-Time Analytics", starter: "Basic", enterprise: "Custom" },
    { feature: "Custom Branding", starter: "✓", enterprise: "✓" },
    { feature: "API & Integrations", starter: "✓", enterprise: "Full" },
    { feature: "Support", starter: "Email", enterprise: "Dedicated" },
    { feature: "Onboarding Assistance", starter: "✓", enterprise: "Full Training" },
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
        hover: "hover:border-blue-300",
      },
      purple: {
        border: "border-purple-200/50",
        bg: "bg-purple-50",
        text: "text-purple-600",
        ring: "ring-purple-500/20",
        gradient: "from-purple-500 to-purple-600",
        shadow: "shadow-purple-500/20",
        badge: "bg-purple-100 text-purple-700",
        hover: "hover:border-purple-300",
      },
    };
    return styles[color as keyof typeof styles] || styles.blue;
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-16 sm:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto container px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="mt-10 inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-blue-500/20">
            <Sparkles className="h-3.5 w-3.5" />
            Simple, Transparent Pricing
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Choose the Perfect <br />
            <span className="text-blue-600">Plan for Your MSP</span>
          </h1>
          
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Start free. Scale as you grow. All plans include core features with no hidden fees.
          </p>

          {/* Toggle - Updated with 10% savings */}
          <div className="inline-flex items-center gap-3 mt-8 bg-white rounded-full p-1.5 border border-slate-200/80 shadow-sm">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                !isAnnual 
                  ? "bg-blue-600 text-white" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                isAnnual 
                  ? "bg-blue-600 text-white" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Annual <span className="text-xs text-emerald-500">Save 10%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const colors = getColorStyles(plan.color);
            // Get the current price based on billing cycle
            const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                  plan.popular
                    ? `border-blue-500 shadow-2xl ring-2 ring-blue-500/10 scale-105 z-10 ${colors.shadow}`
                    : `border-slate-200/80 shadow-lg hover:shadow-xl ${colors.hover}`
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-1.5 text-xs font-bold tracking-wider uppercase">
                      <Sparkles className="h-3 w-3 inline mr-1.5" />
                      Most Popular
                    </div>
                  </div>
                )}

                {plan.isEnterprise && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-1.5 text-xs font-bold tracking-wider uppercase">
                      <Sparkles className="h-3 w-3 inline mr-1.5" />
                      Custom Pricing
                    </div>
                  </div>
                )}

                <div className={`p-8 pt-${plan.popular || plan.isEnterprise ? '10' : '8'} flex-1 flex flex-col`}>
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{plan.desc}</p>
                    
                    <div className="mt-4 flex items-baseline gap-1">
                      {plan.isEnterprise ? (
                        <span className="text-4xl font-black tracking-tight text-slate-900">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-4xl font-black tracking-tight text-slate-900">{currentPrice}</span>
                          <span className="text-sm font-semibold text-slate-500">{plan.period}</span>
                        </>
                      )}
                    </div>
                    {plan.savings && isAnnual && !plan.isEnterprise && (
                      <span className="text-xs text-emerald-600 font-semibold">{plan.savings}</span>
                    )}
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
                    href={plan.isEnterprise ? "/contact" : "/trial"}
                    className={`group w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg ${colors.shadow} hover:shadow-xl hover:scale-105`
                        : plan.isEnterprise
                        ? `bg-purple-600 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:bg-purple-700 hover:scale-105`
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

        {/* 30-Day Free Trial Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
            <span className="text-emerald-600 text-sm font-semibold">🎯 30-Day Free Trial</span>
            <span className="text-emerald-600/70 text-xs">Full access with one seat of each role. No credit card required.</span>
          </div>
        </motion.div>

        {/* Additional Seats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Additional Seats <span className="text-sm font-normal text-slate-500">(Yearly Billing Only)</span>
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Add team members with role-based pricing. Volume discounts apply.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-600">Role</th>
                    <th className="text-center px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-600">First 5 Seats</th>
                    <th className="text-center px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-600">Next 5 Seats (6–10)</th>
                    <th className="text-center px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-600">11+ Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {seatPricing.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-3.5 text-sm font-semibold text-slate-700">{row.role}</td>
                      <td className="px-6 py-3.5 text-sm text-center text-slate-600">{row.first5}</td>
                      <td className="px-6 py-3.5 text-sm text-center text-slate-600">{row.next5}</td>
                      <td className="px-6 py-3.5 text-sm text-center text-slate-600">{row.plus11}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 bg-slate-50/50 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                <span className="font-semibold">Note:</span> Base Pro plan includes 1 Super Admin. Additional seats are billed annually.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature Comparison Table - Updated */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Feature Comparison</h3>
            <p className="text-sm text-slate-500 mt-1">
              Everything you need to run your MSP efficiently
            </p>
          </div>
          
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-600">Feature</th>
                    <th className="text-center px-6 py-4 text-xs font-bold uppercase tracking-wider text-blue-600">Starter</th>
                    <th className="text-center px-6 py-4 text-xs font-bold uppercase tracking-wider text-purple-600">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-3.5 text-sm font-medium text-slate-700">{row.feature}</td>
                      <td className={`px-6 py-3.5 text-sm text-center ${
                        row.starter === "✓" ? "text-emerald-600 font-semibold" : 
                        row.starter === "—" ? "text-slate-300" : "text-slate-600"
                      }`}>
                        {row.starter}
                      </td>
                      <td className={`px-6 py-3.5 text-sm text-center ${
                        row.enterprise === "✓" ? "text-emerald-600 font-semibold" : 
                        row.enterprise === "—" ? "text-slate-300" : "text-slate-600"
                      }`}>
                        {row.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Enterprise Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-6"
        >
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            <span className="font-semibold">Note:</span> The Enterprise plan is available for marketing and sales purposes. 
            Prospective customers should contact our sales team for custom pricing and setup. 
            It will not appear as a self-service option during onboarding.
          </p>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-500" />
                How does the 30-day trial work?
              </h4>
              <p className="mt-2 text-sm text-slate-600">You get one seat of each role for 30 days. No credit card required.</p>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-500" />
                Can I add seats anytime?
              </h4>
              <p className="mt-2 text-sm text-slate-600">Yes. Additional seats are prorated for the remainder of your annual term.</p>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-500" />
                Is there a monthly billing option?
              </h4>
              <p className="mt-2 text-sm text-slate-600">Only the base Pro plan can be paid monthly. All additional seats are annual.</p>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-500" />
                What is a Super Admin?
              </h4>
              <p className="mt-2 text-sm text-slate-600">The highest permission level — can manage all settings, users, and billing.</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-3xl border border-slate-200/50 p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl" />
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-slate-900">
                Ready to Simplify Your <br />
                <span className="text-blue-600">MSP Operations?</span>
              </h3>
              
              <p className="mt-3 text-slate-500 max-w-md mx-auto">
                Join hundreds of service providers who are saving time and growing faster with stackmsp.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link
                  href="/trial"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:bg-blue-700 transition-all"
                >
                  Start Your Free 30-Day Trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-slate-700 font-bold border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Schedule a Personalized Demo
                </Link>
              </div>

              {/* Trust Bar */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-500" />
                  Secure payments
                </span>
                <span className="w-px h-5 bg-slate-200 hidden sm:block" />
                <span className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-emerald-500" />
                  30-day money-back guarantee
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}