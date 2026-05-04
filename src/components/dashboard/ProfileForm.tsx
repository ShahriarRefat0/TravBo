"use client";

import { useForm } from "react-hook-form";
import { UserProfile } from "@/types/user";

type ProfileFormValues = UserProfile;

type ProfileFormProps = {
  profile: UserProfile;
};

export default function ProfileForm({ profile }: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    defaultValues: profile,
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Profile settings</h2>
      <p className="mt-1 text-sm text-slate-500">Update your personal details and avatar URL.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#FFAF19]"
          />
          {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name.message}</p> : null}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address",
              },
            })}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#FFAF19]"
          />
          {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email.message}</p> : null}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Avatar URL</label>
          <input
            type="url"
            {...register("avatar", {
              required: "Avatar URL is required",
              pattern: {
                value: /^https?:\/\//,
                message: "Enter a valid URL",
              },
            })}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#FFAF19]"
          />
          {errors.avatar ? <p className="mt-1 text-sm text-red-600">{errors.avatar.message}</p> : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-2xl bg-[#FFAF19] px-5 py-3 font-semibold text-slate-900 transition hover:bg-[#FF9500] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Saving..." : "Save changes"}
        </button>
      </form>
    </section>
  );
}
