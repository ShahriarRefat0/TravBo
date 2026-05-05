import { CalendarCheck2, CircleCheckBig, MessageSquareMore } from "lucide-react";
import { DashboardStats } from "@/types/user";

type OverviewCardsProps = {
  stats: DashboardStats;
};

const cards = [
  {
    key: "totalBookings",
    label: "Total Bookings",
    icon: CalendarCheck2,
    tone: "bg-[#FFAF19]",
  },
  {
    key: "activeBookings",
    label: "Active Bookings",
    icon: CircleCheckBig,
    tone: "bg-slate-900",
  },
  {
    key: "totalReviews",
    label: "Total Reviews",
    icon: MessageSquareMore,
    tone: "bg-slate-700",
  },
] as const;

export default function OverviewCards({ stats }: OverviewCardsProps) {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;
        const value = stats[card.key];

        return (
          <article key={card.key} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">{card.label}</p>
                <h3 className="mt-2 text-3xl font-bold text-slate-900">{value}</h3>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${card.tone}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">Clean snapshot of your booking activity.</p>
          </article>
        );
      })}
    </section>
  );
}
