import { notFound } from "next/navigation";
import Amenities from "@/components/hotel/Amenities";
import BookingCard from "@/components/hotel/BookingCard";
import HotelDescription from "@/components/hotel/HotelDescription";
import HotelGallery from "@/components/hotel/HotelGallery";
import HotelInfo from "@/components/hotel/HotelInfo";
import LocationMap from "@/components/hotel/LocationMap";
import RelatedHotels from "@/components/hotel/RelatedHotels";
import ReviewSection from "@/components/hotel/ReviewSection";
import ReviewSummaryAI from "@/components/hotel/ReviewSummaryAI";
import RoomList from "@/components/hotel/RoomList";
import { getHotelById } from "@/services/hotel.service";

type HotelDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function HotelDetailsPage({ params }: HotelDetailsPageProps) {
  const { id } = await params;
  const hotel = getHotelById(id);

  if (!hotel) {
    notFound();
  }

  return (
    <main className="bg-[#f8fafc] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        <HotelGallery hotelName={hotel.name} images={hotel.images} />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <HotelInfo
              name={hotel.name}
              locationLabel={hotel.locationLabel}
              rating={hotel.rating}
              reviewCount={hotel.reviewCount}
              pricePerNight={hotel.pricePerNight}
              currency={hotel.currency}
            />
            <HotelDescription description={hotel.description} />
            <Amenities amenities={hotel.amenities} />
            <RoomList rooms={hotel.rooms} currency={hotel.currency} />
            <LocationMap location={hotel.location} />
            <ReviewSummaryAI summary={hotel.aiSummary} />
            <ReviewSection initialReviews={hotel.reviews} />
            <RelatedHotels hotels={hotel.relatedHotels} currency={hotel.currency} />
          </div>

          <div>
            <BookingCard currency={hotel.currency} pricePerNight={hotel.pricePerNight} />
          </div>
        </div>
      </div>
    </main>
  );
}
