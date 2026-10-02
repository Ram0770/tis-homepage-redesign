import { useState } from 'react'
import { classes, school } from '../../data/content'
import Reveal from '../animation/Reveal'

export default function Enquire() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => { e.preventDefault(); setSent(true) }
  return (
    <section id="enquire" className="section">
      <div className="wrap split">
        <Reveal>
          <p className="eyebrow">05 · Admissions</p>
          <h2>Enquire now</h2>
          <p>Tell us which class you’re looking at and our admissions team will call you back.</p>
          <p><a href={`tel:${school.phone}`}>Admission helpline {school.phone}</a></p>
        </Reveal>
        <Reveal delay={0.1}>
          {sent ? (
            <p className="lead" role="status">Thanks. We’ll call you shortly.</p>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <label>Parent name<input name="name" required autoComplete="name" /></label>
              <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
              <label>Class
                <select name="class" required defaultValue="">
                  <option value="" disabled>Select class</option>
                  {classes.map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <button className="btn btn-primary" type="submit">Send enquiry</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
