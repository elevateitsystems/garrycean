"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles, 
  Users, 
  Target, 
  Shield, 
  Zap, 
  Heart, 
  CheckCircle2,
  Award,
  Briefcase,
  Star,
  Globe,
  Mail,
  Phone,
  Calendar,
  MapPin
} from "lucide-react";
import { motion } from "framer-motion";

export default function CompanyPage() {
  const values = [
    {
      icon: Zap,
      title: "Simplicity",
      description: "Powerful doesn't have to mean complicated.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Your business depends on us, so we build with uptime and data security as non-negotiables.",
      color: "purple",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your growth is our growth.",
      color: "emerald",
    },
    {
      icon: Target,
      title: "Efficiency",
      description: "Every feature is designed to save you time.",
      color: "amber",
    },
  ];

  const team = [
    {
      name: "Samuel Agunloye",
      role: "CEO",
      bio: "Visionary leader with deep expertise in MSP operations and business growth.",
      initials: "SA",
    },
    {
      name: "Julien Odil",
      role: "CFO",
      bio: "Financial strategist ensuring sustainable growth and operational excellence.",
      initials: "JO",
    },
    {
      name: "Laurie Carius",
      role: "Head of Customer Success",
      bio: "Dedicated to ensuring every MSP gets maximum value from the platform.",
      initials: "LC",
    },
  ];

  const getColorClasses = (color: string) => {
    const styles = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:bg-blue-100",
        gradient: "from-blue-500 to-blue-600",
        ring: "ring-blue-500/20",
        iconBg: "bg-blue-100",
        shadow: "shadow-blue-500/20",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:bg-purple-100",
        gradient: "from-purple-500 to-purple-600",
        ring: "ring-purple-500/20",
        iconBg: "bg-purple-100",
        shadow: "shadow-purple-500/20",
      },
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        hover: "hover:bg-emerald-100",
        gradient: "from-emerald-500 to-emerald-600",
        ring: "ring-emerald-500/20",
        iconBg: "bg-emerald-100",
        shadow: "shadow-emerald-500/20",
      },
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-200",
        hover: "hover:bg-amber-100",
        gradient: "from-amber-500 to-amber-600",
        ring: "ring-amber-500/20",
        iconBg: "bg-amber-100",
        shadow: "shadow-amber-500/20",
      },
    };
    return styles[color as keyof typeof styles] || styles.blue;
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/3 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative mx-auto container px-6 pt-32 pb-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Users className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs font-mono tracking-widest text-slate-300">ABOUT US</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              We Built stackmsp Because{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                We've Been in Your Shoes
              </span>
            </h1>
            
            <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
            
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Frustrated by fragmented tools, manual processes, and lack of visibility, our team set out to 
              create the all-in-one platform that MSPs, IT consultants, and service providers actually want to use.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto container px-6 lg:px-8 -mt-10">
        
        {/* Our Story - Updated with client's exact text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 md:p-12 mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border border-blue-500/20">
                <Sparkles className="h-3.5 w-3.5" />
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                From MSP Pain to <span className="text-blue-600">Powerful Solution</span>
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
              <p>
                stackmsp was born from real experience, real frustration, and a clear belief that MSPs deserved a better way to manage their business.
              </p>
              <p>
                We began developing stackmsp in 2023 after spending years facing the same challenges many service providers deal with every day: scattered client information, time-consuming administrative work, unreliable invoicing, disconnected tools, and too many manual processes slowing the business down.
              </p>
              <p className="font-semibold text-slate-800">
                We knew there had to be a better way.
              </p>
              <p>
                Building stackmsp was not easy. It took three years of development, countless sleepless nights, personal investment, and a deep commitment to solving the problems MSPs know all too well. Every feature was shaped by the goal of helping service providers save time, stay organized, improve client relationships, and run more profitable businesses.
              </p>
              <p>
                On June 11, 2026, stackmsp officially launched. Just four days later, on June 15, 2026, we welcomed our first client — a milestone that made the entire journey worth it.
              </p>
              <p>
                Today, stackmsp brings client management, contracts, automated invoicing, proposals, team collaboration, self-service tools, and real-time insights into one modern platform built for MSPs and IT service providers.
              </p>
              <p className="font-semibold text-slate-800">
                Our mission is simple: help MSPs reduce admin work, win more deals, serve clients better, and grow with confidence.
              </p>
            </div>

            {/* Image added below the text */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200/50 shadow-lg">
              <Image
                src="/company-story.jpg"
                alt="stackmsp team working together"
                width={1200}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Section - Updated with 20+ MSPs and 2+ countries */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-blue-600">2023</div>
              <p className="text-sm text-slate-500 mt-1">Started</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-purple-600">20+</div>
              <p className="text-sm text-slate-500 mt-1">MSPs Trust Us</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-emerald-600">2+</div>
              <p className="text-sm text-slate-500 mt-1">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-amber-600">4.9/5</div>
              <p className="text-sm text-slate-500 mt-1">Average Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Meet the Team - Updated with Samuel, Julien, Laurie */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border border-blue-500/20">
              <Users className="h-3.5 w-3.5" />
              Meet the Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              The Team Behind <span className="text-blue-600">stackmsp</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="relative mx-auto mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl mx-auto">
                    {member.initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
                <h4 className="font-bold text-slate-900">{member.name}</h4>
                <p className="text-sm font-medium text-blue-600 mb-2">{member.role}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border border-amber-500/20">
              <Heart className="h-3.5 w-3.5" />
              What Drives Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our <span className="text-amber-600">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const colors = getColorClasses(value.color);
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.text} mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Join Our Journey */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-10 md:p-14 text-center">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-xs font-mono tracking-widest text-slate-300">JOIN US</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
                Ready to Transform Your MSP?
              </h3>
              
              <p className="text-slate-300 max-w-md mx-auto mb-8">
                Whether you're a solo consultant just getting started or leading a growing team, 
                stackmsp is here to help you work smarter.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/trial"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25"
                >
                  Start Your Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}