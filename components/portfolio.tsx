"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowDown, ArrowRight, Download, MapPin, X, Check, Database, Layers3, Workflow, Braces, Sparkles, ShieldCheck, ExternalLink, FileText, FolderOpen } from "lucide-react";
import { Github, Linkedin } from "@/components/social-icons";
import { AnalyticsNotice } from "@/components/analytics";
import { trackEvent } from "@/lib/analytics";
import { SiteHeader } from "@/components/site-header";
import { profile, projects, experience, skills, certifications } from "@/lib/content";
function SectionHeading({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> {eyebrow}</p><h2>{title}</h2></div>{description && <p className="section-description">{description}</p>}</div>;
}
function Hero() {
  return <section className="hero shell" aria-labelledby="hero-title"><div className="hero-copy">
    <div className="availability"><span className="status-dot"/>Open to work <span className="availability-divider">/</span> Immediate joiner</div>
    <p className="hero-intro">HELLO, I’M SHIVAM RAI</p><h1 id="hero-title">Turning data into<br/><span>what’s next.</span></h1>
    <p className="hero-role">Data Engineer <span>&</span> AI Builder</p>
    <p className="hero-description">I build reliable data pipelines, scalable cloud platforms, and AI that makes complex data useful.</p>
    <div className="hero-buttons"><a className="button primary" href="#projects">View projects <ArrowUpRight size={17}/></a><a className="button secondary" href={profile.resume} download>Download resume <Download size={16}/></a></div>
    <a href="#contact" className="hero-contact">Get in touch <ArrowRight size={15}/></a>
    <div className="hero-location"><MapPin size={14}/>{profile.location}<span className="location-line"/>Open to data & AI roles</div>
  </div><div className="hero-art" aria-label="Data engineering workflow: ingest, transform, activate">
    <div className="art-top"><span><span className="tiny-dot"/>SYSTEM OVERVIEW</span><span>01 — 03</span></div><div className="orbit orbit-one"/><div className="orbit orbit-two"/>
    <div className="flow-node node-source"><Database size={25}/><div><strong>Ingest</strong><span>Many sources. One foundation.</span></div><span className="node-number">01</span></div>
    <div className="flow-connector connector-first"><span>RAW → CURATED</span></div>
    <div className="flow-node node-transform"><Layers3 size={25}/><div><strong>Transform</strong><span>Reliable, ready-to-use data.</span></div><span className="node-number">02</span></div>
    <div className="flow-connector connector-second"><span>DATA → INTELLIGENCE</span></div>
    <div className="flow-node node-activate"><Sparkles size={25}/><div><strong>Activate</strong><span>Analytics. Agents. Answers.</span></div><span className="node-number">03</span></div>
    <div className="art-bottom"><span>BUILT FOR REAL-WORLD IMPACT</span><ArrowUpRight size={16}/></div>
  </div><div className="hero-bottom"><span>PYTHON <span>/</span> SQL <span>/</span> PYSPARK <span>/</span> DATABRICKS <span>/</span> AZURE</span><a href="#about">Explore my work <ArrowDown size={14}/></a></div></section>;
}
function About() {
  return <section className="section shell" id="about"><SectionHeading number="01" eyebrow="A LITTLE CONTEXT" title="Built on curiosity. Driven by impact."/>
    <div className="about-grid"><div className="about-copy"><p>I’m a data engineer with a finance foundation and a builder’s mindset. At <strong>Hoonartek</strong>, I worked across the data lifecycle—from source ingestion and cloud migration to production support and applied AI.</p><p>I care about the details that make systems dependable: clean metadata, clear monitoring, thoughtful automation, and pipelines people can trust. Today, I’m deepening that work at the intersection of <strong>data engineering and AI.</strong></p><a className="text-link" href="#experience">The story so far <ArrowRight size={16}/></a></div><div className="impact-grid"><div><strong>100<span>+</span></strong><span>Data sources integrated</span></div><div><strong>4,000<span>+</span></strong><span>Tables supported in production</span></div><div><strong>95<span>%</span></strong><span>Less developer debugging time</span></div><div><strong>12</strong><span>Team members led as ADF SPOC</span></div></div></div>
  </section>;
}
function Experience({ onResume }: { onResume: () => void }) {
  return <section id="experience" className="section shell"><SectionHeading number="02" eyebrow="THE JOURNEY" title="Experience that connects the dots." description="From finance fundamentals to enterprise data platforms and intelligent systems."/>
  <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><div className="timeline-date"><span>{item.dates}</span>{item.current && <small><span className="status-dot"/>Currently</small>}</div><div className="timeline-body"><div className="timeline-marker"/><div className="job-top"><div><h3>{item.role}</h3><p>{item.company}</p></div><span>{item.location}</span></div><ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul></div></article>)}</div>
  <div className="resume-strip"><div className="resume-strip-copy"><FileText size={23}/><div><strong>The complete picture.</strong><span>Experience, certifications and education in one PDF.</span></div></div><button className="button secondary" onClick={onResume}>View full resume <ArrowUpRight size={16}/></button></div></section>;
}
function ProjectVisual({ type }: { type: string }) {
  return <div className={`project-visual visual-${type}`} aria-hidden="true">{type === "pipeline" ? <><div className="mini-block"><Database size={22}/><span>SOURCE</span></div><span className="mini-wire"/><div className="mini-block highlighted"><Workflow size={24}/><span>PIPELINE</span></div><span className="mini-wire"/><div className="mini-block"><Layers3 size={22}/><span>CURATED</span></div></> : type === "agents" ? <div className="agent-diagram"><div className="agent-core"><Sparkles size={19}/>Supervisor</div><div className="agent-branches"><span>Knowledge</span><span>Genie</span><span>Retrieval</span></div></div> : <div className="quality-code"><div><span className="code-purple">schema</span><span className="code-muted"> → </span><span className="code-mint">intelligence</span></div><div><Check size={14}/> completeness</div><div><Check size={14}/> consistency</div><div><Check size={14}/> explainability</div></div>}</div>;
}
function ProjectCard({ project }: { project: typeof projects[number] }) {
  const live = project.live.startsWith("https://"); const source = project.source.startsWith("https://");
  const caseId = { "01": "cloud-data-migration", "02": "multi-agent-support", "03": "ai-data-quality" }[project.id];
  return <article className="project-card"><ProjectVisual type={project.visual}/><div className="project-content"><p className="project-category">{project.category}<span>{project.id}</span></p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div><div className="project-links"><a href={`/work/#${caseId}`}>Read case study <ArrowUpRight size={15}/></a>{live && <a href={project.live} data-analytics-event="project_demo" target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={15}/></a>}{source && <a href={project.source} data-analytics-event="project_source" target="_blank" rel="noopener noreferrer"><Github size={14}/>Source</a>}</div></div></article>;
}
function Projects() { return <section id="projects" className="section shell"><SectionHeading number="03" eyebrow="SELECTED WORK" title="From pipelines to possibilities." description="A selection of data and AI projects from my engineering work."/><div className="project-grid">{projects.map(p => <ProjectCard project={p} key={p.id}/>)}</div><div className="work-home-link"><div><FolderOpen size={22}/><p>Explore the thinking, workflows and supporting material behind my work.</p></div><a className="text-link" href="/work/">Browse work samples <ArrowRight size={17}/></a></div><p className="project-note">Also built: production ADF ETL pipelines and three curated Genie agents for 30+ datasets, used by 200+ analysts.</p></section>; }
function Skills() {
  const [all, setAll] = useState(false);
  return <section id="skills" className="section shell"><SectionHeading number="04" eyebrow="MY TOOLKIT" title="The tools behind the work." description="A practical stack for moving, shaping and making sense of data."/><div className="skills-grid">{skills.map((group, i) => <div className="skill-group" key={group.title}><div className="skill-title">{i === 0 ? <Braces size={18}/> : i === 1 ? <Database size={18}/> : i === 2 ? <Sparkles size={18}/> : <Workflow size={18}/>}<h3>{group.title}</h3></div><div className="tags skill-tags">{group.skills.map(s => <span key={s}>{s}</span>)}</div></div>)}</div>
  <div className="credentials-heading"><div><ShieldCheck size={18}/><h3>Learning, backed by credentials.</h3></div><button className="text-link" onClick={() => setAll(!all)} aria-expanded={all}>{all ? "Show fewer" : "View all 9"}<ArrowUpRight size={15}/></button></div><div className="certifications">{certifications.slice(0, all ? undefined : 3).map(c => <a href={c.url} target="_blank" rel="noopener noreferrer" key={c.title}><span className="cert-provider">{c.provider}</span><strong>{c.title}</strong><ArrowUpRight size={16}/></a>)}</div>
  <div className="education"><span>EDUCATION</span><p>Bachelor of Commerce · Financial Accounting & Auditing</p><span>Mumbai University · 2017–2020</span></div></section>;
}
function ContactForm() {
  const [state, setState] = useState<"idle"|"sending"|"success"|"error">("idle"); const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget; const data = new FormData(form); setState("sending"); setMessage("");
    try { const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "https://shivam-rai-data-portfolio.shivamrai162.chatgpt.site/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(Object.fromEntries(data)) }); const result = await response.json() as { error?: string; message?: string }; if (!response.ok) throw new Error(result.error || "Message could not be sent. Please try again."); trackEvent("contact_success");setState("success");setMessage(result.message || "Your message has been received.");form.reset(); }
    catch (error) { setState("error");setMessage(error instanceof Error ? error.message : "Please try again or email me directly."); }
  }
  return <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Alex Morgan" required minLength={2} maxLength={100}/></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={254}/></label></div><label>What do you have in mind?<textarea name="message" placeholder="A role, a project, or an interesting data challenge…" rows={4} required minLength={10} maxLength={4000}/></label><div className="honeypot" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div><div className="form-bottom"><span>Your message is saved securely for my review.</span><button className="button primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}<ArrowUpRight size={16}/></button></div><p role={state === "error" ? "alert" : "status"} className={`form-status ${state}`}>{message}</p></form>;
}
function Contact() { const hasGithub=profile.github.startsWith("https://"); return <section id="contact" className="section shell contact-section"><div className="contact-grid"><div><p className="eyebrow"><span>05</span> LET’S CONNECT</p><h2>Good work starts<br/>with a conversation<span>.</span></h2><p className="contact-description">Hiring for data engineering or applied AI?<br/>I’d love to hear what you’re building.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={19}/></a><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16}/>LinkedIn<ArrowUpRight size={13}/></a>{hasGithub ? <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16}/>GitHub<ArrowUpRight size={13}/></a> : <span title={profile.github}><Github size={16}/>GitHub <span className="github-placeholder">[PLACEHOLDER]</span></span>}</div></div><ContactForm/></div></section>; }
function ResumeModal({ close }: { close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { const el = dialog.current; el?.showModal(); const previous = document.body.style.overflow; document.body.style.overflow="hidden"; return () => { document.body.style.overflow=previous; }; }, []);
  return <dialog ref={dialog} className="resume-dialog" onCancel={close} onClick={e => { if(e.target === e.currentTarget) close(); }}><div className="resume-dialog-inner"><div className="modal-header"><div><FileText size={18}/><strong>Shivam Rai / Resume</strong></div><button className="icon-button" autoFocus onClick={close} aria-label="Close resume preview"><X size={20}/></button></div><iframe src={profile.resume} title="Shivam Rai's full resume PDF"/><div className="modal-footer"><a className="text-link" href={profile.resume} target="_blank" rel="noopener noreferrer">Open PDF in new tab <ExternalLink size={15}/></a><a className="button primary" href={profile.resume} download>Download PDF <Download size={15}/></a></div></div></dialog>;
}
export function Portfolio() {
  const [resume, setResume] = useState(false);
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader/><main id="main"><Hero/><About/><Experience onResume={() => { trackEvent("resume_preview"); setResume(true); }}/><Projects/><Skills/><Contact/></main><footer className="footer shell"><a className="brand" href="#">sr<span>.</span></a><p>© {new Date().getFullYear()} Shivam Rai <span>·</span> Built with intention.</p><a href="#">Back to top <ArrowUpRight size={14}/></a></footer><div className="shell"><AnalyticsNotice /></div>{resume && <ResumeModal close={() => setResume(false)}/>}</>;
}
