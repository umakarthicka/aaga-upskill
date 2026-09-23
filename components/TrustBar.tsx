export default function TrustBar() {
  const items = [
    "Industry Mentors",
    "Real-World Projects",
    "DSA Preparation",
    "Internship Ready",
    "Placement Focused",
  ];

  return (
    <section className="border-y border-white/10 bg-[#070b19]">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-4 px-6 py-7">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-sm text-gray-400"
          >
            <span className="text-cyan-400">✦</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}