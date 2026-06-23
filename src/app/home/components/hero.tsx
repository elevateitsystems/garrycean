import React from "react";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-[80px] relative overflow-hidden min-h-[95vh] flex items-center justify-center text-white pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-950">
      {/* Background Image Layer with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        // style={{
        //   backgroundImage: `linear-gradient(to bottom, rgba(8, 15, 30, 0.75), rgba(8, 15, 30, 0.98)), url('/')`,
        // }}
      />

      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-8 items-center">
          {/* Left Side Content */}
          <div className="flex-1 flex flex-col justify-center space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              The All-in-One Platform{" "}
              <span className="text-brand-blue">Built for Modern</span> <br />{" "}
              MSPs
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-light">
              Streamline operations, automate workflows, and scale your managed
              services business with confidence. Everything you need to manage
              clients, contracts, invoicing, and team collaboration in one
              powerful platform.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/trial"
                className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-blue/20 hover:bg-brand-blue/95 transition-all duration-200 transform hover:-translate-y-[1px]"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-1.5 rounded-[6px] border border-white/25 bg-white/5 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
              >
                <Play className="h-4 w-4 text-brand-blue fill-brand-blue" />
                Watch Demo
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-white/10 text-slate-300 text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-blue" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-blue" />
                <span>1-Month Free Trial</span>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 relative rounded-[6px] border border-white/10 bg-white/50 p-1.5 shadow-2xl backdrop-blur-sm overflow-hidden w-full">
            {/* header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 px-2 mb-1.5">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] text-black/70 font-mono">
                OUR PRIMARY GOAL
              </span>
              <span className="w-8" />
            </div>

            {/* image wrapper */}
            <div className="relative w-full h-[clamp(200px,40vw,500px)] rounded-[6px] overflow-hidden">
              <Image
                src="/stackmsp-landing.jpg"
                alt="StackMSP System Visualization Dashboard"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
