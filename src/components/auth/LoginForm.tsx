"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import AuthInput from "./AuthInput";
import SocialLogin from "./SocialLogin";
import { loginSchema, type LoginFormType } from "@/lib/validation";

type LoginFormProps = {
  onSubmit?: (data: LoginFormType) => Promise<void> | void;
  onGoogleLogin?: () => void;
};

export default function LoginForm({
  onSubmit,
  onGoogleLogin,
}: LoginFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleFormSubmit = async (data: LoginFormType) => {
    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(data);
      }
      reset();
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleClick = async () => {
    setIsGoogleLoading(true);
    try {
      if (onGoogleLogin) {
        await onGoogleLogin();
      }
      // In production, this would trigger Google OAuth flow
      console.log("Google login initiated");
    } catch (error) {
      console.error("Google login error:", error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
      {/* Email Input */}
      <AuthInput
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        {...register("email")}
        error={errors.email?.message}
        autoComplete="email"
        required
      />

      {/* Password Input */}
      <AuthInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        {...register("password")}
        error={errors.password?.message}
        autoComplete="current-password"
        showPasswordToggle
        required
      />

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between pt-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="w-4 h-4 border border-[#d1d5db] rounded accent-[#FFAF19] cursor-pointer"
          />
          <span className="text-sm text-[#64748b]">Remember me</span>
        </label>

        <Link
          href="/forgot-password"
          className="text-sm text-[#FFAF19] hover:text-[#FF9500] transition-colors font-medium"
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-6 px-4 py-2.5 bg-[#FFAF19] text-white font-semibold rounded-lg hover:bg-[#FF9500] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </button>

      {/* Social Login */}
      <SocialLogin onGoogleClick={handleGoogleClick} isLoading={isGoogleLoading} />
    </form>
  );
}
