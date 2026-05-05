import BookingTable from "@/components/dashboard/BookingTable";
import { dashboardBookings } from "@/services/dashboard.service";

export default function UserBookingsPage() {
  return (
    <div className="space-y-6">
      <BookingTable bookings={dashboardBookings} title="My bookings" />
    </div>
  );
}
