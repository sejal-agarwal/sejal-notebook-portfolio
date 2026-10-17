import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UnderlinedPhrase } from "@/components/ui/UnderlinedPhrase";
import "./about.css";

const CURRENTLY_LEARNING = ["agentic coding workflows", "human-centered design", "UI/UX best practices"];

export function About() {
  return (
    <Section className="aboutSection" id="about" aria-labelledby="about-title">
      <div className="aboutCopy">
        <SectionHeading chapter="chapter one" id="about-title">
          About <UnderlinedPhrase>me</UnderlinedPhrase>
        </SectionHeading>
        <Reveal className="aboutBody">
          <p>
            I&apos;m a Computer Science Master&apos;s student at the University of Waterloo,
            where I conduct research at the intersection of Human-Computer Interaction, artificial intelligence, and education. Before that,
            I studied Software Engineering at the University of Victoria. Through my studies and
            internships, I&apos;ve become passionate about creating pixel-perfect designs that feel
            intuitive, thoughtful, and fun to use.
          </p>
          <p>
            I like moving between design, code, and the
            questions that make a project worth building. This notebook is where I collect the work, HCI research, and little experiments I make
            along the way.
          </p>
        </Reveal>
      </div>

      <Reveal as="aside" className="aboutNote" aria-labelledby="about-note-title">
        <div className="aboutNoteLayout">
          <div className="aboutNoteCopy">
            <h3 id="about-note-title">currently learning about...</h3>
            <ul>
              {CURRENTLY_LEARNING.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <svg className="noteUnderline" viewBox="0 0 140 18" aria-hidden="true">
              <path d="M3 10 C18 3 27 16 44 9 S72 5 87 10 S114 14 137 7" />
            </svg>
          </div>
          <Image
            className="aboutSticker"
            src="/about-flower-sticker.png"
            alt=""
            aria-hidden="true"
            width={256}
            height={256}
            sizes="(max-width: 600px) 76px, 100px"
          />
        </div>
      </Reveal>
    </Section>
  );
}
