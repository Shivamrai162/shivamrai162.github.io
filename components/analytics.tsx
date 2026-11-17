"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { analyticsEvents, classifyLink, trackEvent, type AnalyticsEvent } from "@/lib/analytics";

export function Analytics() {
  const [ready, setReady] = useState(false);
  const code = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE;
  const configured = Boolean(code && /^[a-z0-9](?:[a-z0-9-]{0,60}[a-z0-9])?$/.test(code));

  useEffect(() => {
    if (!configured || !ready) return;
    function click(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>("[data-analytics-event], a[href]");
      if (!target) return;
      const explicit = target.dataset.analyticsEvent;
      if (explicit && Object.hasOwn(analyticsEvents, explicit)) {
        trackEvent(explicit as AnalyticsEvent);
      } else if (target instanceof HTMLAnchorElement) {
        const name = classifyLink(target.getAttribute("href") || "", target.hasAttribute("download"));
        if (name) trackEvent(name);
      }
    }
    document.addEventListener("click", click);
    const seen = new Set<string>();
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
      for (const entry of entries) {
        const name = `section_${entry.target.id}`;
        if (!entry.isIntersecting || seen.has(name) || !Object.hasOwn(analyticsEvents, name)) continue;
        seen.add(name);
        trackEvent(name as AnalyticsEvent);
        observer?.unobserve(entry.target);
      }
    }, { threshold: 0.15 });
    document.querySelectorAll("main section[id]").forEach(section => observer?.observe(section));
    return () => { document.removeEventListener("click", click); observer?.disconnect(); };
  }, [configured, ready]);

  if (!configured) return null;
  return <Script id="portfolio-goatcounter" src="https://gc.zgo.at/count.js"
    data-goatcounter={`https://${code}.goatcounter.com/count`}
    strategy="afterInteractive" onReady={() => setReady(true)} />;
}

export function AnalyticsNotice() {
  return <details className="analytics-notice"><summary>Privacy & statistics</summary><p>This site can use GoatCounter for aggregate visits, referring sites, approximate country, browser, screen size and actions such as resume download clicks. It uses no analytics cookies and does not send contact form contents to analytics. The statistics dashboard is managed separately from this public site. <a href="https://www.goatcounter.com/help/privacy" target="_blank" rel="noopener noreferrer">GoatCounter privacy details ↗</a></p></details>;
}
