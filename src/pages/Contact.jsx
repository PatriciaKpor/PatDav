import { useState } from 'react'
import { contactDetails } from '../data/portfolioData'

function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim()

    if (!name) {
      setStatus('Please enter your name.')
      return
    }

    setStatus(`Thanks, ${name}! Your message has been noted.`)
    event.currentTarget.reset()
  }

  return (
    <section className="container mx-auto px-6 py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-300">Contact</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let's build something together.</h2>
          <p className="text-base leading-8 text-slate-300">
            Reach out to discuss a project, collaboration, or to learn more about my work.
          </p>

          <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
            <div>
              <p className="text-sm font-semibold text-slate-300">Email</p>
              <a className="text-sky-300 hover:text-sky-200" href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-300">Phone</p>
              <p className="text-slate-400">{contactDetails.phone}</p>
            </div>
          </div>
        </div>

        <form
          className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20"
          onSubmit={handleSubmit}
        >
          <label className="block text-sm font-semibold text-slate-200">
            Name
            <input
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900/95 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </label>
          <label className="block text-sm font-semibold text-slate-200">
            Email
            <input
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900/95 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </label>
          <label className="block text-sm font-semibold text-slate-200">
            Message
            <textarea
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900/95 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              name="message"
              rows="5"
              placeholder="Tell me about your project"
              required
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Send Message
          </button>
          <p className="min-h-[1.5rem] text-sm text-slate-300" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
