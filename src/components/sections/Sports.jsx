import { sports } from '../../data/content'
import Reveal from '../animation/Reveal'

function Row({ items, reverse }) {
  return (
    <div className="marquee">
      <ul className={`track${reverse ? ' rev' : ''}`}>
        {[...items, ...items].map((s, i) => <li key={s + i} aria-hidden={i >= items.length}>{s}</li>)}
      </ul>
    </div>
  )
}

export default function Sports() {
  const half = Math.ceil(sports.length / 2)
  return (
    <section id="sports" className="section alt">
      <div className="wrap">
        <Reveal className="head">
          <p className="eyebrow">02 · Beyond academics</p>
          <h2>It’s not just a facility. At Tulas it’s the foundation!</h2>
          <p>16+ sports curated to bring joy and discipline to your life.</p>
        </Reveal>
      </div>
      <Row items={sports.slice(0, half)} />
      <Row items={sports.slice(half)} reverse />
    </section>
  )
}
