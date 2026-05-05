import { AdminBooking } from "@/types/admin";

type BookingTableProps = {
  bookings: AdminBooking[];
};

export default function BookingTable({ bookings }: BookingTableProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Bookings</h2>
      <p className="mt-1 text-sm text-slate-500">Review guest bookings and update their status.</p>

      {bookings.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          No bookings found.
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="pb-3 pr-4">User</th>
                <th className="pb-3 pr-4">Hotel</th>
                <th className="pb-3 pr-4">Date</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3 pr-4">Price</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bookings.map((booking) => (
                <tr key={booking.id} className="text-sm text-slate-700">
                  <td className="py-4 pr-4 font-medium text-slate-900">{booking.userName}</td>
                  <td className="py-4 pr-4">{booking.hotelName}</td>
                  <td className="py-4 pr-4">{booking.date}</td>
                  <td className="py-4 pr-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusTone(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 pr-4">${booking.price}</td>
                  <td className="py-4 text-right">
                    <div className="inline-flex gap-2">
                      <button className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-[#FFAF19]">Confirm</button>
                      <button className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-600 hover:border-rose-400">Cancel</button>
                    </div>
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

function statusTone(status: AdminBooking["status"]) {
  if (status === "Confirmed") return "bg-emerald-100 text-emerald-700";
  if (status === "Pending") return "bg-amber-100 text-amber-700";
  return "bg-rose-100 text-rose-700";
}
