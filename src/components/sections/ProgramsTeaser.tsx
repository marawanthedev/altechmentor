import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { getMessages } from "@/i18n/messages";

export async function ProgramsTeaser() {
  const messages = await getMessages();

  return (
    <section className="bg-white/35 py-20 sm:py-28">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow={messages.programsTeaser.eyebrow}
            title={messages.programsTeaser.title}
            intro={messages.programsTeaser.intro}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {messages.programs.map((program) => (
              <article key={program.slug} className="surface p-6">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-copper">
                  {program.label}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {program.summary}
                </p>
              </article>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
