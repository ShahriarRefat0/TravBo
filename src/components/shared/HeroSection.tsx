"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3F3F3]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/55 to-black/25 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
          alt="Travel background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[85vh] flex items-center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-white max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm mb-6 font-medium">
                <Sparkles className="h-4 w-4 text-[#FFAF19]" />
                AI-powered travel planning & booking
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-1px" }}>
                Plan your next journey with{" "}
                <span className="text-[#FFAF19]">TravBo</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-white/80 leading-8 max-w-xl font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Discover destinations, generate intelligent itineraries with AI, and book everything
                in one place — fast and simple.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/explore"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFAF19] px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-[#FF9500] hover:scale-[1.02] tracking-wide"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Explore Destinations
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/ai-planner"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 tracking-wide"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Try AI Planner
                </Link>
              </div>

            
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;