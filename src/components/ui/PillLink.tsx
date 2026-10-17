import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import "./pill-link.css";

/** Yellow pill-shaped link with a trailing arrow. Internal paths use next/link. */
export function PillLink({ className = "", children, href = "", ...props }: ComponentPropsWithoutRef<"a">) {
  const Anchor = href.startsWith("/") ? Link : "a";
  return (
    <Anchor className={`pillLink ${className}`.trim()} href={href} {...props}>
      {children} <span aria-hidden="true">→</span>
    </Anchor>
  );
}
