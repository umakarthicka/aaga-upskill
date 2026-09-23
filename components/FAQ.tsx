"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who can join this program?",
    a: "The program is designed for students, freshers, job seekers and learners who want to strengthen their AI and Computer Science skills.",
  },
  {
    q: "Do I need prior programming experience?",
    a: "Basic programming knowledge is helpful, but the exact prerequisites can be defined based on the batch and program level.",
  },
  {
    q: "Will there be projects?",
    a: "Yes. The program includes practical projects designed to help learners apply the concepts they study.",
  },
  {
    q: "Does the program include DSA?",
    a: "Yes. DSA and problem solving are important parts of the program.",
  },
  {
    q: "Does this guarantee a job?",
    a: "No course can guarantee a job. The program focuses on building technical skills and preparing learners for internships, placements and interviews.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#050816] py-24">
      <div className="mx-auto max-w-3xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/10 bg-white/[0.03]"
              >

                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-white">
                    {faq.q}
                  </span>

                  <span className="text-xl text-cyan-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 leading-7 text-gray-400">
                    {faq.a}
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}