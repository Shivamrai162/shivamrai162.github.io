"use client";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Braces, Check, ChevronDown, Database, FileText, FolderOpen, Layers3, ShieldCheck, Sparkles, Table2, Workflow } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { AnalyticsNotice } from "@/components/analytics";
import { trackEvent } from "@/lib/analytics";
import { profile } from "@/lib/content";
import { workSamples, type WorkSample } from "@/lib/work-samples";

function Diagram({ type }: { type: WorkSample["diagram"] }) {
  const labels = type === "migration" ? ["Source systems", "Raw layer", "Curated data"] : type === "quality" ? ["Schema context", "Relevant rules", "Recommendations"] : ["Recurring tasks", "Reusable templates", "Consistent workflow"];
  return <div className={`work-diagram diagram-${type}`} aria-label={`Illustrative ${type} workflow`}>
    <div className="diagram-caption"><span className="tiny-dot" />{type === "agents" ? "COORDINATED INTELLIGENCE" : type === "migration" ? "FROM INGESTION TO INSIGHT" : type === "quality" ? "CONTEXT BEFORE RECOMMENDATIONS" : "REPEATABLE BY DESIGN"}</div>
    {type === "agents" ? <div className="work-agent"><div className="work-agent-supervisor"><Sparkles size={25}/><strong>Supervisor</strong><span>Coordinate & synthesize</span></div><div className="work-agent-branches"><div><FileText size={20}/><strong>Knowledge assistant</strong><span>Unstructured sources</span></div><div><Table2 size={20}/><strong>Genie Agent</strong><span>Structured data</span></div></div></div> : <div className="work-flow">{labels.map((label, i) => <div className="work-flow-step" key={label}><div className="work-flow-icon">{type === "migration" ? i === 0 ? <Database size={25}/> : i === 1 ? <Layers3 size={25}/> : <Check size={25}/> : type === "quality" ? i === 0 ? <Braces size={25}/> : i === 1 ? <Database size={25}/> : <Sparkles size={25}/> : i === 0 ? <Table2 size={25}/> : i === 1 ? <FileText size={25}/> : <Workflow size={25}/>}</div><div><span>0{i + 1}</span><strong>{label}</strong></div>{i < 2 && <ArrowDown size={16} className="work-flow-arrow" />}</div>)}</div>}
    <p className="diagram-footnote">Illustrative workflow · recreated for this portfolio</p>
  </div>;
}

function CaseStudy({ sample }: { sample: WorkSample }) {
  const details = useRef<HTMLDetailsElement>(null);
  useEffect(() => { if (window.location.hash === `#${sample.id}` && details.current) details.current.open = true; }, [sample.id]);
  return <article className={`work-case accent-${sample.diagram}`} id={sample.id}>
    <div className="work-case-main"><div className="work-case-kicker"><span>{sample.number} / {sample.company}</span><span>{sample.category}</span></div><h2>{sample.title}</h2><p className="work-case-description">{sample.summary}</p><div className="tags">{sample.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <details className="case-details" ref={details} onToggle={event => { if (event.currentTarget.open) trackEvent("case_study_open"); }}><summary>Read case study <ChevronDown size={17}/></summary><div className="case-story"><div><h3>The challenge</h3><p>{sample.problem}</p></div><div><h3>My contribution</h3><ul>{sample.contribution.map(item => <li key={item}>{item}</li>)}</ul></div><div><h3>The outcome</h3><p>{sample.outcome}</p></div></div></details>
    </div><Diagram type={sample.diagram}/>
    <div className="case-artifacts"><div className="artifact-heading"><FolderOpen size={18}/><h3>Supporting material</h3><span>Files not added yet</span></div><div className="artifact-grid">{sample.artifacts.map(artifact => artifact.href ? <a className="artifact-item" href={artifact.href} target="_blank" rel="noopener noreferrer" key={artifact.label} data-analytics-event="work_sample_open"><FileText size={21}/><div><strong>{artifact.label}</strong><span>{artifact.format}</span></div><ArrowUpRight size={17}/></a> : <div className="artifact-item unpublished" key={artifact.label}><FileText size={21}/><div><strong>{artifact.label}</strong><span>{artifact.format} · Not published</span></div></div>)}</div><details className="artifact-placeholders"><summary>File link details <ChevronDown size={14}/></summary>{sample.artifacts.filter(artifact => !artifact.href).map(artifact => <p key={artifact.label}>{artifact.placeholder}</p>)}</details></div>
  </article>;
}

export function WorkSamples() {
  const [filter, setFilter] = useState("All work");
  const [jumpTarget, setJumpTarget] = useState<string | null>(null);
  function jumpToCase(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setFilter("All work");
    setJumpTarget(event.currentTarget.hash.slice(1));
  }
  useEffect(() => {
    if (!jumpTarget) return;
    const target = document.getElementById(jumpTarget);
    if (!target) return;
    window.history.replaceState(null, "", `#${jumpTarget}`);
    const story = target.querySelector<HTMLDetailsElement>(".case-details");
    if (story) story.open = true;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setJumpTarget(null);
  }, [filter, jumpTarget]);
  const filters = ["All work", "Data engineering", "Applied AI", "Finance & automation"];
  const visible = workSamples.filter(sample => filter === "All work" || sample.category === filter);
  return <><a className="skip-link" href="#work-main">Skip to work samples</a><SiteHeader workPage/><main id="work-main">
    <section className="work-hero shell"><div><a className="work-back" href="/"><ArrowLeft size={15}/>Back to overview</a><p className="eyebrow"><span>THE WORK, IN CONTEXT</span></p><h1>The work behind<br/><span>the outcomes.</span></h1><p className="work-intro">A closer look at how I approach data platforms, applied AI, and practical automation.</p><div className="work-hero-actions"><a className="button primary" href="#case-studies">Explore the work <ArrowDown size={17}/></a><a className="text-link" href={profile.resume} download>Download resume <ArrowUpRight size={16}/></a></div></div>
      <aside className="work-index" aria-label="Work samples index"><p>ACROSS MY CAREER</p><a href="#cloud-data-migration" onClick={jumpToCase}><span>01</span><div><strong>Data platforms</strong><small>Ingestion, transformation & operations</small></div><ArrowUpRight size={19}/></a><a href="#multi-agent-support" onClick={jumpToCase}><span>02</span><div><strong>Applied AI</strong><small>Agents, retrieval & useful answers</small></div><ArrowUpRight size={19}/></a><a href="#finance-automation" onClick={jumpToCase}><span>03</span><div><strong>Finance & automation</strong><small>The foundation behind the engineering</small></div><ArrowUpRight size={19}/></a><div className="work-index-bottom"><ShieldCheck size={16}/>Public summaries · approved files only</div></aside>
    </section>
    <section className="shell work-collection" id="case-studies"><div className="work-collection-top"><div><p className="eyebrow"><span>SELECTED EXPERIENCE</span></p><h2>Follow the thinking.</h2></div><p>Project context first.<br/>Supporting evidence alongside it.</p></div><div className="work-filters" role="group" aria-label="Filter work samples">{filters.map(name => <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}<span>{name === "All work" ? workSamples.length : workSamples.filter(sample => sample.category === name).length}</span></button>)}</div><p className="sr-only" role="status">Showing {visible.length} case studies</p><div className="work-case-list">{visible.map(sample => <CaseStudy sample={sample} key={sample.id}/>)}</div></section>
    <section className="shell personal-work"><div><p className="eyebrow"><span>BEYOND THE DAY JOB</span></p><h2>Still curious. Still building.</h2><p>I’m developing an ETL project using ADF, Databricks, Logic Apps, Key Vault and Azure DevOps, while continuing to deepen my cloud and engineering skills.</p><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Explore my GitHub profile <ArrowUpRight size={17}/></a></div><div className="personal-work-note"><Braces size={25}/><h3>Personal projects</h3><p>Public project repositories and demonstrations will be linked here as they become available.</p><details className="artifact-placeholders"><summary>Project link details <ChevronDown size={14}/></summary><p>[PLACEHOLDER: personal project repository or demo URL]</p></details></div></section>
    <section className="shell work-contact"><div><p className="eyebrow"><span>LET’S CONNECT THE DOTS</span></p><h2>Have a data challenge in mind?</h2><p>I’d be happy to talk through my experience and approach.</p></div><a className="button primary" href="/#contact">Get in touch <ArrowRight size={18}/></a></section>
  </main><footer className="footer shell"><a className="brand" href="/" aria-label="Shivam Rai, home">sr<span>.</span></a><p>© {new Date().getFullYear()} Shivam Rai <span>·</span> Built with intention.</p><a href="/">Back to overview <ArrowUpRight size={14}/></a></footer><div className="shell"><AnalyticsNotice/></div></>;
}
