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
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
