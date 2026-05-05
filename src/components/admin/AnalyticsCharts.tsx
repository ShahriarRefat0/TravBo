"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RevenuePoint, RoleDistributionPoint } from "@/types/admin";

type AnalyticsChartsProps = {
  revenue: RevenuePoint[];
  roles: RoleDistributionPoint[];
};

const pieColors = ["#FFAF19", "#1f2937", "#64748b", "#94a3b8"];

export default function AnalyticsCharts({ revenue, roles }: AnalyticsChartsProps) {
  return (
    <section className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Bookings</h2>
          <p className="mt-1 text-sm text-slate-500">Monthly booking trend.</p>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="bookings" fill="#FFAF19" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Revenue</h2>
          <p className="mt-1 text-sm text-slate-500">Monthly revenue performance.</p>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#1f2937" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>

      <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">User roles</h2>
        <p className="mt-1 text-sm text-slate-500">Distribution across platform roles.</p>
        <div className="mt-6 flex flex-col items-center gap-6 lg:flex-row lg:items-start">
          <div className="h-80 w-full max-w-md">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={roles} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={3}>
                  {roles.map((entry, index) => (
                    <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:w-80">
            {roles.map((role, index) => (
              <div key={role.name} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: pieColors[index % pieColors.length] }} />
                  <p className="font-medium text-slate-900">{role.name}</p>
                </div>
                <p className="mt-2 text-sm text-slate-500">{role.value}% of users</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
