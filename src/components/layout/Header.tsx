"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { routes } from "@/config/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleProvider";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { messages } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-canvas/80 backdrop-blur-xl">
      <Container className="flex h-[68px] items-center justify-between gap-4">
        <Logo />

        <nav
          className="hidden items-center gap-7 text-[15px] font-semibold text-ink/70 lg:flex font-display"
          aria-label="Primary"
        >
          {messages.ui.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-copper",
                pathname === item.href && "text-ink underline decoration-gold decoration-2 underline-offset-8",
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/20 text-ink"
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
          className="border-t border-ink/10 bg-canvas lg:hidden"
        >
          <Container className="flex flex-col gap-4 py-5">
            {messages.ui.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-lg font-semibold text-ink hover:text-copper"
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
