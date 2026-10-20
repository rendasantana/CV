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
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { useState, type ReactNode } from "react";

type CvDownloadDialogProps = {
  triggerClassName?: string;
  triggerLabel?: string;
  children?: ReactNode;
};

export function CvDownloadDialog({
  triggerClassName,
  triggerLabel,
  children,
}: CvDownloadDialogProps) {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();
  const label = triggerLabel ?? t.cvDialog.download;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            size="lg"
            className={cn(
              "rounded-full bg-gold px-6 text-teal-950 transition-[transform,box-shadow,background-color] duration-200 ease-out hover:bg-[#e0c9a8]",
              triggerClassName,
            )}
          />
        }
      >
        {children ?? (
          <>
            <Download className="size-4" />
            {label}
          </>
        )}
      </DialogTrigger>
      <DialogContent
        className="flex max-h-[90vh] w-[min(100%,42rem)] max-w-[calc(100%-2rem)] flex-col gap-0 overflow-hidden bg-card p-0 sm:max-w-2xl"
        showCloseButton
      >
        <DialogHeader className="border-b border-ink/10 px-5 py-4 sm:px-6">
          <DialogTitle className="font-display text-xl tracking-tight text-ink">
            {t.cvDialog.title}
          </DialogTitle>
          <DialogDescription className="text-ink/50">
            {profile.name} — {t.profile.role}
          </DialogDescription>
        </DialogHeader>
        <div className="min-h-0 flex-1 bg-teal-950/80">
          <object
            data={profile.cvPdf}
            type="application/pdf"
            className="h-[min(70vh,40rem)] w-full"
            aria-label={`${t.cvDialog.title}: ${profile.name}`}
          >
            <iframe
              title={`${t.cvDialog.title}: ${profile.name}`}
              src={profile.cvPdf}
              className="h-[min(70vh,40rem)] w-full border-0"
            />
          </object>
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
            {t.cvDialog.close}
          </DialogClose>
          <a
            href={profile.cvPdf}
            download
            className={cn(
              "inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-gold px-6 text-sm font-medium text-teal-950 hover:bg-[#e0c9a8]",
            )}
          >
            <Download className="size-4" />
            {t.cvDialog.download}
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
