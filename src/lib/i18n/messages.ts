import type { Locale } from "./locale";

export type Messages = {
  langSwitch: {
    label: string;
    toEn: string;
    toId: string;
    currentEn: string;
    currentId: string;
  };
  nav: Record<
    | "about"
    | "case-studies"
    | "projects"
    | "sample-test-cases"
    | "experience"
    | "skills"
    | "education"
    | "contact",
    string
  >;
  hero: {
    contactCta: string;
    downloadCv: string;
    linkedin: string;
  };
  profile: {
    role: string;
    tagline: string;
    location: string;
  };
  about: {
    title: string;
    headline: string;
    paragraphs: string[];
  };
  caseStudies: {
    title: string;
    blurb: string;
    caseLabel: string;
    context: string;
    tested: string;
    tools: string;
    outcome: string;
    items: Record<
      string,
      {
        context: string;
        role: string;
        tested: string[];
        outcome: string;
      }
    >;
  };
  projects: {
    title: string;
    blurb: string;
    items: Record<
      string,
      {
        context: string;
        description: string;
        proofLabels?: Record<string, string>;
      }
    >;
    previewScenarios: string;
  };
  sampleCta: {
    title: string;
    blurb: string;
    badge: string;
    suitesCases: string;
    body: string;
    majooSuiteName: string;
    suiteLine: string;
    viewList: string;
    previewMajoo: string;
  };
  experience: {
    title: string;
    blurb: string;
    items: Record<
      string,
      {
        title: string;
        summary: string;
        highlights: string[];
      }
    >;
  };
  skills: {
    title: string;
    blurb: string;
    technical: string;
    soft: string;
    languages: string;
    langItems: { name: string; level: string }[];
  };
  education: {
    title: string;
    blurb: string;
  };
  contact: {
    eyebrow: string;
    openTo: string;
    email: string;
    call: string;
    linkedin: string;
    footer: string;
  };
  cvDialog: {
    title: string;
    download: string;
    close: string;
  };
  scenariosDialog: {
    title: string;
    subtitle: string;
    note: string;
    download: string;
    close: string;
    preview: string;
    previewDownload: string;
    cols: {
      id: string;
      title: string;
      module: string;
      priority: string;
      type: string;
      linked: string;
      status: string;
    };
  };
  testCasesPage: {
    back: string;
    badge: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    majooBannerTitle: string;
    majooBannerBody: string;
  };
  testCasesBrowser: {
    badge: string;
    suitesCases: string;
    allSuites: string;
    filterWebCrm: string;
    filterApi: string;
    filterMobilePerf: string;
    filterMajoo: string;
    showingAll: string;
    showingSuite: string;
    suiteLabel: string;
    cases: string;
    environment: string;
    preconditions: string;
    testData: string;
    steps: string;
    expected: string;
    actual: string;
    status: string;
    defect: string;
    notes: string;
  };
};

const en: Messages = {
  langSwitch: {
    label: "Language",
    toEn: "Switch to English",
    toId: "Switch to Indonesian",
    currentEn: "EN",
    currentId: "ID",
  },
  nav: {
    about: "About",
    "case-studies": "Case studies",
    projects: "Projects",
    "sample-test-cases": "Sample test cases",
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    contactCta: "Let's talk",
    downloadCv: "Download CV",
    linkedin: "LinkedIn",
  },
  profile: {
    role: "Software QA Engineer",
    tagline:
      "Software QA Engineer with 5+ years of experience in functional, regression, and performance testing for web and mobile platforms. Skilled in Cypress.io, Katalon, Postman, and Clickup.",
    location: "Malang, East Java",
  },
  about: {
    title: "About",
    headline: "QA engineer for web, mobile, API, and performance.",
    paragraphs: [
      "I'm Renda Arya Santana, a Software QA Engineer based in Malang, East Java. I focus on protecting product quality through functional, regression, and performance testing — across web, mobile, API, and end-to-end flows.",
      "My main experience is at Majoo Indonesia (dashboard, CRM sales, cockpit, and mobile POS) and earlier at PT Exel Sistem Solusindo on MyAds Telkomsel. I regularly write test documentation and scenarios, verify features against expectations, and work daily with Cypress.io, Katalon, Postman, and Clickup.",
      "What I do best: designing clear test coverage, catching defects before release, and keeping user experience smooth across platforms.",
    ],
  },
  caseStudies: {
    title: "Featured case studies",
    blurb:
      "Two primary products: context, test coverage, tooling, and outcomes — from the CV, without invented metrics.",
    caseLabel: "Case",
    context: "Context",
    tested: "What I tested",
    tools: "Tools & approach",
    outcome: "Outcome",
    items: {
      "my-add-telkomsel": {
        context:
          "Ad & campaign platform (MyAds Telkomsel) at PT Exel Sistem Solusindo — used for advertising campaigns and campaign management.",
        role: "Software Test Engineer",
        tested: [
          "End-to-end testing of ad & campaign platform flows.",
          "Functional testing for core feature scenarios.",
          "Performance testing as part of product test coverage.",
        ],
        outcome:
          "End-to-end, functional, and performance coverage for the ad & campaign platform — aligned with CV responsibilities, without extra metric claims.",
      },
      "majoo-crm": {
        context:
          "CRM sales web at Majoo Indonesia — from marketing setup through subscription management, alongside dashboard, cockpit, and mobile POS.",
        role: "Quality Assurance Engineer",
        tested: [
          "Functional testing for CRM sales web features.",
          "Writing test documentation and test scenarios.",
          "Validating feature behavior against expectations in the web environment.",
        ],
        outcome:
          "CRM features from marketing setup to subscription management were functionally tested and documented, consistent with QA responsibilities at Majoo for web and mobile.",
      },
    },
  },
  projects: {
    title: "Projects",
    blurb:
      "Products I tested. Proof-link slots ready for Qase, docs, or GitHub.",
    previewScenarios: "Preview Login & Register scenarios",
    items: {
      "my-add-telkomsel": {
        context: "Ad & campaign platform",
        description:
          "End-to-end testing on an ad and campaign platform, covering functional and performance scenarios.",
      },
      "majoo-crm": {
        context: "CRM sales web",
        description:
          "CRM sales web platform with features for marketing setup through to subscription management.",
      },
      "majoo-dashboard": {
        context: "Sales & employee management",
        description:
          "Sales and employee management dashboard testing, including API and UI. Portfolio sample: Login & Register scenarios (XLSX) + mapped test cases.",
        proofLabels: {
          scenarios:
            "Login & Register scenarios (XLSX)",
          cases: "Sample test cases (Majoo Auth suite)",
        },
      },
      "majoo-cockpit": {
        context: "Dashboard & POS menu management",
        description:
          "A web cockpit for managing menu features in the Majoo dashboard and POS.",
      },
    },
  },
  sampleCta: {
    title: "Sample Test Cases",
    blurb:
      "Classical test-case format examples — the full list lives on a separate page.",
    badge: "Sample / Portfolio examples",
    suitesCases: "{suites} suites · {cases} cases",
    body: "Browse the classical QA list (ID, steps, expected result) on a dedicated page — so this portfolio stays focused on About, case studies, projects, and experience. Includes a {suite} sample suite ({scenarios} scenarios + mapped cases).",
    majooSuiteName: "Majoo Dashboard — Login & Register",
    suiteLine: "Suite {order}: {title} ({count})",
    viewList: "View test case list",
    previewMajoo: "Preview Majoo scenarios",
  },
  experience: {
    title: "Experience",
    blurb: "QA engineering journey and web operations.",
    items: {
      majoo: {
        title: "Quality Assurance Engineer",
        summary:
          "Tested dashboard, CRM sales, cockpit, and mobile POS features — functional testing, documentation, and test scenarios across web and mobile.",
        highlights: [
          "Conducted functional testing for dashboard, CRM, cockpit, and mobile POS.",
          "Created test documentation and scenarios.",
          "Ensured features worked as expected across web and mobile platforms.",
        ],
      },
      exel: {
        title: "Software Test Engineer",
        summary:
          "Software tester for the MyAds Telkomsel product, covering end-to-end, functional, and performance testing.",
        highlights: [
          "Handled end-to-end, functional, and performance testing for MyAds Telkomsel.",
        ],
      },
      livien: {
        title: "Web Administrator",
        summary:
          "Managed marketplace website operations including sales, data updates, shipments, and timely customer information.",
        highlights: [
          "Owned day-to-day marketplace site functions and customer-facing accuracy.",
        ],
      },
    },
  },
  skills: {
    title: "Skills",
    blurb: "Tools and strengths used day to day in QA work.",
    technical: "Technical",
    soft: "Soft skills",
    languages: "Languages",
    langItems: [
      { name: "Indonesian", level: "Fluent" },
      {
        name: "English",
        level: "Basic (able to read tech documentation)",
      },
    ],
  },
  education: {
    title: "Education",
    blurb: "Formal study and programming training.",
  },
  contact: {
    eyebrow: "Get in touch",
    openTo:
      "{role} based in {location}. Open to roles in functional, regression, and performance testing for web and mobile.",
    email: "Email",
    call: "Call",
    linkedin: "LinkedIn",
    footer: "© {year} {name}. CV / portfolio page.",
  },
  cvDialog: {
    title: "Preview CV",
    download: "Download CV",
    close: "Close",
  },
  scenariosDialog: {
    title: "Preview test scenarios",
    subtitle: "{label} · {product} · {count} scenarios",
    note: "Illustrative scenarios inspired by Majoo Dashboard–style SaaS auth. Not confidential client documents.",
    download: "Download XLSX",
    close: "Close",
    preview: "Preview Majoo scenarios",
    previewDownload: "Preview & download XLSX",
    cols: {
      id: "ID",
      title: "Title",
      module: "Module",
      priority: "Priority",
      type: "Type",
      linked: "Linked cases",
      status: "Status",
    },
  },
  testCasesPage: {
    back: "← Back to portfolio",
    badge: "Sample / Portfolio examples",
    eyebrow: "QA documentation samples",
    title: "Sample Test Cases",
    subtitle: "Portfolio sample examples",
    intro:
      "These are classical test-case format examples for the portfolio — not confidential client documents. Real suite links (Qase, docs, GitHub) can be added later. Filter by suite below to browse the list.",
    majooBannerTitle: "Majoo Dashboard scenarios (XLSX)",
    majooBannerBody:
      "{count} illustrative login & register scenarios — preview the table in a popup, then download {path}",
  },
  testCasesBrowser: {
    badge: "Sample / Portfolio examples",
    suitesCases: "{suites} suites · {cases} cases",
    allSuites: "All suites ({count})",
    filterWebCrm: "Web CRM",
    filterApi: "API",
    filterMobilePerf: "Mobile / Perf",
    filterMajoo: "Majoo Auth",
    showingAll: "Showing {count} cases across all suites.",
    showingSuite: "Showing {count} cases in {suite}.",
    suiteLabel: "Suite {order} · {count} cases",
    cases: "cases",
    environment: "Environment",
    preconditions: "Preconditions",
    testData: "Test Data",
    steps: "Steps",
    expected: "Expected Result",
    actual: "Actual Result",
    status: "Status",
    defect: "Defect ID",
    notes: "Notes",
  },
};

const id: Messages = {
  langSwitch: {
    label: "Bahasa",
    toEn: "Ganti ke English",
    toId: "Ganti ke Bahasa Indonesia",
    currentEn: "EN",
    currentId: "ID",
  },
  nav: {
    about: "Tentang",
    "case-studies": "Studi kasus",
    projects: "Proyek",
    "sample-test-cases": "Contoh test case",
    experience: "Pengalaman",
    skills: "Keahlian",
    education: "Pendidikan",
    contact: "Kontak",
  },
  hero: {
    contactCta: "Mari bicara",
    downloadCv: "Unduh CV",
    linkedin: "LinkedIn",
  },
  profile: {
    role: "Software QA Engineer",
    tagline:
      "Software QA Engineer dengan pengalaman 5+ tahun di functional, regression, dan performance testing untuk platform web dan mobile. Terampil memakai Cypress.io, Katalon, Postman, dan Clickup.",
    location: "Malang, Jawa Timur",
  },
  about: {
    title: "Tentang",
    headline: "QA engineer untuk web, mobile, API, dan performance.",
    paragraphs: [
      "Saya Renda Arya Santana, Software QA Engineer berbasis di Malang, Jawa Timur. Fokus saya adalah menjaga kualitas produk lewat functional, regression, dan performance testing — di web, mobile, API, maupun skenario end-to-end.",
      "Pengalaman utama saya di Majoo Indonesia (dashboard, CRM sales, cockpit, dan mobile POS) dan sebelumnya di PT Exel Sistem Solusindo untuk produk MyAds Telkomsel. Saya terbiasa menulis dokumentasi & skenario uji, memastikan fitur berjalan sesuai harapan, dan memakai Cypress.io, Katalon, Postman, serta Clickup dalam pekerjaan sehari-hari.",
      "Yang paling saya kuasai: merancang cakupan uji yang rapi, mengejar defect sebelum rilis, dan menjaga pengalaman pengguna tetap mulus di lintas platform.",
    ],
  },
  caseStudies: {
    title: "Studi kasus unggulan",
    blurb:
      "Dua produk utama: konteks, cakupan uji, tooling, dan hasil — dari CV, tanpa metrik invent.",
    caseLabel: "Kasus",
    context: "Konteks",
    tested: "Yang saya uji",
    tools: "Tools & pendekatan",
    outcome: "Hasil",
    items: {
      "my-add-telkomsel": {
        context:
          "Platform iklan & campaign (MyAds Telkomsel) di PT Exel Sistem Solusindo — dipakai untuk kampanye iklan dan pengelolaan campaign.",
        role: "Software Test Engineer",
        tested: [
          "End-to-end testing alur platform iklan & campaign.",
          "Functional testing untuk skenario fitur inti.",
          "Performance testing sebagai bagian dari cakupan uji produk.",
        ],
        outcome:
          "Cakupan uji end-to-end, functional, dan performance untuk platform iklan & campaign — sesuai tanggung jawab di CV, tanpa klaim metrik tambahan.",
      },
      "majoo-crm": {
        context:
          "CRM sales web di Majoo Indonesia — dari marketing setup hingga subscription management, berdampingan dengan dashboard, cockpit, dan mobile POS.",
        role: "Quality Assurance Engineer",
        tested: [
          "Functional testing untuk fitur CRM sales web.",
          "Penulisan dokumentasi pengujian dan test scenarios.",
          "Validasi perilaku fitur agar sesuai ekspektasi di lingkungan web.",
        ],
        outcome:
          "Fitur CRM dari marketing setup sampai subscription management diuji secara functional dan terdokumentasi, sejalan dengan tanggung jawab QA di Majoo untuk web dan mobile.",
      },
    },
  },
  projects: {
    title: "Proyek",
    blurb:
      "Daftar produk yang diuji. Slot proof link siap untuk Qase, docs, atau GitHub.",
    previewScenarios: "Pratinjau skenario Login & Register",
    items: {
      "my-add-telkomsel": {
        context: "Platform iklan & campaign",
        description:
          "End-to-end testing pada platform iklan dan campaign, mencakup skenario functional dan performance.",
      },
      "majoo-crm": {
        context: "CRM sales web",
        description:
          "Platform CRM sales web dengan fitur dari marketing setup hingga subscription management.",
      },
      "majoo-dashboard": {
        context: "Manajemen sales & karyawan",
        description:
          "Pengujian dashboard manajemen sales dan karyawan, termasuk API dan UI. Sampel portfolio: skenario Login & Register (XLSX) + test case terpetakan.",
        proofLabels: {
          scenarios: "Skenario Login & Register (XLSX)",
          cases: "Contoh test case (suite Majoo Auth)",
        },
      },
      "majoo-cockpit": {
        context: "Manajemen menu dashboard & POS",
        description:
          "Cockpit web untuk mengelola fitur menu di Majoo dashboard dan POS.",
      },
    },
  },
  sampleCta: {
    title: "Contoh Test Case",
    blurb:
      "Contoh format test case klasik — daftar lengkap ada di halaman terpisah.",
    badge: "Contoh / Sampel portfolio",
    suitesCases: "{suites} suite · {cases} case",
    body: "Jelajahi daftar QA klasik (ID, langkah, expected result) di halaman khusus — agar portfolio ini tetap fokus ke Tentang, studi kasus, proyek, dan pengalaman. Termasuk suite sampel {suite} ({scenarios} skenario + case terpetakan).",
    majooSuiteName: "Majoo Dashboard — Login & Register",
    suiteLine: "Suite {order}: {title} ({count})",
    viewList: "Lihat list test case",
    previewMajoo: "Pratinjau skenario Majoo",
  },
  experience: {
    title: "Pengalaman",
    blurb: "Perjalanan QA engineering dan operasi web.",
    items: {
      majoo: {
        title: "Quality Assurance Engineer",
        summary:
          "Menguji fitur dashboard, CRM sales, cockpit, dan mobile POS — functional testing, dokumentasi, dan skenario uji di web dan mobile.",
        highlights: [
          "Melakukan functional testing untuk dashboard, CRM, cockpit, dan mobile POS.",
          "Membuat dokumentasi dan skenario pengujian.",
          "Memastikan fitur berjalan sesuai harapan di web dan mobile.",
        ],
      },
      exel: {
        title: "Software Test Engineer",
        summary:
          "Software tester untuk produk MyAds Telkomsel, mencakup end-to-end, functional, dan performance testing.",
        highlights: [
          "Menangani end-to-end, functional, dan performance testing untuk MyAds Telkomsel.",
        ],
      },
      livien: {
        title: "Web Administrator",
        summary:
          "Mengelola operasi website marketplace termasuk penjualan, pembaruan data, pengiriman, dan informasi pelanggan yang tepat waktu.",
        highlights: [
          "Mengelola fungsi harian situs marketplace dan akurasi informasi ke pelanggan.",
        ],
      },
    },
  },
  skills: {
    title: "Keahlian",
    blurb: "Tools dan kekuatan yang dipakai sehari-hari di kerja QA.",
    technical: "Teknis",
    soft: "Soft skills",
    languages: "Bahasa",
    langItems: [
      { name: "Bahasa Indonesia", level: "Lancar" },
      {
        name: "English",
        level: "Dasar (mampu membaca dokumentasi teknis)",
      },
    ],
  },
  education: {
    title: "Pendidikan",
    blurb: "Studi formal dan pelatihan programming.",
  },
  contact: {
    eyebrow: "Hubungi saya",
    openTo:
      "{role} berbasis di {location}. Terbuka untuk peran functional, regression, dan performance testing untuk web dan mobile.",
    email: "Email",
    call: "Telepon",
    linkedin: "LinkedIn",
    footer: "© {year} {name}. Halaman CV / portfolio.",
  },
  cvDialog: {
    title: "Pratinjau CV",
    download: "Unduh CV",
    close: "Tutup",
  },
  scenariosDialog: {
    title: "Pratinjau skenario uji",
    subtitle: "{label} · {product} · {count} skenario",
    note: "Skenario ilustratif terinspirasi auth SaaS gaya Majoo Dashboard. Bukan dokumen rahasia klien.",
    download: "Unduh XLSX",
    close: "Tutup",
    preview: "Pratinjau skenario Majoo",
    previewDownload: "Pratinjau & unduh XLSX",
    cols: {
      id: "ID",
      title: "Judul",
      module: "Modul",
      priority: "Prioritas",
      type: "Tipe",
      linked: "Case terkait",
      status: "Status",
    },
  },
  testCasesPage: {
    back: "← Kembali ke portfolio",
    badge: "Contoh / Sampel portfolio",
    eyebrow: "Sampel dokumentasi QA",
    title: "Contoh Test Case",
    subtitle: "Contoh sampel portfolio",
    intro:
      "Ini contoh format test case klasik untuk portfolio — bukan dokumen rahasia klien. Link suite asli (Qase, docs, GitHub) bisa ditambahkan kemudian. Filter per suite di bawah untuk menelusuri daftar.",
    majooBannerTitle: "Skenario Majoo Dashboard (XLSX)",
    majooBannerBody:
      "{count} skenario login & register ilustratif — pratinjau tabel di popup, lalu unduh {path}",
  },
  testCasesBrowser: {
    badge: "Contoh / Sampel portfolio",
    suitesCases: "{suites} suite · {cases} case",
    allSuites: "Semua suite ({count})",
    filterWebCrm: "Web CRM",
    filterApi: "API",
    filterMobilePerf: "Mobile / Perf",
    filterMajoo: "Majoo Auth",
    showingAll: "Menampilkan {count} case di semua suite.",
    showingSuite: "Menampilkan {count} case di {suite}.",
    suiteLabel: "Suite {order} · {count} case",
    cases: "case",
    environment: "Environment",
    preconditions: "Preconditions",
    testData: "Test Data",
    steps: "Langkah",
    expected: "Expected Result",
    actual: "Actual Result",
    status: "Status",
    defect: "Defect ID",
    notes: "Catatan",
  },
};

export const dictionaries: Record<Locale, Messages> = { en, id };

export function formatMessage(
  template: string,
  vars: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(vars[key] ?? ""),
  );
}
