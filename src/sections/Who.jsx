import { profile } from '../data/profile'

export const Who = () => (
  <section id="profile" className="content section">
    <p className="section-kicker">About</p>
    <h2 className="section-title">Building software, sharing what I learn.</h2>
    <p className="intro">
      I’m <strong>{profile.name} {profile.lastName}</strong>, a full-stack software engineer and open-source contributor.
      I currently maintain the Open Source Kigali website and help new developers get started with
      Git and open source through community events. I’ve shipped production web applications with
      collaborative teams across startups and agencies.
    </p>
    <div className="pills">
      {['Full-stack development', 'Open source', 'Community building', 'Product engineering'].map((item) => <span className="pill" key={item}>{item}</span>)}
    </div>
  </section>
)
