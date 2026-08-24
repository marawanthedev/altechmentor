import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { routes } from "@/config/site";
import { getMessages } from "@/i18n/messages";

export const instant = false;

export default async function NotFound() {
  const messages = await getMessages();

  return (
    <section className="py-24">
      <Container className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.2] text-ink">
          {messages.pages.notFound.title}
        </h1>
        <p className="mt-4 text-ink-soft">{messages.pages.notFound.body}</p>
        <div className="mt-8 flex gap-6 text-sm">
          <Link href={routes.home} className="text-cedar underline-offset-4 hover:underline">
            {messages.pages.notFound.home}
          </Link>
          <Link href={routes.book} className="text-cedar underline-offset-4 hover:underline">
            {messages.ui.applyCta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
