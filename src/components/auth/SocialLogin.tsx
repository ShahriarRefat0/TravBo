"use client";

import React, { useState } from "react";

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path
      fill="currentColor"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="currentColor"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="currentColor"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="currentColor"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

type SocialLoginProps = {
  onGoogleClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

export default function SocialLogin({
  onGoogleClick,
  isLoading = false,
  disabled = false,
}: SocialLoginProps) {
  return (
    <div className="mt-6">
      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-[#e5e7eb]" />
        <span className="text-sm text-[#64748b]">Or continue with</span>
        <div className="flex-1 h-px bg-[#e5e7eb]" />
      </div>

      {/* Google Login Button */}
      <button
        onClick={onGoogleClick}
        disabled={isLoading || disabled}
        type="button"
        className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-[#e5e7eb] rounded-lg text-[#1f2937] font-medium hover:bg-[#f9fafb] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <GoogleIcon />
        <span className="text-sm">
          {isLoading ? "Connecting..." : "Google"}
        </span>
      </button>
    </div>
  );
}
