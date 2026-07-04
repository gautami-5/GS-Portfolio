"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A hairline progress indicator pinned to the top of the viewport.
 * Purely ambient — communicates position in a long editorial scroll
 * without adding any visual noise.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gold origin-left z-[60]"
    />
  );
}
