import {
  audienceCopy,
  benefitsCopy,
  bookCopy,
  finalCtaCopy,
  footerCopy,
  heroCopy,
  pricingCopy,
  problemCopy,
  processCopy,
  programsTeaserCopy,
  socialProofCopy,
  technicalAreasCopy,
  whyOneOnOneCopy,
} from "@/content/copy";
import { faqs } from "@/content/faq";
import { mentor } from "@/content/mentor";
import { programs } from "@/content/programs";
import { resourceTopics } from "@/content/resources";
import { navItems, routes } from "@/config/site";

export const en = {
  htmlLang: "en",
  dir: "ltr" as const,
  ui: {
    skipToContent: "Skip to content",
    applyCta: "Apply for Mentorship",
    seeAllPrograms: "See all programs",
    recommended: "Recommended",
    packageLabel: "Package",
    sessionDuration: "45-minute 1:1 sessions",
    years: "years",
    whoItsFor: "Who it’s for",
    comingLater: "Coming later",
    explore: "Explore",
    personalSite: "Personal site",
    copyright: "Personal mentorship practice.",
    footerNote: "One mentor. Application first. No marketplace.",
    nav: navItems.map((item) => ({ href: item.href, label: item.label })),
    applyHref: routes.book,
    packages: {
      single: "Single session",
      four: "4 sessions",
      eight: "8 sessions",
      twelve: "12 sessions",
    } as const,
  },
  hero: {
    ...heroCopy,
    titleLead: "Become a stronger",
    titleAccent: "software engineer.",
  },
  problem: { ...problemCopy, accentWord: "engineer." },
  audience: { ...audienceCopy, accentWord: "mentor." },
  benefits: benefitsCopy,
  process: { ...processCopy, accentWord: "help." },
  whyOneOnOne: whyOneOnOneCopy,
  technicalAreas: { ...technicalAreasCopy, accentWord: "together" },
  programsTeaser: programsTeaserCopy,
  pricing: pricingCopy,
  socialProof: {
    ...socialProofCopy,
    eyebrow: "Reviews",
    placeholders: ["Story one", "Story two", "Story three"],
    reserved: "reserved",
  },
  finalCta: { ...finalCtaCopy, eyebrow: "Let’s work" },
  book: bookCopy,
  footer: footerCopy,
  faqs: {
    eyebrow: "Questions",
    title: "FAQ",
    intro: "Practical answers about how this mentorship actually works.",
    items: faqs,
  },
  mentor: {
    ...mentor,
    eyebrow: "Your mentor",
    experienceHeading: "Experience",
    educationHeading: "Education",
    gpaLabel: "GPA",
  },
  programs,
  resources: resourceTopics,
  pages: {
    home: {
      title: "1:1 Software Engineering Mentorship",
      description:
        "AlTechMentor is 1:1 software engineering mentorship with Marwan Mostafa. Junior-to-mid, mid-to-senior, technical coaching, and interview prep for React, TypeScript, and Next.js engineers.",
    },
    about: {
      title: "About Marwan Mostafa — Software Engineering Mentor",
      description:
        "Meet Marwan Mostafa, the mentor behind AlTechMentor. Senior Frontend Engineer with 5+ years in fintech and insurtech. 1:1 mentorship for junior and mid-level software engineers.",
      eyebrow: "About",
      heroTitle: `I’m ${mentor.name}. I’ll be the person on the other side of the call.`,
      breadcrumb: "About",
    },
    programs: {
      title: "Mentorship Programs: Junior to Mid, Mid to Senior & Interview Prep",
      description:
        "AlTechMentor programs: junior to mid, mid to senior, focused technical coaching, and interview preparation — 1:1 software engineering mentorship with Marwan Mostafa.",
      eyebrow: "Programs",
      heroTitle: "Mentorship shaped around your work, not a syllabus.",
      intro:
        "These are 1:1 engagements. We use a structure so progress compounds — then we adapt it to your code, your team, and your next role.",
      breadcrumb: "Programs",
    },
    pricing: {
      title: "1:1 Mentorship Pricing",
      description:
        "AlTechMentor pricing for 45-minute 1:1 software engineering mentorship. Packages of 1, 4, 8, and 12 sessions in EGP, MYR, or USD by market.",
      eyebrow: "Pricing",
      heroTitle: "45-minute 1:1 sessions, priced for your market.",
      intro:
        "You see one currency — the one that matches your location. There is no country picker. After I accept an application, I send payment details personally.",
      breadcrumb: "Pricing",
    },
    resources: {
      title: "Resources for Software Engineers",
      description:
        "AlTechMentor guides on software engineering mentorship, junior-to-mid growth, React and Next.js, and engineering career coaching. Writing is on the way.",
      eyebrow: "Resources",
      heroTitle: "Writing that will earn its place here.",
      intro:
        "This is an SEO home for future guides — not a fake blog. When essays ship, they will live under these topics.",
      breadcrumb: "Resources",
    },
    book: {
      title: "Apply for 1:1 Software Mentorship",
      description:
        "Apply to AlTechMentor. Tell Marwan Mostafa where you are, where you want to go, and what you’re struggling with. Applications are reviewed personally — this is not instant booking.",
      breadcrumb: "Apply",
    },
    notFound: {
      title: "This page isn’t part of the practice.",
      body: "The page you wanted doesn’t exist. Head home, or apply if you already know you want to work together.",
      home: "Home",
    },
    breadcrumbs: {
      home: "Home",
    },
  },
} as const;
