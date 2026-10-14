import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { mentorImages } from "@/config/media";
import { routes } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { getLocale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages";

export const instant = false;

export async function generateMetadata() {
  const locale = await getLocale();
  const messages = await getMessages();
  return createMetadata({
    title: messages.pages.about.title,
    description: messages.pages.about.description,
    path: "/about",
    locale,
    keywords: [
      "Marwan Mostafa",
      "senior frontend engineer mentor",
      "software engineering mentor",
      "React mentor",
    ],
  });
}

export default async function AboutPage() {
  const messages = await getMessages();
  const { mentor, pages, ui } = messages;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...personSchema(),
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: pages.breadcrumbs.home, path: "/" },
          { name: pages.about.breadcrumb, path: "/about" },
        ])}
      />
      <PageHero
        eyebrow={pages.about.eyebrow}
        title={pages.about.heroTitle}
        intro={mentor.credibility}
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Image
            src={mentorImages.portrait.src}
            alt={mentorImages.portrait.alt}
            width={mentorImages.portrait.width}
            height={mentorImages.portrait.height}
            className="h-auto w-full rounded-lg border border-ink/12 bg-cream object-cover"
          />
          <div>
            {mentor.longBio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-4 text-base leading-relaxed text-ink-soft first:mt-0"
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
              {mentor.title} · {mentor.location}
            </p>
            <div className="mt-8">
              <CTAButton href={routes.book}>{ui.applyCta}</CTAButton>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <h2 className="font-display text-3xl font-bold text-ink">
            {mentor.experienceHeading}
          </h2>
          <ol className="mt-10 space-y-10">
            {mentor.experience.map((role) => (
              <li key={`${role.company}-${role.period}`} className="border-t border-line pt-8">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-copper">
                  {role.period}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink">
                  {role.role}, {role.company}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">
                  {role.location}
                  {"industry" in role && role.industry
                    ? ` · ${role.industry}`
                    : ""}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft">
                  {role.highlights.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className="mt-16 border-t border-line pt-10">
            <h2 className="font-display text-3xl text-ink">
              {mentor.educationHeading}
            </h2>
            <p className="mt-4 font-display text-xl text-ink">
              {mentor.education.degree}
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              {mentor.education.school} · {mentor.education.location} ·{" "}
              {mentor.education.year} · {mentor.gpaLabel} {mentor.education.gpa}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
