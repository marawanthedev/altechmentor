import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { getMessages } from "@/i18n/messages";

export async function SocialProofSection() {
  const { socialProof } = await getMessages();

  return (
    <section className="bg-cream/40 py-16 sm:py-20">
      <Container>
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-copper">
              {socialProof.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink">
              {socialProof.title}
            </h2>
            <div className="section-rule mx-auto mt-4" aria-hidden />
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              {socialProof.body}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {socialProof.placeholders.map((label) => (
                <div
                  key={label}
                  className="rounded-3xl border border-dashed border-white/15 bg-white/5 px-4 py-8 text-sm text-ink-soft"
                >
                  {label} — {socialProof.reserved}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
