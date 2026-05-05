type ReviewSummaryAIProps = {
  summary: string;
};

export default function ReviewSummaryAI({ summary }: ReviewSummaryAIProps) {
  return (
    <section className="rounded-2xl border border-[#fde7be] bg-[#fffbf2] p-5 sm:p-6">
      <h2 className="text-xl font-semibold text-[#1f2937]">AI Review Summary</h2>
      <p className="mt-3 text-[#475569] leading-7">{summary}</p>
    </section>
  );
}
