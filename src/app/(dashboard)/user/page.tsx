import Link from "next/link";
import OverviewCards from "@/components/dashboard/OverviewCards";
import BookingTable from "@/components/dashboard/BookingTable";
import { getDashboardOverview } from "@/services/dashboard.service";

export default function UserDashboardPage() {
  const { stats, bookings } = getDashboardOverview();

  return (
    <div className="space-y-6">
      <OverviewCards stats={stats} />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)]">
        <BookingTable bookings={bookings} maxItems={3} />

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Quick summary</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Manage your stays, update your profile, and review past hotel experiences from one place.
          </p>

          <div className="mt-5 space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <span>Profile completeness</span>
              <span className="font-semibold text-slate-900">86%</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <span>Next stay</span>
              <span className="font-semibold text-slate-900">12 May</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <span>Pending bookings</span>
              <span className="font-semibold text-slate-900">2</span>
            </div>
          </div>

          <Link
            href="/user/profile"
            className="mt-5 inline-flex rounded-2xl bg-[#FFAF19] px-4 py-3 font-semibold text-slate-900 hover:bg-[#FF9500]"
          >
            Update profile
          </Link>
        </div>
      </section>
    </div>
  );
}
