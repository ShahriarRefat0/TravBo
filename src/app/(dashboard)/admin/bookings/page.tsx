import BookingTable from "@/components/admin/BookingTable";
import { adminBookings } from "@/services/admin.service";

export default function AdminBookingsPage() {
  return <BookingTable bookings={adminBookings} />;
}
