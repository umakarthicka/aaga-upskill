const steps = [
  ["01", "Programming Foundation", "Programming, OOP and problem solving"],
  ["02", "Core Computer Science", "DBMS, OS, Networks and Computer Architecture"],
  ["03", "DSA Mastery", "From fundamentals to interview-level problems"],
  ["04", "AI & Development", "AI, ML, GenAI and software development"],
  ["05", "Real-World Projects", "Build, deploy and document your projects"],
  ["06", "Placement Preparation", "Resume, coding rounds and mock interviews"],
  ["07", "Product Company Prep", "Advanced DSA and technical interview preparation"],
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-[#070b19] py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Your Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            One roadmap. Multiple career possibilities.
          </h2>
        </div>

        <div className="mt-16 space-y-4">

          {steps.map(([number, title, description]) => (
            <div
              key={number}
              className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-black">
                {number}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}