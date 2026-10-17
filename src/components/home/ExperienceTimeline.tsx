"use client";

import { useEffect, useRef, useState } from "react";
import { TagChips } from "@/components/ui/TagChips";
import { experiences } from "@/data/experience";

/** Fraction of the viewport height past which a card counts as reached. */
const ACTIVATION_LINE = 0.7;

/**
 * Vertical timeline whose line fills in and whose cards fade in as you scroll.
 * Positions are measured from the DOM, so the line stays aligned at any width.
 */
export function ExperienceTimeline() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [revealed, setRevealed] = useState<number[]>([]);
  const [active, setActive] = useState<number[]>([]);

  useEffect(() => {
    const revealedIndexes = new Set<number>();

    function update() {
      const timeline = timelineRef.current;
      const cards = cardRefs.current.filter((card): card is HTMLElement => card !== null);
      if (!timeline || cards.length === 0) return;

      const activationLine = window.innerHeight * ACTIVATION_LINE;
      const centers = cards.map((card) => {
        const rect = card.getBoundingClientRect();
        return rect.top + rect.height / 2;
      });

      const activeIndexes: number[] = [];
      const newlyRevealed: number[] = [];
      centers.forEach((center, index) => {
        if (center >= activationLine) return;
        activeIndexes.push(index);
        if (revealedIndexes.has(index)) return;
        revealedIndexes.add(index);
        newlyRevealed.push(index);
      });

      const timelineTop = timeline.getBoundingClientRect().top;
      const firstCenter = centers[0] - timelineTop;
      const lastCenter = centers[centers.length - 1] - timelineTop;
      const lineLength = Math.max(lastCenter - firstCenter, 0);
      const progress = lineLength === 0 ? 0 : Math.max(0, Math.min(1, (activationLine - centers[0]) / lineLength));
      timeline.style.setProperty("--timeline-start", `${firstCenter}px`);
      timeline.style.setProperty("--timeline-length", `${lineLength}px`);
      timeline.style.setProperty("--timeline-progress", `${progress}`);

      setRevealed((current) => {
        const fresh = newlyRevealed.filter((index) => !current.includes(index));
        return fresh.length ? [...current, ...fresh] : current;
      });
      setActive((current) =>
        current.length === activeIndexes.length && current.every((index, position) => index === activeIndexes[position])
          ? current
          : activeIndexes,
      );
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <ol
      className={`experienceTimeline${revealed.length > 0 ? " experienceTimelineVisible" : ""}`}
      ref={timelineRef}
    >
      {experiences.map((experience, index) => (
        <li className={`experienceItem${revealed.includes(index) ? " experienceItemVisible" : ""}`} key={experience.company}>
          <span
            className={`experienceMarker${active.includes(index) ? " experienceMarkerActive" : ""}`}
            data-color={experience.color}
            aria-hidden="true"
          />
          <article
            className="experienceCard"
            data-color={experience.color}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
          >
            <time className="experienceDates">{experience.dates}</time>
            <h3>{experience.company}</h3>
            <p className="experienceRole">{experience.role}</p>
            <p className="experienceSummary">{experience.summary}</p>
            <TagChips tags={experience.skills} label="Skills" />
          </article>
        </li>
      ))}
    </ol>
  );
}
