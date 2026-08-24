import { Ambient } from "@/components/ui/Ambient";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { routes } from "@/config/site";
import { getMessages } from "@/i18n/messages";

export async function FinalCtaSection() {
  const { finalCta } = await getMessages();

  return (
    <Ambient className="border-t border-white/10">
      <section className="py-20 sm:py-28">
        <Container>
          <SectionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
                {finalCta.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl">
                {finalCta.title}
              </h2>
              <div className="section-rule mx-auto mt-4" aria-hidden />
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                {finalCta.body}
              </p>
              <div className="mt-8">
                <CTAButton href={routes.book}>{finalCta.cta}</CTAButton>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>
    </Ambient>
  );
}
