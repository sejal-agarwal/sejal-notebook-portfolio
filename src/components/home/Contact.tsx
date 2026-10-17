import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkle } from "@/components/ui/Sparkle";
import { UnderlinedPhrase } from "@/components/ui/UnderlinedPhrase";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { contacts, type ContactLink } from "@/data/contacts";
import "./contact.css";

const ICONS: Record<ContactLink["icon"], () => React.JSX.Element> = {
  email: EmailIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
};

export function Contact() {
  return (
    <Section className="contactSection" id="contact" aria-labelledby="contact-title">
      <SectionHeading chapter="chapter six" id="contact-title">
        Say <UnderlinedPhrase>hi</UnderlinedPhrase>
      </SectionHeading>

      <Reveal className="postcard">
        <div className="postcardMessage">
          <p className="postcardGreeting">Hi there,</p>
          <p>
            Whether you want to talk research, swap ideas, or just say hi, my inbox is always open.
            Would love to connect with you!
          </p>
          <p className="postcardSignoff">
            Talk soon, <span>Sejal</span>
            <Sparkle className="postcardSpark" />
          </p>
        </div>

        <div className="postcardDivider" aria-hidden="true" />

        <div className="postcardAddress">
          <div className="postcardStamp" aria-hidden="true">
            <Sparkle className="postcardStampSpark" />
          </div>
          <ul className="contactLinks">
            {contacts.map((contact) => {
              const Icon = ICONS[contact.icon];
              const external = contact.href.startsWith("http");
              return (
                <li key={contact.label}>
                  <a
                    className="contactLink"
                    data-color={contact.color}
                    href={contact.href}
                    rel={external ? "noreferrer" : undefined}
                    target={external ? "_blank" : undefined}
                  >
                    <span className="contactIcon">
                      <Icon />
                    </span>
                    <span className="contactText">
                      <strong>{contact.label}</strong>
                      <span>{contact.handle}</span>
                    </span>
                    <span className="contactArrow" aria-hidden="true">→</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>

      <p className="contactFooter">made with <span aria-hidden="true">♥</span><span className="visuallyHidden">love</span></p>
    </Section>
  );
}
