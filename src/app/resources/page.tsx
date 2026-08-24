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
    title: messages.pages.resources.title,
    description: messages.pages.resources.description,
    path: "/resources",
    locale,
    keywords: [
      "software engineering mentorship",
      "junior software engineer growth",
      "React mentorship",
      "Next.js mentorship",
      "engineering career coaching",
    ],
  });
}

export default async function ResourcesPage() {
  const messages = await getMessages();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: messages.pages.breadcrumbs.home, path: "/" },
          { name: messages.pages.resources.breadcrumb, path: "/resources" },
        ])}
      />
      <PageHero
        eyebrow={messages.pages.resources.eyebrow}
        title={messages.pages.resources.heroTitle}
        intro={messages.pages.resources.intro}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {messages.resources.map((topic) => (
              <article key={topic.slug} className="surface p-6">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-copper">
                  {messages.ui.comingLater}
                </p>
                <h2 className="mt-3 font-display text-2xl text-ink">
                  {topic.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <CTAButton href={routes.book}>{messages.ui.applyCta}</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
