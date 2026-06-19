import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
          Preety Pat&apos;s Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="block h-0.5 w-6 rounded-full bg-current shadow-sm" />
            <span className="mt-1 block h-0.5 w-6 rounded-full bg-current shadow-sm" />
            <span className="mt-1 block h-0.5 w-6 rounded-full bg-current shadow-sm" />
          </button>
        </div>

        <nav
          className={`w-full flex-col gap-2 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] md:flex md:w-auto md:flex-row md:border-0 md:p-0 md:shadow-none ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-sky-400/10 text-sky-200 ring-1 ring-sky-400/25'
                    : 'text-[var(--text)] hover:text-white hover:bg-[var(--surface-strong)]'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
