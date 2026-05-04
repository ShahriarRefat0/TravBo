import { AdminHotel } from "@/types/admin";

type HotelsTableProps = {
  hotels: AdminHotel[];
  onEdit?: (hotel: AdminHotel) => void;
};

export default function HotelsTable({ hotels, onEdit }: HotelsTableProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Hotels</h2>
          <p className="mt-1 text-sm text-slate-500">Manage listings, pricing, and publishing state.</p>
        </div>
      </div>

      {hotels.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          No hotels found.
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="pb-3 pr-4">Hotel Name</th>
                <th className="pb-3 pr-4">Location</th>
                <th className="pb-3 pr-4">Price</th>
                <th className="pb-3 pr-4">Rating</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {hotels.map((hotel) => (
                <tr key={hotel.id} className="text-sm text-slate-700">
                  <td className="py-4 pr-4 font-medium text-slate-900">{hotel.title}</td>
                  <td className="py-4 pr-4">{hotel.location}</td>
                  <td className="py-4 pr-4">${hotel.pricePerNight}</td>
                  <td className="py-4 pr-4">{hotel.rating.toFixed(1)}</td>
                  <td className="py-4 pr-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${hotel.status === "Published" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                      {hotel.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <div className="inline-flex gap-2">
                      <button onClick={() => onEdit?.(hotel)} className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-[#FFAF19]">Edit</button>
                      <button className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-600 hover:border-rose-400">Delete</button>
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
