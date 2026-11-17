export type WorkSample = {
  id: string;
  number: string;
  company: string;
  category: "Data engineering" | "Applied AI" | "Finance & automation";
  title: string;
  summary: string;
  tags: string[];
  problem: string;
  contribution: string[];
  outcome: string;
  diagram: "migration" | "agents" | "quality" | "finance";
  artifacts: { label: string; format: string; href?: string; placeholder: string }[];
};

// Only add public, approved file links. Missing artifacts are deliberately not clickable.
export const workSamples: WorkSample[] = [
  {
    id: "cloud-data-migration", number: "01", company: "Hoonartek", category: "Data engineering",
    title: "From source systems to curated data.",
    summary: "Batch migration pipelines, dependable transformations, and the operational details that keep enterprise data moving.",
    tags: ["Azure Data Factory", "Databricks", "PySpark", "Logic Apps"],
    problem: "Move on-premises data into a raw and curated cloud architecture while preserving change history and making pipeline failures visible.",
    contribution: ["Implemented scheduled migration pipelines with SCD Type 2 handling and source-to-target mappings.", "Built and tested manual and ad-hoc ADF ingestion pipelines, with Databricks PySpark processing.", "Created Logic Apps monitoring and email automation, maintained metadata, and coordinated delivery and production support as ADF SPOC."],
    outcome: "Supported an end-to-end migration workflow with traceable transformations, operational monitoring, and documented handover. My wider Hoonartek experience included leading a 12-member ADF team and supporting 4,000+ production tables.",
    diagram: "migration",
    artifacts: [
      {label: "Migration architecture", format: "Diagram / PDF", placeholder: "[PLACEHOLDER: approved architecture PDF or OneDrive link]"},
      {label: "Pipeline walkthrough", format: "Document", placeholder: "[PLACEHOLDER: approved pipeline walkthrough link]"},
    ],
  },
  {
    id: "multi-agent-support", number: "02", company: "Hoonartek", category: "Applied AI",
    title: "One question. The right specialist.",
    summary: "A supervisor agent bringing together knowledge assistance and structured-data answers on Databricks.",
    tags: ["AgentBricks", "AI/BI Genie", "Mosaic AI", "Databricks"],
    problem: "Answer questions that span documents and structured data through a coordinated assistant experience.",
    contribution: ["Built an AgentBricks supervisor with a knowledge-assistant and Genie Agent as sub-agents.", "Used the supervisor to synthesize answers across structured and unstructured sources.", "Worked on AI-driven BI through Databricks AI/BI Genie as part of broader applied AI delivery."],
    outcome: "Built a coordinated question-answering approach that combines specialist agents behind a single supervisor. The illustration shows the high-level pattern; no customer documents or internal configuration are published here.",
    diagram: "agents",
    artifacts: [
      {label: "Agent walkthrough", format: "Video / PDF", placeholder: "[PLACEHOLDER: approved demonstration or walkthrough link]"},
      {label: "Solution overview", format: "Document", placeholder: "[PLACEHOLDER: approved solution overview link]"},
    ],
  },
  {
    id: "ai-data-quality", number: "03", company: "Hoonartek", category: "Applied AI",
    title: "Giving data quality more context.",
    summary: "Schema-aware rule recommendations using retrieval over historical data-quality rules and LLM reasoning.",
    tags: ["PySpark", "RAG", "Vector Search", "LLM reasoning"],
    problem: "Make data-quality recommendations relevant to a dataset’s schema and informed by existing rules.",
    contribution: ["Combined vector retrieval of historical data-quality rules with LLM reasoning.", "Used schema context to shape recommendations and make their rationale easier to explain."],
    outcome: "Developed an approach for contextual, explainable rule suggestions, combining schema awareness with relevant historical examples. Public demonstrations will use synthetic schemas and rules.",
    diagram: "quality",
    artifacts: [
      {label: "Synthetic-data example", format: "Notebook / code", placeholder: "[PLACEHOLDER: public synthetic-data notebook or repository link]"},
      {label: "Rule recommendation sample", format: "PDF", placeholder: "[PLACEHOLDER: approved rule recommendation example link]"},
    ],
  },
  {
    id: "finance-automation", number: "04", company: "DGMS & Co.", category: "Finance & automation",
    title: "A finance foundation. An automation mindset.",
    summary: "Spreadsheet and document-template improvements alongside accounting and tax workflows during my articleship.",
    tags: ["Excel", "Document templates", "Tally ERP 9", "Process improvement"],
    problem: "Improve consistency and efficiency in recurring accounting, spreadsheet, and documentation tasks.",
    contribution: ["Managed tax-filing and accounting workflows using KDK Software, Tally ERP 9, and Excel.", "Automated spreadsheets and document templates to improve process efficiency and accuracy."],
    outcome: "Built an early foundation in accuracy, repeatable processes, and automation that informed my move into data engineering. Public examples will be recreated with fictional data rather than client records.",
    diagram: "finance",
    artifacts: [
      {label: "Recreated Excel workflow", format: "Workbook", placeholder: "[PLACEHOLDER: recreated workbook with fictional data]"},
      {label: "Process improvement note", format: "PDF", placeholder: "[PLACEHOLDER: approved process improvement summary]"},
    ],
  },
];
