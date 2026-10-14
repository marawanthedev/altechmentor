export const SITE_NAME = "marwann.tech";
export const SITE_DOMAIN = "marwann.tech";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? `https://${SITE_DOMAIN}`;

export const APPLICATION_FORM_URL = "https://forms.gle/yCLM4wXRTh8M7gqWA";

export const SESSION_MINUTES = 45;

export const defaultDescription =
  "marwann.tech offers 1:1 software engineering mentorship with Marwan Mostafa — junior-to-mid, mid-to-senior, technical coaching, and interview prep for React, TypeScript, and Next.js engineers.";

export const defaultKeywords = [
  "marwann.tech",
  "marwann.tech",
  "1:1 software engineering mentorship",
  "software engineer mentor",
  "junior to mid level engineer",
  "mid to senior engineer mentorship",
  "technical coaching",
  "technical interview preparation",
  "React mentorship",
  "TypeScript mentorship",
  "Next.js mentorship",
  "Marwan Mostafa",
];

export const routes = {
  home: "/",
  programs: "/programs",
  pricing: "/pricing",
  about: "/about",
  resources: "/resources",
  book: "/book",
} as const;

export const navItems = [
  { href: routes.pricing, label: "Pricing" },
  { href: routes.about, label: "About" },
  { href: routes.resources, label: "Resources" },
] as const;

export const socials = {
  github: "https://github.com/marawanthedev",
  linkedin: "https://www.linkedin.com/in/marwan-mostafa-6112801a6/",
  youtube: "https://www.youtube.com/@codewithmarwan",
  website: "https://marwanmostafa.com",
} as const;
