import { Ambient } from "@/components/ui/Ambient";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { getMessages } from "@/i18n/messages";

export async function WhyOneOnOneSection() {
  const { whyOneOnOne } = await getMessages();

  return (
    <Ambient className="border-y border-white/10">
      <section className="py-20 text-ink sm:py-28">
        <Container>
          <SectionReveal>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <Eyebrow>{whyOneOnOne.eyebrow}</Eyebrow>
                <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl">
                  {whyOneOnOne.title}
                </h2>
                <div className="section-rule mt-4" aria-hidden />
                <p className="mt-5 font-display text-2xl font-bold leading-snug text-copper">
                  {whyOneOnOne.statement}
                </p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
                  {whyOneOnOne.body}
                </p>
              </div>
              <ul className="space-y-4">
                {whyOneOnOne.contrasts.map((item) => (
                  <li key={item.against} className="surface p-5">
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-copper">
                      {item.against}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {item.point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </Container>
      </section>
    </Ambient>
  );
}
