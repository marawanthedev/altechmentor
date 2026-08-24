import Link from "next/link";
import { SITE_NAME, routes, socials } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { getMessages } from "@/i18n/messages";

export async function Footer() {
  const messages = await getMessages();
  const socialLinks = [
    { href: socials.github, label: "GitHub" },
    { href: socials.linkedin, label: "LinkedIn" },
    { href: socials.youtube, label: "YouTube" },
    { href: socials.website, label: messages.ui.personalSite },
  ];

  return (
    <footer className="border-t border-white/10 bg-cedar-deep text-ink">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold">{SITE_NAME}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            {messages.footer.tagline}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
            {messages.ui.explore}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            {messages.ui.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={routes.book} className="hover:text-ink">
                {messages.ui.applyCta}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
            Marwan
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            {socialLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ink-soft sm:flex-row sm:justify-between">
          <p>
            © 2026 {SITE_NAME}. {messages.ui.copyright}
          </p>
          <p>{messages.ui.footerNote}</p>
        </Container>
      </div>
    </footer>
  );
}
