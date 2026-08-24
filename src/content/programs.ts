export const programs = [
  {
    slug: "junior-to-mid",
    label: "Junior → Mid",
    title: "8-week structured mentorship",
    summary:
      "Build the technical foundation and independence of a strong professional engineer.",
    forWho:
      "Developers who can ship features but still need a lot of guidance, feel lost in code review, or don't know what “mid-level” actually looks like.",
    outcomes: [
      "A personal roadmap for the next stretch of your career",
      "Stronger fundamentals in React, TypeScript, and real-world frontend work",
      "Clearer habits around testing, Git, and reading production code",
      "Independence: fewer blockers, better questions, more ownership",
    ],
  },
  {
    slug: "mid-to-senior",
    label: "Mid → Senior",
    title: "8-week structured mentorship",
    summary:
      "Develop technical judgment, ownership, and the beginnings of engineering leadership.",
    forWho:
      "Engineers who are productive and still unsure what separates them from senior peers — architecture, communication, and responsibility for outcomes.",
    outcomes: [
      "Practice making and defending technical trade-offs",
      "Architecture and system-design conversations grounded in your work",
      "Feedback on how you lead work, not just how you complete it",
      "A clearer picture of senior expectations in real teams",
    ],
  },
  {
    slug: "technical-coaching",
    label: "One-off",
    title: "Technical coaching",
    summary:
      "A focused 45-minute session on a specific problem: a design, a PR, a performance issue, or a stuck decision.",
    forWho:
      "Engineers who don't need a full engagement yet — they need a sharp second brain on one piece of work.",
    outcomes: [
      "A concrete recommendation you can act on immediately",
      "Review of the code or design you bring",
      "No curriculum. One problem, worked properly.",
    ],
  },
  {
    slug: "interview-prep",
    label: "Career",
    title: "Interview preparation",
    summary:
      "Identify skill gaps, tighten your story, and prepare for technical interviews with someone who has hired and been hired.",
    forWho:
      "Engineers preparing for a move, a promotion conversation, or a more competitive interview loop.",
    outcomes: [
      "A realistic read on gaps in your current profile",
      "Practice on the kinds of questions your target role actually asks",
      "Help with CV, portfolio, and how you talk about your work",
    ],
  },
] as const;
