# Renda Arya Santana — QA Portfolio

Personal CV / portfolio page for **Renda Arya Santana**, Software QA Engineer based in Malang, East Java. Built with Next.js.

## Sections

- Hero introduction with contact CTAs
- Experience (Majoo Indonesia, PT Exel Sistem Solusindo, Livien Furniture)
- Projects (My Add Telkomsel, Majoo CRM, Dashboard, Cockpit)
- Skills and languages
- Education

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Fraunces + Manrope fonts

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:5500](http://127.0.0.1:5500).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Deploy on Netlify

This repo includes a `netlify.toml` for Next.js 16 (App Router). Netlify installs the OpenNext adapter (`@netlify/plugin-nextjs`) automatically — do not pin it unless you need a specific version.

| Setting        | Value            |
| -------------- | ---------------- |
| Build command  | `npm run build`  |
| Publish directory | `.next`       |
| Node           | 22               |

Connect [rendasantana/CV](https://github.com/rendasantana/CV) in the Netlify UI (Import from Git → GitHub). Live URL will look like `https://<site-name>.netlify.app`.
