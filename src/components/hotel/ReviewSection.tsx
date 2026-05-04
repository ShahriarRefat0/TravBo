"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Star } from "lucide-react";
import { HotelReview, ReviewFormInput } from "@/types/hotel";

type ReviewSectionProps = {
  initialReviews: HotelReview[];
};

export default function ReviewSection({ initialReviews }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<HotelReview[]>(initialReviews);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormInput>({
    defaultValues: {
      user: "",
      rating: 5,
      comment: "",
    },
  });

  const onSubmit = (values: ReviewFormInput) => {
    const nextId = `rv-${reviews.length + 1}`;
    const newReview: HotelReview = {
      id: nextId,
      user: values.user,
      rating: Number(values.rating),
      comment: values.comment,
      createdAt: new Date().toISOString().slice(0, 10),
    };

    setReviews((prev) => [newReview, ...prev]);
    reset({ user: "", rating: 5, comment: "" });
  };

  const avgRating = useMemo(() => {
    if (!reviews.length) {
      return 0;
    }

    const total = reviews.reduce((sum, item) => sum + item.rating, 0);
    return total / reviews.length;
  }, [reviews]);

  return (
    <section className="rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6 space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-[#1f2937]">Guest reviews</h2>
        <p className="text-sm text-[#475569]">
          {reviews.length ? `${avgRating.toFixed(1)} average from ${reviews.length} reviews` : "No reviews yet"}
        </p>
      </div>

      {reviews.length === 0 ? (
        <div className="rounded-lg border border-dashed border-[#cbd5e1] p-6 text-center text-[#64748b]">
          No reviews yet. Be the first to leave a review.
        </div>
      ) : (
        <div className="space-y-3">
          {reviews.map((review) => (
            <article key={review.id} className="rounded-lg border border-[#e2e8f0] p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-[#1f2937]">{review.user}</h3>
                <p className="text-sm text-[#64748b]">{review.createdAt}</p>
              </div>
              <div className="mt-2 flex items-center gap-1">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={`${review.id}-${idx}`} className="w-4 h-4 fill-[#FFAF19] text-[#FFAF19]" />
                ))}
              </div>
              <p className="mt-2 text-[#475569]">{review.comment}</p>
            </article>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-[#e2e8f0] p-4 space-y-4">
        <h3 className="font-semibold text-[#1f2937]">Write a review</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm text-[#475569] mb-1">Your name</label>
            <input
              type="text"
              {...register("user", { required: "Name is required" })}
              className="w-full rounded-lg border border-[#cbd5e1] px-3 py-2 outline-none focus:border-[#FFAF19]"
            />
            {errors.user ? <p className="text-xs text-red-600 mt-1">{errors.user.message}</p> : null}
          </div>

          <div>
            <label className="block text-sm text-[#475569] mb-1">Rating</label>
            <select
              {...register("rating", { required: true, valueAsNumber: true })}
              className="w-full rounded-lg border border-[#cbd5e1] px-3 py-2 outline-none focus:border-[#FFAF19]"
            >
              {[5, 4, 3, 2, 1].map((value) => (
                <option key={value} value={value}>
                  {value} Star{value > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-[#475569] mb-1">Comment</label>
          <textarea
            rows={4}
            {...register("comment", { required: "Comment is required", minLength: 10 })}
            className="w-full rounded-lg border border-[#cbd5e1] px-3 py-2 outline-none focus:border-[#FFAF19]"
          />
          {errors.comment ? <p className="text-xs text-red-600 mt-1">Please enter at least 10 characters.</p> : null}
        </div>

        <button
          type="submit"
          className="rounded-lg bg-[#FFAF19] px-4 py-2 text-white font-semibold hover:bg-[#FF9500]"
        >
          Submit review
        </button>
      </form>
    </section>
  );
}
