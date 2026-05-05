"use client";

import Image from "next/image";

const topRow = [
  {
    name: "Dhaka",
    flag: "🇧🇩",
    image: "https://images.unsplash.com/photo-1589395937772-f670d5f4b39c",
  },
  {
    name: "Kuala Lumpur",
    flag: "🇲🇾",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
  },
];

const bottomRow = [
  {
    name: "Bangkok",
    flag: "🇹🇭",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
  },
  {
    name: "New Delhi",
    flag: "🇮🇳",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
  },
  {
    name: "Kathmandu",
    flag: "🇳🇵",
    image: "https://images.unsplash.com/photo-1580627076189-9a6f2c4f0a8c",
  },
];

export default function TrendingDestinations() {
  return (
    <section className="py-16 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <h2 className="text-3xl font-bold">Trending destinations</h2>
        <p className="text-gray-500 mt-2">
          Travelers searching for Bangladesh also booked these
        </p>

        {/* Top Row (→ Right Slide) */}
        <div className="mt-8 overflow-hidden">
          <div className="flex gap-6 animate-right">
            {[...topRow, ...topRow].map((place, i) => (
              <Card key={i} place={place} big />
            ))}
          </div>
        </div>

        {/* Bottom Row (← Left Slide) */}
        <div className="mt-6 overflow-hidden">
          <div className="flex gap-6 animate-left">
            {[...bottomRow, ...bottomRow].map((place, i) => (
              <Card key={i} place={place} />
            ))}
          </div>
        </div>
      </div>

   
    </section>
  );
}

/* Card Component */
function Card({ place, big = false }: any) {
  return (
    <div
      className={`relative ${
        big ? "min-w-[500px] h-[260px]" : "min-w-[320px] h-[220px]"
      } rounded-2xl overflow-hidden group`}
    >
      <Image
        src={place.image}
        alt={place.name}
        fill
        className="object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute top-4 left-4 text-white">
        <h3 className="text-lg sm:text-xl font-semibold">
          {place.name} {place.flag}
        </h3>
      </div>
    </div>
  );
}