import type { Tone } from "@/lib/tones";

export type Experience = {
  company: string;
  role: string;
  dates: string;
  color: Tone;
  summary: string;
  skills: string[];
};

export const experiences: Experience[] = [
  {
    company: "Autodesk",
    role: "Research Intern, Agentic Canvas Interactions",
    dates: "Sep – Dec 2026 · Toronto, ON",
    color: "pink",
    summary:
      "Designing and building interactive canvas prototypes that explore direct-manipulation interfaces for real-time agentic workflows, in close collaboration with research, design, and engineering.",
    skills: ["Next.js", "Three.js", "HCI Research", "Agentic Workflows"],
  },
  {
    company: "Outschool",
    role: "Software Engineer Intern",
    dates: "Jan – Apr, Sep – Dec 2024 · San Francisco, CA",
    color: "blue",
    summary:
      "Shipped A/B-tested UI/UX experiments across key customer workflows that increased new-buyer sign-ups by 25%, guided by experimentation telemetry and close work with product and data teams.",
    skills: ["React", "TypeScript", "A/B testing"],
  },
  {
    company: "Open Ocean Robotics",
    role: "Software Engineer Co-op",
    dates: "May – Aug 2023 · Victoria, BC",
    color: "green",
    summary:
      "Migrated 40% of a large web codebase (about 60,000 lines) from JavaScript to TypeScript and built a live-feed image carousel that cut streaming costs by 20%.",
    skills: ["React", "TypeScript", "Responsive web apps"],
  },
  {
    company: "Respondent",
    role: "Software Engineer Intern",
    dates: "Sep – Dec 2022 · New York, NY",
    color: "pink",
    summary:
      "Refactored about 20% of an Angular application, shipping 5 new user-facing features and expanding Jest test coverage to make the platform more stable and maintainable.",
    skills: ["Angular", "Jest", "Frontend"],
  },
  {
    company: "19Labs",
    role: "Full-Stack Developer Co-op",
    dates: "Jan – Apr 2022 · San Mateo, CA",
    color: "blue",
    summary:
      "Led a platform-wide user migration for the GALE telehealth platform, consolidating 7 permission roles into 4, and integrated Bluetooth medical devices to stream live patient health metrics.",
    skills: ["Full-stack", "Databases", "UX", "Kotlin"],
  },
  {
    company: "Highway Three Solutions",
    role: "Junior Technical Analyst",
    dates: "May – Aug 2021 · Victoria, BC",
    color: "green",
    summary:
      "Researched and tested Atlassian Server-to-Cloud migration journeys, partnering across engineering, consulting, and marketing to turn the findings into technical blog posts.",
    skills: ["Atlassian apps", "Cloud Migration", "Technical Writing"],
  },
];
