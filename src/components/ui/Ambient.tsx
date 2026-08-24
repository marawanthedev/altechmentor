import { cn } from "@/lib/cn";

type AmbientProps = {
  children: React.ReactNode;
  className?: string;
};

export function Ambient({ children, className }: AmbientProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 grid-bg" />
        <div className="blob blob-violet" />
        <div className="blob blob-cyan" />
        <div className="blob blob-fuchsia" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
