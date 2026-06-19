import { aboutHighlights } from '../data/portfolioData'
import RevealSection from '../components/RevealSection'
import AboutFloatingPortrait from '../components/AboutFloatingPortrait'
import heroImg from '../assets/hero.jpg'

function About() {
  return (
    <section className="relative overflow-hidden px-6 py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.1),_transparent_34%)]" />
      <div className="container relative mx-auto">
        <RevealSection className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:p-12">
          <div className="relative lg:flex lg:items-start lg:justify-between lg:gap-12">
            <div className="max-w-2xl space-y-6 lg:pr-8">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">About Me</p>
              <h2 className="text-3xl font-semibold text-[var(--text)] sm:text-4xl">Designer + Developer</h2>
              <p className="text-base leading-8 text-[var(--muted)]">
                I craft polished digital experiences with a focus on performance, accessibility, and clarity. I enjoy turning ideas into projects that look great and feel intuitive.
              </p>
            </div>

            <div className="mt-10 flex justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
              <AboutFloatingPortrait imageSrc={heroImg} alt="Patricia Kpor Enam portrait" />
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {aboutHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-8 shadow-xl shadow-[0_24px_60px_rgba(0,0,0,0.1)]"
              >
                <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

export default About
