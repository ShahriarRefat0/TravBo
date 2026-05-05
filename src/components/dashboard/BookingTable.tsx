import Link from "next/link";
import { Booking, BookingStatus } from "@/types/booking";

type BookingTableProps = {
  bookings: Booking[];
  title?: string;
  maxItems?: number;
};

const statusStyles: Record<BookingStatus, string> = {
  Pending: "bg-amber-100 text-amber-700",
  Confirmed: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-rose-100 text-rose-700",
};

export default function BookingTable({ bookings, title = "Recent bookings", maxItems }: BookingTableProps) {
  const visibleBookings = typeof maxItems === "number" ? bookings.slice(0, maxItems) : bookings;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">Track booking status, price, and schedule.</p>
        </div>
        <Link href="/user/bookings" className="text-sm font-semibold text-[#FFAF19] hover:text-[#FF9500]">
          View all
        </Link>
      </div>

      {visibleBookings.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          You do not have any bookings yet.
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="pb-3 pr-4">Hotel Name</th>
                <th className="pb-3 pr-4">Date</th>
                <th className="pb-3 pr-4">Price</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visibleBookings.map((booking) => (
                <tr key={booking.id} className="text-sm text-slate-700">
                  <td className="py-4 pr-4 font-medium text-slate-900">{booking.hotelName}</td>
                  <td className="py-4 pr-4">{booking.date}</td>
                  <td className="py-4 pr-4">${booking.price}</td>
                  <td className="py-4 pr-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <button
                      type="button"
                      className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-[#FFAF19] hover:text-[#FF9500]"
                    >
                      {booking.status === "Cancelled" ? "View" : "Cancel"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
