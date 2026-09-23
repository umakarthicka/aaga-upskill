export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">

        <div>
          <div className="text-xl font-bold text-white">
            <span className="text-cyan-400">AI</span> × CS
          </div>

          <p className="mt-2 text-sm text-gray-500">
            AI & Computer Science Career Program
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#program" className="hover:text-white">
            Program
          </a>

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#faq" className="hover:text-white">
            FAQ
          </a>

          <a href="#apply" className="hover:text-white">
            Apply
          </a>
        </div>

      </div>

      <div className="border-t border-white/5 py-5 text-center text-xs text-gray-600">
        © 2026 AI × CS. All rights reserved.
      </div>

    </footer>
  );
}