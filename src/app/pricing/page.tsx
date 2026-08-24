import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { PricingSection } from "@/components/sections/PricingSection";
import { PricingFallback } from "@/components/pricing/PricingCards";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { getLocale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages";

export const instant = false;

export async function generateMetadata() {
  const locale = await getLocale();
  const messages = await getMessages();
  return createMetadata({
    title: messages.pages.pricing.title,
    description: messages.pages.pricing.description,
    path: "/pricing",
    locale,
    keywords: [
      "software engineering mentor pricing",
      "1:1 mentorship cost",
      "software mentor Egypt",
      "software mentor Malaysia",
    ],
  });
}

export default async function PricingPage() {
  const messages = await getMessages();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: messages.pages.breadcrumbs.home, path: "/" },
          { name: messages.pages.pricing.breadcrumb, path: "/pricing" },
        ])}
      />
      <PageHero
        eyebrow={messages.pages.pricing.eyebrow}
        title={messages.pages.pricing.heroTitle}
        intro={messages.pages.pricing.intro}
      />
      <Suspense
        fallback={
          <section className="bg-cream py-20 sm:py-28">
            <Container>
              <PricingFallback />
            </Container>
          </section>
        }
      >
        <PricingSection />
      </Suspense>
    </>
  );
}
