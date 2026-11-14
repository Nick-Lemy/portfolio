import { profile } from '../data/profile'

export const Who = () => (
  <section id="profile" className="content section">
    <p className="section-kicker">About</p>
    <h2 className="section-title">Software built with teams.</h2>
    <p className="intro">
      I’m <strong>{profile.name} {profile.lastName}</strong>, a software engineer in Kigali.
      I build web, mobile, and backend products with teams and contribute to open source.
    </p>
    <div className="pills">
      {['Web & mobile', 'Backend APIs', 'Open source'].map((item) => <span className="pill" key={item}>{item}</span>)}
    </div>
  </section>
)
