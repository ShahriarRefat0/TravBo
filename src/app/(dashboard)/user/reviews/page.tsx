import ReviewList from "@/components/dashboard/ReviewList";
import { dashboardReviews } from "@/services/dashboard.service";

export default function UserReviewsPage() {
  return (
    <div className="space-y-6">
      <ReviewList reviews={dashboardReviews} />
    </div>
  );
}
