const outcomes = [
  "Strong programming fundamentals",
  "Data Structures & Algorithms skills",
  "Core Computer Science knowledge",
  "AI & Machine Learning exposure",
  "Real-world projects",
  "GitHub portfolio",
  "Placement-ready resume",
  "Technical interview preparation",
];

export default function Outcomes() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Outcomes
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          What you'll build during the journey
        </h2>

        <div className="mt-12 grid gap-3 text-left md:grid-cols-2">

          {outcomes.map((outcome) => (
            <div
              key={outcome}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="text-cyan-400">✓</span>
              <span className="text-gray-300">{outcome}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}