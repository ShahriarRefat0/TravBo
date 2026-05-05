"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, LogOut, Menu, Settings, User } from "lucide-react";

const adminAvatar = "https://images.unsplash.com/photo-1494790108377-be9c29b29330";

type AdminNavbarProps = {
  onMenuClick: () => void;
};

export default function AdminNavbar({ onMenuClick }: AdminNavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Open admin sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <p className="text-sm text-slate-500">Admin workspace</p>
          <h1 className="text-xl font-semibold text-slate-900">Hotel Booking System</h1>
        </div>

        <div className="relative ml-auto">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 px-3 py-2 hover:bg-slate-50"
          >
            <Image
              src={adminAvatar}
              alt="Admin avatar"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-900">Admin User</p>
              <p className="text-xs text-slate-500">Super Admin</p>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>

          {open ? (
            <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <button className="flex w-full items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">
                <User className="h-4 w-4" /> Profile
              </button>
              <button className="flex w-full items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">
                <Settings className="h-4 w-4" /> Settings
              </button>
              <button className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50">
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
