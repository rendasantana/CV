export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  kind: "doc" | "automation" | "tool";
  links: PortfolioLink[];
};

export type PortfolioSection = {
  id: string;
  title: string;
  emoji: string;
  blurb: string;
  items: PortfolioItem[];
};

export const profile = {
  name: "Syaifa Amanda Putri Lubis",
  shortName: "Syaifa Amanda",
  role: "QA Engineer",
  tagline:
    "QA Engineer with 6+ years of experience across Web, Mobile, API, and Performance testing.",
  location: "Indonesia",
  email: "syaifa.amanda@example.com",
};

export const sections: PortfolioSection[] = [
  {
    id: "web",
    title: "Web Testing",
    emoji: "💻",
    blurb: "Manual cases, test management, and web automation suites.",
    items: [
      {
        id: "web-testcase",
        title: "Web Test Case",
        description: "Test cases for web application coverage and regression.",
        kind: "doc",
        links: [{ label: "View", href: "#" }],
      },
      {
        id: "web-qase",
        title: "Qase.io Web Test Management",
        description: "Cases and runs managed in Qase for the web suite.",
        kind: "tool",
        links: [
          { label: "Test Case", href: "#" },
          { label: "Test Run", href: "#" },
        ],
      },
      {
        id: "web-katalon",
        title: "Automation — Katalon Studio",
        description: "Web automation scripts built with Katalon Studio.",
        kind: "automation",
        links: [{ label: "View", href: "#" }],
      },
      {
        id: "web-selenium",
        title: "Automation — Selenium Python",
        description: "Web automation scripts using Selenium and Python.",
        kind: "automation",
        links: [{ label: "View", href: "#" }],
      },
    ],
  },
  {
    id: "android",
    title: "Android Testing",
    emoji: "📱",
    blurb: "Mobile functional coverage and device automation.",
    items: [
      {
        id: "android-testcase",
        title: "Android Test Case",
        description: "Test cases for Android application flows.",
        kind: "doc",
        links: [{ label: "View", href: "#" }],
      },
      {
        id: "android-katalon",
        title: "Katalon Studio Automation",
        description: "Android automation scripts using Katalon Studio.",
        kind: "automation",
        links: [{ label: "View", href: "#" }],
      },
    ],
  },
  {
    id: "api",
    title: "API Testing",
    emoji: "🌐",
    blurb: "Endpoint contracts, positive and negative scenarios.",
    items: [
      {
        id: "api-testcase",
        title: "API Test",
        description:
          "Test cases for API endpoints, covering positive and negative scenarios.",
        kind: "doc",
        links: [
          { label: "Test Case", href: "#" },
          { label: "Collection", href: "#" },
        ],
      },
      {
        id: "api-katalon",
        title: "Katalon Studio Automation",
        description: "API automation scripts using Katalon Studio.",
        kind: "automation",
        links: [{ label: "View", href: "#" }],
      },
    ],
  },
  {
    id: "performance",
    title: "Performance Testing",
    emoji: "📊",
    blurb: "Load and stress documentation with JMeter and K6.",
    items: [
      {
        id: "perf-jmeter",
        title: "JMeter Documentation",
        description: "Performance test approach and results using JMeter.",
        kind: "doc",
        links: [
          { label: "View-1", href: "#" },
          { label: "View-2", href: "#" },
        ],
      },
      {
        id: "perf-k6",
        title: "K6 Documentation",
        description: "Performance test scripts and findings using K6.",
        kind: "doc",
        links: [{ label: "View", href: "#" }],
      },
    ],
  },
];
