type EyebrowProps = {
  children: React.ReactNode;
  light?: boolean;
  variant?: "badge" | "label";
};

export function Eyebrow({ children, variant = "label" }: EyebrowProps) {
  if (variant === "badge") {
    return (
      <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-ink/85">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden />
        {children}
      </p>
    );
  }

  return (
    <p className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
      <span className="h-px w-7 bg-cyan" aria-hidden />
      {children}
    </p>
  );
}
