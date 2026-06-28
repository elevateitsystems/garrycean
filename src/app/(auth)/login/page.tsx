
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="StackMSP Logo"
                  width={160}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Welcome Text */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Sign in to your StackMSP account
              </p>
            </div>

            {/* Login Form */}
            <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 pr-12 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-colors"
                      placeholder="••••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue/20 transition-colors"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                    Remember me
                  </label>
                </div>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-brand-blue hover:text-brand-blue/80 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-brand-blue px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 hover:bg-brand-blue/95 transition-all hover:shadow-xl"
              >
                Sign in
              </button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-slate-500">or continue with</span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="space-y-3">
              <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all">
                <svg className="h-5 w-5" viewBox="0 0 21 21" fill="none">
                  <path d="M10.5 0C4.7 0 0 4.7 0 10.5C0 16.3 4.7 21 10.5 21C16.3 21 21 16.3 21 10.5C21 4.7 16.3 0 10.5 0ZM15.4 11.4H13.4V15.4C13.4 15.7 13.1 16 12.8 16H11.2C10.9 16 10.6 15.7 10.6 15.4V11.4H8.6C8.3 11.4 8 11.1 8 10.8V9.2C8 8.9 8.3 8.6 8.6 8.6H10.6V6.6C10.6 6.3 10.9 6 11.2 6H12.8C13.1 6 13.4 6.3 13.4 6.6V8.6H15.4C15.7 8.6 16 8.9 16 9.2V10.8C16 11.1 15.7 11.4 15.4 11.4Z" fill="#0078D4"/>
                </svg>
                Sign in with Microsoft
              </button>

              <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.69 15.53 17 16.62 15.98 17.38L19.28 20.05C21.36 18.13 22.56 15.4 22.56 12.25Z" fill="#4285F4"/>
                  <path d="M12 23C14.89 23 17.33 22.05 19.28 20.05L15.98 17.38C14.92 18.1 13.57 18.58 12 18.58C9.21 18.58 6.86 16.76 5.99 14.28L2.56 16.98C4.51 20.38 8.02 23 12 23Z" fill="#34A853"/>
                  <path d="M5.99 14.28C5.74 13.56 5.61 12.79 5.61 12C5.61 11.21 5.74 10.44 5.99 9.72V2.02H2.56C1.42 4.09 0.75 6.46 0.75 9C0.75 11.54 1.42 13.91 2.56 15.98L5.99 12.28V14.28Z" fill="#FBBC05"/>
                  <path d="M12 5.42C13.67 5.42 15.15 6.01 16.28 7.04L19.38 3.94C17.33 2.02 14.89 1 12 1C8.02 1 4.51 3.62 2.56 7.02L5.99 9.72C6.86 7.24 9.21 5.42 12 5.42Z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-slate-500">
              New to StackMSP?{" "}
              <Link href="/signup" className="font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors">
                Create an account
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <div className="relative w-full max-w-lg h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Screenshot 2026-06-24 at 5.59.58 PM.png"
              alt="StackMSP Dashboard Preview"
              fill
              className="object-cover"
              priority
            />
            {/* Optional overlay with text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white text-sm font-medium">
                One Platform. Complete MSP Operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}