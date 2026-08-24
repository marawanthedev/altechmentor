import { socials } from "@/config/site";

export const mentor = {
  name: "Marwan Mostafa",
  firstName: "Marwan",
  title: "Senior Frontend Engineer",
  credibility:
    "Senior Frontend Engineer with 5+ years building high-impact, user-facing web applications in fintech and insurtech.",
  shortBio:
    "I help junior and mid-level developers become stronger professional engineers — with direct feedback on their code, their decisions, and their career.",
  longBio: [
    "I'm Marwan Mostafa, a Senior Frontend Engineer with 5+ years of experience building high-traffic, user-facing web applications. I currently work as a Senior Web Engineer at Gen, a fintech company in Kuala Lumpur, after several years as a Mid-level React Engineer at Tigerlab in insurtech.",
    "My work has focused on onboarding, identity, and other high-stakes user flows — where performance, accessibility, experimentation, and reliability actually matter. I partner closely with Product and Data, write tests, improve observability, and leave codebases more maintainable than I found them.",
    "Mentorship, for me, is not a lecture. It is looking at your work, naming what is holding you back, and giving you a practical path to become a stronger engineer.",
  ],
  location: "Kuala Lumpur, Malaysia",
  yearsExperience: "5+",
  education: {
    school: "Universiti Teknologi Malaysia",
    degree: "Bachelor of Software Engineering, Honors",
    gpa: "3.67/4.0",
    year: "2023",
    location: "Johor Bahru, Malaysia",
  },
  experience: [
    {
      company: "Gen",
      role: "Senior Web Engineer",
      period: "June 2025 – present",
      location: "Kuala Lumpur, Malaysia (hybrid)",
      industry: "Fintech",
      highlights: [
        "Lead user-facing web work on onboarding, recovery, and identity flows in a high-traffic fintech product.",
        "Built testing discipline across the stack — unit, component, and Playwright end-to-end tests — and established patterns the team can follow.",
        "Shipped Datadog observability for error rates and content correctness, and authored incident reports and postmortems for issues in my scope.",
        "Partnered with Product and Data on experiments, including more accurate user sampling so analysis could be trusted.",
        "Reduced technical debt by cleaning up legacy feature flags, standardizing structure, and improving performance on key dashboard pages.",
      ],
    },
    {
      company: "Tigerlab",
      role: "Mid-level React Engineer",
      period: "February 2023 – June 2025",
      location: "Kuala Lumpur, Malaysia (hybrid) / London, UK (remote)",
      industry: "Insurtech",
      highlights: [
        "Delivered React and TypeScript insurance products for clients in Europe and the United States.",
        "Migrated a sales journey from Django templates into an Nx monorepo, improving delivery time through reusable libraries.",
        "Built accessibility into UI components, including screen-reader labels and live region announcements.",
        "Expanded test coverage with Jest and Cypress, and introduced error-boundary patterns with Sentry logging.",
        "Integrated analytics (GTM, GA4) to find UX issues and track product behavior.",
      ],
    },
    {
      company: "RareApeps",
      role: "Web3 Software Engineer",
      period: "October 2022 – June 2024",
      location: "Remote",
      highlights: [
        "Built a Next.js dashboard and front-end features on TypeScript, Tailwind, and tRPC.",
        "Improved Core Web Vitals substantially, including LCP, total blocking time, and page weight.",
        "Migrated a JavaScript codebase to TypeScript to reduce runtime errors.",
      ],
    },
    {
      company: "Recrave",
      role: "Junior React Engineer",
      period: "April 2022 – February 2023",
      location: "Penang, Malaysia (remote)",
      highlights: [
        "Built admin dashboards with search, filtering, CSV import/export, and authentication using React, TypeScript, and Vite.",
      ],
    },
    {
      company: "Reasonet",
      role: "Front-end developer",
      period: "February 2021 – May 2021",
      location: "Penang, Malaysia (remote)",
      highlights: [
        "Shipped UI work in React and vanilla JavaScript, including dashboards integrated with client backends.",
      ],
    },
    {
      company: "Sedunia",
      role: "Front-end developer intern",
      period: "June 2020 – October 2020",
      location: "Selangor, Malaysia (remote)",
      highlights: [
        "Built UI components in Vue and vanilla JavaScript and integrated them with Laravel APIs.",
      ],
    },
  ],
  links: socials,
} as const;
