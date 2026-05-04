import Image from "next/image";
import { HotelRoom } from "@/types/hotel";

type RoomListProps = {
  currency: string;
  rooms: HotelRoom[];
};

export default function RoomList({ currency, rooms }: RoomListProps) {
  return (
    <section className="rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6">
      <h2 className="text-xl font-semibold text-[#1f2937]">Available rooms</h2>

      <div className="mt-4 grid gap-4">
        {rooms.map((room) => (
          <article
            key={room.id}
            className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)_170px] rounded-xl border border-[#e2e8f0] p-3 sm:p-4"
          >
            <div className="relative h-42.5 md:h-full min-h-35 rounded-lg overflow-hidden">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-[#1f2937]">{room.name}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {room.features.map((feature) => (
                  <li
                    key={`${room.id}-${feature}`}
                    className="rounded-full bg-[#f8fafc] px-3 py-1 text-sm text-[#475569] border border-[#e2e8f0]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between items-start md:items-end">
              <p className="text-xl font-bold text-[#1f2937]">
                {currency} {room.pricePerNight}
                <span className="text-sm font-medium text-[#64748b]"> / night</span>
              </p>
              <button
                type="button"
                className="mt-3 md:mt-0 rounded-lg bg-[#FFAF19] px-4 py-2 text-white font-semibold hover:bg-[#FF9500] transition-colors"
              >
                Book now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
