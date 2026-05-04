import {
  AdminBooking,
  AdminHotel,
  AdminStats,
  AdminUser,
  RevenuePoint,
  RoleDistributionPoint,
} from "@/types/admin";

export const adminStats: AdminStats = {
  totalUsers: 12840,
  totalHotels: 186,
  totalBookings: 4931,
  totalRevenue: 864200,
};

export const adminUsers: AdminUser[] = [
  {
    id: "u-1001",
    name: "Ayesha Rahman",
    email: "ayesha@example.com",
    role: "Guest",
    status: "Active",
    joinedAt: "2026-02-14",
    bookingsCount: 8,
  },
  {
    id: "u-1002",
    name: "Mizanur Islam",
    email: "mizan@example.com",
    role: "Manager",
    status: "Active",
    joinedAt: "2026-01-19",
    bookingsCount: 2,
  },
  {
    id: "u-1003",
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    role: "Support",
    status: "Pending",
    joinedAt: "2026-04-03",
    bookingsCount: 0,
  },
  {
    id: "u-1004",
    name: "Rakib Hossain",
    email: "rakib@example.com",
    role: "Guest",
    status: "Suspended",
    joinedAt: "2026-03-11",
    bookingsCount: 4,
  },
];

export const adminHotels: AdminHotel[] = [
  {
    id: "h-2001",
    title: "Sea Pearl Beach Resort & Spa",
    location: "Cox's Bazar",
    pricePerNight: 124,
    rating: 4.7,
    status: "Published",
  },
  {
    id: "h-2002",
    title: "Ocean Paradise Hotel & Resort",
    location: "Cox's Bazar",
    pricePerNight: 109,
    rating: 4.5,
    status: "Published",
  },
  {
    id: "h-2003",
    title: "Grand Sultan Tea Resort & Golf",
    location: "Sreemangal",
    pricePerNight: 136,
    rating: 4.6,
    status: "Draft",
  },
  {
    id: "h-2004",
    title: "Dream Square Resort",
    location: "Gazipur",
    pricePerNight: 98,
    rating: 4.4,
    status: "Published",
  },
];

export const adminBookings: AdminBooking[] = [
  {
    id: "b-3001",
    userName: "Ayesha Rahman",
    hotelName: "Sea Pearl Beach Resort & Spa",
    date: "2026-05-12",
    status: "Confirmed",
    price: 372,
  },
  {
    id: "b-3002",
    userName: "Mizanur Islam",
    hotelName: "Ocean Paradise Hotel & Resort",
    date: "2026-05-18",
    status: "Pending",
    price: 218,
  },
  {
    id: "b-3003",
    userName: "Rakib Hossain",
    hotelName: "Dream Square Resort",
    date: "2026-04-28",
    status: "Cancelled",
    price: 98,
  },
];

export const monthlyRevenue: RevenuePoint[] = [
  { month: "Jan", revenue: 58000, bookings: 320 },
  { month: "Feb", revenue: 64000, bookings: 344 },
  { month: "Mar", revenue: 72000, bookings: 410 },
  { month: "Apr", revenue: 69000, bookings: 388 },
  { month: "May", revenue: 84000, bookings: 465 },
  { month: "Jun", revenue: 91000, bookings: 510 },
];

export const roleDistribution: RoleDistributionPoint[] = [
  { name: "Guest", value: 80 },
  { name: "Manager", value: 12 },
  { name: "Support", value: 6 },
  { name: "Admin", value: 2 },
];

export function getAdminDashboardData() {
  return {
    stats: adminStats,
    users: adminUsers,
    hotels: adminHotels,
    bookings: adminBookings,
    revenue: monthlyRevenue,
    roles: roleDistribution,
  };
}
