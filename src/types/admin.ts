export interface AdminStats {
  totalUsers: number;
  totalHotels: number;
  totalBookings: number;
  totalRevenue: number;
}

export type AdminUserRole = "Admin" | "Manager" | "Support" | "Guest";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminUserRole;
  status: "Active" | "Pending" | "Suspended";
  joinedAt: string;
  bookingsCount: number;
}

export interface AdminHotel {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  status: "Published" | "Draft";
}

export interface AdminBooking {
  id: string;
  userName: string;
  hotelName: string;
  date: string;
  status: "Pending" | "Confirmed" | "Cancelled";
  price: number;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
  bookings: number;
}

export interface RoleDistributionPoint {
  name: string;
  value: number;
}
