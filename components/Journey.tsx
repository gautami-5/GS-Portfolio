"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

const MILESTONES = [
  {
    title: "Freshers",
    description: "It started with a stage. As a Freshers' Finalist, I found the confidence to lead — and never looked back",
    image:
      "/freshers.jpeg",
  },
  {
    title: "Class Representative",
    description: "As Class Representative, I bridged students and faculty — listening, communicating, representing",
    image:
      "/cr3.jpeg",
  },
  {
    title: "CSI Publicity Head",
    description: "Planned publicity campaigns, boosted engagement, and coordinated promotions across organizing teams.",
    image:
      "/csi2.jpg",
  },
  {
    title: "Badminton Head Sports Council",
    description: "Built discipline off the field, into how events get run. Supported SportsMania — assisting execution, driving participation, and coordinating volunteers and teams",
    image:
      "/s2.jpeg",
  },
  {
    title: "Publicity Council Core Member",
    description: "Supported college-wide publicity, collaborating across councils to plan and execute campaigns.",
    image:
      "/p1.jpeg",
  },
  {
    title: "TEDx Volunteer",
    description: "Curated the session of Komal Waghmare, a double Paralympic bronze medalist, supporting speaker coordination and delivering a memorable TEDx experience.",
    image:
      "/t3.jpeg",
  },
  {
    title: "Anchor",
    description: "Found a voice for the room — calm, clear, in command.",
    image:
      "/h4.jpeg",
  },
  {
    title: "General Secretary Candidate",
    description: "Every prior role, now offered in service of the whole council.",
    image:
      "/h1.JPG",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

const WHEEL_SIZE = 420;
const RADIUS = 165;
const CENTER = WHEEL_SIZE / 2;
const N = MILESTONES.length;

function nodePosition(index: number, active: number) {
  const angleDeg = (360 / N) * (index - active) - 90;
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER + RADIUS * Math.cos(angleRad),
    y: CENTER + RADIUS * Math.sin(angleRad),
  };
}

export default function Journey() {
  const [active, setActive] = useState(0);
  const current = MILESTONES[active];

  const goTo = (i: number) => setActive(((i % N) + N) % N);

  return (
    <section id="journey" className="relative bg-navy section-space overflow-hidden">
      <div className="section-pad max-w-content mx-auto">
        <Reveal>
          <span className="eyebrow-inverse">The Journey so far</span>
        </Reveal>
        <RevealText
          as="h2"
          lines={["Eight Years, One Direction"]}
          delay={0.1}
          className="font-display font-medium text-cream text-fluid-h2 leading-[1.02] mt-6 max-w-2xl"
          lineClassName=""
        />
        <Reveal delay={0.25}>
          <p className="text-cream/55 font-light mt-4 max-w-xl leading-relaxed text-fluid-base">
            A record of showing up, role after role, until the
            responsibility outgrew the title.
          </p>
        </Reveal>
      </div>

      {/* Desktop: circular wheel navigator + editorial panel */}
      <div className="hidden lg:block mt-28">
        <div className="section-pad max-w-content mx-auto">
          <div className="grid grid-cols-[420px_1fr] gap-20 items-center">
            {/* LEFT — circular wheel */}
            <div
              className="relative shrink-0"
              style={{ width: WHEEL_SIZE, height: WHEEL_SIZE }}
            >
              {/* connecting ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-gold/20"
              />
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: EASE }}
                className="absolute inset-6 rounded-full border border-gold/10"
              />

              {/* center marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
                <span className="text-fluid-xs tracking-widest2 uppercase text-gold/50">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="text-fluid-xs tracking-widest2 uppercase text-cream/30 mt-1">
                  / {String(N).padStart(2, "0")}
                </span>
              </div>

              {MILESTONES.map((m, i) => {
                const { x, y } = nodePosition(i, active);
                const isActive = i === active;
                return (
                  <motion.button
                    key={m.title}
                    type="button"
                    onClick={() => setActive(i)}
                    animate={{ left: x, top: y }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                    style={{ left: x, top: y }}
                  >
                    <motion.span
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        borderColor: isActive
                          ? "rgba(201,162,39,0.9)"
                          : "rgba(201,162,39,0.25)",
                        color: isActive
                          ? "rgba(201,162,39,1)"
                          : "rgba(245,240,230,0.4)",
                      }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="flex items-center justify-center w-11 h-11 rounded-full border bg-navy font-display text-fluid-xs"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>

            {/* RIGHT — single editorial card */}
            <div className="relative min-h-[38rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  <div className="relative w-full max-w-[500px] aspect-[4/5] overflow-hidden rounded-md">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={current.image}
                        src={current.image}
                        alt={current.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.9, ease: EASE }}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-md" />
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
                    className="text-fluid-xs tracking-widest2 uppercase text-gold/50 mt-4 mb-3"
                  >
                    {String(active + 1).padStart(2, "0")}
                  </motion.p>

                  <motion.h3
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                    className="font-display text-fluid-h3 text-cream leading-tight mb-5 max-w-lg"
                  >
                    {current.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
                    className="text-fluid-base text-cream/55 font-light leading-relaxed max-w-lg"
                  >
                    {current.description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* prev / index / next */}
              <div className="flex items-center gap-8 mt-12 max-w-lg">
                <button
                  type="button"
                  onClick={() => goTo(active - 1)}
                  className="text-fluid-xs tracking-widest2 uppercase text-cream/45 hover:text-gold transition-colors duration-300"
                >
                  ← Previous
                </button>
                <span className="text-fluid-xs tracking-widest2 uppercase text-cream/30">
                  {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => goTo(active + 1)}
                  className="text-fluid-xs tracking-widest2 uppercase text-cream/45 hover:text-gold transition-colors duration-300"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet: simplified vertical timeline */}
      <div className="lg:hidden mt-20 section-pad max-w-content mx-auto relative">
        <div aria-hidden="true" className="absolute left-[27px] top-0 bottom-0 w-px bg-gold/25" />
        <div className="flex flex-col gap-20">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }}
              className="relative pl-16"
            >
              <span
                aria-hidden="true"
                className="absolute left-[22px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold ring-[6px] ring-navy"
              />
              <div className="flex flex-col gap-5">
                <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-md">
                  <img src={m.image} alt={m.title} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-fluid-xs tracking-widest2 uppercase text-gold mb-2.5">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-fluid-xl text-cream leading-tight mb-3">
                    {m.title}
                  </h3>
                  <p className="text-fluid-sm text-cream/45 font-light leading-relaxed max-w-sm">
                    {m.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
