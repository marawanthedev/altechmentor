import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { PricingCards } from "@/components/pricing/PricingCards";
import { getMarket } from "@/lib/market";
import { getMessages } from "@/i18n/messages";

export async function PricingSection() {
  const market = await getMarket();
  const { pricing } = await getMessages();

  return (
    <section id="pricing" className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow={pricing.eyebrow}
            title={pricing.title}
            intro={pricing.intro}
          />
          <div className="mt-12">
            <PricingCards market={market} />
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
