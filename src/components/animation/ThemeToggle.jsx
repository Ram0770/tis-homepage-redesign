import { motion } from 'framer-motion'
import useTheme from '../../hooks/useTheme'

export default function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const dark = theme === 'dark'
  return (
    <button className="toggle" onClick={toggle} role="switch" aria-checked={dark} aria-label="Dark mode">
      <motion.span className="toggle-knob" animate={{ x: dark ? 24 : 0 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }}>
        {dark ? '☾' : '☀'}
      </motion.span>
    </button>
  )
}
