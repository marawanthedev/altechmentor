import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { getMessages } from "@/i18n/messages";

export async function FAQSection() {
  const { faqs } = await getMessages();

  return (
    <section id="faq" className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow={faqs.eyebrow}
            title={faqs.title}
            intro={faqs.intro}
          />
          <div className="mt-12 space-y-3">
            {faqs.items.map((item) => (
              <details key={item.question} className="group surface p-5">
                <summary className="cursor-pointer list-none font-display text-xl font-bold text-ink marker:content-none">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span className="mt-1 text-copper group-open:hidden">+</span>
                    <span className="mt-1 hidden text-copper group-open:inline">
                      −
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
