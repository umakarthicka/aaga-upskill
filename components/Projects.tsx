const projects = [
  {
    title: "AI-Powered Application",
    category: "Artificial Intelligence",
    description:
      "Build an application that uses AI to solve a practical real-world problem.",
  },
  {
    title: "Full-Stack Product",
    category: "Software Engineering",
    description:
      "Design, develop and deploy a complete web application with frontend and backend.",
  },
  {
    title: "Recommendation System",
    category: "Machine Learning",
    description:
      "Understand recommendation concepts and implement a practical recommendation project.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Build
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Don't just learn. Build.
            </h2>

            <p className="mt-5 text-gray-400">
              Work on practical projects that help you understand how
              technology is used to solve real problems.
            </p>
          </div>

        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a1024]"
            >

              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10">
                <div className="text-6xl font-black text-white/10">
                  0{index + 1}
                </div>
              </div>

              <div className="p-7">

                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}