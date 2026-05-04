import StatsCards from "@/components/admin/StatsCards";
import BookingTable from "@/components/admin/BookingTable";
import { getAdminDashboardData } from "@/services/admin.service";

export default function AdminDashboardPage() {
  const { stats, bookings, revenue, roles } = getAdminDashboardData();

  return (
    <div className="space-y-6">
      <StatsCards stats={stats} />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
        <BookingTable bookings={bookings} />

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Quick analytics</h2>
          <div className="mt-5 space-y-4">
            {revenue.slice(-3).map((point) => (
              <div key={point.month} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-slate-900">{point.month}</p>
                  <p className="text-sm font-semibold text-[#FFAF19]">${point.revenue.toLocaleString()}</p>
                </div>
                <p className="mt-1 text-sm text-slate-500">{point.bookings} bookings</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-900">Role mix</p>
            <div className="mt-4 space-y-3">
              {roles.map((role) => (
                <div key={role.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{role.name}</span>
                    <span className="font-semibold text-slate-900">{role.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-[#FFAF19]" style={{ width: `${role.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
