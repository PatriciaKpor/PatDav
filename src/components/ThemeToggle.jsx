import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme')
    if (stored) {
      setTheme(stored)
      document.documentElement.dataset.theme = stored
    } else {
      document.documentElement.dataset.theme = theme
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
      className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 text-sm text-[var(--text)] transition duration-200 hover:border-[var(--accent)] hover:bg-[var(--surface)]"
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default ThemeToggle
