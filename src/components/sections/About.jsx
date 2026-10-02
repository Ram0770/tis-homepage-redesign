import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '../../data/content'
import Reveal from '../animation/Reveal'
import useCountUp from '../../hooks/useCountUp'

const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function Stat({ value, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const n = useCountUp(value, inView)
  return (
    <div ref={ref} className="stat" onMouseMove={spot}>
      <strong>{n}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap split">
        <Reveal>
          <p className="eyebrow">01 · About TIS</p>
          <h2>Boarding and Day School Excellence</h2>
          <p>We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally.</p>
          <p>Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.</p>
          <p className="muted">Established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.</p>
        </Reveal>
        <div className="stats">
          {stats.map((s, i) => <Reveal key={s.label} delay={i * 0.08}><Stat {...s} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
