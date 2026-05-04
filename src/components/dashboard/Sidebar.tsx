"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, LayoutDashboard, Star, UserCircle2, X } from "lucide-react";

const links = [
  { label: "Dashboard", href: "/user", icon: LayoutDashboard },
  { label: "Profile", href: "/user/profile", icon: UserCircle2 },
  { label: "My Bookings", href: "/user/bookings", icon: CalendarDays },
  { label: "My Reviews", href: "/user/reviews", icon: Star },
];

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {open ? (
        <button
          type="button"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
          aria-label="Close sidebar overlay"
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200 bg-white px-4 py-5 transition-transform duration-300 lg:static lg:translate-x-0 lg:flex lg:flex-col ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/user" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFAF19] font-bold text-slate-900">
              TB
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">TravBo</p>
              <h2 className="text-lg font-bold text-slate-900">User Dashboard</h2>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 flex-1 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "bg-[#FFAF19] text-slate-900 shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Need help?</p>
          <p className="mt-1">Contact support for booking, profile, or review related issues.</p>
        </div>
      </aside>
    </>
  );
}
