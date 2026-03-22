"use client";

const NAV_ITEMS = [
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function SectionNav() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    section.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <nav className="ml-auto flex flex-wrap items-center gap-3">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => scrollToSection(item.id)}
          className="click-bounce cursor-pointer rounded-full border border-zinc-700 bg-black px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
