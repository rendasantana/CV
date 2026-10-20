/**
 * Generate public/majoo-dashboard-login-register-scenarios.xlsx
 * Sample / Portfolio examples — Majoo Dashboard Login & Register scenarios.
 */
import ExcelJS from "exceljs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outPath = path.join(
  root,
  "public",
  "majoo-dashboard-login-register-scenarios.xlsx",
);

/** @type {Array<Record<string, string>>} */
const scenarios = [
  {
    id: "TS-MAJ-LOGIN-001",
    title: "Successful login with valid email and password",
    module: "Majoo Dashboard / Authentication / Login",
    requirement:
      "US-AUTH-01 — Registered user can sign in to dashboard with valid credentials",
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
    requirement:
      "US-AUTH-02 — System rejects invalid credentials without granting access",
    description:
      "Verify that submitting a valid email with a wrong password keeps the user on the login page and shows an invalid-credentials message.",
    priority: "High",
    type: "Negative",
    preconditions:
      "Login page reachable; registered user exists; password used is incorrect for that account",
    actors: "Merchant / dashboard user",
    coverageNotes: "Negative — wrong password; no session leak",
    linkedTestCases: "TC-MAJ-LOGIN-002",
    status: "Ready",
  },
  {
    id: "TS-MAJ-LOGIN-003",
    title: "Login blocked when required fields are empty",
    module: "Majoo Dashboard / Authentication / Login",
    requirement:
      "US-AUTH-03 — Login form validates required email and password fields",
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
    preconditions:
      "Login page reachable; email used is confirmed not registered in QA",
    actors: "Unauthenticated visitor",
    coverageNotes:
      "Negative — unregistered account; avoid user-enumeration detail if product policy requires",
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
    requirement:
      "US-REG-01 — New merchant can create an account with valid required fields",
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
    preconditions:
      "Register page reachable; an existing registered email is known in QA",
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
    preconditions:
      "Register page reachable; password policy known (e.g. min 8 chars, mix of letter + number)",
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
    requirement:
      "US-REG-05 — Confirm password must match; password length boundary enforced",
    description:
      "Verify confirm-password mismatch is rejected, and password length at min-1 fails while exact minimum length (with other rules met) can succeed.",
    priority: "Medium",
    type: "Boundary / Negative",
    preconditions:
      "Register page reachable; min password length documented for QA (sample: 8)",
    actors: "New merchant prospect",
    coverageNotes: "Boundary — mismatch + length min-1 vs min",
    linkedTestCases: "TC-MAJ-REG-006, TC-MAJ-REG-007",
    status: "Ready",
  },
];

const headers = [
  "Scenario ID",
  "Title",
  "Module/Feature",
  "Related requirement/user story",
  "Description",
  "Priority",
  "Type",
  "Preconditions",
  "Actors (optional)",
  "Coverage notes",
  "Linked Test Cases",
  "Status",
];

const keys = [
  "id",
  "title",
  "module",
  "requirement",
  "description",
  "priority",
  "type",
  "preconditions",
  "actors",
  "coverageNotes",
  "linkedTestCases",
  "status",
];

const widths = [18, 42, 38, 48, 56, 10, 18, 42, 22, 36, 28, 10];

async function main() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Renda Arya Santana — Portfolio sample";
  workbook.created = new Date();
  workbook.modified = new Date();

  const sheet = workbook.addWorksheet("Test Scenarios", {
    views: [{ state: "frozen", ySplit: 2 }],
  });

  sheet.mergeCells("A1:L1");
  const banner = sheet.getCell("A1");
  banner.value =
    "Sample / Portfolio examples — Majoo Dashboard Login & Register Test Scenarios (illustrative; inspired by Majoo Indonesia product — no confidential client secrets)";
  banner.font = { bold: true, color: { argb: "FF0C1211" }, size: 11 };
  banner.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFD4B896" },
  };
  banner.alignment = { vertical: "middle", wrapText: true };
  sheet.getRow(1).height = 36;

  const headerRow = sheet.getRow(2);
  headers.forEach((h, i) => {
    const cell = headerRow.getCell(i + 1);
    cell.value = h;
    cell.font = { bold: true, color: { argb: "FFE8EFE9" } };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF152E2A" },
    };
    cell.alignment = { vertical: "middle", wrapText: true };
    cell.border = {
      bottom: { style: "thin", color: { argb: "FFD4B896" } },
    };
  });
  headerRow.height = 28;

  scenarios.forEach((row, idx) => {
    const excelRow = sheet.getRow(idx + 3);
    keys.forEach((key, col) => {
      const cell = excelRow.getCell(col + 1);
      cell.value = row[key] ?? "";
      cell.alignment = { vertical: "top", wrapText: true };
      if (idx % 2 === 1) {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFF7F3EE" },
        };
      }
    });
    excelRow.height = 48;
  });

  widths.forEach((w, i) => {
    sheet.getColumn(i + 1).width = w;
  });

  sheet.autoFilter = {
    from: { row: 2, column: 1 },
    to: { row: 2 + scenarios.length, column: headers.length },
  };

  await mkdir(path.dirname(outPath), { recursive: true });
  await workbook.xlsx.writeFile(outPath);
  console.log(`Wrote ${scenarios.length} scenarios → ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
