import {
  AirVent,
  Car,
  Coffee,
  Dumbbell,
  Shield,
  UtensilsCrossed,
  Waves,
  Wifi,
} from "lucide-react";
import { AmenityKey } from "@/types/hotel";

type AmenitiesProps = {
  amenities: AmenityKey[];
};

const amenityMeta: Record<AmenityKey, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
  wifi: { label: "Free WiFi", icon: Wifi },
  pool: { label: "Pool", icon: Waves },
  parking: { label: "Parking", icon: Car },
  gym: { label: "Gym", icon: Dumbbell },
  restaurant: { label: "Restaurant", icon: UtensilsCrossed },
  security: { label: "24/7 Security", icon: Shield },
  ac: { label: "Air Conditioning", icon: AirVent },
  breakfast: { label: "Breakfast", icon: Coffee },
};

export default function Amenities({ amenities }: AmenitiesProps) {
  return (
    <section className="rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6">
      <h2 className="text-xl font-semibold text-[#1f2937]">Amenities</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {amenities.map((key) => {
          const meta = amenityMeta[key];
          const Icon = meta.icon;

          return (
            <div
              key={key}
              className="flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2"
            >
              <Icon className="w-4 h-4 text-[#FFAF19]" />
              <span className="text-sm text-[#334155]">{meta.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
