import { MapPin, Star } from "lucide-react";

type HotelInfoProps = {
  name: string;
  locationLabel: string;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  currency: string;
};

export default function HotelInfo({
  name,
  locationLabel,
  rating,
  reviewCount,
  pricePerNight,
  currency,
}: HotelInfoProps) {
  return (
    <section className="rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1f2937]">{name}</h1>
          <p className="mt-2 inline-flex items-center gap-2 text-[#64748b]">
            <MapPin className="w-4 h-4 text-[#FFAF19]" />
            {locationLabel}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Star className="w-4 h-4 fill-[#FFAF19] text-[#FFAF19]" />
            <span className="font-semibold text-[#1f2937]">{rating.toFixed(1)}</span>
            <span className="text-[#64748b]">({reviewCount} reviews)</span>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <p className="text-sm text-[#64748b]">Starting from</p>
          <p className="text-2xl font-bold text-[#1f2937]">
            {currency} {pricePerNight}
            <span className="text-sm font-medium text-[#64748b]"> / night</span>
          </p>
        </div>
      </div>
    </section>
  );
}
