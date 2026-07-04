"use client";

import Reveal from "./Reveal";
import RevealText from "./RevealText";

const SOCIALS = [
  { label: "Email", href: "mailto:gautami.kamble@vit.edu.in" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gautami-kamble-457118330/" },
  { label: "Instagram", href: "https://instagram.com/move_it_g" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cream section-space">
      <div className="section-pad max-w-content mx-auto text-center">
        <Reveal>
          <span className="eyebrow">Contact</span>
        </Reveal>

        <RevealText
          as="h2"
          lines={["Let\u2019s Build VIT", "Together."]}
          goldLineIndex={1}
          delay={0.1}
          className="font-display font-medium text-navy leading-[1.0] text-fluid-h1 mt-8"
        />

        <Reveal delay={0.3}>
          <p className="text-navy/55 font-light mt-10 max-w-md mx-auto leading-relaxed text-fluid-base">
            For questions, ideas, or simply to say hello — every message
            reaches me directly.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 flex items-center justify-center gap-10 md:gap-16 flex-wrap">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                className="link-underline text-fluid-sm tracking-widest2 uppercase text-navy/70 hover:text-gold-dark transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
