"use client";

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
  triggerLabel = "Download CV",
  children,
}: CvDownloadDialogProps) {
  const [open, setOpen] = useState(false);

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
            <Download className="size-4" />
            {triggerLabel}
          </>
        )}
      </DialogTrigger>
      <DialogContent
        className="flex max-h-[90vh] w-[min(100%,42rem)] max-w-[calc(100%-2rem)] flex-col gap-0 overflow-hidden bg-card p-0 sm:max-w-2xl"
        showCloseButton
      >
        <DialogHeader className="border-b border-ink/10 px-5 py-4 sm:px-6">
          <DialogTitle className="font-display text-xl tracking-tight text-ink">
            Preview CV
          </DialogTitle>
          <DialogDescription className="text-ink/50">
            {profile.name} — {profile.role}
          </DialogDescription>
        </DialogHeader>
        <div className="min-h-0 flex-1 bg-teal-950/80">
          <object
            data={profile.cvPdf}
            type="application/pdf"
            className="h-[min(70vh,40rem)] w-full"
            aria-label={`Preview of ${profile.name} CV PDF`}
          >
            <iframe
              title={`Preview of ${profile.name} CV`}
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
            Close
          </DialogClose>
          <a
            href={profile.cvPdf}
            download
            className={cn(
              "inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-gold px-6 text-sm font-medium text-teal-950 hover:bg-[#e0c9a8]",
            )}
          >
            <Download className="size-4" />
            Download CV
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
