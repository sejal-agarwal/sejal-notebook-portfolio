import { PillLink } from "@/components/ui/PillLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagChips } from "@/components/ui/TagChips";
import { UnderlinedPhrase } from "@/components/ui/UnderlinedPhrase";
import { projects } from "@/data/projects";
import { ElephantDoodle } from "./ElephantDoodle";
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
            <div className="projectLinks">
              {project.liveHref && <PillLink href={project.liveHref} rel="noreferrer" target="_blank">Live site</PillLink>}
              <PillLink href={project.href} rel="noreferrer" target="_blank">
                View on GitHub
              </PillLink>
            </div>
          </article>
        ))}
        <article aria-label="Doodle of an elephant" className="projectNote projectDoodle" data-color="yellow">
          <span aria-hidden="true" className="projectPin" />
          <ElephantDoodle />
        </article>
      </ProjectBoard>
    </Section>
  );
}
