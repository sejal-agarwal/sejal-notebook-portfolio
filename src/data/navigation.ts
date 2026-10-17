import { showBlog } from "./site";

export type NavTone = "blue" | "pink" | "lavender" | "green" | "peach" | "yellow";

export type NavItem = { label: string; href: string; tone: NavTone };

const allNavigation: NavItem[] = [
  { label: "About", href: "#about", tone: "blue" },
  { label: "Work", href: "#work", tone: "pink" },
  { label: "Research", href: "#research", tone: "lavender" },
  { label: "Projects", href: "#projects", tone: "green" },
  { label: "Blog", href: "#blog", tone: "peach" },
  { label: "Say hi", href: "#contact", tone: "yellow" },
];

export const homeNavigation = allNavigation.filter((item) => showBlog || item.href !== "#blog");
