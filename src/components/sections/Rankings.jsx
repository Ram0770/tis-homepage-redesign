import { rankings } from '../../data/content'
import Reveal from '../animation/Reveal'

export default function Rankings() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal><p className="eyebrow">03 · Recognition</p><h2>Ranked among the best</h2></Reveal>
        <div className="ranks">
          {rankings.map((r, i) => (
            <Reveal key={r.by + r.rank} delay={i * 0.08} className="rank">
              <strong>{r.rank}</strong>
              <h3>{r.where}</h3>
              <p>{r.by}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
