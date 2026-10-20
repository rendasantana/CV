"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatMessage } from "@/lib/i18n/messages";
import {
  majooScenarioCount,
  majooScenarios,
  majooScenariosMeta,
} from "@/lib/majoo-scenarios";
import { cn } from "@/lib/utils";
import { Download, FileSpreadsheet } from "lucide-react";
import { useState, type ReactNode } from "react";

type ScenariosDownloadDialogProps = {
  triggerClassName?: string;
  triggerLabel?: string;
  children?: ReactNode;
};

export function ScenariosDownloadDialog({
  triggerClassName,
  triggerLabel,
  children,
}: ScenariosDownloadDialogProps) {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();
  const label = triggerLabel ?? t.scenariosDialog.preview;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            size="lg"
            className={cn(
              "rounded-full bg-gold px-6 text-teal-950 hover:bg-[#e0c9a8]",
              triggerClassName,
            )}
          />
        }
      >
        {children ?? (
          <>
            <FileSpreadsheet className="size-4" />
            {label}
          </>
        )}
      </DialogTrigger>
      <DialogContent
        className="flex max-h-[90vh] w-[min(100%,56rem)] max-w-[calc(100%-2rem)] flex-col gap-0 overflow-hidden bg-card p-0 sm:max-w-4xl"
        showCloseButton
      >
        <DialogHeader className="border-b border-ink/10 px-5 py-4 sm:px-6">
          <DialogTitle className="font-display text-xl tracking-tight text-ink">
            {t.scenariosDialog.title}
          </DialogTitle>
          <DialogDescription className="text-ink/50">
            {formatMessage(t.scenariosDialog.subtitle, {
              label: majooScenariosMeta.label,
              product: majooScenariosMeta.product,
              count: majooScenarioCount,
            })}
          </DialogDescription>
          <p className="mt-2 text-xs leading-relaxed text-ink/40">
            {t.scenariosDialog.note}
          </p>
        </DialogHeader>
        <div className="min-h-0 flex-1 overflow-auto px-5 py-4 sm:px-6">
          <div className="overflow-x-auto rounded-lg border border-ink/10">
            <table className="min-w-[52rem] w-full border-collapse text-left text-xs sm:text-sm">
              <thead className="sticky top-0 bg-teal-900/90 text-ink backdrop-blur-sm">
                <tr>
                  <th className="px-3 py-2.5 font-medium text-gold/80">
                    {t.scenariosDialog.cols.id}
                  </th>
                  <th className="px-3 py-2.5 font-medium text-gold/80">
                    {t.scenariosDialog.cols.title}
                  </th>
                  <th className="px-3 py-2.5 font-medium text-gold/80">
                    {t.scenariosDialog.cols.module}
                  </th>
                  <th className="px-3 py-2.5 font-medium text-gold/80">
                    {t.scenariosDialog.cols.priority}
                  </th>
                  <th className="px-3 py-2.5 font-medium text-gold/80">
                    {t.scenariosDialog.cols.type}
                  </th>
                  <th className="px-3 py-2.5 font-medium text-gold/80">
                    {t.scenariosDialog.cols.linked}
                  </th>
                  <th className="px-3 py-2.5 font-medium text-gold/80">
                    {t.scenariosDialog.cols.status}
                  </th>
                </tr>
              </thead>
              <tbody>
                {majooScenarios.map((scenario) => (
                  <tr
                    key={scenario.id}
                    className="border-t border-ink/8 odd:bg-ink/3"
                  >
                    <td className="px-3 py-2.5 font-mono text-[11px] tracking-wide text-gold/70 whitespace-nowrap">
                      {scenario.id}
                    </td>
                    <td className="max-w-[16rem] px-3 py-2.5 text-ink/85">
                      {scenario.title}
                    </td>
                    <td className="max-w-[12rem] px-3 py-2.5 text-ink/55">
                      {scenario.module}
                    </td>
                    <td className="px-3 py-2.5 text-ink/70">
                      {scenario.priority}
                    </td>
                    <td className="px-3 py-2.5 text-ink/55">{scenario.type}</td>
                    <td className="px-3 py-2.5 font-mono text-[11px] text-ink/55">
                      {scenario.linkedTestCases}
                    </td>
                    <td className="px-3 py-2.5 text-ink/55">
                      {scenario.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <DialogFooter className="border-t border-ink/10 bg-card sm:justify-between">
          <DialogClose
            render={
              <Button
                variant="outline"
                className="rounded-full border-ink/20 text-ink"
              />
            }
          >
            {t.scenariosDialog.close}
          </DialogClose>
          <a
            href={majooScenariosMeta.xlsxPath}
            download
            className={cn(
              "inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-gold px-6 text-sm font-medium text-teal-950 hover:bg-[#e0c9a8]",
            )}
          >
            <Download className="size-4" />
            {t.scenariosDialog.download}
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
