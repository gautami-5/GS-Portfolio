"use client";

import { motion } from "framer-motion";

type RevealTextProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
  goldLineIndex?: number;
};

/**
 * Masks each line of a heading behind overflow-hidden and slides it up
 * into view — the editorial "curtain" reveal used across section titles.
 * Content (the `lines` array) is passed in verbatim and never altered.
 */
export default function RevealText({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  as = "h2",
  goldLineIndex,
}: RevealTextProps) {
  const Tag = as;

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={`${line}-${i}`} className="block overflow-hidden">
          <motion.span
            initial={{ y: "115%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{
              duration: 1,
              delay: delay + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`block ${lineClassName} ${
              i === goldLineIndex ? "italic text-gold" : ""
            }`}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
