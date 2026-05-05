import { HotelLocation } from "@/types/hotel";

type LocationMapProps = {
  location: HotelLocation;
};

export default function LocationMap({ location }: LocationMapProps) {
  return (
    <section className="rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6">
      <h2 className="text-xl font-semibold text-[#1f2937]">Location</h2>
      <p className="mt-2 text-[#475569]">{location.address}</p>

      <div className="mt-4 rounded-xl overflow-hidden border border-[#e2e8f0]">
        <iframe
          title="Hotel location map"
          src={location.mapEmbedUrl}
          width="100%"
          height="320"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
