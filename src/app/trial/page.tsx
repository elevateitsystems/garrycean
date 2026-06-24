"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Check, CheckCircle2, ChevronRight, Loader2 } from "lucide-react";

export default function TrialPage() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<string | null>("growth");
  const [form, setForm] = useState({
    companyName: "",
    website: "",
    adminName: "",
    adminEmail: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const steps = [
    { num: 1, label: "Choose Your Plan", sub: "Select subscription tier" },
    { num: 2, label: "Company Information", sub: "Enter company details" },
    { num: 3, label: "Admin Users", sub: "Add administrator accounts" },
    { num: 4, label: "Review & Confirm", sub: "Verify information" },
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(5); // completion screen
      }, 1500);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto container px-6 lg:px-8">
        
        {/* Header section matching onboarding */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Link href="/" className="text-sm font-semibold text-brand-blue hover:underline inline-flex items-center gap-1">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Welcome to StackMSP</h1>
          <p className="text-slate-600">Let's get your tenant account set up in just a few steps</p>
        </div>

        {/* Stepper Wizard Bar */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div 
                key={s.num} 
                className={`relative p-4 rounded-2xl border transition-all duration-300 ${
                  step === s.num 
                    ? "bg-white border-brand-blue ring-2 ring-brand-blue/10 shadow-sm" 
                    : step > s.num 
                      ? "bg-blue-50/50 border-blue-100 text-slate-500" 
                      : "bg-white border-slate-200 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`h-8 w-8 flex items-center justify-center rounded-full text-sm font-bold ${
                    step >= s.num ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-400"
                  }`}>
                    {s.num}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Step {s.num}</p>
                    <h3 className="text-sm font-bold text-slate-800">{s.label}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content Wrapper */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
          
          {/* Step 1: Choose Your Plan */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-2xl space-y-2">
                <h3 className="text-lg font-bold text-brand-blue flex items-center gap-2">
                  🎉 1-Month Free Trial Included!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  All plans include a full month of free access. No payment required during trial. Full access to all features immediately.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Note: Selecting a plan is optional. You can skip this step and choose a subscription plan later from your dashboard.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: "starter", name: "Starter", desc: "For small teams and consultants", price: "$149" },
                  { id: "growth", name: "Growth", desc: "Designed for scaling operations", price: "$349" },
                  { id: "enterprise", name: "Enterprise", desc: "For corporate compliance and scaling", price: "Custom" },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlan(p.id)}
                    className={`flex flex-col text-left p-6 rounded-2xl border transition-all ${
                      selectedPlan === p.id 
                        ? "border-brand-blue ring-2 ring-brand-blue/10 bg-blue-50/10" 
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-sm font-bold text-slate-900">{p.name}</span>
                    <span className="text-xs text-slate-400 mt-1 min-h-[32px]">{p.desc}</span>
                    <span className="text-2xl font-black text-brand-blue mt-4">{p.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Company Information */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Company Name</label>
                <input
                  type="text"
                  value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  placeholder="Acme Systems"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Company Website</label>
                <input
                  type="url"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  placeholder="https://acme.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                />
              </div>
            </div>
          )}

          {/* Step 3: Admin Users */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Administrator Name</label>
                <input
                  type="text"
                  value={form.adminName}
                  onChange={(e) => setForm({ ...form, adminName: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Administrator Email</label>
                <input
                  type="email"
                  value={form.adminEmail}
                  onChange={(e) => setForm({ ...form, adminEmail: e.target.value })}
                  placeholder="jane@acme.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Secure Password</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                />
              </div>
            </div>
          )}

          {/* Step 4: Review & Confirm */}
          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Verify Account Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm leading-relaxed">
                <div>
                  <span className="block font-bold text-slate-400">Selected Plan:</span>
                  <span className="capitalize text-slate-900">{selectedPlan || "None (Skip)"}</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-400">Company Name:</span>
                  <span className="text-slate-900">{form.companyName || "N/A"}</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-400">Website:</span>
                  <span className="text-slate-900">{form.website || "N/A"}</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-400">Admin Email:</span>
                  <span className="text-slate-900">{form.adminEmail || "N/A"}</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Finalized Success View */}
          {step === 5 && (
            <div className="text-center py-12 space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">Tenant Successfully Configured!</h2>
                <p className="text-slate-500 text-sm mt-2 max-w-sm mx-auto">
                  Your StackMSP workspace instance is fully prepared. Sign in using your administrator account:
                </p>
                <code className="block mt-4 bg-slate-50 text-brand-blue text-sm font-mono py-2 rounded-lg border border-slate-200">
                  {form.adminEmail}
                </code>
              </div>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-blue/90 transition-colors"
              >
                Go to Dashboard
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          {/* Footer Navigation of Wizard */}
          {step <= 4 && (
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 disabled:opacity-50 text-sm font-semibold transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-brand-blue/90 text-sm font-semibold transition-all shadow-md shadow-brand-blue/10"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : step === 4 ? "Submit & Spin Up" : "Next"}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
