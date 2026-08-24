import { mentor } from "@/content/mentor";
import { programs } from "@/content/programs";
import {
  SITE_NAME,
  SITE_URL,
  SESSION_MINUTES,
  defaultDescription,
} from "@/config/site";
import type { Messages } from "@/i18n/messages";

export function personSchema() {
  return {
    "@type": "Person",
    name: mentor.name,
    jobTitle: mentor.title,
    url: SITE_URL,
    image: `${SITE_URL}/images/mentor/portrait.jpg`,
    sameAs: [
      SITE_URL,
      mentor.links.github,
      mentor.links.linkedin,
      mentor.links.youtube,
      mentor.links.website,
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: mentor.education.school,
    },
    worksFor: {
      "@type": "Organization",
      name: "Gen",
    },
  };
}

export function organizationSchema(messages?: Messages) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    description: messages?.pages.home.description ?? defaultDescription,
    founder: personSchema(),
    areaServed: "Worldwide",
    serviceType: [
      "Software engineering mentorship",
      "Junior to mid-level coaching",
      "Mid to senior coaching",
      "Technical coaching",
      "Interview preparation",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Frontend engineering",
      "Career growth",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${SITE_NAME} mentorship programs`,
      itemListElement: programs.map((program) => ({
        "@type": "Offer",
        name: program.title,
        description: program.summary,
        url: `${SITE_URL}/programs`,
      })),
    },
    offers: {
      "@type": "Offer",
      name: `${SESSION_MINUTES}-minute 1:1 mentorship session`,
      description:
        "Personalized 1:1 software engineering mentorship. Market-specific pricing.",
      url: `${SITE_URL}/pricing`,
    },
  };
}

export function faqSchema(messages: Messages) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: messages.faqs.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}
