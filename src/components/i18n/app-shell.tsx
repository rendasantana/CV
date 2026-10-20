"use client";

import { LanguageSwitch } from "@/components/i18n/language-switch";
import { LocaleProvider } from "@/components/i18n/locale-provider";
import type { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      {children}
      <LanguageSwitch />
    </LocaleProvider>
  );
}
