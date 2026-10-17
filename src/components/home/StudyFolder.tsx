"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { PillLink } from "@/components/ui/PillLink";
import { studies } from "@/data/studies";

/** Manila-folder tabs, one per study; the selected study shows on a clipped sheet. */
export function StudyFolder() {
  const [activeIndex, setActiveIndex] = useState(0);
  const study = studies[activeIndex];

  return (
    <Reveal className="studyFolder">
      <div className="studyTabs" role="tablist" aria-label="Research studies">
        {studies.map((item, index) => (
          <button
            aria-controls="study-panel"
            aria-selected={activeIndex === index}
            className={`studyTab${activeIndex === index ? " studyTabActive" : ""}`}
            id={`study-tab-${index}`}
            key={item.tab}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          >
            {item.tab}
          </button>
        ))}
      </div>
      <div className="studyDrawer">
        <article
          aria-labelledby={`study-tab-${activeIndex}`}
          className="studySheet"
          id="study-panel"
          key={activeIndex}
          role="tabpanel"
        >
          <svg className="studyClip" viewBox="0 0 24 60" aria-hidden="true">
            <path
              d="M17 20 V46 a6 6 0 0 1 -12 0 V12 a8 8 0 0 1 16 0 V44"
              fill="none"
              stroke="var(--ink)"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
          <h3>{study.name}</h3>
          {study.venue && <p className="studyVenue">{study.venue}</p>}
          <dl className="studyNotes">
            <div>
              <dt>The question</dt>
              <dd>{study.question}</dd>
            </div>
            <div>
              <dt>The study</dt>
              <dd>{study.method}</dd>
            </div>
            <div>
              <dt>The finding</dt>
              <dd>{study.finding}</dd>
            </div>
          </dl>
          <div className="studyFooter">
            <PillLink href={study.href} rel="noreferrer" target="_blank">
              Read the paper
            </PillLink>
            {study.stamp && <span className="studyStamp">{study.stamp}</span>}
          </div>
        </article>
      </div>
    </Reveal>
  );
}
