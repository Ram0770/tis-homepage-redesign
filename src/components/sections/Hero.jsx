import { motion, useReducedMotion } from 'framer-motion'
import { school, stats } from '../../data/content'
import Button from '../ui/Button'

const words = ["Let's", 'do', 'it', 'with', 'Tulas']

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="top" className="hero">
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-sky" aria-hidden="true" />
      <div className="wrap hero-inner">
        <motion.p className="pill" initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span className="dot" /> Admissions open · Dehradun, Uttarakhand
        </motion.p>
        <h1 className="hero-title" aria-label="Let's do it with Tulas">
          {words.map((w, i) => (
            <span key={w} aria-hidden="true">
              <motion.span initial={reduce ? false : { y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.1 * i, ease: 'easeOut' }}>{w}</motion.span>
            </span>
          ))}
        </h1>
        <motion.div className="hero-copy" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <p className="lead">TIS is one of India’s top boarding and day schools in Dehradun, India.</p>
          <p>Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.</p>
          <div className="row">
            <Button href={school.applyUrl}>Apply now</Button>
            <Button href="#enquire" variant="ghost">Enquire now</Button>
            <Button href={school.tourUrl} variant="ghost">Take the virtual tour</Button>
          </div>
        </motion.div>
        <ul className="glass-strip">
          {stats.map((s) => <li key={s.label}><strong>{s.value}{s.suffix}</strong><span>{s.label}</span></li>)}
        </ul>
      </div>
    </section>
  )
}
