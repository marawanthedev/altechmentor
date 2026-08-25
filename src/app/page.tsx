import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { HeroVideo, HeroVideoFallback } from "@/components/sections/HeroVideo";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyOneOnOneSection } from "@/components/sections/WhyOneOnOneSection";
import { MentorSection } from "@/components/sections/MentorSection";
// import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { TechnicalAreasSection } from "@/components/sections/TechnicalAreasSection";
import { ProgramsTeaser } from "@/components/sections/ProgramsTeaser";
import { PricingSection } from "@/components/sections/PricingSection";
import { PricingFallback } from "@/components/pricing/PricingCards";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";
import { getLocale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages";

export const instant = false;

export async function generateMetadata() {
  const locale = await getLocale();
  const messages = await getMessages();
  return createMetadata({
    title: messages.pages.home.title,
    description: messages.pages.home.description,
    path: "/",
    locale,
    keywords: [
      "web development mentorship",
      "web engineer mentor",
      "React mentorship",
      "Next.js mentorship",
      "university student web developer mentor",
      "intern web developer mentor",
      "junior web developer mentor",
      "self-taught web developer mentor",
      "منتورشب برمجة",
      "منتور سوفتوير مصر",
    ],
  });
}

export default async function HomePage() {
  const messages = await getMessages();

  return (
    <>
      <JsonLd data={faqSchema(messages)} />
      <Hero
        video={
          <Suspense fallback={<HeroVideoFallback />}>
            <HeroVideo />
          </Suspense>
        }
      />
      <ProblemSection />
      <AudienceSection />
      <BenefitsSection />
      <ProcessSection />
      <WhyOneOnOneSection />
      <MentorSection />
      {/* <SocialProofSection /> */}
      <TechnicalAreasSection />
      <ProgramsTeaser />
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
      <FAQSection />
      <FinalCtaSection />
    </>
  );
}
