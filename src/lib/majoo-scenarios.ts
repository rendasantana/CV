/**
 * Sample / Portfolio examples — Test Scenarios for Majoo Dashboard Login & Register.
 * Inspired by Majoo Indonesia product patterns. Illustrative only — no confidential client secrets.
 */

export type ScenarioPriority = "Critical" | "High" | "Medium" | "Low";

export type TestScenario = {
  id: string;
  title: string;
  module: string;
  requirement: string;
  description: string;
  priority: ScenarioPriority;
  type: string;
  preconditions: string;
  actors?: string;
  coverageNotes?: string;
  linkedTestCases: string;
  status: string;
};

export const majooScenariosMeta = {
  label: "Sample / Portfolio examples",
  product: "Majoo Dashboard — Login & Register",
  note: "Illustrative scenarios inspired by Majoo Dashboard–style SaaS auth. Not confidential client documents.",
  xlsxPath: "/majoo-dashboard-login-register-scenarios.xlsx",
};

export const majooScenarios: TestScenario[] = [
  {
    id: "TS-MAJ-LOGIN-001",
    title: "Successful login with valid email and password",
    module: "Majoo Dashboard / Authentication / Login",
    requirement: "US-AUTH-01 — Registered user can sign in to dashboard with valid credentials",
    description:
      "Verify that a registered, active merchant user can log in to Majoo Dashboard using a valid email and password and land on the dashboard home.",
    priority: "Critical",
    type: "Functional / Smoke",
    preconditions:
      "QA dashboard URL reachable; registered active user exists; browser cookies for the app domain cleared",
    actors: "Merchant / dashboard user",
    coverageNotes: "Positive happy path — session creation and redirect",
    linkedTestCases: "TC-MAJ-LOGIN-001",
    status: "Ready",
  },
  {
    id: "TS-MAJ-LOGIN-002",
    title: "Login rejected with incorrect password",
    module: "Majoo Dashboard / Authentication / Login",
    requirement: "US-AUTH-02 — System rejects invalid credentials without granting access",
    description:
      "Verify that submitting a valid email with a wrong password keeps the user on the login page and shows an invalid-credentials message.",
    priority: "High",
    type: "Negative",
    preconditions: "Login page reachable; registered user exists; password used is incorrect for that account",
    actors: "Merchant / dashboard user",
    coverageNotes: "Negative — wrong password; no session leak",
    linkedTestCases: "TC-MAJ-LOGIN-002",
    status: "Ready",
  },
  {
    id: "TS-MAJ-LOGIN-003",
    title: "Login blocked when required fields are empty",
    module: "Majoo Dashboard / Authentication / Login",
    requirement: "US-AUTH-03 — Login form validates required email and password fields",
    description:
      "Verify that leaving email and/or password empty prevents submission and surfaces field-level validation messages.",
    priority: "High",
    type: "Negative",
    preconditions: "Login page reachable; form not pre-filled",
    actors: "Merchant / dashboard user",
    coverageNotes: "Negative — empty email, empty password, both empty",
    linkedTestCases: "TC-MAJ-LOGIN-003, TC-MAJ-LOGIN-004",
    status: "Ready",
  },
  {
    id: "TS-MAJ-LOGIN-004",
    title: "Login fails for unregistered email",
    module: "Majoo Dashboard / Authentication / Login",
    requirement: "US-AUTH-04 — Unknown email cannot authenticate",
    description:
      "Verify that an email that is not registered cannot access the dashboard and receives an appropriate auth failure response.",
    priority: "High",
    type: "Negative",
    preconditions: "Login page reachable; email used is confirmed not registered in QA",
    actors: "Unauthenticated visitor",
    coverageNotes: "Negative — unregistered account; avoid user-enumeration detail if product policy requires",
    linkedTestCases: "TC-MAJ-LOGIN-005",
    status: "Ready",
  },
  {
    id: "TS-MAJ-LOGIN-005",
    title: "Email field rejects invalid format on login",
    module: "Majoo Dashboard / Authentication / Login",
    requirement: "US-AUTH-05 — Email input must follow a valid email format",
    description:
      "Verify boundary/format validation for the login email field (missing @, missing domain, spaces) before or on submit.",
    priority: "Medium",
    type: "Boundary / Negative",
    preconditions: "Login page reachable",
    actors: "Merchant / dashboard user",
    coverageNotes: "Boundary — email format edge cases",
    linkedTestCases: "TC-MAJ-LOGIN-006",
    status: "Ready",
  },
  {
    id: "TS-MAJ-REG-001",
    title: "Successful registration with valid merchant data",
    module: "Majoo Dashboard / Authentication / Register",
    requirement: "US-REG-01 — New merchant can create an account with valid required fields",
    description:
      "Verify that a new user can complete the register form with valid full name, email, phone, password, and password confirmation, then reach a success state (verify email / auto-login / success screen per product).",
    priority: "Critical",
    type: "Functional / Smoke",
    preconditions:
      "Register page reachable; email and phone not already used in QA; password policy documented for QA",
    actors: "New merchant prospect",
    coverageNotes: "Positive happy path — account creation",
    linkedTestCases: "TC-MAJ-REG-001",
    status: "Ready",
  },
  {
    id: "TS-MAJ-REG-002",
    title: "Registration rejected for duplicate email",
    module: "Majoo Dashboard / Authentication / Register",
    requirement: "US-REG-02 — Email must be unique across merchant accounts",
    description:
      "Verify that submitting a register form with an email already registered shows a duplicate-email error and does not create a second account.",
    priority: "High",
    type: "Negative",
    preconditions: "Register page reachable; an existing registered email is known in QA",
    actors: "New merchant prospect",
    coverageNotes: "Negative — duplicate email uniqueness",
    linkedTestCases: "TC-MAJ-REG-002",
    status: "Ready",
  },
  {
    id: "TS-MAJ-REG-003",
    title: "Registration rejected for weak password",
    module: "Majoo Dashboard / Authentication / Register",
    requirement: "US-REG-03 — Password must meet minimum strength policy",
    description:
      "Verify that passwords below the documented strength rules (too short, no number/symbol as required) are rejected with a clear policy message.",
    priority: "High",
    type: "Negative",
    preconditions: "Register page reachable; password policy known (e.g. min 8 chars, mix of letter + number)",
    actors: "New merchant prospect",
    coverageNotes: "Negative — weak password samples",
    linkedTestCases: "TC-MAJ-REG-003, TC-MAJ-REG-004",
    status: "Ready",
  },
  {
    id: "TS-MAJ-REG-004",
    title: "Registration blocked when required fields are empty",
    module: "Majoo Dashboard / Authentication / Register",
    requirement: "US-REG-04 — Register form validates all required fields",
    description:
      "Verify that submitting with empty required fields (name, email, phone, password, confirm password) shows validation and does not create an account.",
    priority: "High",
    type: "Negative",
    preconditions: "Register page reachable; form cleared",
    actors: "New merchant prospect",
    coverageNotes: "Negative — empty required fields",
    linkedTestCases: "TC-MAJ-REG-005",
    status: "Ready",
  },
  {
    id: "TS-MAJ-REG-005",
    title: "Password confirmation mismatch and min-length boundary",
    module: "Majoo Dashboard / Authentication / Register",
    requirement: "US-REG-05 — Confirm password must match; password length boundary enforced",
    description:
      "Verify confirm-password mismatch is rejected, and password length at min-1 fails while exact minimum length (with other rules met) can succeed.",
    priority: "Medium",
    type: "Boundary / Negative",
    preconditions: "Register page reachable; min password length documented for QA (sample: 8)",
    actors: "New merchant prospect",
    coverageNotes: "Boundary — mismatch + length min-1 vs min",
    linkedTestCases: "TC-MAJ-REG-006, TC-MAJ-REG-007",
    status: "Ready",
  },
];

export const majooScenarioCount = majooScenarios.length;
