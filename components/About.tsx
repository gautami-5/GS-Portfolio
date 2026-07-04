"use client";

import { motion } from "framer-motion";
import Reveal, { RevealGroup, staggerItem } from "./Reveal";
import RevealText from "./RevealText";

export default function About() {
  return (
    <section id="about" className="relative bg-cream section-space">
      <div className="section-pad max-w-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">About</span>
          </Reveal>

          <RevealText
            as="h2"
            lines={["The Person", "Behind the Vision"]}
            goldLineIndex={1}
            delay={0.1}
            className="font-display font-medium text-fluid-h2 leading-[1.03] mt-6 mb-12"
          />

          <Reveal delay={0.2}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="w-20 h-px bg-gold mb-12"
            />
          </Reveal>

          <Reveal delay={0.3}>
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden">
              <img
                src="/formal2.jpeg"
                alt="Rahul Kulkarni in conversation with fellow students"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-28">
          <Reveal delay={0.1}>
            <p className="font-display text-fluid-xl leading-snug text-navy/90 mb-10 max-w-2xl">
           
            For me, leadership is about bringing people together. 
           
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-7 text-navy/65 font-light leading-loose text-fluid-base max-w-prose">
              <p>
              As General Secretary, I want 
            to work closely with every council, support their vision, and create systems that 
            help them succeed. When every council thrives, every student benefits.
              </p>
              <p>
              Leadership isn't about having all the answers—it's about staying calm under pressure,
              adapting to challenges, and focusing on solutions.

              </p>
              <p>
              I know not everything will go according to plan, and that's okay. What matters is being present, adapting when
              circumstances change, and finding the best way forward. Every challenge is an opportunity to learn, improve, 
              and lead with purpose.

              </p>
              <p>
              I believe the true measure of leadership is not the position we hold, but the opportunities we create for others.
              </p>
            </div>
          </Reveal>

          <RevealGroup className="hairline mt-16 pt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 max-w-2xl">
            {[
              "Class Representative",
              "CSI Publicity Head",
              "TEDx Organizer",
              "Sports Council",
            ].map((role) => (
              <motion.div key={role} variants={staggerItem}>
                <p className="text-fluid-sm text-navy/80 font-medium leading-snug">
                  {role}
                </p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
