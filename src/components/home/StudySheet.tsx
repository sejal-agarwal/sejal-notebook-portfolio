import { PillLink } from "@/components/ui/PillLink";
import { briefStudies } from "@/data/site";
import type { Study } from "@/data/studies";

type StudySheetProps = {
  study: Study;
  index: number;
  active: boolean;
};

/** One clipped paper sheet describing a study. */
export function StudySheet({ study, index, active }: StudySheetProps) {
  return (
    <article
      aria-labelledby={`study-tab-${index}`}
      className="studySheet"
      data-active={active}
      id={`study-panel-${index}`}
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
      {briefStudies ? (
        <p className="studyBrief">{study.brief}</p>
      ) : (
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
      )}
      <div className="studyFooter">
        <PillLink href={study.href} rel="noreferrer" target="_blank">
          Read the paper
        </PillLink>
        {study.stamp && <span className="studyStamp">{study.stamp}</span>}
      </div>
    </article>
  );
}
