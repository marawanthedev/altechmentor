"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLocale } from "@/i18n/actions";
import { localeMeta, type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

const options: Locale[] = ["en", "ar"];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale } = useLocale();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-white/12 bg-white/[0.04] p-0.5 text-[12px] font-medium",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {options.map((option) => {
        const active = option === locale;
        return (
          <button
            key={option}
            type="button"
            disabled={pending || active}
            onClick={() =>
              startTransition(async () => {
                await setLocale(option);
                router.refresh();
              })
            }
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              active
                ? "bg-white/12 text-ink"
                : "text-white/60 hover:text-ink disabled:opacity-50",
            )}
            aria-pressed={active}
          >
            {localeMeta[option].label}
          </button>
        );
      })}
    </div>
  );
}
