"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
                Get in touch with <span className="text-brand-blue">our team</span>
              </h1>
              <p className="mt-4 text-slate-500 text-base leading-relaxed">
                Have questions about custom integrations, deployment scales, or billing automation? Contact us and we will respond within one business day.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-brand-blue shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">Email</h3>
                  <p className="text-sm text-slate-500">support@stackmsp.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-brand-blue shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">Phone</h3>
                  <p className="text-sm text-slate-500">+1 (800) 555-0199</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-brand-blue shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">Office</h3>
                  <p className="text-sm text-slate-500">100 Pine Street, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold text-brand-dark">Thank you!</h2>
                <p className="text-slate-500 text-sm max-w-sm mx-auto">
                  Your message has been received. Our operations team will follow up with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-brand-dark mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Service Provider"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your current RMM, CRM & PSA tools..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-blue py-4 text-center font-semibold text-white hover:bg-brand-blue/90 transition-colors shadow-lg shadow-brand-blue/10"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
