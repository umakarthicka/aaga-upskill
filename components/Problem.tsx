const problems = [
  {
    number: "01",
    title: "You know coding, but struggle with DSA",
    text: "Learning syntax is not enough. Interviews test how you think and solve problems.",
  },
  {
    number: "02",
    title: "Your resume lacks real projects",
    text: "Recruiters want to see practical skills, not only certificates.",
  },
  {
    number: "03",
    title: "Technical interviews feel difficult",
    text: "Without structured preparation, CS fundamentals and coding rounds can become challenging.",
  },
  {
    number: "04",
    title: "You don't know what to learn next",
    text: "A structured roadmap helps you focus on the skills that matter for software careers.",
  },
];

export default function Problem() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            The Problem
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Learning to code is only the beginning.
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Getting interview-ready requires much more than watching tutorials.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">

          {problems.map((problem) => (
            <div
              key={problem.number}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="mb-6 text-sm text-cyan-400">
                {problem.number}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {problem.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {problem.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}