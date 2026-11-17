"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";

const MotionContext = createContext({ paused: false, reduced: false, toggle: () => {} });

/** Small CSS animations only run while their diagrams are on screen. */
export function PortfolioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState<boolean | null>(null);
  const [reduced, setReduced] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReduced(preference.matches);
    const syncVisibility = () => setHidden(document.hidden);
    syncPreference();
    syncVisibility();
    preference.addEventListener("change", syncPreference);
    document.addEventListener("visibilitychange", syncVisibility);

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        entry.target.classList.toggle("motion-visible", entry.isIntersecting);
        if (entry.isIntersecting) entry.target.classList.add("motion-entered");
      }
    }, { threshold: 0.12 });
    root.current?.querySelectorAll(".hero-art, .project-visual, .section-heading, .impact-grid, .timeline-item, .skill-group, .contact-grid").forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
      preference.removeEventListener("change", syncPreference);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);

  return <MotionContext.Provider value={{ paused: paused === true, reduced: reduced && paused === null, toggle: () => setPaused(value => value === null ? !reduced : !value) }}>
    <div ref={root} className="portfolio-motion" data-motion={paused || (reduced && paused === null) || hidden ? "paused" : "running"} data-motion-preference={paused === false ? "enabled" : "auto"}>{children}</div>
  </MotionContext.Provider>;
}

export function MotionToggle() {
  const { paused, reduced, toggle } = useContext(MotionContext);
  return <button className="motion-toggle" type="button" onClick={toggle} aria-pressed={paused || reduced}
    aria-label={reduced ? "Enable animations; reduced motion is currently respected" : paused ? "Resume animations" : "Pause animations"}>
    {paused || reduced ? <Play size={12}/> : <Pause size={12}/>}
    <span>{reduced ? "Enable motion" : paused ? "Resume motion" : "Pause motion"}</span>
  </button>;
}
