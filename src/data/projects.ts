import type { Tone } from "@/lib/tones";

export type Project = {
  title: string;
  description: string;
  href: string;
  color: Exclude<Tone, "pink">;
  skills: string[];
};

export const projects: Project[] = [
  {
    title: "Otter",
    description:
      "A RAG-powered study workspace and instructor dashboard built with Next.js, PostgreSQL, and REST APIs, featuring role-based experiences, anonymized usage analytics, and automated weekly summaries.",
    href: "https://github.com/sejal-agarwal/otter",
    color: "blue",
    skills: ["Next.js", "PostgreSQL", "REST APIs", "RAG"],
  },
  {
    title: "Martletplace",
    description:
      "A full-stack community marketplace for UVic students, designed and shipped by a 14-person engineering team that I led as technical project lead.",
    href: "https://github.com/UVicMartletplace/martletplace",
    color: "green",
    skills: ["Full-stack", "Team of 14", "Technical lead"],
  },
];
