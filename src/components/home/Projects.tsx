import { PillLink } from "@/components/ui/PillLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagChips } from "@/components/ui/TagChips";
import { UnderlinedPhrase } from "@/components/ui/UnderlinedPhrase";
import { projects } from "@/data/projects";
import { ProjectBoard } from "./ProjectBoard";
import "./projects.css";

export function Projects() {
  return (
    <Section className="projectsSection" id="projects" aria-labelledby="projects-title">
      <SectionHeading chapter="chapter four" id="projects-title">
        Project <UnderlinedPhrase>board</UnderlinedPhrase>
      </SectionHeading>
      <ProjectBoard>
        {projects.map((project) => (
          <article className="projectNote" data-color={project.color} key={project.title}>
            <span aria-hidden="true" className="projectPin" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <TagChips tags={project.skills} label="Technologies" />
            <PillLink href={project.href} rel="noreferrer" target="_blank">
              View on GitHub
            </PillLink>
          </article>
        ))}
      </ProjectBoard>
    </Section>
  );
}
