"use client";

import React from "react";
import Image from "next/image";

const offers = [
  {
    title: "Global Medical Excellence",
    subtitle: "Top hospitals & packages",
    img: "https://images.unsplash.com/photo-1580281657522-5f1e7c8b9d4f?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Seasonal Getaways",
    subtitle: "Curated holiday packages",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "City Escapes",
    subtitle: "Short trips & deals",
    img: "https://images.unsplash.com/photo-1505765055546-4af8b39b8d7b?auto=format&fit=crop&w=800&q=60",
  },
];

const ExclusiveOffers: React.FC = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Exclusive Offers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o) => (
            <article key={o.title} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="relative h-44 w-full">
                <Image src={o.img} alt={o.title} fill className="object-cover" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg text-[#1f2937]">{o.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{o.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOffers;
