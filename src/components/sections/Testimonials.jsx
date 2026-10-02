import { testimonials } from '../../data/content'
import Reveal from '../animation/Reveal'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section alt">
      <div className="wrap">
        <Reveal><p className="eyebrow">04 · Voices</p><h2>From the parents</h2></Reveal>
        <div className="quotes">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={t.name} delay={i * 0.08} className="quote">
              <blockquote>{t.text}</blockquote>
              <figcaption><strong>{t.name}</strong> {t.role}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
