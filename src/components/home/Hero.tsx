import Image from "next/image";
import { Sparkle } from "@/components/ui/Sparkle";
import { showBlog } from "@/data/site";
import { UnderlinedPhrase } from "@/components/ui/UnderlinedPhrase";
import "./hero.css";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="heroCopy">
        <p className="eyebrow">Hi there, I&apos;m Sejal!</p>
        <h1 id="hero-title">
          a UI/UX engineer
          <br />
          building thoughtful <UnderlinedPhrase>digital experiences.</UnderlinedPhrase>
        </h1>
        <p className="intro">
          Welcome to my little corner of the internet! Here you&apos;ll find a collection of my software engineering work, HCI research, and various things I&apos;ve been tinkering away at. I also write about what I&apos;m learning, exploring, and thinking about when building human-centered technology.
        </p>
        {showBlog && (
          <div className="heroActions">
            <a className="button buttonPrimary" href="#blog">
              Read my blog <span aria-hidden="true">→</span>
            </a>
            <a className="button buttonSecondary" href="#contact">
              Contact me
            </a>
          </div>
        )}
      </div>

      <div className="heroArt" aria-label="A Polaroid photo of Sejal on a pinned notebook page">
        <Sparkle className="artSpark artSparkOne" />
        <svg className="paperPlaneScene" viewBox="0 0 160 120" aria-hidden="true">
          <g transform="translate(120 20)">
            <g transform="translate(-12 -12) scale(1.65)">
              <path
                d="M 1.5 9 L 22.5 1 L 15.5 22 L 11 13.5 Z M 11 13.5 L 22.5 1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </g>
        </svg>
        <div className="tape" aria-hidden="true" />
        <div className="portraitCard">
          <div className="portraitWindow">
            <Image
              className="portraitPhoto"
              src="/sejal.jpg"
              alt="Sejal smiling beside flower boxes on a city street"
              fill
              sizes="(max-width: 900px) 80vw, 26vw"
              preload
            />
          </div>
        </div>
        <aside className="stickyNote">
          research intern,
          agentic canvas experiences @ Autodesk
        </aside>
      </div>
    </section>
  );
}
