export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] pt-32">

      {/* Background glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            By Ex-Zoho Professionals
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Master{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI & Computer Science
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            Build strong CS fundamentals, master DSA, work on real-world
            projects and prepare for internships, placements and product
            company interviews.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="#apply"
              className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:bg-cyan-300"
            >
              Apply for the Program →
            </a>

            <a
              href="#program"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Curriculum
            </a>

          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">

            {[
              "AI & ML",
              "DSA",
              "Core CS",
              "Placements",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-gray-300"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

        {/* Code visual */}
        <div className="mx-auto mt-20 max-w-4xl rounded-3xl border border-white/10 bg-[#0a1024] p-2 shadow-2xl shadow-cyan-500/5">

          <div className="rounded-2xl border border-white/5 bg-[#070c1b] p-6 text-left">

            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <pre className="overflow-x-auto text-sm leading-7 text-gray-300">
{`class FutureEngineer {

  skills = [
    "AI & Machine Learning",
    "Data Structures & Algorithms",
    "Core Computer Science",
    "Real-World Projects",
    "Interview Preparation"
  ];

  goal = "Build → Practice → Interview → Grow";
}`}
            </pre>

          </div>
        </div>

      </div>
    </section>
  );
}