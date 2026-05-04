export type AmenityKey =
  | "wifi"
  | "pool"
  | "parking"
  | "gym"
  | "restaurant"
  | "security"
  | "ac"
  | "breakfast";

export interface HotelReview {
  id: string;
  user: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface HotelRoom {
  id: string;
  name: string;
  image: string;
  pricePerNight: number;
  features: string[];
}

export interface RelatedHotel {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  pricePerNight: number;
}

export interface HotelLocation {
  address: string;
  lat: number;
  lng: number;
  mapEmbedUrl: string;
}

export interface HotelData {
  id: string;
  name: string;
  locationLabel: string;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  currency: string;
  description: string;
  images: string[];
  amenities: AmenityKey[];
  rooms: HotelRoom[];
  reviews: HotelReview[];
  aiSummary: string;
  location: HotelLocation;
  relatedHotels: RelatedHotel[];
}

export interface ReviewFormInput {
  user: string;
  rating: number;
  comment: string;
}

export interface HotelCardData {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
}
