export const profile = {
  name: "Shivam Rai", initials: "SR", email: "shivamrai162@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivamrai162/",
  github: "https://github.com/shivamrai162",
  location: "Thane, Maharashtra, India", availability: "Available for opportunities · Immediate joiner",
  resume: "/Shivam_Rai_Resume.pdf",
};
export const projects = [
  { id: "01", category: "Data engineering", title: "Cloud Data Migration Accelerator", description: "Automated data-load monitoring, file validation and execution alerts. Built with Logic Apps, orchestrated through ADF and executed on Databricks.", tags: ["Azure Data Factory", "Databricks", "Logic Apps"], visual: "pipeline", live: "[PLACEHOLDER: Live demo URL]", source: "[PLACEHOLDER: GitHub/source URL]" },
  { id: "02", category: "Applied AI", title: "Multi-Agent Customer Support", description: "A Databricks AgentBricks supervisor that coordinates specialist agents to answer customer questions across structured and unstructured data.", tags: ["AgentBricks", "Mosaic AI", "Vector Search"], visual: "agents", live: "[PLACEHOLDER: Live demo URL]", source: "[PLACEHOLDER: GitHub/source URL]" },
  { id: "03", category: "AI × Data quality", title: "AI-Powered Data Quality Rules", description: "Schema-aware recommendations using RAG over historical data quality rules. Combines vector retrieval and LLM reasoning for explainable suggestions.", tags: ["PySpark", "RAG", "Vector Search"], visual: "quality", live: "[PLACEHOLDER: Live demo URL]", source: "[PLACEHOLDER: GitHub/source URL]" },
] as const;
export const experience = [
  { dates: "SEP 2026 — PRESENT", role: "Independent learning & development", company: "Career break", location: "Thane, India", current: true, bullets: ["Building an ETL project using ADF, Databricks, Logic Apps, Key Vault and Azure DevOps.", "Preparing for the Kubernetes and Cloud Native Associate (KCNA) certification."] },
  { dates: "JUL 2023 — AUG 2026", role: "Associate Consultant", company: "Hoonartek", location: "Pune, India", current: false, bullets: ["Designed on-prem → raw → curated pipelines across 100+ data sources, with SCD Type 2 handling and data quality checks.", "Led a 12-member team as the ADF pipeline SPOC, coordinating delivery, production fixes and stakeholders.", "Built an ETL dependency-check and error-validation framework that reduced developer debugging time by 95%.", "Supported production ETL across 4,000+ tables; built batch and streaming workflows using PySpark, Lakeflow and Databricks Jobs.", "Delivered RAG, multi-agent assistants, ML inference workflows and three Genie agents serving 200+ analysts across 30+ datasets."] },
  { dates: "AUG 2022 — JUL 2023", role: "Transition to cloud & IT", company: "Career transition", location: "Thane, India", current: false, bullets: ["Moved from finance into IT following the COVID lockdown, building foundations in networks, SQL, Linux scripting and Git.", "Studied AWS cloud architecture, Snowflake and developer tools, combining certifications with hands-on practice."] },
  { dates: "FEB 2021 — MAR 2022", role: "CA Inter Articleship", company: "DGMS & Co.", location: "Thane, India", current: false, bullets: ["Managed tax filings and accounting workflows with KDK Software, Tally ERP 9 and Excel.", "Automated spreadsheets and document templates to improve financial process efficiency and accuracy."] },
];
export const skills = [
  { title: "Languages & databases", skills: ["Python", "SQL", "PySpark", "SQL Server", "PostgreSQL", "Oracle", "MySQL"] },
  { title: "Data & cloud platforms", skills: ["Databricks", "Azure Data Factory", "AWS", "Azure", "Snowflake", "ADLS Gen2", "Lakeflow", "Azure Synapse"] },
  { title: "AI & machine learning", skills: ["Mosaic AI", "AgentBricks", "MLflow", "Vector Search", "RAG", "Genie", "MLOps", "OpenAI APIs"] },
  { title: "Engineering & delivery", skills: ["Git & GitHub", "Azure DevOps", "Terraform", "Kubernetes", "Linux & Shell", "ETL / ELT", "SCD Type 2", "Team leadership"] },
];
export const certifications = [
  { title: "Data Engineer Professional", provider: "Databricks", url: "https://www.credential.net/96c0c5dd-426f-4824-9c9d-2b86ab435ee7" },
  { title: "Generative AI Engineer Associate", provider: "Databricks", url: "https://www.credential.net/7bc4efc2-c418-4d68-a9d9-7dd6161b6f1b" },
  { title: "Machine Learning Engineer Associate", provider: "Databricks", url: "https://www.credential.net/fb37405c-2aca-4069-820e-55e780f88cdb" },
  { title: "Data Engineer Associate", provider: "Databricks", url: "https://www.credential.net/0d004d44-6c41-40ec-9d50-f77c54b86718" },
  { title: "Data Analyst Associate", provider: "Databricks", url: "https://www.credential.net/87ca98d5-5409-46b3-a3c1-dcf97066b44b" },
  { title: "SnowPro Core", provider: "Snowflake", url: "https://www.credential.net/f59c928f-27b0-46f8-bdeb-2d3281ac13ec" },
  { title: "Platform Associate", provider: "Snowflake", url: "https://www.credential.net/9d58826b-962a-4fd3-aa5b-9a1e17ddac68" },
  { title: "Solutions Architect Associate", provider: "AWS", url: "https://www.credly.com/badges/0ed967ad-b8dd-4bcd-b24f-f1edd5682c27" },
  { title: "Cloud Practitioner", provider: "AWS", url: "https://www.credly.com/badges/73672a05-738f-4f9c-aa12-1b1c927e05a7" },
];
