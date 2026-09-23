"use client";

import { FormEvent, useState } from "react";

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <section className="bg-[#050816] px-6 py-24">
      <div className="mx-auto max-w-3xl">

        {!submitted ? (
          <>
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Start Your Journey
              </p>

              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Apply for the Program
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                Fill in your details and our team will get in touch with you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Current Status
                  </label>

                  <select
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0a1024] px-4 py-3 text-white outline-none focus:border-cyan-400"
                  >
                    <option value="">Select</option>
                    <option value="student">Student</option>
                    <option value="fresher">Fresher</option>
                    <option value="working">Working Professional</option>
                    <option value="career-switcher">Career Switcher</option>
                  </select>
                </div>

              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your learning goals..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:bg-cyan-300"
              >
                Submit Application →
              </button>
            </form>
          </>
        ) : (
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 px-6 py-16 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 text-3xl text-cyan-400">
              ✓
            </div>

            <h2 className="text-4xl font-bold text-white">
              Thank You!
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
              Your application has been submitted successfully.
              Our team will get in touch with you soon.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}