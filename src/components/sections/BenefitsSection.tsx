import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { getMessages } from "@/i18n/messages";

export async function BenefitsSection() {
  const { benefits } = await getMessages();

  return (
    <section className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow={benefits.eyebrow}
            title={benefits.title}
            intro={benefits.intro}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {benefits.items.map((item) => (
              <article key={item.title} className="surface p-6">
                <h3 className="font-display text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
