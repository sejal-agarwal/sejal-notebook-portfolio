import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UnderlinedPhrase } from "@/components/ui/UnderlinedPhrase";
import { StudyFolder } from "./StudyFolder";
import "./research.css";

export function Research() {
  return (
    <Section className="researchSection" id="research" aria-labelledby="research-title">
      <SectionHeading chapter="chapter three" id="research-title">
        Research <UnderlinedPhrase>notes</UnderlinedPhrase>
      </SectionHeading>
      <StudyFolder />
    </Section>
  );
}
