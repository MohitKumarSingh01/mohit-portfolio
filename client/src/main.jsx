import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, ChevronDown, ChevronUp, Code2, Download, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Phone, MessageCircle, Moon, Search, Send, Sun, X } from 'lucide-react';
import './styles.css';
import { profile, experience as allExperience, skillGroups, projects, certifications, marketplaceExpertise, performanceMetrics, marketplacePlatforms } from './data.js';

const sections = ['About', 'Experience', 'Expertise', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'];
const icons = { 'Industry Knowledge': BriefcaseBusiness, 'Tools & Technologies': Code2, 'Interpersonal Skills': MessageCircle };
const featuredIds = ['growthbasket', 'readymade', 'brainhive', 'nexacart', 'chat-java', 'tictactoe'];
const education = [
  { title: 'Bachelor of Engineering — Computer Science & Engineering', short: 'B.E. Computer Science & Engineering', institution: 'Chandigarh University', period: '2022 – 2026', location: 'Mohali, Punjab', score: '7.56 CGPA', description: 'Undergraduate degree in Computer Science & Engineering. Focus areas include programming, data structures, databases, web technologies and analytical problem-solving.' },
  { title: 'Intermediate / Class XII', short: 'Class XII (BSEB)', institution: 'Nagina Ray Uchch Madhyamik School', period: '2020 – 2022', location: 'Gopalganj, Bihar', score: '75.4%', description: 'Completed Intermediate education under BSEB.' }
];


const ecomDesc = 'Account health, listings and catalog, rich content, pricing, promotions, inventory, advertising and sales analysis.';
const qcDesc = 'SKU onboarding and catalog, stock availability, PO / RO coordination, warehouse and dark-store inwarding, campaign execution, pricing and sales / ads reporting.';
const platformDesc = { 'Amazon Account Management': ecomDesc, 'Flipkart Account Management': ecomDesc, 'Myntra Account Management': ecomDesc, 'Meesho Account Management': ecomDesc, 'Blinkit Account Management': qcDesc, 'Swiggy Instamart Account Management': qcDesc, 'Zepto Account Management': qcDesc };
['Amazon', 'Flipkart', 'Myntra', 'Meesho', 'Blinkit', 'Swiggy Instamart', 'Zepto'].forEach(p => { platformDesc[`${p} Ads`] = `Campaign setup support, monitoring, optimisation and reporting on ${p} advertising products. Campaign types vary by platform and account access.`; });
const skillCats = [
  { title: 'E-commerce & Quick Commerce', groups: [
    { label: 'E-commerce marketplaces', items: ['Amazon Account Management', 'Flipkart Account Management', 'Myntra Account Management', 'Meesho Account Management'] },
    { label: 'Quick-commerce platforms', items: ['Blinkit Account Management', 'Swiggy Instamart Account Management', 'Zepto Account Management'] },
    { label: 'Performance advertising', items: ['Amazon Ads', 'Flipkart Ads', 'Myntra Ads', 'Meesho Ads', 'Blinkit Ads', 'Swiggy Instamart Ads', 'Zepto Ads'] },
    { label: 'Growth & strategy', items: ['Pricing & Discount Strategy', 'Sales Strategy', 'Business Marketing', 'Marketing Support'] },
    { label: 'Operations & analytics', items: ['Product Listing & Catalog Management', 'Inventory Planning', 'Sales Analysis', 'Business Analytics', 'Account Management', 'Customer Relationship Management (CRM)'] } ] },
  { title: 'Technical Competencies', groups: [
    { label: 'Programming', items: ['C', 'C++', 'Java', 'Python', 'DSA', 'OOP'] },
    { label: 'Web development', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'JSON'] },
    { label: 'Databases', items: ['SQL', 'MySQL', 'Oracle Database', 'MongoDB', 'DBMS / RDBMS'] },
    { label: 'Tools & office', items: ['Git', 'GitHub', 'MS Excel', 'Google Sheets', 'MS Word', 'PowerPoint'] },
    { label: 'Emerging & academic', items: ['Artificial Intelligence (AI)', 'Machine Learning', '5G Mobile Networks', 'Network Engineering', 'Mobile Security'] } ] },
  { title: 'Professional Skills', groups: [
    { label: 'Communication & thinking', items: ['Communication Skill', 'Interpersonal Communication', 'Problem Solving', 'Critical Thinking', 'Technical Writing', 'Writing White Papers'] },
    { label: 'Leadership & teamwork', items: ['Leadership', 'Team Leadership', 'People Management', 'Inspiring Leadership', 'Women’s Leadership'] },
    { label: 'Work habits & culture', items: ['Time Management', 'Adaptability', 'Career Management', 'Workplace Culture', 'Diversity & Inclusion', 'Gender Bias Awareness Training'] } ] }
];

function Heading({ kicker, title, accent, text }) {
  return <div className="section-heading"><div><div className="kicker">{kicker}</div><h2>{title} <span className="grad">{accent}</span></h2></div>{text && <p>{text}</p>}</div>;
}

function App() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [view, setView] = useState('About');
  const [modal, setModal] = useState(null);
  const [skillTab, setSkillTab] = useState(0);
  const [more, setMore] = useState({ skills: false, projects: false, certs: false, metrics: false });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ busy: false, text: '', error: false });
  const toggle = k => setMore(m => ({ ...m, [k]: !m[k] }));

  const experience = allExperience.filter(e => e.period !== 'Details to confirm');
  const allSkills = useMemo(() => Object.entries(skillGroups).flatMap(([category, items]) => items.map(([name, description]) => ({ name, description, category }))), []);
  const describe = n => platformDesc[n] || allSkills.find(x => x.name === n)?.description || '';
  const featured = featuredIds.map(id => projects.find(p => p.id === id)).filter(Boolean);
  const shownProjects = more.projects ? projects : featured;
  const marketCount = marketplacePlatforms.flatMap(g => g.platforms).length;

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && setModal(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => { document.body.style.overflow = modal ? 'hidden' : ''; }, [modal]);

  const go = name => { setView(name); setMenu(false); window.scrollTo({ top: 0 }); };
  const open = (type, item) => setModal({ type, item });

  async function submit(e) {
    e.preventDefault();
    const key = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!key) {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + form.name)}&body=${body}`;
      return;
    }
    setStatus({ busy: true, text: '', error: false });
    try {
      const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ access_key: key, subject: `Portfolio enquiry from ${form.name}`, from_name: 'Portfolio website', name: form.name, email: form.email, message: form.message }) });
      const j = await r.json();
      if (!j.success) throw new Error(j.message || 'Unable to send message.');
      setStatus({ busy: false, text: 'Thank you! Your message has been sent. I will get back to you soon.', error: false });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ busy: false, text: `${err.message} Please email me directly at ${profile.email}.`, error: true });
    }
  }

  return <div className={dark ? 'app dark' : 'app light'}>
    <header className="topbar-wrap"><div className="topbar">
      <button className="brand" onClick={() => go('About')}><span className="mark">M<i>.</i></span><span className="bname">Mohit Kumar Singh</span></button>
      <nav className={menu ? 'nav open' : 'nav'}>{sections.map(s => <button key={s} className={view === s ? 'on' : ''} onClick={() => go(s)}>{s}</button>)}</nav>
      <div className="actions">
        <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
        <a className="btn primary sm cta" href={profile.links.email}><Mail size={14} /> Contact</a>
        <button className="icon-btn menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
    </div></header>

    <main className="wrap">
      <section className={view === 'About' ? 'hero' : 'hero off'} id="about">
        <div>
          <div className="eyebrow"><span className="dot" /> Open to opportunities</div>
          <h1>E-commerce & Quick Commerce <span className="grad">Account Manager.</span></h1>
          <p className="lede">{profile.summary}</p>
          <div className="btns">
            <a className="btn primary" href="/Mohit-Kumar-Singh-Resume.pdf" download><Download size={16} /> Download resume</a>
            <button className="btn ghost" onClick={() => go('Experience')}>View experience <ArrowRight size={16} /></button>
          </div>
          <div className="socials"><a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href={profile.links.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href={profile.links.email}><Mail size={16} /> Email</a></div>
        </div>
        <aside className="card profile">
          <div className="avatar">MK</div>
          <h2>{profile.name}</h2>
          <p>Account Management · Marketplace Operations · Performance Marketing</p>
          <div className="meta"><span><MapPin size={14} />{profile.location}</span><span><GraduationCap size={14} />B.E. Computer Science & Engineering</span></div>
          <div className="stats"><div><b>{marketCount}</b><small>Marketplaces</small></div><div><b>{profile.cgpa}</b><small>CGPA</small></div><div><b>{certifications.length}</b><small>Certifications</small></div></div>
        </aside>
      </section>

      <section className={view === 'About' ? 'explore' : 'explore off'}>
        <div className="kicker">Explore my portfolio</div>
        <div className="explore-grid">
          {[['Experience', 'Roles and responsibilities'], ['Expertise', 'Marketplace account management'], ['Skills', 'E-commerce, technical and professional'], ['Projects', 'Web, AI and business work'], ['Education', 'Academic background'], ['Certifications', `${certifications.length} credentials with links`], ['Contact', 'Email, phone and message form']].map(([n, d]) => <button className="card tile" key={n} onClick={() => go(n)}><div className="tile-top"><h3>{n}</h3><ArrowUpRight size={16} /></div><p>{d}</p></button>)}
          <a className="card tile" href="/Mohit-Kumar-Singh-Resume.pdf" download><div className="tile-top"><h3>Resume</h3><Download size={16} /></div><p>Download PDF</p></a>
        </div>
      </section>

      <section className={view === 'Experience' ? 'block' : 'block off'} id="experience">
        <Heading kicker="Experience" title="Where I’ve" accent="worked." />
        <div className="list">{experience.map(x => <button className="row" key={x.id} onClick={() => open('experience', x)}>
          <div className="row-main"><h3>{x.role}</h3><p>{x.company} · {x.location}</p><div className="tags">{x.skills.slice(0, 4).map(t => <span className="tag" key={t}>{t}</span>)}</div></div>
          <span className="period">{x.period}</span><ArrowUpRight size={16} className="chev" />
        </button>)}</div>
      </section>

      <section className={view === 'Expertise' ? 'block' : 'block off'} id="expertise">
        <Heading kicker="Marketplace expertise" title="Listing to" accent="growth." text={`Account ownership across ${marketCount} e-commerce and quick-commerce platforms.`} />
        <div className="grid2">{marketplacePlatforms.map(g => <article className="card" key={g.name}><h3>{g.name}</h3><div className="tags">{g.platforms.map(p => <span className="pill" key={p}>{p}</span>)}</div></article>)}</div>
        <div className="grid3">{marketplaceExpertise.map(x => <button className="card tile" key={x.id} onClick={() => open('expertise', x)}><span className="kicker">{x.group}</span><h3>{x.title}</h3><p className="clamp">{x.description}</p></button>)}</div>
        <button className="link" onClick={() => toggle('metrics')}>{more.metrics ? 'Hide' : 'Show'} metrics I work with ({performanceMetrics.length}) {more.metrics ? <ChevronUp size={15} /> : <ChevronDown size={15} />}</button>
        {more.metrics && <div className="tags metrics">{performanceMetrics.map(([n, d]) => <button className="pill" key={n} onClick={() => open('metric', { name: n, description: d })}>{n}</button>)}</div>}
      </section>

      <section className={view === 'Skills' ? 'block' : 'block off'} id="skills">
        <Heading kicker="Skills" title="Core" accent="competencies." />
        <div className="tabs">{skillCats.map((c, i) => <button key={c.title} className={skillTab === i ? 'active' : ''} onClick={() => setSkillTab(i)}>{c.title}</button>)}</div>
        <div className="skill-groups">{skillCats[skillTab].groups.map(g => <div className="card skill-group" key={g.label}><h3>{g.label}</h3><div className="tags">{g.items.map(n => <button className="chip" key={n} onClick={() => open('skill', { name: n, description: describe(n), category: g.label })}>{n}</button>)}</div></div>)}</div>
      </section>

      <section className={view === 'Projects' ? 'block' : 'block off'} id="projects">
        <Heading kicker="Projects" title="Selected" accent="work." text="Web, AI and business projects. Open any card for details and links." />
        <div className="grid3">{shownProjects.map(p => <button className="card tile" key={p.id} onClick={() => open('project', p)}>
          <div className="tile-top"><span className="kicker">{p.year}</span><ArrowUpRight size={16} /></div><h3>{p.name}</h3><p className="clamp">{p.description}</p>
          <div className="tags">{p.stack.slice(0, 3).map(t => <span className="tag" key={t}>{t}</span>)}</div></button>)}</div>
        <button className="link" onClick={() => toggle('projects')}>{more.projects ? 'Show featured only' : `View all ${projects.length} projects`} {more.projects ? <ChevronUp size={15} /> : <ChevronDown size={15} />}</button>
      </section>

      <section className={view === 'Education' ? 'block' : 'block off'} id="education">
        <Heading kicker="Education" title="Academic" accent="background." />
        <div className="list">{education.map(e => <button className="row" key={e.title} onClick={() => open('education', e)}>
          <div className="row-main"><h3>{e.title}</h3><p>{e.institution} · {e.period} · {e.location}</p></div><b className="score">{e.score}</b></button>)}</div>
      </section>

      <section className={view === 'Certifications' ? 'block' : 'block off'} id="certifications">
        <Heading kicker="Certifications" title="Learning &" accent="credentials." />
        <div className="grid2">{certifications.map(c => <button className="row compact" key={c.id} onClick={() => open('certification', c)}><div className="row-main"><h3>{c.name}</h3><p>{c.issuer}</p></div><ArrowUpRight size={15} className="chev" /></button>)}</div>
      </section>

      <section className={view === 'Contact' ? 'block contact card' : 'block contact card off'} id="contact">
        <div><div className="kicker">Contact</div><h2>Let’s <span className="grad">talk.</span></h2><p className="muted">Open to roles and conversations around e-commerce, quick commerce, performance marketing and technology-led growth.</p>
          <div className="socials col"><a href={profile.links.email}><Mail size={16} /> {profile.email}</a><a href="tel:+917050189007"><Phone size={16} /> {profile.phone}</a><a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href={profile.links.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a></div></div>
        <form onSubmit={submit}>
          <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
          <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email address" />
          <textarea required rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="How can I help?" />
          <button className="btn primary" disabled={status.busy}>{status.busy ? 'Sending…' : 'Send message'} <Send size={15} /></button>
          {status.text && <p className={status.error ? 'msg error' : 'msg'}>{status.text}</p>}
        </form>
      </section>
    </main>

    <footer className="wrap footer"><span>© {new Date().getFullYear()} {profile.name}</span><button className="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top <ArrowUpRight size={14} /></button></footer>

    {modal && <div className="backdrop" onMouseDown={e => e.target === e.currentTarget && setModal(null)}><section className="modal" role="dialog" aria-modal="true"><button className="icon-btn close" onClick={() => setModal(null)} aria-label="Close"><X size={18} /></button><ModalContent {...modal} /></section></div>}
  </div>;
}

function ModalContent({ type, item }) {
  const Tags = ({ list }) => <div className="tags">{list.map(t => <span className="tag" key={t}>{t}</span>)}</div>;
  if (type === 'skill') return <><h2>{item.name}</h2><span className="kicker">{item.category}</span><p className="muted">{item.description}</p></>;
  if (type === 'metric') return <><h2>{item.name}</h2><p className="muted">{item.description}</p></>;
  if (type === 'experience') return <><h2>{item.role}</h2><p className="sub">{item.company} · {item.period}</p><ul>{item.details.map((d, i) => <li key={i}>{d}</li>)}</ul><Tags list={item.skills} /></>;
  if (type === 'expertise') return <><h2>{item.title}</h2><p className="sub">{item.group}</p><p className="muted">{item.description}</p><ul>{item.tasks.map((t, i) => <li key={i}>{t}</li>)}</ul></>;
  if (type === 'project') return <><h2>{item.name}</h2><p className="sub">{item.year}</p><p className="muted">{item.description}</p><Tags list={item.stack} /><div className="links">{item.links.map(l => <a key={l.label} href={l.url} target="_blank" rel="noreferrer">{l.label} <ExternalLink size={14} /></a>)}</div></>;
  if (type === 'certification') return <><h2>{item.name}</h2><p className="sub">{item.issuer}</p><p className="muted">{item.description}</p>{item.url && <div className="links"><a href={item.url} target="_blank" rel="noreferrer">View credential <ExternalLink size={14} /></a></div>}</>;
  if (type === 'education') return <><h2>{item.title}</h2><p className="sub">{item.institution} · {item.period}</p><p className="muted"><MapPin size={13} /> {item.location}</p><b className="score big">{item.score}</b><p className="muted">{item.description}</p></>;
  return null;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
