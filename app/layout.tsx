import type { Metadata } from "next";
import "./globals.css";
import "./motion.css";
import { Analytics } from "@/components/analytics";
export const metadata: Metadata = {
  metadataBase: new URL("https://shivamrai162.github.io"),
  alternates: { canonical: "/" },
  title: "Shivam Rai — Data Engineer & AI Builder",
  description: "Data Engineer with experience in Databricks, Azure Data Factory, PySpark and applied AI. Explore Shivam Rai's experience, selected work and resume.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Shivam Rai — Data Engineer & AI Builder", description: "Reliable data platforms. Useful AI. Thoughtful engineering.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark"><body>{children}<Analytics /></body></html>;
}
