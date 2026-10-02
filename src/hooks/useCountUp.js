import { useEffect, useState } from 'react'
import { animate, useReducedMotion } from 'framer-motion'

export default function useCountUp(target, active) {
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    if (reduce) { setN(target); return }
    const c = animate(0, target, { duration: 1.2, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [active, target, reduce])
  return n
}
