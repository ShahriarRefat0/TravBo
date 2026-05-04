import { Star } from "lucide-react";
import { Review } from "@/types/review";

type ReviewListProps = {
  reviews: Review[];
};

export default function ReviewList({ reviews }: ReviewListProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">My reviews</h2>
      <p className="mt-1 text-sm text-slate-500">Your submitted feedback across hotels.</p>

      {reviews.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          No reviews available yet.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {reviews.map((review) => (
            <article key={review.id} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-slate-900">{review.hotelName}</h3>
                <span className="text-sm text-slate-500">{review.createdAt}</span>
              </div>
              <div className="mt-2 flex items-center gap-1">
                {[...Array(review.rating)].map((_, index) => (
                  <Star key={`${review.id}-${index}`} className="h-4 w-4 fill-[#FFAF19] text-[#FFAF19]" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{review.comment}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
