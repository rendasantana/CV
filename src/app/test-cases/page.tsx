import { TestCasesPageContent } from "@/components/portfolio/test-cases-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Test Cases — Renda Arya Santana",
  description:
    "These are illustrative QA examples in classical test-case format — not confidential client documents. Real suite links (Qase, docs, GitHub) can be added later.",
};

export default function TestCasesPage() {
  return <TestCasesPageContent />;
}
