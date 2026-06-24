"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

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
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Header - Centered */}
      <div className="bg-white border-b border-slate-100">
  <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 lg:px-8 text-center m-10">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
      Get In Touch With{" "}
      <span className="bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
        Our Team
      </span>
    </h1>
    
    <div className="mt-4 h-0.5 w-16 bg-brand-blue/30 mx-auto" />
    
    <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
      Have Questions About Custom Integrations, Deployment Scales, Or Billing Automation? 
      Our Team Typically Responds Within One Business Day.
    </p>
  </div>
</div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8 ">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-brand-blue shrink-0 mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">Email</h3>
                  <a 
                    href="mailto:support@stackmsp.com" 
                    className="text-slate-600 hover:text-brand-blue transition-colors"
                  >
                    support@stackmsp.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-brand-blue shrink-0 mt-1">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">Phone</h3>
                  <a 
                    href="tel:+18005550199" 
                    className="text-slate-600 hover:text-brand-blue transition-colors"
                  >
                    +1 (800) 555-0199
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-brand-blue shrink-0 mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">Office</h3>
                  <p className="text-slate-600">100 Pine Street, San Francisco, CA 94111</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-dark">Thank you!</h2>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Your message has been received. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full rounded-2xl border border-slate-300 px-5 py-3.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full rounded-2xl border border-slate-300 px-5 py-3.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-brand-dark mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Acme Service Provider"
                      className="w-full rounded-2xl border border-slate-300 px-5 py-3.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your current RMM, CRM & PSA tools..."
                      className="w-full rounded-2xl border border-slate-300 px-5 py-3.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-brand-blue py-4 text-lg font-semibold text-white hover:bg-brand-blue/90 active:scale-[0.985] transition-all shadow-lg shadow-brand-blue/20"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}