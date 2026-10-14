import Link from "next/link";
import { SITE_NAME, routes } from "@/config/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

/**
 * Wordmark with a gold accent rule. Swap the monogram for the official A/M
 * asset by dropping it in public/brand and rendering it in place of the span.
 */
export function Logo({ className, tone = "dark" }: LogoProps) {
  return (
    <Link
      href={routes.home}
      className={cn(
        "group inline-flex flex-col leading-none",
        tone === "dark" ? "text-ink" : "text-white",
        className,
      )}
    >
      <span className="font-display text-xl font-bold uppercase tracking-[0.14em]">
        {SITE_NAME}
      </span>
      <span
        aria-hidden
        className="mt-1.5 h-px w-8 bg-gold transition-[width] group-hover:w-full"
      />
    </Link>
  );
}
