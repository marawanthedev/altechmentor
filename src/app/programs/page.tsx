import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { routes } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { getLocale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages";

export const instant = false;

export async function generateMetadata() {
  const locale = await getLocale();
  const messages = await getMessages();
  return createMetadata({
    title: messages.pages.programs.title,
    description: messages.pages.programs.description,
    path: "/programs",
    locale,
    keywords: [
      "software engineering mentorship program",
      "junior to mid level engineer",
      "mid to senior engineer mentorship",
      "technical interview preparation",
    ],
  });
}

export default async function ProgramsPage() {
  const messages = await getMessages();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: messages.pages.breadcrumbs.home, path: "/" },
          { name: messages.pages.programs.breadcrumb, path: "/programs" },
        ])}
      />
      <PageHero
        eyebrow={messages.pages.programs.eyebrow}
        title={messages.pages.programs.heroTitle}
        intro={messages.pages.programs.intro}
      />
      <section className="py-16 sm:py-24">
        <Container className="space-y-10">
          {messages.programs.map((program) => (
            <article key={program.slug} className="surface p-6 sm:p-8">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-copper">
                {program.label}
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink">
                {program.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
                {program.summary}
              </p>
              <p className="mt-5 text-sm font-medium text-ink">
                {messages.ui.whoItsFor}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {program.forWho}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                {program.outcomes.map((outcome) => (
                  <li key={outcome}>— {outcome}</li>
                ))}
              </ul>
            </article>
          ))}
          <CTAButton href={routes.book}>{messages.ui.applyCta}</CTAButton>
        </Container>
      </section>
    </>
  );
}
