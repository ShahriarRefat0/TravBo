"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { HotelCardData } from "@/types/hotel";

type HotelCardProps = {
  hotel: HotelCardData;
};

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link href={`/hotel/${hotel.id}`} className="shrink-0 w-1/3 group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
        <div className="relative h-64 overflow-hidden bg-gray-200">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#1f2937] line-clamp-2">
            {hotel.name}
          </h3>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1">
              {[...Array(hotel.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#FFAF19] text-[#FFAF19]"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-[#1f2937]">
              {hotel.rating}
            </span>
            <span className="text-sm text-[#666666]">
              ({hotel.reviews} reviews)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
