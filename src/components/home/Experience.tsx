import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UnderlinedPhrase } from "@/components/ui/UnderlinedPhrase";
import { ExperienceTimeline } from "./ExperienceTimeline";
import "./experience.css";

export function Experience() {
  return (
    <Section className="experienceSection" id="work" aria-labelledby="experience-title">
      <SectionHeading chapter="chapter two" id="experience-title">
        Work <UnderlinedPhrase>experience</UnderlinedPhrase>
      </SectionHeading>
      <ExperienceTimeline />
    </Section>
  );
}
