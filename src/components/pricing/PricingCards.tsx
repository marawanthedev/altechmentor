import { type Market } from "@/config/markets";
import { routes } from "@/config/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { getMessages } from "@/i18n/messages";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

type PricingCardsProps = {
  market: Market;
};

export async function PricingCards({ market }: PricingCardsProps) {
  const messages = await getMessages();

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {market.packages.map((item) => (
        <article
          key={item.id}
          className={cn(
            "surface flex flex-col p-6",
            item.recommended &&
              "border-copper/80 shadow-[0_24px_60px_-28px_rgba(245,100,55,0.55)]",
          )}
        >
          {item.recommended ? (
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-copper">
              {messages.ui.recommended}
            </p>
          ) : (
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-ink-soft">
              {messages.ui.packageLabel}
            </p>
          )}
          <h3 className="mt-3 font-display text-2xl font-bold text-ink">
            {messages.ui.packages[item.id]}
          </h3>
          <p className="mt-4 font-display text-3xl font-bold tracking-tight text-copper">
            {formatPrice(item.price, market.currency)}
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            {item.sessions} × {messages.ui.sessionDuration}
          </p>
          {item.recommended ? (
            <p className="mt-3 text-sm text-ink-soft">
              {messages.pricing.recommendedNote}
            </p>
          ) : null}
          <div className="mt-6">
            <CTAButton
              href={routes.book}
              variant={item.recommended ? "primary" : "secondary"}
              className="w-full"
            >
              {messages.ui.applyCta}
            </CTAButton>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PricingFallback() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="surface h-64" aria-hidden />
      ))}
    </div>
  );
}
