import { useState } from 'react';
import emailjs from '@emailjs/browser';
import photo from '../assets/profile-480.webp';
import lakehouseShot from '../assets/lakehouse-dashboard.webp';

const projectImages = { lakehouse: lakehouseShot };
import { person, experience, projects, skills, education, teaching, writing } from './content';
import './site.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fmt = (s) => {
  const [y, m] = s.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
};
const span = (start, end) => {
  const [sy, sm] = start.split('-').map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const months = Math.max(1, (ey - sy) * 12 + (em - sm) + 1);
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr${y > 1 ? 's' : ''}`, m && `${m} mo`].filter(Boolean).join(' ');
};

function Section({ id, title, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-h`}>
      <h2 className="section-title" id={`${id}-h`}>{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Role({ r }) {
  const [open, setOpen] = useState(false);
  const shown = open ? r.points : r.points.slice(0, 3);
  const hidden = r.points.length - 3;
  return (
    <li className={`role${r.end ? '' : ' role-current'}`}>
      <div className="role-head">
        <h3>
          {r.title}, <span className="role-org">{r.org}</span>
        </h3>
        <p className="role-when">
          {fmt(r.start)} – {r.end ? fmt(r.end) : 'now'} <span className="role-span">({span(r.start, r.end)})</span>
          <span className="role-place">{r.place}</span>
        </p>
      </div>
      <ul className="role-points">
        {shown.map((p) => <li key={p}>{p}</li>)}
      </ul>
      {hidden > 0 && (
        <button className="text-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? 'Show less' : `Show ${hidden} more`}
        </button>
      )}
    </li>
  );
}

function ContactForm() {
  const [state, setState] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const send = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      await emailjs.send(
        'service_o5kx3yv',
        'template_3lc5z37',
        { from_name: form.name, from_email: form.email, message: form.message, to_email: person.email, to_name: person.name },
        'I8zCAD3ZNK3E4KWZc'
      );
      setState('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setState('error');
    }
  };
  return (
    <form className="contact-form" onSubmit={send}>
      <label>
        Your name
        <input name="name" value={form.name} onChange={update} required autoComplete="name" autoCapitalize="words" />
      </label>
      <label>
        Your email
        <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" autoCapitalize="none" autoCorrect="off" inputMode="email" />
      </label>
      <label className="full">
        Message
        <textarea name="message" rows="4" value={form.message} onChange={update} required />
      </label>
      <div className="full form-foot">
        <button className="btn btn-primary" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p className="form-status" role="status">
          {state === 'sent' && 'Message sent. I’ll reply to the email you gave.'}
          {state === 'error' && `The message didn't send. Email me directly at ${person.email}.`}
        </p>
      </div>
    </form>
  );
}

export default function Site() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-text">
          <h1>{person.name}</h1>
          <p className="hero-role">{person.role}</p>
          <p className="status"><span className="status-dot" aria-hidden="true" />{person.status}</p>
          <p className="hero-pitch">{person.pitch}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={person.resume} target="_blank" rel="noopener noreferrer">View resume</a>
            <a className="btn" href={`mailto:${person.email}`}>Email me</a>
            <a className="btn" href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn" href={person.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <img
          className="hero-photo"
          src={photo}
          alt="Portrait of Nikshep Kulli"
          width="240"
          height="240"
          onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
        />
      </header>

      <main>
        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((r) => <Role key={r.title + r.start} r={r} />)}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <div className="projects">
            {projects.map((p) => (
              <article className="project" key={p.name}>
                {p.image && (
                  <a className="project-shot" href={p.links[0].href} target="_blank" rel="noopener noreferrer" aria-label={`${p.name}: open the live dashboard`}>
                    <img src={projectImages[p.image]} alt={`${p.name} dashboard: paid cost, claims count and denial rate tiles`} width="1120" height="335" loading="lazy" />
                  </a>
                )}
                <h3>{p.name} <span className="project-year">{p.year}</span></h3>
                <p>{p.summary}</p>
                <p className="project-stack">{p.stack}</p>
                {p.links.length > 0 && (
                  <p className="project-links">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                    ))}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="Education and teaching">
          <ul className="plain-list">
            {education.map((e) => (
              <li key={e.degree}>
                <strong>{e.degree}</strong>, {e.school}, {e.years}{e.note && `, ${e.note}`}
              </li>
            ))}
            <li>{teaching}</li>
          </ul>
        </Section>

        <Section id="writing" title="Publications">
          <ul className="plain-list">
            {writing.map((w) => (
              <li key={w.href}>
                <a href={w.href} target="_blank" rel="noopener noreferrer">{w.title}</a>
                <span className="muted">, {w.venue}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="contact-lead">
            The fastest way to reach me is <a href={`mailto:${person.email}`}>{person.email}</a>, or send a note here.
          </p>
          <ContactForm />
        </Section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} {person.name}</footer>
    </div>
  );
}
