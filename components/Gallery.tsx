"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal, { RevealGroup, staggerItem } from "./Reveal";
import RevealText from "./RevealText";

type GalleryItem = {
  id: number;
  src: string;
  category: string;

  year?: string;
  /** Tailwind grid-span classes — controls the editorial collage rhythm. */
  span: string;
};

/**
 * Clean, reusable data source. To add or remove photos later, just add
 * or delete an object here (and drop the matching file into
 * `/public/gallery`). `span` accepts any of: "col-span-1 row-span-1",
 * "col-span-2 row-span-1", "col-span-1 row-span-2", "col-span-2 row-span-2".
 */
const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: "/r7.jpg", category: "Leadership", year: "2025", span: "col-span-2 row-span-2" },
  { id: 2, src: "/r5.jpg", category: "Distribution Drive-Dadar",  year: "2025", span: "col-span-1 row-span-1" },
  { id: 3, src: "/dance.jpg", category: "Dance",  year: "2025", span: "col-span-1 row-span-2" },
  { id: 4, src: "/csi3.jpeg", category: "TEDx Team",  year: "2026", span: "col-span-1 row-span-1" },
  { id: 5, src: "/r2.jpg", category: "SOPHIA UNIVERSITY-JAPAN",  year: "2025", span: "col-span-2 row-span-1" },
  { id: 6, src: "/c7.jpeg", category: "Actress Kranti Redkar",  year: "2026", span: "col-span-1 row-span-1" },
  { id: 7, src: "/csi4.jpeg", category: "CSI Enthusia",  year: "2026", span: "col-span-1 row-span-3" },
  { id: 8, src: "/h2.jpeg", category: "Womens Day Celebration Hosts",  span: "col-span-1 row-span-2" },
  { id: 9, src: "/badminton2.jpg", category: "Greens Badminton Tournament Winners",  year: "2024", span: "col-span-2 row-span-1" },
  { id: 10, src: "/t1.jpeg", category: "Paralympic Medalist Komal Waghmare",  span: "col-span-1 row-span-1" },
  { id: 11, src: "/cr2.jpeg", category: "Computer Department Project Exhibition",  span: "col-span-2 row-span-2" },
  { id: 12, src: "/h3.jpeg", category: "Hosting",  span: "col-span-1 row-span-1" },
  { id: 13, src: "/cricket.jpg", category: "Greens Women Cricket Runner Up", year: "2025",  span: "col-span-1 row-span-1" },
  { id: 14, src: "/badminton3.jpeg", category: "Garware Badminton Tournament",  span: "col-span-1 row-span-2" },
  { id: 15, src: "/badminton1.jpg", category: "VIT Badminton team",  span: "col-span-1 row-span-1" },
  { id: 16, src: "/csi1.jpg", category: "THE CSI TEAM",  year: "2026", span: "col-span-2 row-span-1" },
  { id: 17, src: "/r4.jpg", category: "Greens Geet Gata Chal",  span: "col-span-1 row-span-1" },

];

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  return (
    <motion.div
      variants={staggerItem}
      className={`group relative overflow-hidden rounded-[20px] shadow-[0_18px_44px_-22px_rgba(3,27,85,0.35)] transition-shadow duration-500 ease-editorial hover:shadow-[0_28px_60px_-20px_rgba(3,27,85,0.45)] ${item.span}`}
    >
      {
        <Image
        src={item.src}
        alt={item.category}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        loading={index < 4 ? "eager" : "lazy"}
        className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
      />
      } 

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent opacity-0 transition-opacity duration-500 ease-editorial group-hover:opacity-100"
      />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-3 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
        <span className="block text-[10px] tracking-widest2 uppercase text-gold font-semibold mb-1.5">
          {item.category}
          {item.year ? (
            <span className="text-cream/50 font-normal normal-case tracking-normal"> · {item.year}</span>
          ) : null}
        </span>
        <h3 className="font-display text-cream text-lg md:text-xl leading-snug">{item.title}</h3>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 ring-1 ring-inset ring-navy/10 rounded-[20px] pointer-events-none"
      />
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream section-space">
      <div className="section-pad max-w-content mx-auto">
        <Reveal>
          <span className="eyebrow">Gallery</span>
        </Reveal>
        <RevealText
          as="h2"
          lines={["Moments That Built My Journey"]}
          delay={0.1}
          className="font-display font-medium text-fluid-h2 leading-[1.02] mt-6 max-w-3xl"
        />
        <Reveal delay={0.25}>
          <p className="text-navy/55 font-light mt-8 max-w-xl leading-relaxed text-fluid-base">
            Every event, every responsibility, every conversation and every challenge shaped the leader I aspire to become.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[190px] lg:auto-rows-[220px] gap-4 md:gap-5 lg:gap-6 mt-20 lg:mt-24">
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
