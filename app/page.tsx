import ContactButtons from "./contact-buttons";
import GithubStyledGraph from "./github-styled-graph";
import SectionNav from "./section-nav";

const projects = [
  {
    title: "Brainrot Tanks",
    text: "A Diep.io-style game where you shoot fruits to gain XP and evolve into stronger brainrots with different weapons. Programmer alongside a team.",
    url: "https://www.roblox.com/games/103504785289949/Brainrot-Tanks",
    icon: "/brainrot-tanks.webp",
  },
  {
    title: "Build A Bike",
    text: "Build bikes using blocks, wheels, and motors to travel as far as possible. Programmer and 3D modeler in Blender, created with my brother.",
    url: "https://www.roblox.com/games/122135378562027/Build-A-Bike",
    icon: "/build-a-bike.webp",
  },
  {
    title: "Survive 99 Nights Troll Tower",
    text: "Climb a challenging tower filled with obstacles. When night falls, a deer monster appears to hunt you down. Programmer.",
    url: "https://www.roblox.com/games/71356180690414/Survive-99-Nights-Troll-Tower",
    icon: "/survive-99-nights.webp",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8 md:px-10 md:pt-10">
        <header className="mb-14 flex items-center justify-between">
          <SectionNav />
        </header>

        <div className="reveal-up space-y-8 text-center">
          <h1 className="mx-auto max-w-3xl text-balance text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            <span className="text-zinc-100">I&apos;m </span>
            <span className="text-gradient">TimeTicks</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
            18-year-old developer with 7 years of programming experience and 5 years specializing in Roblox. Started with personal projects and collaborations, building games like Build a Bike with my brother. Mostly working as a solo programmer, I'm now transitioning into the professional scene with Future Trash (FOAD), creating engaging games and systems with a talented team.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-6xl px-20 py-16 md:px-32">
        <h2 className="section-title">Skills</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="panel rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              Languages
            </p>
            <h3 className="mt-3 text-xl font-semibold text-zinc-100">
              Programming Languages
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Lua, JavaScript, HTML, CSS
            </p>
          </article>
          <article className="panel rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              Tools
            </p>
            <h3 className="mt-3 text-xl font-semibold text-zinc-100">
              Game Engines & Tools
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Roblox Studio, Visual Studio Code, Blender, Figma, GitHub, Wally, Rojo, Blink, NextJS
            </p>
          </article>
          <article className="panel rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              Development
            </p>
            <h3 className="mt-3 text-xl font-semibold text-zinc-100">
              Game Development
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Designing robust game systems and networking for multiplayer experiences.
            </p>
          </article>
          <article className="panel rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              Code Quality
            </p>
            <h3 className="mt-3 text-xl font-semibold text-zinc-100">
              Scripting Expertise
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Writing clean, maintainable, and modular code designed for scalability and team collaboration.
            </p>
          </article>
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-20 py-16 md:px-32">
        <h2 className="section-title">Best Projects</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="panel rounded-xl overflow-hidden transition hover:border-cyan-400 hover:bg-zinc-900"
            >
              <div className="h-40 w-full bg-zinc-800 overflow-hidden">
                <img
                  src={project.icon}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-zinc-100">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {project.text}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-20 py-16 md:px-32">
        <h2 className="section-title">GitHub Activity</h2>
        <article className="panel mt-8 rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
            Contributions
          </p>
          <p className="mt-2 text-3xl font-black text-zinc-100 md:text-4xl">
            640+ in the last year
          </p>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Consistent work, daily commits, and active repository
            maintenance.
          </p>
          <p className="mt-1 text-xs text-zinc-400">
            Heatmap below shows live GitHub contribution activity.
          </p>

          <a
            href="https://github.com/timethedev"
            target="_blank"
            rel="noopener noreferrer"
            className="click-bounce mt-5 inline-flex rounded-full border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-zinc-900"
          >
            View GitHub Profile
          </a>

          <a
            href="https://github.com/timethedev"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-3 transition hover:border-cyan-400"
            aria-label="Open GitHub profile from contribution graph"
          >
            <GithubStyledGraph />
          </a>
        </article>
      </section>

      <section className="mx-auto w-full max-w-6xl px-20 py-16 md:px-32">
        <h2 className="section-title">Contact</h2>
        <ContactButtons />
      </section>
    </main>
  );
}
