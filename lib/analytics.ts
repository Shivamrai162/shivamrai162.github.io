export const analyticsEvents = {
  resume_download: "Resume download clicked",
  resume_open: "Resume PDF opened",
  resume_preview: "Resume preview opened",
  email_contact: "Email contact clicked",
  linkedin_profile: "LinkedIn profile clicked",
  github_profile: "GitHub profile clicked",
  project_demo: "Project demo clicked",
  project_source: "Project source clicked",
  work_sample_open: "Supporting work sample opened",
  case_study_open: "Case study opened",
  work_filter: "Work category filter used",
  contact_email_draft: "Email draft clicked",
  section_about: "About section viewed",
  section_experience: "Experience section viewed",
  section_projects: "Projects section viewed",
  section_skills: "Skills section viewed",
  section_contact: "Contact section viewed",
} as const;

export type AnalyticsEvent = keyof typeof analyticsEvents;
declare global {
  interface Window {
    goatcounter?: { count?: (event: { path: string; title: string; event: true }) => void };
  }
}

// Fixed event names only: no form values, email addresses or outbound URLs.
export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  try {
    window.goatcounter?.count?.({ path: event, title: analyticsEvents[event], event: true });
  } catch { /* Analytics must never interrupt navigation or contact delivery. */ }
}

export function classifyLink(href: string, download: boolean): AnalyticsEvent | null {
  if (href.endsWith("/Shivam_Rai_Resume.pdf")) return download ? "resume_download" : "resume_open";
  if (href.startsWith("mailto:")) return "email_contact";
  if (/^https:\/\/(www\.)?linkedin\.com\/in\//.test(href)) return "linkedin_profile";
  if (/^https:\/\/github\.com\/shivamrai162\/?$/i.test(href)) return "github_profile";
  return null;
}
