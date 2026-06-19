import { Link } from 'react-router-dom'
import RevealSection from '../components/RevealSection'
import heroImg from '../assets/hero.jpg'

function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="absolute inset-0 -z-10 bg-slate-950/20" />
      <div className="relative container mx-auto px-6 py-20 md:py-28">
        <RevealSection className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[2rem] border border-[var(--border)] bg-transparent p-10 shadow-2xl shadow-[0_30px_80px_rgba(0,0,0,0.4)] lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-300">Hello, I am</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Patricia Kpor Enam
            </h1>
            <p className="text-base leading-8 text-slate-200 sm:text-lg">
              A creative developer building thoughtful digital experiences with clean design and modern web standards.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-sky-400/50"
              >
                Say Hello
              </Link>
            </div>
          </div>
        </RevealSection>
      </div>

      <div className="container mx-auto px-6 pb-16 md:pb-24">
        <RevealSection className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-xl shadow-slate-950/20">
            <h2 className="text-xl font-semibold text-[var(--text)]">Design Focus</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Elegant visuals, clear hierarchy, and accessible interactions for every project.
            </p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-xl shadow-slate-950/20">
            <h2 className="text-xl font-semibold text-[var(--text)]">Modern Code</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Fast, maintainable front-end experiences built with React and Tailwind CSS.
            </p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-xl shadow-slate-950/20">
            <h2 className="text-xl font-semibold text-[var(--text)]">Strong UX</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Thoughtful structure and responsive layouts that look great on every screen.
            </p>
          </div>
        </RevealSection>
      </div>
    </main>
  )
}

export default Home
