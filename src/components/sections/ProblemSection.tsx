import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { getMessages } from "@/i18n/messages";

export async function ProblemSection() {
  const { problem } = await getMessages();

  return (
    <section className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow={problem.eyebrow}
            title={problem.title}
            intro={problem.intro}
            accentWord={problem.accentWord}
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {problem.items.map((item, index) => (
              <li key={item} className="surface p-5">
                <p className="font-display text-sm font-bold text-copper">
                  0{index + 1}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </Container>
    </section>
  );
}
