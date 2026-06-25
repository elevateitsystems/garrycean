"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  CheckCircle2, 
  ChevronRight, 
  Loader2, 
  Sparkles, 
  ArrowLeft,
  Building2,
  Globe,
  User,
  Mail,
  Lock,
  Zap,
  Shield,
  Users,
  Briefcase,
  Star
} from "lucide-react";

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
    { num: 1, label: "Choose Plan", sub: "Select subscription tier", icon: Sparkles },
    { num: 2, label: "Company Info", sub: "Enter company details", icon: Building2 },
    { num: 3, label: "Admin Account", sub: "Add administrator", icon: User },
    { num: 4, label: "Review", sub: "Verify information", icon: Shield },
  ];

  const plans = [
    { 
      id: "starter", 
      name: "Starter", 
      desc: "For small teams and consultants", 
      price: "$149",
      features: ["5 seats", "150 devices", "Standard support"],
      icon: Briefcase,
      popular: false
    },
    { 
      id: "growth", 
      name: "Growth", 
      desc: "Designed for scaling operations", 
      price: "$349",
      features: ["15 seats", "1,000 devices", "Priority support"],
      icon: Users,
      popular: true
    },
    { 
      id: "enterprise", 
      name: "Enterprise", 
      desc: "For corporate compliance", 
      price: "Custom",
      features: ["Unlimited seats", "Unlimited devices", "Dedicated support"],
      icon: Shield,
      popular: false
    },
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(5);
      }, 1500);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen py-16 sm:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto container px-6 lg:px-8">
        
        {/* Header section matching onboarding */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12 space-y-4"
        >
          <Link href="/" className=" p-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all duration-300 group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-semibold border border-brand-blue/20">
            <Sparkles className="h-3.5 w-3.5" />
            Free Trial
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Welcome to <span className="text-brand-blue">StackMSP</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Let's get your tenant account set up in just a few steps
          </p>
        </motion.div>

        {/* Stepper Wizard Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-200 hidden md:block" />
            <div 
              className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-brand-blue to-purple-500 transition-all duration-500 hidden md:block"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            />
            
            <div className="grid grid-cols-4 gap-2 relative">
              {steps.map((s) => {
                const Icon = s.icon;
                const isActive = step === s.num;
                const isCompleted = step > s.num;
                
                return (
                  <div key={s.num} className="flex flex-col items-center">
                    <div 
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive 
                          ? "bg-gradient-to-r from-brand-blue to-purple-500 text-white shadow-lg shadow-brand-blue/30 scale-110" 
                          : isCompleted
                            ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                            : "bg-slate-200 text-slate-400"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <Icon className="h-4 w-4" />
                      )}
                    </div>
                    <div className="mt-2 text-center hidden sm:block">
                      <p className={`text-xs font-bold ${
                        isActive ? "text-brand-blue" : isCompleted ? "text-emerald-600" : "text-slate-400"
                      }`}>
                        {s.label}
                      </p>
                      <p className="text-[10px] text-slate-400">{s.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Form Content Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-200/50"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Choose Your Plan */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="p-6 bg-gradient-to-br from-blue-50/80 to-purple-50/80 border border-blue-100 rounded-2xl space-y-2">
                  <h3 className="text-lg font-bold text-brand-blue flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    🎉 1-Month Free Trial Included!
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    All plans include a full month of free access. No payment required during trial. 
                    Full access to all features immediately.
                  </p>
                  <p className="text-xs text-slate-500 italic flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    Note: Selecting a plan is optional. You can skip this step and choose later.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {plans.map((p) => {
                    const Icon = p.icon;
                    const isSelected = selectedPlan === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setSelectedPlan(p.id)}
                        className={`relative flex flex-col text-left p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                          isSelected 
                            ? "border-brand-blue ring-2 ring-brand-blue/20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 shadow-lg shadow-brand-blue/10" 
                            : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                        }`}
                      >
                        {p.popular && (
                          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-brand-blue to-purple-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <Star className="h-2.5 w-2.5" />
                            Popular
                          </span>
                        )}
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl mb-3 ${
                          isSelected ? "bg-brand-blue/10 text-brand-blue" : "bg-slate-100 text-slate-400"
                        }`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-bold text-slate-900">{p.name}</span>
                        <span className="text-xs text-slate-400 mt-1 min-h-[32px]">{p.desc}</span>
                        <span className="text-2xl font-black text-brand-blue mt-3">{p.price}</span>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {p.features.map((f, i) => (
                            <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                              {f}
                            </span>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Company Information */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-brand-blue" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={form.companyName}
                      onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                      placeholder="Acme Systems"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-brand-blue" />
                      Company Website
                    </label>
                    <input
                      type="url"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                      placeholder="https://acme.com"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Admin Users */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-sm text-slate-600 flex items-start gap-3">
                  <User className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                  <span>This will be the primary administrator account with full access to all features.</span>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <User className="h-4 w-4 text-brand-blue" />
                      Administrator Name
                    </label>
                    <input
                      type="text"
                      value={form.adminName}
                      onChange={(e) => setForm({ ...form, adminName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-brand-blue" />
                      Administrator Email
                    </label>
                    <input
                      type="email"
                      value={form.adminEmail}
                      onChange={(e) => setForm({ ...form, adminEmail: e.target.value })}
                      placeholder="jane@acme.com"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Lock className="h-4 w-4 text-brand-blue" />
                      Secure Password
                    </label>
                    <input
                      type="password"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                    <p className="text-xs text-slate-400 mt-1.5">Must be at least 8 characters with a number and special character</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Confirm */}
            {step === 4 && (
              <motion.div
                key="step4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <Shield className="h-6 w-6 text-brand-blue" />
                  <h3 className="text-xl font-bold text-slate-800">Verify Account Details</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Selected Plan</span>
                    <span className="text-slate-900 font-semibold capitalize mt-1 block">
                      {selectedPlan ? plans.find(p => p.id === selectedPlan)?.name : "None (Skip)"}
                    </span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Company Name</span>
                    <span className="text-slate-900 font-semibold mt-1 block">{form.companyName || "N/A"}</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Website</span>
                    <span className="text-slate-900 font-semibold mt-1 block">{form.website || "N/A"}</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Admin Email</span>
                    <span className="text-slate-900 font-semibold mt-1 block">{form.adminEmail || "N/A"}</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">Ready to launch!</p>
                    <p className="text-xs text-emerald-600">All information looks good. Click submit to create your workspace.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Finalized Success View */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 space-y-6"
              >
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Tenant Successfully Configured!</h2>
                  <p className="text-slate-500 text-sm mt-2 max-w-sm mx-auto">
                    Your StackMSP workspace instance is fully prepared. Sign in using your administrator account:
                  </p>
                  <div className="mt-4 inline-block bg-slate-50 text-brand-blue text-sm font-mono py-2.5 px-6 rounded-xl border border-slate-200">
                    {form.adminEmail}
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-purple-500 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 transition-all hover:scale-105"
                  >
                    Go to Dashboard
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Navigation of Wizard */}
          {step <= 4 && (
            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold transition-all"
              >
                Back
              </button>
              <div className="text-xs text-slate-400 hidden sm:block">
                Step {step} of 4
              </div>
              <button
                onClick={handleNext}
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-brand-blue to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-brand-blue/25 text-sm font-semibold transition-all disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : step === 4 ? (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Submit & Spin Up
                  </>
                ) : (
                  <>
                    Next Step
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}