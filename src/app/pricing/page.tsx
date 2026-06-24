import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Pricing | StackMSP",
  description: "Simple, predictable, scale-as-you-grow pricing plans for StackMSP workspace solutions.",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      desc: "For small operations starting to unify their workflows.",
      features: [
        "Up to 5 operator seats",
        "CRM & ticketing base",
        "Up to 150 monitored devices",
        "Standard API key access",
        "Next-business-day email support"
      ],
      cta: "Start 14-day free trial",
      popular: false
    },
    {
      name: "Growth",
      price: "$349",
      period: "/month",
      desc: "Designed for scaling teams requiring detailed automations.",
      features: [
        "Up to 15 operator seats",
        "Advanced automation & script engine",
        "Up to 1,000 monitored devices",
        "Custom webhook support",
        "Priority 24/7 help desk access"
      ],
      cta: "Start 14-day free trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "Custom structures for large organizations matching compliance standards.",
      features: [
        "Unlimited operator seats",
        "Dedicated database clusters",
        "Unlimited monitored devices",
        "Custom feature integrations",
        "Assigned account manager & setup team"
      ],
      cta: "Contact Enterprise Sales",
      popular: false
    }
  ];

  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 m-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
            Simple, Transparent <span className="text-brand-blue">Plans</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Choose the workspace scale that aligns with your operational goals. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 bg-white rounded-3xl border transition-all duration-300 ${
                plan.popular
                  ? "border-brand-blue shadow-xl ring-2 ring-brand-blue/10 scale-105 z-10"
                  : "border-slate-200 shadow-sm hover:border-slate-300"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold text-white tracking-wide uppercase">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-brand-dark">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-500 min-h-[40px]">{plan.desc}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight text-brand-dark">{plan.price}</span>
                  <span className="text-sm font-semibold text-slate-500">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="h-5 w-5 text-brand-blue shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.price === "Custom" ? "/contact" : "/trial"}
                className={`w-full text-center py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-md"
                    : "bg-slate-50 hover:bg-slate-100 text-brand-dark border border-slate-200"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
