import { Building2, CircleDollarSign, Users, CalendarRange } from "lucide-react";
import { AdminStats } from "@/types/admin";

type StatsCardsProps = {
  stats: AdminStats;
};

const cards = [
  { key: "totalUsers", label: "Total Users", icon: Users, tone: "bg-slate-900" },
  { key: "totalHotels", label: "Total Hotels", icon: Building2, tone: "bg-[#FFAF19]" },
  { key: "totalBookings", label: "Total Bookings", icon: CalendarRange, tone: "bg-slate-700" },
  { key: "totalRevenue", label: "Total Revenue", icon: CircleDollarSign, tone: "bg-emerald-600" },
] as const;

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        const value = stats[card.key];

        return (
          <article key={card.key} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">{card.label}</p>
                <h3 className="mt-2 text-3xl font-bold text-slate-900">
                  {card.key === "totalRevenue" ? `$${value.toLocaleString()}` : value.toLocaleString()}
                </h3>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${card.tone}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
