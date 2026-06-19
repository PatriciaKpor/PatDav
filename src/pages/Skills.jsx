import { skills } from '../data/portfolioData'
import RevealSection from '../components/RevealSection'

function Skills() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-16">
      <RevealSection className="mx-auto max-w-4xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-300">Skills</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">What I Work With</h2>
        <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300">
          I'm passionate about modern web development and continuously expanding my technical expertise to deliver high-quality solutions.
        </p>
      </RevealSection>

      <RevealSection className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-medium text-slate-200"
          >
            {skill}
          </span>
        ))}
      </RevealSection>
    </section>
  )
}

export default Skills
