import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { getMessages } from "@/i18n/messages";

export async function ProcessSection() {
  const { process } = await getMessages();

  return (
    <section id="how-it-works" className="bg-cream/40 py-20 sm:py-28">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow={process.eyebrow}
            title={process.title}
            intro={process.intro}
            accentWord={process.accentWord}
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step) => (
              <li key={step.number} className="surface p-6">
                <p className="font-display text-4xl font-bold leading-[1.2] text-cyan">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </SectionReveal>
      </Container>
    </section>
  );
}
