"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Send, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    company: "", 
    message: "" 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Header - Premium Design */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-20 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs font-mono tracking-widest text-slate-300">CONTACT US</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Get In Touch With{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            
            <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
            
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Have questions about custom integrations, deployment scales, or billing automation? 
              Our team typically responds within one business day.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto container px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information - Premium Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 space-y-8">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Contact Information</h2>
                <p className="text-sm text-slate-500 mt-1">Reach out to us through any of these channels</p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Email</h3>
                    <a 
                      href="mailto:support@stackmsp.com" 
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      support@stackmsp.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-purple-50 text-purple-600 shrink-0 group-hover:bg-purple-100 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Phone</h3>
                    <a 
                      href="tel:+18005550199" 
                      className="text-slate-600 hover:text-purple-600 transition-colors"
                    >
                      +1 (800) 555-0199
                    </a>
                  </div>
                </motion.div>

               
              </div>

              {/* Trust Badge */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">JD</div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-bold text-purple-600">SK</div>
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-600">MR</div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Trusted by 2,000+ MSPs</p>
                    <p className="text-xs text-slate-400">4.9/5 average rating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6">
              <p className="text-sm font-semibold text-slate-700">Quick Links</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <Link href="/pricing" className="text-xs text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-white rounded-full border border-slate-200 hover:border-blue-200">
                  Pricing
                </Link>
                <Link href="/features" className="text-xs text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-white rounded-full border border-slate-200 hover:border-blue-200">
                  Features
                </Link>
                <Link href="/trial" className="text-xs text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-white rounded-full border border-slate-200 hover:border-blue-200">
                  Free Trial
                </Link>
                <Link href="/resources" className="text-xs text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-white rounded-full border border-slate-200 hover:border-blue-200">
                  Resources
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Premium Design */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-200/50">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-6"
                >
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Thank You!</h2>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Your message has been received. Our team will get back to you within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                  >
                    Send another message
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Acme Service Provider"
                      className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your current RMM, CRM & PSA tools..."
                      className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-y placeholder:text-slate-400"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <div className="flex gap-1">
                      <span className="text-green-500">✓</span>
                      <span>Secure form</span>
                    </div>
                    <span className="w-px h-4 bg-slate-200" />
                    <span>We respect your privacy</span>
                    <span className="w-px h-4 bg-slate-200" />
                    <span>No spam</span>
                  </div>

                  <button
                    type="submit"
                    className="group w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 text-base font-semibold text-white hover:from-blue-700 hover:to-blue-800 active:scale-[0.985] transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}