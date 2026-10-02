import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 })
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 })
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * strength)
    y.set((e.clientY - r.top - r.height / 2) * strength)
  }
  const reset = () => { x.set(0); y.set(0) }
  return <motion.span ref={ref} style={{ x, y, display: 'inline-block' }} onMouseMove={move} onMouseLeave={reset}>{children}</motion.span>
}
