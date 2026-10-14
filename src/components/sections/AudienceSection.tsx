import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { getMessages } from "@/i18n/messages";

export async function AudienceSection() {
  const { audience } = await getMessages();

  return (
    <section className="bg-white/35 py-20 sm:py-28">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow={audience.eyebrow}
            title={audience.title}
            intro={audience.intro}
            accentWord={audience.accentWord}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {audience.paths.map((path) => (
              <article key={path.id} className="surface flex flex-col p-6">
                <p className="text-[1.3rem] font-medium uppercase tracking-[0.25em] text-copper">
                  {path.label}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                  {path.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {path.body}
                </p>
              </article>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
