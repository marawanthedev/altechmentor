import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { APPLICATION_FORM_URL } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { getLocale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages";

export const instant = false;

export async function generateMetadata() {
  const locale = await getLocale();
  const messages = await getMessages();
  return createMetadata({
    title: messages.pages.book.title,
    description: messages.pages.book.description,
    path: "/book",
    locale,
    keywords: ["apply for software mentorship", "1:1 engineering mentor application"],
  });
}

export default async function BookPage() {
  const messages = await getMessages();
  const { book, pages } = messages;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: pages.breadcrumbs.home, path: "/" },
          { name: pages.book.breadcrumb, path: "/book" },
        ])}
      />
      <PageHero
        eyebrow={book.eyebrow}
        title={book.title}
        intro={book.lead}
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <ul className="space-y-3 text-base text-ink-soft">
            {book.details.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
          <div className="mt-10">
            <CTAButton href={APPLICATION_FORM_URL} external>
              {book.cta}
            </CTAButton>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            {book.after}
          </p>
        </Container>
      </section>
    </>
  );
}
