import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
  className?: string;
  align?: "left" | "center";
  accentWord?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light,
  className,
  align = "left",
  accentWord,
}: SectionHeadingProps) {
  const accentAt = accentWord ? title.lastIndexOf(accentWord) : -1;
  const renderedTitle =
    accentWord && accentAt >= 0 ? (
      <>
        {title.slice(0, accentAt)}
        <span className="text-copper">{accentWord}</span>
        {title.slice(accentAt + accentWord.length)}
      </>
    ) : (
      title
    );

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl",
          light ? "text-cream" : "text-ink",
        )}
      >
        {renderedTitle}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-sand" : "text-ink-soft",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
