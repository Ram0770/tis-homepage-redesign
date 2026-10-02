import { school } from '../../data/content'

const links = [['FAQ', 'https://tis.edu.in/faq/'], ['Privacy Policy', 'https://tis.edu.in/privacy-policy/'], ['Terms & Conditions', 'https://tis.edu.in/terms-conditions/'], ['Virtual Tour', school.tourUrl]]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <strong>{school.name}</strong>
          <p>{school.address}</p>
        </div>
        <div>
          <p>Landline <a href="tel:01352699444">{school.landlines[0]}</a>, <a href="tel:01352699666">{school.landlines[1]}</a></p>
          <p>Admission Helpline <a href={`tel:${school.phone}`}>{school.phone}</a></p>
          <p><a href={`mailto:${school.email}`}>{school.email}</a></p>
        </div>
        <ul>{links.map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}</ul>
      </div>
      <p className="wrap copy">Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved</p>
    </footer>
  )
}
