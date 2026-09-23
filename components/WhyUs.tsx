const benefits = [
  "Learn from professionals with industry experience",
  "Practical and project-oriented learning",
  "Strong focus on DSA and problem solving",
  "Structured preparation for technical interviews",
  "Resume and portfolio guidance",
  "Mock interview practice",
];

export default function WhyUs() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Why This Program
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Learn with an industry-first approach.
          </h2>

          <p className="mt-6 leading-7 text-gray-400">
            The goal isn't simply to complete a syllabus. The program is
            designed around the skills students need to build, practice and
            demonstrate during the software hiring process.
          </p>

        </div>

        <div className="grid gap-3">

          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="text-xl text-cyan-400">✓</span>

              <span className="text-gray-300">
                {benefit}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}