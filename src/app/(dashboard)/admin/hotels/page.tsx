"use client";

import { useState } from "react";
import HotelForm from "@/components/admin/HotelForm";
import HotelsTable from "@/components/admin/HotelsTable";
import { adminHotels } from "@/services/admin.service";
import { AdminHotel } from "@/types/admin";

export default function AdminHotelsPage() {
  const [selectedHotel, setSelectedHotel] = useState<AdminHotel | null>(null);

  return (
    <div className="space-y-6">
      <HotelsTable hotels={adminHotels} onEdit={(hotel) => setSelectedHotel(hotel)} />
      <HotelForm
        initialValues={
          selectedHotel
            ? {
                title: selectedHotel.title,
                description: `${selectedHotel.title} is a premium stay option in ${selectedHotel.location}.`,
                price: selectedHotel.pricePerNight,
                location: selectedHotel.location,
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
              }
            : undefined
        }
        onSubmit={() => setSelectedHotel(null)}
      />
    </div>
  );
}
