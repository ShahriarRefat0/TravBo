"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import { LoginFormType } from "@/lib/validation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleLogin = async (data: LoginFormType) => {
    try {
      setError("");
      
      // Simulate API call - replace with actual backend endpoint
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          rememberMe: data.rememberMe,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const result = await response.json();

      // Store token if provided
      if (result.token) {
        localStorage.setItem("authToken", result.token);
      }

      // Redirect to dashboard
      router.push("/dashboard/user");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Login error:", err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Implement Google OAuth flow here
      // This would typically use NextAuth.js or similar
      console.log("Google login - implement OAuth flow");
      // window.location.href = `/api/auth/google`;
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your TravBo account"
      switchLink={{
        text: "Don't have an account?",
        label: "Sign up",
        href: "/register",
      }}
    >
      {error && (
        <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <LoginForm onSubmit={handleLogin} onGoogleLogin={handleGoogleLogin} />
    </AuthLayout>
  );
}
