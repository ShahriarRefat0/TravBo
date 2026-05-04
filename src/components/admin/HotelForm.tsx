"use client";

import { useForm } from "react-hook-form";

type HotelFormValues = {
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
};

type HotelFormProps = {
  initialValues?: Partial<HotelFormValues>;
  onSubmit?: (values: HotelFormValues) => void;
};

export default function HotelForm({ initialValues, onSubmit }: HotelFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<HotelFormValues>({
    defaultValues: {
      title: initialValues?.title ?? "",
      description: initialValues?.description ?? "",
      price: initialValues?.price ?? 0,
      location: initialValues?.location ?? "",
      image: initialValues?.image ?? "",
    },
  });

  const submitHandler = async (values: HotelFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    onSubmit?.(values);
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Add / Edit hotel</h2>
      <p className="mt-1 text-sm text-slate-500">Use this form to maintain hotel listings.</p>

      <form onSubmit={handleSubmit(submitHandler)} className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#FFAF19]"
          />
          {errors.title ? <p className="mt-1 text-sm text-red-600">{errors.title.message}</p> : null}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Description</label>
          <textarea
            rows={4}
            {...register("description", { required: "Description is required", minLength: 20 })}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#FFAF19]"
          />
          {errors.description ? <p className="mt-1 text-sm text-red-600">Enter at least 20 characters.</p> : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Price</label>
            <input
              type="number"
              min={0}
              {...register("price", { required: "Price is required", valueAsNumber: true, min: 1 })}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#FFAF19]"
            />
            {errors.price ? <p className="mt-1 text-sm text-red-600">Enter a valid price.</p> : null}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Location</label>
            <input
              type="text"
              {...register("location", { required: "Location is required" })}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#FFAF19]"
            />
            {errors.location ? <p className="mt-1 text-sm text-red-600">{errors.location.message}</p> : null}
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Image URL</label>
          <input
            type="url"
            {...register("image", {
              required: "Image URL is required",
              pattern: { value: /^https?:\/\//, message: "Enter a valid URL" },
            })}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#FFAF19]"
          />
          {errors.image ? <p className="mt-1 text-sm text-red-600">{errors.image.message}</p> : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-2xl bg-[#FFAF19] px-5 py-3 font-semibold text-slate-900 transition hover:bg-[#FF9500] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Saving..." : "Save hotel"}
        </button>
      </form>
    </section>
  );
}
