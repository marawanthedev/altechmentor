export const faqs = [
  {
    question: "Who is this for?",
    answer:
      "Students, interns, junior and mid-level web developers, and self-taught learners who didn't go to university. If you already write code and feel the gap between tutorials and real production work — or between your current level and the next one — this is for you.",
  },
  {
    question: "How long is each session?",
    answer:
      "Every session is 45 minutes, one-to-one. We use that time on your code, your questions, and a clear set of next steps.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "I review your application personally. If I believe I can help, I'll get in touch to discuss mentorship. If it's not a fit, I won't pretend otherwise. There is no automated matching and no instant checkout.",
  },
  {
    question: "Do I need to be a frontend developer?",
    answer:
      "This is focused on web developers and web engineers. My deepest professional experience is in frontend — React, Next.js, and TypeScript — and production web systems. I also mentor on engineering habits, architecture, and career progression. If your goals sit far outside web, I'll tell you.",
  },
  {
    question: "Can you review my code?",
    answer:
      "Yes. Code and project reviews are a core part of the work. Bring pull requests, side projects, or design questions and we'll go through them together.",
  },
  {
    question: "What happens between sessions?",
    answer:
      "You leave with practical next steps — often a small assignment, a review target, or a specific skill to practice. Mentorship is the sessions plus the work in between.",
  },
  {
    question: "Can I book a single session?",
    answer:
      "Yes. A single 45-minute session is available if you have a focused question. Ongoing packages are a better fit if you want a roadmap and compounding progress.",
  },
  {
    question: "Do you mentor people outside Egypt and Malaysia?",
    answer:
      "Yes. I work with mentees internationally. Pricing is shown for your location automatically.",
  },
  {
    question: "How does payment work?",
    answer:
      "After we agree to work together, I'll send payment details. Payment is confirmed manually before we schedule. There is no payment form on this website yet.",
  },
  {
    question: "Do you provide a structured roadmap?",
    answer:
      "Yes. Once I understand your goals, we build a personalized roadmap. It is structured, but it is not a one-size-fits-all course syllabus.",
  },
] as const;

/** Hidden in the FAQ UI for now — copy stays so it can be restored. */
export const hiddenFaqQuestions = new Set([
  "Do you mentor people outside Egypt and Malaysia?",
  "ينفع لو أنا برّه مصر أو ماليزيا؟",
]);

export function visibleFaqs<T extends { question: string }>(items: readonly T[]) {
  return items.filter((item) => !hiddenFaqQuestions.has(item.question));
}
