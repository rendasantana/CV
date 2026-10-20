export type TestCasePriority = "Critical" | "High" | "Medium" | "Low";

export type SampleTestCase = {
  id: string;
  title: string;
  titleId: string;
  module: string;
  priority: TestCasePriority | string;
  type: string;
  preconditions: string[];
  testData: string[];
  steps: string[];
  expectedResult: string;
  actualResult: string;
  status: string;
  notes: string;
  defectId?: string;
  scenarioId?: string;
  environment?: string;
};

export type TestSuite = {
  id: string;
  order: string;
  title: string;
  titleId: string;
  label: string;
  description: string;
  cases: SampleTestCase[];
};

export const testSuites: TestSuite[] = [
  {
    id: "web-crm",
    order: "01",
    title: "Web — CRM-style (login & lead / subscription)",
    titleId: "Web — gaya CRM (login & lead / subscription)",
    label: "Sample suite inspired by CRM sales web testing",
    description: "Happy-path and negative examples for a CRM-style web app: authentication, lead creation, and subscription setup. Generic flows — not tied to any confidential product build.",
    cases: [
      {
        id: "WEB-CRM-001",
        title: "Valid user can log in to CRM dashboard",
        titleId: "User valid dapat login ke dashboard CRM",
        module: "Authentication / Login",
        priority: "High",
        type: "Functional",
        preconditions: [
          "Application is reachable on the QA environment URL",
          "A registered user account exists and is active",
          "Browser cache/cookies for the app domain are cleared",
        ],
        testData: [
          "Email: qa.user@example.com",
          "Password: ValidPass1!",
        ],
        steps: [
          "Open the CRM login page",
          "Enter a valid email address in the Email field",
          "Enter the matching password in the Password field",
          "Click the Login / Masuk button",
        ],
        expectedResult: "User is redirected to the CRM dashboard home. Session is established (user name or avatar visible). No error toast is shown.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "WEB-CRM-002",
        title: "Create a new lead with required fields only",
        titleId: "Buat lead baru dengan field wajib saja",
        module: "CRM / Lead management",
        priority: "High",
        type: "Functional",
        preconditions: [
          "User is logged in with permission to create leads",
          "Leads list page is accessible from the main navigation",
        ],
        testData: [
          "Lead name: Portfolio Sample Lead",
          "Phone: +6281234567890",
          "Source: Website (or equivalent dropdown value)",
        ],
        steps: [
          "Navigate to Leads / Prospek",
          "Click Create / Tambah lead",
          "Fill all required fields with valid sample data",
          "Leave optional fields empty",
          "Click Save / Simpan",
        ],
        expectedResult: "Success confirmation is shown. New lead appears in the list with the entered name and phone. Lead detail page (if opened) shows the same values.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "WEB-CRM-003",
        title: "Complete subscription setup for an existing lead (happy path)",
        titleId: "Selesaikan setup subscription untuk lead existing (happy path)",
        module: "CRM / Subscription setup",
        priority: "High",
        type: "Functional",
        preconditions: [
          "User is logged in with subscription-management access",
          "At least one lead exists in a state that allows subscription setup",
        ],
        testData: [
          "Lead: Portfolio Sample Lead",
          "Plan: Basic (or first available plan)",
          "Billing cycle: Monthly",
        ],
        steps: [
          "Open the target lead detail",
          "Start Subscription setup / Atur langganan",
          "Select a valid plan and billing cycle",
          "Confirm summary details",
          "Submit / Activate subscription",
        ],
        expectedResult: "Subscription status on the lead updates to Active (or equivalent). Confirmation message is displayed. No validation errors block submission.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "WEB-CRM-004",
        title: "Login fails with incorrect password",
        titleId: "Login gagal dengan password salah",
        module: "Authentication / Login",
        priority: "High",
        type: "Negative",
        preconditions: [
          "Application login page is reachable",
          "A registered user account exists",
        ],
        testData: [
          "Email: qa.user@example.com",
          "Password: WrongPass999!",
        ],
        steps: [
          "Open the CRM login page",
          "Enter a valid registered email",
          "Enter an incorrect password",
          "Click the Login / Masuk button",
        ],
        expectedResult: "User remains on the login page. An error message indicates invalid credentials. Dashboard is not accessible. Password field is cleared or remains masked; no stack trace is exposed.",
        actualResult: "",
        status: "",
        notes: "",
      },
    ],
  },
  {
    id: "api-dashboard",
    order: "02",
    title: "API — REST dashboard pattern (Postman-style)",
    titleId: "API — pola REST dashboard (gaya Postman)",
    label: "Example suite inspired by dashboard / API testing",
    description: "Status code, schema, and auth checks against a generic REST pattern (e.g. GET /api/v1/dashboard/summary). Use as a Postman collection template — not a live confidential endpoint.",
    cases: [
      {
        id: "API-DASH-001",
        title: "GET dashboard summary returns 200 with valid Bearer token",
        titleId: "GET ringkasan dashboard mengembalikan 200 dengan Bearer token valid",
        module: "API / Dashboard summary",
        priority: "High",
        type: "API",
        preconditions: [
          "Base URL for the QA API is configured in the environment",
          "A valid access token can be obtained via the auth flow used in Postman",
        ],
        testData: [
          "Method: GET",
          "Endpoint: /api/v1/dashboard/summary",
          "Header: Authorization: Bearer {{valid_token}}",
          "Header: Accept: application/json",
        ],
        steps: [
          "Set the request method to GET and path to /api/v1/dashboard/summary",
          "Attach a valid Bearer token in the Authorization header",
          "Send the request",
        ],
        expectedResult: "HTTP status is 200. Content-Type is application/json. Response body is a JSON object (not empty). Request completes without transport error.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "API-DASH-002",
        title: "GET dashboard summary without token returns 401",
        titleId: "GET ringkasan dashboard tanpa token mengembalikan 401",
        module: "API / Authentication",
        priority: "High",
        type: "API",
        preconditions: [
          "Base URL for the QA API is configured",
          "No Authorization header is set on the request",
        ],
        testData: [
          "Method: GET",
          "Endpoint: /api/v1/dashboard/summary",
          "Authorization: (omitted)",
        ],
        steps: [
          "Create a GET request to /api/v1/dashboard/summary",
          "Ensure Authorization header is not present",
          "Send the request",
        ],
        expectedResult: "HTTP status is 401 Unauthorized. Response indicates authentication is required. No dashboard payload with business data is returned.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "API-DASH-003",
        title: "Response schema includes required summary fields",
        titleId: "Schema respons memuat field ringkasan wajib",
        module: "API / Contract & schema",
        priority: "Medium",
        type: "API",
        preconditions: [
          "API-DASH-001 passes (200 with valid token)",
          "Agreed schema fields for the summary resource are documented (sample: id, period, totals)",
        ],
        testData: [
          "Expected keys (example): period, totalSales, totalOrders, currency",
          "Types (example): period=string, totalSales=number, totalOrders=number, currency=string",
        ],
        steps: [
          "Send GET /api/v1/dashboard/summary with a valid token",
          "Parse the JSON response body",
          "Assert each required key exists",
          "Assert each required key has the expected data type",
        ],
        expectedResult: "All required keys are present. Types match the contract. Extra optional keys do not break consumers; missing required keys fail the assertion.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "API-DASH-004",
        title: "Expired or malformed token is rejected",
        titleId: "Token kedaluwarsa atau rusak ditolak",
        module: "API / Authentication",
        priority: "Medium",
        type: "Negative",
        preconditions: [
          "An expired or intentionally malformed Bearer token is available for negative testing",
        ],
        testData: [
          "Method: GET",
          "Endpoint: /api/v1/dashboard/summary",
          "Header: Authorization: Bearer {{expired_or_invalid_token}}",
        ],
        steps: [
          "Attach an expired or malformed Bearer token",
          "Send GET /api/v1/dashboard/summary",
        ],
        expectedResult: "HTTP status is 401 or 403. No successful dashboard summary body is returned. Error message does not leak internal secrets.",
        actualResult: "",
        status: "",
        notes: "",
      },
    ],
  },
  {
    id: "mobile-perf-smoke",
    order: "03",
    title: "Mobile & performance smoke (samples)",
    titleId: "Mobile & performance smoke (sampel)",
    label: "Sample smoke checks — clearly illustrative",
    description: "Lightweight launch and load checks suitable for a smoke pack. Marked as samples so viewers know these are portfolio examples, not production SLAs.",
    cases: [
      {
        id: "MOB-POS-001",
        title: "Mobile POS app launches to login or home screen",
        titleId: "Aplikasi mobile POS terbuka ke layar login atau home",
        module: "Mobile POS / App launch",
        priority: "High",
        type: "Mobile smoke",
        preconditions: [
          "QA build of the mobile POS app is installed on a test device or emulator",
          "Device has network access as required by the build",
        ],
        testData: [
          "Device: Android or iOS test device / emulator",
          "Build: QA / staging label",
        ],
        steps: [
          "Cold-start the mobile POS application from the device home screen",
          "Wait until the first interactive screen is fully rendered",
          "Observe whether Login or Home is shown based on session state",
        ],
        expectedResult: "App opens without crash. First screen (Login if logged out, Home if session persists) is interactive within a reasonable smoke window. No blank/white fatal screen remains.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "PERF-WEB-001",
        title: "CRM dashboard home completes initial load (smoke)",
        titleId: "Beranda dashboard CRM menyelesaikan load awal (smoke)",
        module: "Web / Performance smoke",
        priority: "Medium",
        type: "Performance smoke",
        preconditions: [
          "User can log in to the CRM web app on QA",
          "Network conditions are normal (not throttled for this smoke)",
        ],
        testData: [
          "Target: Dashboard home after login",
          "Smoke threshold (example): primary content visible within ~5s on QA (not a formal SLA)",
        ],
        steps: [
          "Log in with a valid account",
          "Navigate to Dashboard home (or land there after login)",
          "Start a simple timer when navigation begins",
          "Stop when primary widgets or summary content are visible and interactive",
        ],
        expectedResult: "Primary dashboard content becomes visible and clickable without prolonged blank state. No uncaught client error banner blocks the view. Timing is recorded as a smoke observation only — not a contractual performance target.",
        actualResult: "",
        status: "",
        notes: "",
      },
    ],
  },

  {
    id: "majoo-dashboard-auth",
    order: "04",
    title: "Majoo Dashboard — Login & Register",
    titleId: "Majoo Dashboard — Login & Register",
    label: "Sample / Portfolio examples — inspired by Majoo Dashboard",
    description:
      "Illustrative classical QA cases for Majoo Dashboard–style email/password login and SaaS register flows. Generic sample data only — not confidential client documents.",
    cases: [
      {
        id: "TC-MAJ-LOGIN-001",
        title: "Valid merchant can log in to Majoo Dashboard",
        titleId: "Merchant valid dapat login ke Majoo Dashboard",
        module: "Majoo Dashboard / Authentication / Login",
        scenarioId: "TS-MAJ-LOGIN-001",
        priority: "Critical",
        type: "Functional",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: [
          "Majoo Dashboard QA URL is reachable",
          "Registered active merchant account exists",
          "Browser cookies for the app domain are cleared",
        ],
        testData: [
          "Email: merchant.qa@example.com",
          "Password: ValidPass1!",
        ],
        steps: [
          "Open the Majoo Dashboard login page",
          "Enter a valid registered email in the Email field",
          "Enter the matching password in the Password field",
          "Click Login / Masuk",
        ],
        expectedResult:
          "User is redirected to the dashboard home. Session is established (merchant name or avatar visible). No error toast is shown.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-LOGIN-002",
        title: "Login fails with incorrect password",
        titleId: "Login gagal dengan password salah",
        module: "Majoo Dashboard / Authentication / Login",
        scenarioId: "TS-MAJ-LOGIN-002",
        priority: "High",
        type: "Negative",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: [
          "Login page is reachable",
          "Registered merchant email exists",
        ],
        testData: [
          "Email: merchant.qa@example.com",
          "Password: WrongPass999!",
        ],
        steps: [
          "Open the login page",
          "Enter a valid registered email",
          "Enter an incorrect password",
          "Click Login / Masuk",
        ],
        expectedResult:
          "User remains on the login page. An invalid-credentials (or equivalent) message is shown. Dashboard home is not accessible. No stack trace or secret leakage.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-LOGIN-003",
        title: "Login blocked when email and password are empty",
        titleId: "Login diblokir saat email dan password kosong",
        module: "Majoo Dashboard / Authentication / Login",
        scenarioId: "TS-MAJ-LOGIN-003",
        priority: "High",
        type: "Negative",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: ["Login page is reachable", "Form fields are empty"],
        testData: ["Email: (empty)", "Password: (empty)"],
        steps: [
          "Open the login page",
          "Leave Email and Password empty",
          "Click Login / Masuk",
        ],
        expectedResult:
          "Form is not submitted successfully. Required-field validation messages appear for Email and Password. User is not authenticated.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-LOGIN-004",
        title: "Login blocked when password only is empty",
        titleId: "Login diblokir saat hanya password kosong",
        module: "Majoo Dashboard / Authentication / Login",
        scenarioId: "TS-MAJ-LOGIN-003",
        priority: "Medium",
        type: "Negative",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: ["Login page is reachable"],
        testData: [
          "Email: merchant.qa@example.com",
          "Password: (empty)",
        ],
        steps: [
          "Open the login page",
          "Enter a valid email",
          "Leave Password empty",
          "Click Login / Masuk",
        ],
        expectedResult:
          "Password required validation is shown. User remains unauthenticated on the login page.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-LOGIN-005",
        title: "Login fails for unregistered email",
        titleId: "Login gagal untuk email belum terdaftar",
        module: "Majoo Dashboard / Authentication / Login",
        scenarioId: "TS-MAJ-LOGIN-004",
        priority: "High",
        type: "Negative",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: [
          "Login page is reachable",
          "Email used is confirmed not registered in QA",
        ],
        testData: [
          "Email: not.registered@example.com",
          "Password: ValidPass1!",
        ],
        steps: [
          "Open the login page",
          "Enter an unregistered email",
          "Enter any password meeting field rules",
          "Click Login / Masuk",
        ],
        expectedResult:
          "Authentication fails. User stays on login. Dashboard is not accessible. Message is appropriate per product policy (generic auth failure acceptable).",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-LOGIN-006",
        title: "Login email field rejects invalid format",
        titleId: "Field email login menolak format tidak valid",
        module: "Majoo Dashboard / Authentication / Login",
        scenarioId: "TS-MAJ-LOGIN-005",
        priority: "Medium",
        type: "Boundary",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: ["Login page is reachable"],
        testData: [
          "Invalid emails: merchant.qa (no @), merchant@ (no domain), mer chant@ex.com (space)",
          "Password: ValidPass1!",
        ],
        steps: [
          "Open the login page",
          "Enter an invalid-format email sample",
          "Enter a password",
          "Attempt to submit Login / Masuk",
          "Repeat for remaining invalid email samples",
        ],
        expectedResult:
          "Each invalid email is rejected by client or server validation. No successful login. Clear format/validation feedback is shown.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-REG-001",
        title: "New merchant can register with valid required fields",
        titleId: "Merchant baru dapat register dengan field wajib valid",
        module: "Majoo Dashboard / Authentication / Register",
        scenarioId: "TS-MAJ-REG-001",
        priority: "Critical",
        type: "Functional",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: [
          "Register page is reachable",
          "Email and phone are not already used in QA",
        ],
        testData: [
          "Full name: Portfolio Sample Merchant",
          "Email: new.merchant.qa@example.com",
          "Phone: +6281234567890",
          "Password: ValidPass1!",
          "Confirm password: ValidPass1!",
        ],
        steps: [
          "Open the Majoo Dashboard register / sign-up page",
          "Fill Full name, Email, Phone, Password, and Confirm password with valid unique data",
          "Accept terms if a required checkbox is present",
          "Click Register / Daftar",
        ],
        expectedResult:
          "Registration succeeds. User sees success state (verification prompt, welcome, or auto-login to dashboard per product). Account is created for the new email.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-REG-002",
        title: "Registration fails with duplicate email",
        titleId: "Registrasi gagal dengan email duplikat",
        module: "Majoo Dashboard / Authentication / Register",
        scenarioId: "TS-MAJ-REG-002",
        priority: "High",
        type: "Negative",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: [
          "Register page is reachable",
          "Email merchant.qa@example.com is already registered",
        ],
        testData: [
          "Full name: Another Merchant",
          "Email: merchant.qa@example.com",
          "Phone: +6281299999999",
          "Password: ValidPass1!",
          "Confirm password: ValidPass1!",
        ],
        steps: [
          "Open the register page",
          "Fill all required fields using an already-registered email",
          "Click Register / Daftar",
        ],
        expectedResult:
          "Registration is rejected. Duplicate-email (or equivalent) error is shown. No second account is created for that email.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-REG-003",
        title: "Registration fails with password shorter than minimum",
        titleId: "Registrasi gagal dengan password lebih pendek dari minimum",
        module: "Majoo Dashboard / Authentication / Register",
        scenarioId: "TS-MAJ-REG-003",
        priority: "High",
        type: "Negative",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: [
          "Register page is reachable",
          "Sample password policy: minimum 8 characters",
        ],
        testData: [
          "Email: weak.short@example.com (unique)",
          "Password: Ab1!xxx (7 chars — adjust to policy min-1)",
          "Confirm password: same as password",
        ],
        steps: [
          "Open the register page",
          "Fill required fields with a unique email",
          "Enter a password shorter than the minimum length",
          "Confirm password to match",
          "Click Register / Daftar",
        ],
        expectedResult:
          "Registration is rejected. Password policy / min-length message is shown. Account is not created.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-REG-004",
        title: "Registration fails with password missing required character class",
        titleId: "Registrasi gagal dengan password tanpa kelas karakter wajib",
        module: "Majoo Dashboard / Authentication / Register",
        scenarioId: "TS-MAJ-REG-003",
        priority: "Medium",
        type: "Negative",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: [
          "Register page is reachable",
          "Sample policy requires letter + number (illustrative)",
        ],
        testData: [
          "Email: weak.alpha@example.com (unique)",
          "Password: onlyletters (letters only, length OK)",
          "Confirm password: onlyletters",
        ],
        steps: [
          "Open the register page",
          "Fill required fields with a unique email",
          "Enter a long password that omits required number/symbol class",
          "Confirm password to match",
          "Click Register / Daftar",
        ],
        expectedResult:
          "Registration is rejected. Strength / policy guidance is shown. Account is not created.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-REG-005",
        title: "Registration blocked when required fields are empty",
        titleId: "Registrasi diblokir saat field wajib kosong",
        module: "Majoo Dashboard / Authentication / Register",
        scenarioId: "TS-MAJ-REG-004",
        priority: "High",
        type: "Negative",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: ["Register page is reachable", "Form is cleared"],
        testData: [
          "Full name: (empty)",
          "Email: (empty)",
          "Phone: (empty)",
          "Password: (empty)",
          "Confirm password: (empty)",
        ],
        steps: [
          "Open the register page",
          "Leave all required fields empty",
          "Click Register / Daftar",
        ],
        expectedResult:
          "Form validation errors appear for required fields. No account is created. User remains on register page.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-REG-006",
        title: "Registration fails when confirm password does not match",
        titleId: "Registrasi gagal saat konfirmasi password tidak cocok",
        module: "Majoo Dashboard / Authentication / Register",
        scenarioId: "TS-MAJ-REG-005",
        priority: "High",
        type: "Negative",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: ["Register page is reachable"],
        testData: [
          "Email: mismatch.qa@example.com (unique)",
          "Password: ValidPass1!",
          "Confirm password: ValidPass2!",
        ],
        steps: [
          "Open the register page",
          "Fill required fields with a unique email",
          "Enter Password and a different Confirm password",
          "Click Register / Daftar",
        ],
        expectedResult:
          "Mismatch validation is shown. Registration does not succeed. Account is not created.",
        actualResult: "",
        status: "",
        notes: "",
      },
      {
        id: "TC-MAJ-REG-007",
        title: "Registration accepts password at exact minimum length",
        titleId: "Registrasi menerima password tepat di panjang minimum",
        module: "Majoo Dashboard / Authentication / Register",
        scenarioId: "TS-MAJ-REG-005",
        priority: "Medium",
        type: "Boundary",
        environment: "QA web · Chrome latest · Majoo Dashboard sample build",
        preconditions: [
          "Register page is reachable",
          "Sample min length = 8 with letter + number met",
          "Email unused in QA",
        ],
        testData: [
          "Email: boundary.min@example.com (unique)",
          "Password: Abcd1234 (exactly 8 chars, meets sample letter+number rule)",
          "Confirm password: Abcd1234",
        ],
        steps: [
          "Open the register page",
          "Fill required fields with unique contact data",
          "Enter password at exact minimum length meeting other policy rules",
          "Confirm password to match",
          "Click Register / Daftar",
        ],
        expectedResult:
          "Registration succeeds (or proceeds to next success step). Password at exact minimum is accepted when other rules are met.",
        actualResult: "",
        status: "",
        notes: "",
      },
    ],
  },
];

export const totalTestCases = testSuites.reduce((n, s) => n + s.cases.length, 0);

export function getSuiteById(id: string) {
  return testSuites.find((s) => s.id === id);
}
