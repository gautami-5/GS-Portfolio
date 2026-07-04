"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

const COUNCILS = [
  {
    title: "Publicity",
    description:
      "Build A Communication Network That Reaches Every Student",
    points: [
      "Student Ambassadors 2.0, include CR Network",
      "Publish event posts within 24hr",
      "Develop a dedicated HOSTING Batch",
      "Ensure equal visibility for every club and council"
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sports",
    description:
      "Building Teams Beyond Competition",
    points: [
      "A standing inter-branch league beyond the annual meet",
      "Proper equipment and slot access for practice",
      "Improve medical support during events",
      "Presence of Sports Officer during official leagues"
    ],
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Technical",
    description:
      "Make technical learning practical, accessible and career-oriented",
    points: [
      "Create a single registration portal for student council events, competitions & workshops",
      "Encourage industry-focused, real-world projects",
      "A shared repository of past projects and learnings",
    ],
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "VCC",
    description:
      "Supporting The Team Behind Every Memory",
    points: [
      "Build dedicated teams for each council",
      "Ensure content is published within 24hr",
      "",
    ],
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cultural",
    description:
      "Events that make room for every discipline — music, dance, theatre, art",
    points: [
      "Dedicated rehearsal slots, booked well in advance",
      "A cultural calendar spaced to avoid academic clashes",
      "Proper stage, sound and lighting budget, protected",
    ],
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Documentation",
    description:
      "Institutional memory that doesn't disappear when a council changes hands each year.",
    points: [
      "A living archive of past events, budgets and learnings",
      "Standard templates for proposals and post-event reports",
      "Handover documents built into every council's calendar",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Creative",
    description:
      "A design bench that supports every council equally, rather than being pulled thin across too many requests.",
    points: [
      "A small standing creative team available to all councils",
      "Encourage creativity while preserving brand consistency",
      "Credit and portfolio support for student designers",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Literary",
    description:
      "Develop students into confident speakers and leaders",
    points: [
      "Organize MUN Bootcamps",
      "Encourage debates, discussions and writing competitions.",
      "Structured space for debate and public speaking practice",
    ],
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sponsorship",
    description:
      "Funding relationships built on long-term credibility, not a scramble that starts fresh every semester.",
    points: [
      "Prioritize partnerships with local businesses",
      "A standing sponsor relationship log, passed down yearly",
      "Focus on long-term collaborations",
      "Recognize every sponsor through thank-you initiatives",
    ],
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Blueprint() {
  return (
    <section id="blueprint" className="relative bg-cream section-space">
      <div className="section-pad max-w-content mx-auto mb-28 lg:mb-36">
        <Reveal>
          <span className="eyebrow">Blueprint for a Better VIT</span>
        </Reveal>
        <RevealText
          as="h2"
          lines={["Eight Councils,", "One Standard"]}
          goldLineIndex={1}
          delay={0.1}
          className="font-display font-medium text-fluid-h2 leading-[1.02] mt-6 max-w-3xl"
        />
        <Reveal delay={0.25}>
          <p className="text-navy/55 font-light mt-8 max-w-xl leading-relaxed text-fluid-base">
            A council-by-council plan — specific enough to act on from day
            one.
          </p>
        </Reveal>
      </div>

      <div>
        {COUNCILS.map((c, i) => {
          const reverse = i % 2 === 1;
          return (
            <div key={c.title} className="hairline">
              <div className="section-pad max-w-content mx-auto py-24 md:py-32 lg:py-36">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? 36 : -36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-5 relative aspect-[4/5] overflow-hidden ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: reverse ? -36 : 36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-7 ${reverse ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <span
                      aria-hidden="true"
                      className="font-display italic text-8xl md:text-9xl text-gold/20 leading-none block mb-6"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display font-medium text-fluid-h3 text-navy mb-6">
                      {c.title}
                    </h3>
                    <p className="text-navy/60 font-light leading-relaxed max-w-lg mb-10 text-fluid-base">
                      {c.description}
                    </p>
                    <ul className="space-y-4 max-w-lg">
                      {c.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-4 text-fluid-sm text-navy/70"
                        >
                          <span aria-hidden="true" className="mt-2.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                          <span className="font-light leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
