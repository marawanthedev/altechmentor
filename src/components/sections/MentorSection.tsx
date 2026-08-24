import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { mentorImages } from "@/config/media";
import { routes } from "@/config/site";
import { getMessages } from "@/i18n/messages";

export async function MentorSection() {
  const { mentor, ui } = await getMessages();
  const socialLinks = [
    { href: mentor.links.github, label: "GitHub" },
    { href: mentor.links.linkedin, label: "LinkedIn" },
    { href: mentor.links.youtube, label: "YouTube" },
    { href: mentor.links.website, label: ui.personalSite },
  ];

  return (
    <section className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionReveal>
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-cream">
              <Image
                src={mentorImages.portrait.src}
                alt={mentorImages.portrait.alt}
                width={mentorImages.portrait.width}
                height={mentorImages.portrait.height}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow={mentor.eyebrow}
                title={mentor.name}
                intro={mentor.credibility}
              />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
                {mentor.shortBio}
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
                {mentor.title} · {mentor.location} · {mentor.yearsExperience}{" "}
                {ui.years}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="pill hover:border-copper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton href={routes.book}>{ui.applyCta}</CTAButton>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
