import type { Tone } from "@/lib/tones";

export type ContactLink = {
  label: string;
  handle: string;
  href: string;
  color: Tone;
  icon: "email" | "linkedin" | "github";
};

export const contacts: ContactLink[] = [
  {
    label: "Email",
    handle: "sejalagarwal321@gmail.com",
    href: "mailto:sejalagarwal321@gmail.com",
    color: "pink",
    icon: "email",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/sejal-agarwal21",
    href: "https://www.linkedin.com/in/sejal-agarwal21",
    color: "blue",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    handle: "github.com/sejal-agarwal",
    href: "https://github.com/sejal-agarwal",
    color: "green",
    icon: "github",
  },
];
