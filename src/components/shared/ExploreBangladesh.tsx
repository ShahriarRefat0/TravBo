"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bangladeshDestinations = [
  {
    name: "Chittagong",
    hotels: 36,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Dhaka",
    hotels: 43,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846ca9?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Sreemangal",
    hotels: 6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Gazipur",
    hotels: 12,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Cox's Bazar",
    hotels: 28,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Sylhet",
    hotels: 18,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
  },
];

const ExploreBangladesh: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(bangladeshDestinations.length / itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const displayedDestinations = bangladeshDestinations.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f2937] mb-4">
            Explore Bangladesh
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Prepare to experience Bangladesh's rich culture and explore the majestic beauties of Cox's Bazar, Sylhet, Bandarban, Sajek Valley, Rangamati etc. Plan your trip now!
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedDestinations.map((dest) => (
              <DestinationCarousel key={dest.name} destination={dest} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full border-2 border-[#e5eaf1] hover:border-[#FFAF19] hover:bg-[#fff5e6] transition-all duration-300"
              aria-label="Previous destinations"
            >
              <ChevronLeft className="h-6 w-6 text-[#1f2937]" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[#1f7aff]"
                      : "w-2.5 bg-[#d1d5db] hover:bg-[#9ca3af]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full border-2 border-[#e5eaf1] hover:border-[#FFAF19] hover:bg-[#fff5e6] transition-all duration-300"
              aria-label="Next destinations"
            >
              <ChevronRight className="h-6 w-6 text-[#1f2937]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

function DestinationCarousel({
  destination,
}: {
  destination: (typeof bangladeshDestinations)[0];
}) {
  return (
    <div className="relative group overflow-hidden rounded-2xl h-48 sm:h-56 cursor-pointer">
      <Image
        src={destination.image}
        alt={destination.name}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          {destination.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-200">
          {destination.hotels} Hotels Available
        </p>
      </div>
    </div>
  );
}

export default ExploreBangladesh;
