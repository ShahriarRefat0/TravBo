"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "./AuthInput";
import SocialLogin from "./SocialLogin";
import { registerSchema, type RegisterFormType } from "@/lib/validation";

type RegisterFormProps = {
  onSubmit?: (data: RegisterFormType) => Promise<void> | void;
  onGoogleSignup?: () => void;
};

export default function RegisterForm({
  onSubmit,
  onGoogleSignup,
}: RegisterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  // Calculate password strength
  React.useEffect(() => {
    if (!password) {
      setPasswordStrength(0);
      return;
    }

    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*#?&]/.test(password)) strength++;

    setPasswordStrength(Math.min(strength, 4));
  }, [password]);

  const handleFormSubmit = async (data: RegisterFormType) => {
    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(data);
      }
      reset();
    } catch (error) {
      console.error("Register error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleClick = async () => {
    setIsGoogleLoading(true);
    try {
      if (onGoogleSignup) {
        await onGoogleSignup();
      }
      console.log("Google signup initiated");
    } catch (error) {
      console.error("Google signup error:", error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["", "bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500"];

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
      {/* Name Input */}
      <AuthInput
        label="Full Name"
        type="text"
        placeholder="John Doe"
        {...register("name")}
        error={errors.name?.message}
        autoComplete="name"
        required
      />

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
      <div>
        <AuthInput
          label="Password"
          type="password"
          placeholder="Create a strong password"
          {...register("password")}
          error={errors.password?.message}
          autoComplete="new-password"
          showPasswordToggle
          required
        />

        {/* Password Strength Indicator */}
        {password && (
          <div className="mt-2 space-y-1">
            <div className="flex gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${
                    i < passwordStrength ? strengthColors[passwordStrength] : "bg-[#e5e7eb]"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-[#64748b]">
              Strength: <span className={strengthColors[passwordStrength]?.split('-')[1] ? "text-" + strengthColors[passwordStrength] : ""}>{strengthLabels[passwordStrength]}</span>
            </p>
          </div>
        )}
      </div>

      {/* Confirm Password Input */}
      <AuthInput
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
        autoComplete="new-password"
        showPasswordToggle
        required
      />

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
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </button>

      {/* Social Login */}
      <SocialLogin onGoogleClick={handleGoogleClick} isLoading={isGoogleLoading} />
    </form>
  );
}
