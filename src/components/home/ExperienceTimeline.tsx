"use client";

import { useEffect, useRef, useState } from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { TagChips } from "@/components/ui/TagChips";
import { experiences } from "@/data/experience";

/** Fraction of the viewport height past which a card counts as reached. */
const ACTIVATION_LINE = 0.7;

/** Pixels a marker must travel back past the line before it deactivates, to stop flicker. */
const HYSTERESIS = 8;

/**
 * Vertical timeline. The line and dots fade in together; then, as you scroll, the
 * line and each dot fill in and the matching card fades in the first time its dot
 * fills. Positions are measured from the DOM, so the line stays aligned at any width.
 */
export function ExperienceTimeline() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const revealed = useRevealOnScroll(timelineRef);
  const [active, setActive] = useState<number[]>([]);
  const [shown, setShown] = useState<number[]>([]);

  useEffect(() => {
    let activeIndexes = new Set<number>();
    let frame = 0;

    function update() {
      const timeline = timelineRef.current;
      const cards = cardRefs.current.filter((card): card is HTMLElement => card !== null);
      if (!timeline || cards.length === 0) return;

      const activationLine = window.innerHeight * ACTIVATION_LINE;
      const centers = cards.map((card) => {
        const rect = card.getBoundingClientRect();
        return rect.top + rect.height / 2;
      });

      const nextActive = new Set<number>();
      centers.forEach((center, index) => {
        const line = activeIndexes.has(index) ? activationLine + HYSTERESIS : activationLine;
        if (center >= line) return;
        nextActive.add(index);
      });

      const timelineTop = timeline.getBoundingClientRect().top;
      const firstCenter = centers[0] - timelineTop;
      const lastCenter = centers[centers.length - 1] - timelineTop;
      const lineLength = Math.max(lastCenter - firstCenter, 0);
      const progress = lineLength === 0 ? 0 : Math.max(0, Math.min(1, (activationLine - centers[0]) / lineLength));
      timeline.style.setProperty("--timeline-start", `${firstCenter}px`);
      timeline.style.setProperty("--timeline-length", `${lineLength}px`);
      timeline.style.setProperty("--timeline-progress", `${progress}`);

      activeIndexes = nextActive;
      const nextList = [...nextActive];
      // a card stays visible once its dot has filled, even if you scroll back up
      setShown((current) => {
        const fresh = nextList.filter((index) => !current.includes(index));
        return fresh.length ? [...current, ...fresh] : current;
      });
      setActive((current) =>
        current.length === nextList.length && current.every((index, position) => index === nextList[position])
          ? current
          : nextList,
      );
    }

    // at most one measurement per frame, however fast scroll events arrive
    function scheduleUpdate() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    }

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <ol className="experienceTimeline" data-revealed={revealed} ref={timelineRef}>
      {experiences.map((experience, index) => (
        <li className="experienceItem" key={experience.company}>
          <span
            className={`experienceMarker${active.includes(index) ? " experienceMarkerActive" : ""}`}
            data-color={experience.color}
            aria-hidden="true"
          />
          <article
            className={`experienceCard${shown.includes(index) ? " experienceCardVisible" : ""}`}
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
