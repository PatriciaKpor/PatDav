import { projects } from '../data/portfolioData'
import RevealSection from '../components/RevealSection'

function Projects() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-16">
      <RevealSection className="mx-auto max-w-4xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-300">Projects</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Highlighted Work</h2>
      </RevealSection>

      <RevealSection className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-8 shadow-xl shadow-slate-950/20"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
            <span className="mt-6 inline-flex rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-sky-300">
              {project.tag}
            </span>
          </article>
        ))}
      </RevealSection>
    </section>
  )
}

export default Projects
