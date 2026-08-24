import { Ambient } from "@/components/ui/Ambient";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <Ambient className="border-b border-white/[0.06]">
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Eyebrow variant="badge">{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{intro}</p>
        </Container>
      </section>
    </Ambient>
  );
}
