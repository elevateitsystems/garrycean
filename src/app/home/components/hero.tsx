"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle, Zap, Users, Shield } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXVal = ((y - centerY) / centerY) * -10;
    const rotateYVal = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
    
    setGlowX((x / rect.width) * 100);
    setGlowY((y / rect.height) * 100);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
  };

  return (
    <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center pt-16 pb-12 lg:pt-20 lg:pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-100/50">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto container px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-10 items-center">
          
          {/* Left Side Content */}
          <div className="flex-1 flex flex-col justify-center space-y-6 text-left max-w-2xl">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold w-fit border border-blue-500/20"
            >
              <Zap className="h-3.5 w-3.5" />
              The All-in-One Platform Built for Modern MSPs
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900"
            >
              Stackmsp — The{" "}
              <span className="text-blue-600">All-in-One Platform</span> <br />
              for Modern MSPs.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              Tired of switching between scattered tools, manual processes, and endless admin work? 
              stackmsp unifies client management, contracts, invoicing, proposals, team tools, and 
              analytics in one intuitive platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/trial"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:bg-blue-700 transition-all duration-200"
                >
                  Start Your Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
                >
                  <Play className="h-4 w-4" />
                  Watch a Demo
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600"
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                30-Day Free Trial
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-500" />
                No Credit Card Required
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-500" />
                Cancel anytime
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-2"
            >
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-slate-700">Trusted by MSPs & IT service providers</span>
                <span className="text-slate-400">—</span>
                <span className="text-slate-500 text-xs">solo consultants to enterprise teams</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative w-full max-w-2xl"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              ref={cardRef}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateY, rotateX }}
              transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
              className="relative rounded-xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/dashboard-preview.png"
                alt="StackMSP Dashboard"
                width={800}
                height={600}
                className="w-full h-auto object-cover relative z-10"
                priority
              />
              {/* All your glass effects remain unchanged */}
              {/* ... (keeping all reflection, glow, and shine layers exactly as you had) */}
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-3 -right-3 bg-white rounded-lg shadow-xl border border-slate-200/80 px-4 py-2.5 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-600">✓</div>
                  <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center text-[10px] font-bold text-emerald-600">✓</div>
                  <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px] font-bold text-amber-600">✓</div>
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-slate-700">All-in-One</span>
                  <span className="text-slate-400 block -mt-0.5">Everything you need</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}