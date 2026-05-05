import { Booking } from "@/types/booking";
import { Review } from "@/types/review";
import { DashboardStats, UserProfile } from "@/types/user";

export const dashboardProfile: UserProfile = {
  name: "Ayesha Rahman",
  email: "ayesha.rahman@example.com",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
};

export const dashboardStats: DashboardStats = {
  totalBookings: 18,
  activeBookings: 4,
  totalReviews: 9,
};

export const dashboardBookings: Booking[] = [
  {
    id: "bk-1001",
    hotelName: "Sea Pearl Beach Resort & Spa",
    date: "2026-05-12",
    price: 124,
    status: "Confirmed",
    nights: 3,
  },
  {
    id: "bk-1002",
    hotelName: "Ocean Paradise Hotel & Resort",
    date: "2026-05-18",
    price: 109,
    status: "Pending",
    nights: 2,
  },
  {
    id: "bk-1003",
    hotelName: "Grand Sultan Tea Resort & Golf",
    date: "2026-04-28",
    price: 136,
    status: "Cancelled",
    nights: 4,
  },
  {
    id: "bk-1004",
    hotelName: "Dream Square Resort",
    date: "2026-06-02",
    price: 98,
    status: "Confirmed",
    nights: 1,
  },
];

export const dashboardReviews: Review[] = [
  {
    id: "rv-1",
    hotelName: "Sea Pearl Beach Resort & Spa",
    rating: 5,
    comment: "Excellent beachfront stay with clean rooms and quick service.",
    createdAt: "2026-04-10",
  },
  {
    id: "rv-2",
    hotelName: "Ocean Paradise Hotel & Resort",
    rating: 4,
    comment: "Great view and breakfast. Pool area was the highlight.",
    createdAt: "2026-04-03",
  },
  {
    id: "rv-3",
    hotelName: "Grand Sultan Tea Resort & Golf",
    rating: 5,
    comment: "Peaceful environment and beautiful resort design.",
    createdAt: "2026-03-28",
  },
];

export function getDashboardOverview() {
  return {
    profile: dashboardProfile,
    stats: dashboardStats,
    bookings: dashboardBookings,
    reviews: dashboardReviews,
  };
}
