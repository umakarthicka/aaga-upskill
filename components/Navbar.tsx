"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="#" className="text-xl font-bold tracking-tight text-white">
          <span className="text-cyan-400">AI</span>
          <span className="text-white"> × CS</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#program" className="text-sm text-gray-300 hover:text-white">
            Program
          </a>

          <a href="#projects" className="text-sm text-gray-300 hover:text-white">
            Projects
          </a>

          <a href="#roadmap" className="text-sm text-gray-300 hover:text-white">
            Roadmap
          </a>

          <a href="#faq" className="text-sm text-gray-300 hover:text-white">
            FAQ
          </a>

          <a
            href="#apply"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Apply Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050816] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <a href="#program" className="text-gray-300">
              Program
            </a>
            <a href="#projects" className="text-gray-300">
              Projects
            </a>
            <a href="#roadmap" className="text-gray-300">
              Roadmap
            </a>
            <a href="#faq" className="text-gray-300">
              FAQ
            </a>

            <a
              href="#apply"
              className="rounded-full bg-white px-5 py-3 text-center font-semibold text-black"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}