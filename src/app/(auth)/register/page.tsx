"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";
import { RegisterFormType } from "@/lib/validation";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleRegister = async (data: RegisterFormType) => {
    try {
      setError("");
      setSuccess("");

      // Simulate API call - replace with actual backend endpoint
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const result = await response.json();

      setSuccess("Account created successfully! Redirecting...");

      // Store token if provided
      if (result.token) {
        localStorage.setItem("authToken", result.token);
      }

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/dashboard/user");
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Register error:", err);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      // Implement Google OAuth flow here
      console.log("Google signup - implement OAuth flow");
      // window.location.href = `/api/auth/google/callback?signup=true`;
    } catch (err) {
      console.error("Google signup error:", err);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join TravBo and start planning your next adventure"
      switchLink={{
        text: "Already have an account?",
        label: "Sign in",
        href: "/login",
      }}
    >
      {error && (
        <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {success && (
        <div className="mb-5 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">{success}</p>
        </div>
      )}

      <RegisterForm
        onSubmit={handleRegister}
        onGoogleSignup={handleGoogleSignup}
      />
    </AuthLayout>
  );
}
