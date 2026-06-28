"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  TrendingUp, 
  Clock, 
  Users, 
  Settings, 
  DollarSign,
  Calendar,
  User,
  ChevronRight,
  Mail,
  Zap,
  BarChart3,
  FileText,
  Briefcase,
  Layers,
  Target,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  const categories = [
    { name: "Business Growth", icon: TrendingUp, color: "blue" },
    { name: "Operations & Efficiency", icon: Settings, color: "purple" },
    { name: "Client Experience", icon: Users, color: "emerald" },
    { name: "Technology & Tools", icon: Layers, color: "amber" },
    { name: "Billing & Finance", icon: DollarSign, color: "rose" },
  ];

  const articles = [
    {
      title: "How to Reduce Admin Time by 15 Hours Per Week",
      excerpt: "Discover practical ways to reduce administrative workload using automation, better processes, and the right tools.",
      category: "Operations & Efficiency",
      date: "June 23, 2026",
      readTime: "8 min read",
      author: "The stackmsp Team",
      image: "",
      slug: "reduce-admin-time",
      featured: true,
    },
    {
      title: "The Ultimate Guide to MSP Contract Templates",
      excerpt: "Everything you need to know about creating, managing, and automating contracts for your MSP business.",
      category: "Billing & Finance",
      date: "June 18, 2026",
      readTime: "12 min read",
      author: "The stackmsp Team",
      image: "/resources-contract-guide.jpg",
      slug: "msp-contract-templates",
      featured: false,
    },
    {
      title: "7 Metrics Every MSP Owner Should Track",
      excerpt: "Learn which KPIs matter most for your MSP's growth, profitability, and client satisfaction.",
      category: "Business Growth",
      date: "June 12, 2026",
      readTime: "6 min read",
      author: "The stackmsp Team",
      image: "/resources-metrics.jpg",
      slug: "msp-metrics",
      featured: false,
    },
    // New card added
    {
      title: "How to Build a High-Performing MSP Team",
      excerpt: "Strategies for hiring, training, and retaining top talent in your managed services business.",
      category: "Business Growth",
      date: "June 8, 2026",
      readTime: "10 min read",
      author: "The stackmsp Team",
      image: "/resources-team-building.jpg",
      slug: "build-msp-team",
      featured: false,
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
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:bg-purple-100",
        gradient: "from-purple-500 to-purple-600",
        ring: "ring-purple-500/20",
      },
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        hover: "hover:bg-emerald-100",
        gradient: "from-emerald-500 to-emerald-600",
        ring: "ring-emerald-500/20",
      },
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-200",
        hover: "hover:bg-amber-100",
        gradient: "from-amber-500 to-amber-600",
        ring: "ring-amber-500/20",
      },
      rose: {
        bg: "bg-rose-50",
        text: "text-rose-600",
        border: "border-rose-200",
        hover: "hover:bg-rose-100",
        gradient: "from-rose-500 to-rose-600",
        ring: "ring-rose-500/20",
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
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs font-mono tracking-widest text-slate-300">RESOURCES & BLOG</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              MSP Insights &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            
            <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
            
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Practical guides, industry trends, and expert tips to help you run a more efficient and profitable MSP.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto container px-6 lg:px-8 -mt-10">
        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 mb-12"
        >
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Featured Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, idx) => {
              const colors = getColorClasses(category.color);
              const Icon = category.icon;
              return (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} ${colors.text} border ${colors.border} hover:${colors.hover} transition-all text-sm font-medium`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Featured Article - Updated Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side - Updated with new image */}
              <div className="relative h-64 md:h-auto bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10" />
                <Image
                  src="/company-story.jpg"
                  alt="How to Reduce Admin Time by 15 Hours Per Week"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full">
                    <Sparkles className="h-3 w-3" />
                    Featured
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    June 23, 2026
                  </span>
                  <span className="w-px h-4 bg-slate-200" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    8 min read
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  How to Reduce Admin Time by 15 Hours Per Week
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Discover practical ways to reduce administrative workload using automation, better processes, and the right tools. Perfect for MSP owners and managers.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      TS
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">The stackmsp Team</p>
                      <p className="text-xs text-slate-400">Operations & Efficiency</p>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-blue-600 font-semibold hover:gap-3 transition-all group/link"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Article Grid - Updated with all 4 articles (3 original + 1 new) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.slice(1).map((article, idx) => {
            const categoryColors = getColorClasses(
              article.category === "Operations & Efficiency" ? "purple" :
              article.category === "Billing & Finance" ? "rose" :
              "blue"
            );

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="group bg-white rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${categoryColors.bg} ${categoryColors.text} border ${categoryColors.border}`}>
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                    <span className="w-px h-4 bg-slate-200" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-[10px]">
                        {article.author.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="text-xs text-slate-600">{article.author}</span>
                    </div>
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative overflow-hidden"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-10 md:p-14 text-center">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Mail className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-xs font-mono tracking-widest text-slate-300">NEWSLETTER</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Subscribe to Our Newsletter
              </h3>
              
              <p className="text-slate-300 max-w-md mx-auto mb-6">
                Get monthly MSP tips, industry insights, and exclusive content delivered to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              
              <p className="text-xs text-slate-400 mt-3">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Related Articles</h3>
            <Link href="/resources" className="text-blue-600 font-semibold hover:gap-2 transition-all inline-flex items-center gap-1">
              View All
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <h4 className="font-bold text-slate-900 mb-2">The Ultimate MSP Contract Template Guide</h4>
              <p className="text-sm text-slate-500 mb-3">Everything you need to know about creating and managing MSP contracts.</p>
              <Link href="#" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <h4 className="font-bold text-slate-900 mb-2">10 Metrics Every MSP Should Track in 2026</h4>
              <p className="text-sm text-slate-500 mb-3">Learn which KPIs matter most for your MSP's growth and profitability.</p>
              <Link href="#" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <h4 className="font-bold text-slate-900 mb-2">How to Build a World-Class Client Portal</h4>
              <p className="text-sm text-slate-500 mb-3">Create a self-service experience that your clients will love.</p>
              <Link href="#" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-3xl border border-slate-200/50 p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl" />
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Ready to Transform Your MSP?
              </h3>
              <p className="mt-3 text-slate-500 max-w-md mx-auto">
                Join hundreds of service providers who are saving time and growing faster with stackmsp.
              </p>
              <Link
                href="/trial"
                className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:bg-blue-700 transition-all"
              >
                Try stackmsp Free for 30 Days
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}