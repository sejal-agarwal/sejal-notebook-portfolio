import type { ComponentPropsWithoutRef } from "react";
import "./section.css";

/** A page-width content block. Pass a section class to set its padding and accent. */
export function Section({ className = "", ...props }: ComponentPropsWithoutRef<"section">) {
  return <section className={`pageSection ${className}`.trim()} {...props} />;
}
