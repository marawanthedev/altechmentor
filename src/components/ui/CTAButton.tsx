import Link from "next/link";
import { cn } from "@/lib/cn";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-gold text-cedar-deep shadow-[0_14px_32px_-14px_rgba(138,106,36,0.75)] hover:bg-gold-hover",
  secondary:
    "border border-ink/25 bg-white/50 text-ink hover:border-gold hover:bg-white/80",
  inverse: "bg-cedar-deep text-white hover:bg-cedar",
} as const;

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  external,
}: CTAButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-[15px] font-semibold tracking-tight transition-all duration-200",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      <span
        aria-hidden
        className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0"
      >
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
