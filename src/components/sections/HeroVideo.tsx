import Image from "next/image";
import { heroVideo, mentorImages } from "@/config/media";
import { mentor } from "@/content/mentor";
import { getMarket } from "@/lib/market";
import { cn } from "@/lib/cn";

export function HeroVideoFallback() {
  return (
    <div className="aspect-video w-full rounded-3xl bg-cream" aria-hidden />
  );
}

export async function HeroVideo() {
  const market = await getMarket();
  const source = heroVideo[market.video];

  return (
    <figure>
      {/* <div
        className={cn(
          "relative overflow-hidden rounded-3xl border border-white/10 bg-cedar-deep shadow-[0_30px_80px_-36px_rgba(245,100,55,0.35)]",
        )}
      >
        {source.src ? (
          <video
            className="aspect-video w-full bg-cedar-deep object-cover"
            controls
            playsInline
            preload="metadata"
            poster={source.poster}
            aria-label={source.caption}
          >
            <source src={source.src} type="video/mp4" />
          </video>
        ) : (
          <div className="relative flex aspect-video items-end bg-cedar-deep p-6 sm:p-8">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 78% 18%, rgba(42,167,161,0.4), transparent 42%), radial-gradient(circle at 20% 80%, rgba(245,100,55,0.22), transparent 40%)",
              }}
            />
            <div className="relative flex w-full items-end gap-5">
              <Image
                src={mentorImages.portrait.src}
                alt={mentorImages.portrait.alt}
                width={112}
                height={112}
                className="h-20 w-20 shrink-0 rounded-full border border-white/20 object-cover object-[center_18%] sm:h-28 sm:w-28"
              />
              <div className="min-w-0">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cyan">
                  Introduction ·{" "}
                  {market.video === "arabic" ? "Arabic" : "English"}
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                  {mentor.name}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
                  A personal introduction to the mentorship will live here.
                  Until then, this frame is reserved for Marwan — not stock
                  footage.
                </p>
              </div>
            </div>
          </div>
        )}
      </div> */}
      <figcaption className="sr-only">{source.caption}</figcaption>
    </figure>
  );
}
