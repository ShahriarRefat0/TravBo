"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HotelGalleryProps = {
  hotelName: string;
  images: string[];
};

export default function HotelGallery({ hotelName, images }: HotelGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) {
    return (
      <div className="rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] h-80 flex items-center justify-center text-[#64748b]">
        No images available.
      </div>
    );
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="space-y-3">
      <div className="relative h-64 sm:h-90 lg:h-105 rounded-2xl overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt={`${hotelName} image ${activeIndex + 1}`}
          fill
          priority
          className="object-cover"
        />

        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center"
          aria-label="Previous hotel image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center"
          aria-label="Next hotel image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
        {images.slice(0, 5).map((image, idx) => (
          <button
            type="button"
            key={`${image}-${idx}`}
            onClick={() => setActiveIndex(idx)}
            className={`relative h-18 sm:h-22 rounded-lg overflow-hidden border-2 ${
              idx === activeIndex ? "border-[#FFAF19]" : "border-transparent"
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <Image
              src={image}
              alt={`${hotelName} thumbnail ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
