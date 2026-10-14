import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { getMessages } from "@/i18n/messages";

export async function TechnicalAreasSection() {
  const { technicalAreas } = await getMessages();

  return (
    <section className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow={technicalAreas.eyebrow}
            title={technicalAreas.title}
            intro={technicalAreas.intro}
            accentWord={technicalAreas.accentWord}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {technicalAreas.groups.map((group) => (
              <div key={group.title} className="surface p-6">
                <h3 className="font-display text-2xl font-bold text-ink">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="pill text-ink">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
