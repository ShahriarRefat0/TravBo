"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  switchLink?: {
    text: string;
    label: string;
    href: string;
  };
  showImage?: boolean;
};

export default function AuthLayout({
  children,
  title,
  subtitle,
  switchLink,
  showImage = true,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#F3F3F3] via-white to-[#F3F3F3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Form Section */}
        <div className="flex flex-col justify-center w-full">
          {/* Header */}
          <div className="mb-8 text-center lg:text-left">
            <h1
              className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="text-base text-[#64748b]">{subtitle}</p>
            )}
          </div>

          {/* Form Card */}
          <div className="w-full max-w-sm mx-auto lg:mx-0 bg-white rounded-2xl border border-[#e5e7eb] shadow-lg p-6 sm:p-8">
            {children}
          </div>

          {/* Switch Auth Link */}
          {switchLink && (
            <div className="mt-6 text-center lg:text-left">
              <p className="text-[#64748b] text-sm">
                {switchLink.text}{" "}
                <Link
                  href={switchLink.href}
                  className="text-[#FFAF19] font-semibold hover:text-[#FF9500] transition-colors"
                >
                  {switchLink.label}
                </Link>
              </p>
            </div>
          )}
        </div>

        {/* Right: Branding/Image Section */}
        {showImage && (
          <div className="hidden lg:flex flex-col justify-center items-center relative">
            {/* Gradient background decoration */}
            <div className="absolute inset-0 bg-linear-to-br from-[#FFAF19]/10 to-[#FF9500]/5 rounded-3xl blur-3xl" />

            {/* Branding Content */}
            <div className="relative text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-[#FFAF19] rounded-2xl flex items-center justify-center mx-auto font-bold text-white text-3xl shadow-lg">
                  TB
                </div>
              </div>

              <h2
                className="text-3xl font-bold text-[#1f2937] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                TravBo
              </h2>

              <p className="text-[#64748b] text-lg max-w-xs mb-6 leading-relaxed">
                Your AI-powered travel planning & booking companion
              </p>

              {/* Features */}
              <div className="space-y-4 mt-8">
                {[
                  "✨ AI-powered itineraries",
                  "🏨 Best hotel deals",
                  "🌍 Explore world destinations",
                ].map((feature) => (
                  <div key={feature} className="flex items-center justify-center gap-3">
                    <div className="w-2 h-2 bg-[#FFAF19] rounded-full" />
                    <span className="text-[#475569]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
