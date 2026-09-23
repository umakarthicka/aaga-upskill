const audiences = [
  ["Students", "Build the technical foundation for your software career."],
  ["Freshers", "Become interview-ready and build a stronger portfolio."],
  ["Job Seekers", "Strengthen DSA, CS fundamentals and interview skills."],
  ["Career Switchers", "Build the technical foundation needed for software roles."],
];

export default function Audience() {
  return (
    <section className="bg-[#070b19] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Who Is It For?
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Built for ambitious tech learners.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {audiences.map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-[#0a1024] p-7"
            >
              <h3 className="text-xl font-semibold text-white">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                {text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}