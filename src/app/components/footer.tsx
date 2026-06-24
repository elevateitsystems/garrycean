import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaArrowRight 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-dark to-black text-white/90 border-t border-white/10">
      <div className="mx-auto container px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/white-logo.png"
                alt="StackMSP Logo"
                width={140}
                height={45}
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-lg text-gray-400 max-w-md leading-relaxed">
              The unified operations workspace for modern MSPs. 
              RMM, PSA, CRM, and billing — finally in one beautiful platform.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: FaTwitter, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: FaGithub, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110 border border-white/10 hover:border-white/20"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* Solutions */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-6">
                Solutions
              </h3>
              <ul className="space-y-3 text-[15px]">
                {[
                  { name: "PSA & CRM", href: "/solutions" },
                  { name: "Unified RMM", href: "/solutions" },
                  { name: "Billing & Finance", href: "/solutions" },
                  { name: "Automation", href: "/solutions" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      {item.name}
                      <FaArrowRight className="w-3 h-3 ml-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-6">
                Company
              </h3>
              <ul className="space-y-3 text-[15px]">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Careers", href: "/careers" },
                  { name: "Contact", href: "/contact" },
                  { name: "Blog", href: "/blog" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      {item.name}
                      <FaArrowRight className="w-3 h-3 ml-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-6">
                Resources
              </h3>
              <ul className="space-y-3 text-[15px]">
                {[
                  { name: "Documentation", href: "/docs" },
                  { name: "Help Center", href: "/help" },
                  { name: "Free Trial", href: "/trial" },
                  { name: "What's New", href: "/changelog" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      {item.name}
                      <FaArrowRight className="w-3 h-3 ml-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} StackMSP Inc. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security
            </a>
          </div>

          <p className="text-[10px] text-gray-600">Made for MSPs who move fast ⚡</p>
        </div>
      </div>
    </footer>
  );
}