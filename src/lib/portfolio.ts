export type NavSection = {
  id: string;
  title: string;
};

export type ExperienceRole = {
  id: string;
  company: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  context?: string;
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
  focus:
    "Passionate about improving product quality, minimizing defects, and delivering seamless user experiences.",
};

export const navSections: NavSection[] = [
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
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
  },
  {
    id: "majoo-crm",
    title: "Majoo CRM",
    context: "CRM sales web",
    description:
      "CRM sales web platform with features for marketing setup through to subscription management.",
  },
  {
    id: "majoo-dashboard",
    title: "Majoo Dashboard",
    context: "Sales & employee management",
    description:
      "Sales and employee management dashboard testing, including API and UI.",
  },
  {
    id: "majoo-cockpit",
    title: "Majoo Cockpit",
    context: "Dashboard & POS menu management",
    description:
      "A web cockpit for managing menu features in the Majoo dashboard and POS.",
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
