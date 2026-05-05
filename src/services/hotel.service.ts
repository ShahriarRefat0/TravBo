import { HotelCardData, HotelData } from "@/types/hotel";

type HotelSeed = {
  id: string;
  name: string;
  locationLabel: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  heroImages: string[];
  address: string;
  lat: number;
  lng: number;
};

const baseRooms = [
  {
    id: "r1",
    name: "Deluxe Ocean View",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
    pricePerNight: 124,
    features: ["King Bed", "Free WiFi", "Air Conditioning"],
  },
  {
    id: "r2",
    name: "Executive Family Suite",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    pricePerNight: 179,
    features: ["2 Queen Beds", "Balcony", "Breakfast Included"],
  },
  {
    id: "r3",
    name: "Premium Lagoon Villa",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    pricePerNight: 226,
    features: ["Private Patio", "Pool Access", "Smart TV"],
  },
];

const baseReviews = [
  {
    id: "rv1",
    user: "Rahim S.",
    rating: 5,
    comment: "Excellent location and very clean rooms. Staff were super helpful.",
    createdAt: "2026-04-12",
  },
  {
    id: "rv2",
    user: "Nadia T.",
    rating: 4,
    comment: "Great breakfast spread and pool area. Check-in was slightly slow.",
    createdAt: "2026-03-28",
  },
  {
    id: "rv3",
    user: "Imran K.",
    rating: 5,
    comment: "Perfect for family trips. Spacious suite and beautiful views.",
    createdAt: "2026-03-18",
  },
];

const hotelSeeds: HotelSeed[] = [
  {
    id: "1",
    name: "Sea Pearl Beach Resort & Spa",
    locationLabel: "Inani Beach, Cox's Bazar, Bangladesh",
    pricePerNight: 124,
    rating: 4.7,
    reviewCount: 431,
    heroImages: [
      "https://images.unsplash.com/photo-1571896349842-812cb50d7d7e",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
      "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c",
    ],
    address: "Inani Beach, Jalia Palong, Ukhia, Cox's Bazar 4750, Bangladesh",
    lat: 21.2208,
    lng: 92.0461,
  },
  {
    id: "2",
    name: "Ocean Paradise Hotel & Resort",
    locationLabel: "Kolatoli, Cox's Bazar, Bangladesh",
    pricePerNight: 109,
    rating: 4.5,
    reviewCount: 345,
    heroImages: [
      "https://images.unsplash.com/photo-1566195992212-5481c17227c0",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
    address: "Kolatoli Road, Cox's Bazar 4700, Bangladesh",
    lat: 21.4281,
    lng: 91.9731,
  },
  {
    id: "3",
    name: "Grand Sultan Tea Resort & Golf",
    locationLabel: "Sreemangal, Sylhet, Bangladesh",
    pricePerNight: 136,
    rating: 4.6,
    reviewCount: 378,
    heroImages: [
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364",
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb2102f",
      "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
    ],
    address: "Radhanagar, Sreemangal, Moulvibazar 3210, Bangladesh",
    lat: 24.3042,
    lng: 91.7298,
  },
  {
    id: "4",
    name: "Dream Square Resort",
    locationLabel: "Gazipur, Dhaka, Bangladesh",
    pricePerNight: 98,
    rating: 4.4,
    reviewCount: 324,
    heroImages: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    ],
    address: "Bagher Bazar, Gazipur 1704, Bangladesh",
    lat: 23.9999,
    lng: 90.4203,
  },
  {
    id: "5",
    name: "Royal Heritage Hotel",
    locationLabel: "Banani, Dhaka, Bangladesh",
    pricePerNight: 118,
    rating: 4.3,
    reviewCount: 289,
    heroImages: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      "https://images.unsplash.com/photo-1582719478185-3f5c2a37bf1d",
      "https://images.unsplash.com/photo-1612320648993-61c1cd604b71",
      "https://images.unsplash.com/photo-1521783988139-89397d761dce",
    ],
    address: "Road 11, Banani, Dhaka 1213, Bangladesh",
    lat: 23.7937,
    lng: 90.4066,
  },
];

const hotels: Record<string, HotelData> = Object.fromEntries(
  hotelSeeds.map((seed) => {
    const relatedHotels = hotelSeeds
      .filter((candidate) => candidate.id !== seed.id)
      .slice(0, 3)
      .map((candidate) => ({
        id: candidate.id,
        name: candidate.name,
        location: candidate.locationLabel,
        image: candidate.heroImages[0],
        rating: candidate.rating,
        pricePerNight: candidate.pricePerNight,
      }));

    const hotel: HotelData = {
      id: seed.id,
      name: seed.name,
      locationLabel: seed.locationLabel,
      rating: seed.rating,
      reviewCount: seed.reviewCount,
      pricePerNight: seed.pricePerNight,
      currency: "USD",
      description:
        `${seed.name} offers a premium stay experience with comfortable rooms, curated food options, and modern amenities designed for both family vacations and business trips. Guests enjoy easy access to nearby attractions and consistent service quality.`,
      images: seed.heroImages,
      amenities: ["wifi", "pool", "parking", "gym", "restaurant", "security", "ac", "breakfast"],
      rooms: baseRooms.map((room) => ({
        ...room,
        id: `${seed.id}-${room.id}`,
        pricePerNight: room.pricePerNight + (seed.pricePerNight - 124),
      })),
      reviews: baseReviews.map((review) => ({
        ...review,
        id: `${seed.id}-${review.id}`,
      })),
      aiSummary:
        "Guests commonly praise cleanliness, location convenience, and staff behavior. The most frequent positive highlights are room comfort and service consistency, with occasional feedback about peak-time check-in wait.",
      location: {
        address: seed.address,
        lat: seed.lat,
        lng: seed.lng,
        mapEmbedUrl: `https://www.google.com/maps?q=${seed.lat},${seed.lng}&z=14&output=embed`,
      },
      relatedHotels,
    };

    return [seed.id, hotel];
  })
);

const featuredHotelCards: HotelCardData[] = hotelSeeds.map((seed) => ({
  id: seed.id,
  name: seed.name,
  image: seed.heroImages[0],
  rating: Math.round(seed.rating),
  reviews: seed.reviewCount,
}));

export function getHotelById(id: string): HotelData | null {
  return hotels[id] ?? null;
}

export function getAllHotelIds(): string[] {
  return Object.keys(hotels);
}

export function getFeaturedHotelCards(): HotelCardData[] {
  return featuredHotelCards;
}
