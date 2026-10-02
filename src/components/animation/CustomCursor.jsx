import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useFinePointer from '../../hooks/useFinePointer'

const INTERACTIVE = 'a, button, input, select, [role="button"]'

export default function CustomCursor() {
  const fine = useFinePointer()
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!fine) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setActive(Boolean(e.target.closest?.(INTERACTIVE)))
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [fine, x, y])

  if (!fine) return null
  return <motion.div className={`cursor${active ? ' is-active' : ''}`} style={{ x: sx, y: sy }} aria-hidden="true" />
}
