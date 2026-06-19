import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/95 py-6 text-slate-500">
      <div className="container mx-auto flex flex-col gap-4 px-6 text-sm md:flex-row md:items-center md:justify-between">
        <p>© 2026 PatDav. Crafted with care.</p>
        <div className="flex flex-wrap gap-4">
          <Link className="text-slate-400 transition hover:text-slate-100" to="/">
            Home
          </Link>
          <Link className="text-slate-400 transition hover:text-slate-100" to="/projects">
            Projects
          </Link>
          <Link className="text-slate-400 transition hover:text-slate-100" to="/skills">
            Skills
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
