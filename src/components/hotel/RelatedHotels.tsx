import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { RelatedHotel as RelatedHotelType } from "@/types/hotel";

type RelatedHotelsProps = {
  hotels: RelatedHotelType[];
  currency: string;
};

export default function RelatedHotels({ hotels, currency }: RelatedHotelsProps) {
  return (
    <section className="rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6">
      <h2 className="text-xl font-semibold text-[#1f2937]">Related hotels</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel) => (
          <Link
            key={hotel.id}
            href={`/hotel/${hotel.id}`}
            className="rounded-xl border border-[#e2e8f0] overflow-hidden bg-white hover:shadow-md transition-shadow"
          >
            <div className="relative h-42">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-3">
              <h3 className="font-semibold text-[#1f2937] line-clamp-1">{hotel.name}</h3>
              <p className="text-sm text-[#64748b] mt-1 line-clamp-1">{hotel.location}</p>
              <div className="mt-2 flex items-center justify-between">
                <p className="inline-flex items-center gap-1 text-sm text-[#334155]">
                  <Star className="w-4 h-4 fill-[#FFAF19] text-[#FFAF19]" />
                  {hotel.rating.toFixed(1)}
                </p>
                <p className="text-sm font-semibold text-[#1f2937]">
                  {currency} {hotel.pricePerNight}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
