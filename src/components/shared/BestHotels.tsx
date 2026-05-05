"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HotelCard from "@/components/cards/HotelCard";
import { getFeaturedHotelCards } from "../../services/hotel.service";

export default function BestHotels() {
  const hotels = getFeaturedHotelCards();
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, hotels.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold text-[#1f2937]">Best Hotels for Your Next Trip</h2>
        <p className="text-[#666666] mt-2 text-lg">
          Luxurious destinations, villas or resorts, browse accommodations at ShareTrip that meet the need. Book Long-term or short-term accommodation from our hotel deals
        </p>

        {/* Carousel */}
        <div className="mt-12 relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#FFAF19] text-white hover:bg-[#FF9500] transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous hotels"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#FFAF19] text-white hover:bg-[#FF9500] transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next hotels"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden px-4">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#FFAF19] w-8"
                    : "bg-[#dce3ec] hover:bg-[#FFAF19]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
