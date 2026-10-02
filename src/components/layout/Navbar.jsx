import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navItems, school } from '../../data/content'
import ThemeToggle from '../animation/ThemeToggle'
import Button from '../ui/Button'
import useScrolled from '../../hooks/useScrolled'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const close = () => setOpen(false)
  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <a href="#top" className="brand" onClick={close}>Tulas<span>TIS</span></a>
      <nav className="nav-links" aria-label="Primary">
        {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <Button href={school.applyUrl}>Apply now</Button>
        <button className="burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span /><span />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-nav" aria-label="Mobile" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
            {navItems.map(([label, href]) => <a key={label} href={href} onClick={close}>{label}</a>)}
            <a href={`tel:${school.phone}`}>Admissions helpline {school.phone}</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
