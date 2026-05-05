type HotelDescriptionProps = {
  description: string;
};

export default function HotelDescription({ description }: HotelDescriptionProps) {
  return (
    <section className="rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6">
      <h2 className="text-xl font-semibold text-[#1f2937]">About this hotel</h2>
      <p className="mt-3 text-[#475569] leading-7">{description}</p>
    </section>
  );
}
