export type BookingStatus = "Pending" | "Confirmed" | "Cancelled";

export interface Booking {
  id: string;
  hotelName: string;
  date: string;
  price: number;
  status: BookingStatus;
  nights: number;
}
