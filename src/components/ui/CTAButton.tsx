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
    "bg-copper text-white shadow-[0_16px_40px_-12px_rgba(245,100,55,0.7)] hover:bg-copper-hover",
  secondary:
    "border border-white/12 bg-white/[0.04] text-ink backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.07]",
  inverse: "bg-cyan text-canvas hover:brightness-110",
} as const;

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  external,
}: CTAButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold tracking-tight transition-all duration-200",
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
