"use client";

import { motion, useReducedMotion } from "framer-motion";
import { routes } from "@/config/site";
import { Ambient } from "@/components/ui/Ambient";
import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useLocale } from "@/i18n/LocaleProvider";

type HeroProps = {
  video: React.ReactNode;
};

export function Hero({ video }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 18 };
  const animate = { opacity: 1, y: 0 };
  const { messages } = useLocale();
  const hero = messages.hero;

  return (
    <Ambient className="border-b border-ink/10">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow variant="badge">{hero.eyebrow}</Eyebrow>
          </motion.div>
          <motion.h1
            className="mt-5 font-display text-4xl font-bold leading-[1.18] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08 }}
          >
            {hero.titleLead}{" "}
            <span className="text-copper">{hero.titleAccent}</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-ink-soft"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.16 }}
          >
            {hero.supporting}
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.24 }}
          >
            <CTAButton href={routes.book}>{hero.primaryCta}</CTAButton>
            <CTAButton href="#how-it-works" variant="secondary">
              {hero.secondaryCta}
            </CTAButton>
          </motion.div>
        </div>
        <motion.div
          className="lg:ps-2"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.12 }}
        >
          {video}
        </motion.div>
      </Container>
    </Ambient>
  );
}
