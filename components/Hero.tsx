"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-cream flex items-end"
    >
      {/* faint background rule grid — government-document restraint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 section-pad py-32 hidden md:block"
      >
        <div className="max-w-content mx-auto h-full border-l border-r border-navy/[0.06]" />
      </div>

      <div className="section-pad max-w-content mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-6 pt-44 pb-20 lg:pb-32 relative">
        <motion.div
          style={{ y: textY, opacity }}
          className="lg:col-span-7 flex flex-col justify-end"
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-8"
          >
            Candidate for General Secretary — VIT Mumbai
          </motion.p>

          <h1 className="font-display font-medium text-navy tracking-tightest2 text-fluid-h1">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Building Better
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
                className="block italic text-gold"
              >
                Together.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-lg text-fluid-lg text-navy/65 font-light leading-relaxed"
          >
            A vision for a more connected and inclusive
            VIT
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 flex flex-wrap items-center gap-6"
          >
            <a href="#journey" className="btn-primary">
              <span>Explore Journey</span>
            </a>
           
          </motion.div>
        </motion.div>

        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full max-w-md ml-auto overflow-hidden"
          >
            <motion.img
              style={{ scale: imageScale }}
              src="/hero.jpg"
              alt="Portrait of Gautami Kamble, candidate for General Secretary"
              className="h-full w-full object-cover grayscale-[15%]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-navy/10" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -12, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
            className="absolute -bottom-7 -left-7 hidden md:block w-28 h-28 border border-gold/50"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
        aria-hidden="true"
        className="hidden md:flex absolute bottom-10 right-10 lg:right-24 items-center gap-4 text-navy/40"
      >
        <span className="text-fluid-xs tracking-widest2 uppercase">Scroll</span>
        <motion.span
          animate={{ scaleX: [0, 1, 0], originX: [0, 0, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-px bg-navy/30 origin-left"
        />
      </motion.div>
    </section>
  );
}
