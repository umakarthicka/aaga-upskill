const testimonials = [
  {
    quote:
      "The structured approach helped me understand what I needed to focus on instead of randomly learning technologies.",
    name: "Student Name",
    role: "Software Engineering Student",
  },
  {
    quote:
      "The combination of projects and DSA preparation gave me a much clearer interview preparation path.",
    name: "Student Name",
    role: "Placement Candidate",
  },
  {
    quote:
      "Working on practical projects made it easier for me to explain my technical skills during interviews.",
    name: "Student Name",
    role: "Developer Candidate",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#070b19] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Student Experiences
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            What learners say
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name + testimonial.role}
              className="rounded-3xl border border-white/10 bg-[#0a1024] p-7"
            >

              <div className="text-2xl text-cyan-400">“</div>

              <p className="mt-3 leading-7 text-gray-300">
                {testimonial.quote}
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}