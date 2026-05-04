export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

export interface DashboardStats {
  totalBookings: number;
  activeBookings: number;
  totalReviews: number;
}
