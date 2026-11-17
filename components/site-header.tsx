"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

export function SiteHeader({ workPage = false }: { workPage?: boolean }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  const action = theme === "dark" ? "light" : "dark";
  return <header className="header"><div className="shell header-inner">
    <a className="brand" href="/" aria-label="Shivam Rai, home">sr<span>.</span></a>
    <nav aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>
      {[["About", "/#about"], ["Experience", "/#experience"], ["Projects", "/#projects"], ["Skills", "/#skills"]].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="work-nav-link" href="/work/" aria-current={workPage ? "page" : undefined} onClick={() => setOpen(false)}>Work samples</a>
      <a href="/#contact" className="nav-contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={14} /></a>
    </nav>
    <div className="header-actions"><button className="theme-toggle" type="button" aria-label={`Switch to ${action} mode`} aria-pressed={theme === "light"} onClick={() => setTheme(action)} title={`Switch to ${action} mode`}>
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}<span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
    </button><button className="icon-button mobile-menu" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
  </div></header>;
}
