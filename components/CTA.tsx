export default function CTA() {
  return (
    <section id="apply" className="bg-[#070b19] px-6 py-24">

      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-500/10 p-10 text-center md:p-16">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Start Your Journey
        </p>

        <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
          Build skills that move your career forward.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Learn AI, master DSA, build real-world projects and prepare for
          technical interviews with a structured learning path.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black hover:bg-cyan-300">
            Apply Now →
          </button>

          <button className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white hover:bg-white/10">
            Talk to a Mentor
          </button>

        </div>

      </div>

    </section>
  );
}