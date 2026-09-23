const modules = [
  {
    icon: "01",
    title: "AI & Machine Learning",
    description:
      "Understand AI fundamentals and build practical AI-powered applications.",
    topics: ["AI Fundamentals", "Machine Learning", "GenAI", "AI Projects"],
  },
  {
    icon: "02",
    title: "Data Structures & Algorithms",
    description:
      "Develop strong problem-solving skills for coding assessments and interviews.",
    topics: ["Arrays", "Trees", "Graphs", "Dynamic Programming"],
  },
  {
    icon: "03",
    title: "Core Computer Science",
    description:
      "Build the CS foundation required for technical interviews.",
    topics: ["DBMS", "Operating Systems", "Networks", "OOP"],
  },
  {
    icon: "04",
    title: "Software Development",
    description:
      "Learn how modern software applications are designed and developed.",
    topics: ["Frontend", "Backend", "APIs", "Databases"],
  },
  {
    icon: "05",
    title: "Project Development",
    description:
      "Turn your knowledge into real-world projects that strengthen your portfolio.",
    topics: ["Architecture", "Git", "Deployment", "Documentation"],
  },
  {
    icon: "06",
    title: "Placement Preparation",
    description:
      "Prepare for coding rounds, technical interviews and HR discussions.",
    topics: ["Resume", "Mock Interviews", "Coding Rounds", "HR"],
  },
];

export default function CourseModules() {
  return (
    <section id="program" className="bg-[#070b19] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            The Program
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Everything you need to become software-career ready.
          </h2>

          <p className="mt-5 text-gray-400">
            A structured combination of AI, computer science, DSA,
            development and interview preparation.
          </p>

        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {modules.map((module) => (
            <div
              key={module.icon}
              className="group rounded-3xl border border-white/10 bg-[#0a1024] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-400">
                {module.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {module.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {module.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {module.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                  >
                    {topic}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}