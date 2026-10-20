export type NavSection = {
  id: string;
  title: string;
  /** Optional absolute path (e.g. /test-cases) instead of #id */
  href?: string;
};

export type ExperienceRole = {
  id: string;
  company: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ProofLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  context?: string;
  /** Optional proof links (Qase, docs, GitHub). Omit or use `#` until real URLs exist. */
  proofLinks?: ProofLink[];
};

export type CaseStudy = {
  id: string;
  title: string;
  context: string;
  role: string;
  tested: string[];
  tools: string[];
  outcome: string;
};

export type EducationItem = {
  id: string;
  institution: string;
  program: string;
  period: string;
  detail?: string;
};

export const profile = {
  name: "Renda Arya Santana",
  shortName: "Renda Santana",
  role: "Software QA Engineer",
  tagline:
    "Software QA Engineer with 5+ years of experience in functional, regression, and performance testing for web and mobile platforms. Skilled in Cypress.io, Katalon, Postman, and Clickup.",
  location: "Malang, East Java",
  email: "rendasantana@gmail.com",
  phone: "+6281358571315",
  phoneHref: "tel:+6281358571315",
  linkedin: "https://linkedin.com/in/rendasantana",
  cvPdf: "/renda-santana-cv.pdf",
  focus:
    "Passionate about improving product quality, minimizing defects, and delivering seamless user experiences.",
};

export const about = {
  headline: "QA engineer for web, mobile, API, and performance.",
  paragraphs: [
    "Saya Renda Arya Santana, Software QA Engineer berbasis di Malang, East Java. Fokus saya adalah menjaga kualitas produk lewat functional, regression, dan performance testing — di web, mobile, API, maupun skenario end-to-end.",
    "Pengalaman utama saya di Majoo Indonesia (dashboard, CRM sales, cockpit, dan mobile POS) dan sebelumnya di PT Exel Sistem Solusindo untuk produk MyAds Telkomsel. Saya terbiasa menulis dokumentasi & skenario uji, memastikan fitur berjalan sesuai harapan, dan memakai Cypress.io, Katalon, Postman, serta Clickup dalam pekerjaan sehari-hari.",
    "Yang paling saya kuasai: merancang cakupan uji yang rapi, mengejar defect sebelum rilis, dan menjaga pengalaman pengguna tetap mulus di lintas platform.",
  ],
};

export const navSections: NavSection[] = [
  { id: "about", title: "About" },
  { id: "case-studies", title: "Case studies" },
  { id: "projects", title: "Projects" },
  {
    id: "sample-test-cases",
    title: "Sample test cases",
    href: "/test-cases",
  },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "my-add-telkomsel",
    title: "My Add Telkomsel",
    context:
      "Ad & campaign platform (MyAds Telkomsel) di PT Exel Sistem Solusindo — produk yang dipakai untuk kampanye iklan dan pengelolaan campaign.",
    role: "Software Test Engineer",
    tested: [
      "End-to-end testing alur ad & campaign platform.",
      "Functional testing untuk skenario fitur inti.",
      "Performance testing sebagai bagian dari cakupan uji produk.",
    ],
    tools: [
      "End-to-end testing",
      "Functional testing",
      "Performance testing",
    ],
    outcome:
      "Cakupan uji end-to-end, functional, dan performance untuk platform ad & campaign — sesuai tanggung jawab di CV, tanpa klaim metrik tambahan.",
  },
  {
    id: "majoo-crm",
    title: "Majoo CRM",
    context:
      "CRM sales web di Majoo Indonesia — platform dari marketing setup hingga subscription management, berdampingan dengan dashboard, cockpit, dan mobile POS.",
    role: "Quality Assurance Engineer",
    tested: [
      "Functional testing untuk fitur CRM sales web.",
      "Penulisan dokumentasi pengujian dan test scenarios.",
      "Validasi perilaku fitur agar sesuai ekspektasi di lingkungan web.",
    ],
    tools: [
      "Functional testing",
      "Test documentation & scenarios",
      "Cypress.io, Katalon Studio, Postman, Clickup",
    ],
    outcome:
      "Fitur CRM dari marketing setup sampai subscription management diuji secara functional dan terdokumentasi, sejalan dengan tanggung jawab QA di Majoo untuk web dan mobile.",
  },
];

export const experience: ExperienceRole[] = [
  {
    id: "majoo",
    company: "Majoo Indonesia",
    title: "Quality Assurance Engineer",
    period: "November 2020 – August 2024",
    summary:
      "Tested dashboard, CRM sales, cockpit, and mobile POS features — functional testing, documentation, and test scenarios across web and mobile.",
    highlights: [
      "Conducted functional testing for dashboard, CRM, cockpit, and mobile POS.",
      "Created test documentation and scenarios.",
      "Ensured features worked as expected across web and mobile platforms.",
    ],
  },
  {
    id: "exel",
    company: "PT Exel Sistem Solusindo",
    title: "Software Test Engineer",
    period: "March 2018 – July 2020",
    summary:
      "Software tester for the MyAds Telkomsel product, covering end-to-end, functional, and performance testing.",
    highlights: [
      "Handled end-to-end, functional, and performance testing for MyAds Telkomsel.",
    ],
  },
  {
    id: "livien",
    company: "Livien Furniture",
    title: "Web Administrator",
    period: "August 2019 – September 2019",
    summary:
      "Managed marketplace website operations including sales, data updates, shipments, and timely customer information.",
    highlights: [
      "Owned day-to-day marketplace site functions and customer-facing accuracy.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "my-add-telkomsel",
    title: "My Add Telkomsel",
    context: "Ad & campaign platform",
    description:
      "End-to-end testing on an ad and campaign platform, covering functional and performance scenarios.",
    // Add real Qase / docs / GitHub URLs when available — do not invent.
    proofLinks: undefined,
  },
  {
    id: "majoo-crm",
    title: "Majoo CRM",
    context: "CRM sales web",
    description:
      "CRM sales web platform with features for marketing setup through to subscription management.",
    proofLinks: undefined,
  },
  {
    id: "majoo-dashboard",
    title: "Majoo Dashboard",
    context: "Sales & employee management",
    description:
      "Sales and employee management dashboard testing, including API and UI. Portfolio sample: Login & Register scenarios (XLSX) + mapped test cases.",
    proofLinks: [
      {
        label: "Login & Register scenarios (XLSX)",
        href: "/majoo-dashboard-login-register-scenarios.xlsx",
      },
      {
        label: "Sample test cases (Majoo Auth suite)",
        href: "/test-cases#majoo-dashboard-auth",
      },
    ],
  },
  {
    id: "majoo-cockpit",
    title: "Majoo Cockpit",
    context: "Dashboard & POS menu management",
    description:
      "A web cockpit for managing menu features in the Majoo dashboard and POS.",
    proofLinks: undefined,
  },
];

export const skills = {
  technical: [
    "JavaScript",
    "React.js",
    "Cypress.io",
    "Katalon Studio",
    "Postman",
    "Clickup",
  ],
  soft: ["Communication", "Problem Solving", "Detail-Oriented"],
  languages: [
    { name: "Indonesian", level: "Fluent" },
    { name: "English", level: "Basic (able to read tech documentation)" },
  ],
};

export const education: EducationItem[] = [
  {
    id: "binar",
    institution: "Binar Academy",
    program: "Website Programmer",
    period: "2020",
    detail: "React.js",
  },
  {
    id: "umm",
    institution: "University of Muhammadiyah Malang",
    program: "Informatics Engineering",
    period: "2014 – 2016",
  },
];
