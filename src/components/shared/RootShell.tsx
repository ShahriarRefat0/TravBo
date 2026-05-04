"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

type RootShellProps = {
  children: React.ReactNode;
};

export default function RootShell({ children }: RootShellProps) {
  const pathname = usePathname();
  const isDashboardRoute = pathname.startsWith("/user") || pathname.startsWith("/admin");

  return (
    <>
      {!isDashboardRoute ? <Navbar /> : null}
      {children}
      {!isDashboardRoute ? <Footer /> : null}
    </>
  );
}
