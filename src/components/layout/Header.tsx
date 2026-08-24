"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_NAME, routes } from "@/config/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { messages } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#06080d]/70 backdrop-blur-xl">
      <Container className="flex h-[68px] items-center justify-between gap-4">
        <Link href={routes.home} className="flex items-center gap-2.5 text-ink">
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-copper text-sm font-bold text-white"
            aria-hidden
          >
            {SITE_NAME.slice(0, 1)}
          </span>
          <span className="font-display text-[15px] font-bold tracking-tight">
            {SITE_NAME}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-[13px] font-medium text-white/65 lg:flex"
          aria-label="Primary"
        >
          {messages.ui.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-ink",
                pathname === item.href && "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <CTAButton href={routes.book} className="px-5 py-2.5 text-[13px]">
            {messages.ui.applyCta}
          </CTAButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-4 bg-current transition-transform",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn("block h-0.5 w-4 bg-current", open && "opacity-0")}
              />
              <span
                className={cn(
                  "block h-0.5 w-4 bg-current transition-transform",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/[0.06] bg-canvas lg:hidden"
        >
          <Container className="flex flex-col gap-4 py-5">
            {messages.ui.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink"
              >
                {item.label}
              </Link>
            ))}
            <CTAButton href={routes.book} className="w-full">
              {messages.ui.applyCta}
            </CTAButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
