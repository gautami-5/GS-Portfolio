"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "POA", href: "#blueprint" },
  { label: "Network", href: "#network" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The navbar belongs only to the Hero section — track whether #top
  // (the Hero) is currently intersecting the viewport.
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu if the user scrolls the Hero out of view
  // while it's open, so it never lingers hidden-but-open underneath.
  useEffect(() => {
    if (!heroInView) setOpen(false);
  }, [heroInView]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: heroInView ? 1 : 0, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden={!heroInView}
      style={{ pointerEvents: heroInView ? "auto" : "none" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-editorial ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-navy/10 py-5"
          : "bg-transparent py-8 md:py-10"
      }`}
    >
      <nav
        aria-label="Primary"
        className="section-pad flex items-center justify-between max-w-content mx-auto"
      >
        <a
          href="#top"
          tabIndex={heroInView ? undefined : -1}
          className="font-display leading-none group"
        >
          <span className="block text-lg md:text-xl tracking-wide text-navy transition-colors group-hover:text-gold-dark duration-300">
            Gautami Madhuri Chandrashekhar&nbsp;Kamble
          </span>
          <span className="block text-[10px] tracking-widest2 uppercase font-body text-gold-dark mt-1.5">
            General Secretary
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-12">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                tabIndex={heroInView ? undefined : -1}
                className="link-underline text-fluid-sm tracking-wide text-navy/70 hover:text-navy transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

       

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          tabIndex={heroInView ? undefined : -1}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden relative w-9 h-6 flex flex-col justify-between"
        >
          <span
            className={`h-px w-full bg-navy transition-transform duration-500 ease-editorial ${
              open ? "translate-y-[11px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-navy transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-full bg-navy transition-transform duration-500 ease-editorial ${
              open ? "-translate-y-[11px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-cream border-t border-navy/10"
          >
            <ul className="flex flex-col section-pad py-10 gap-2">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="hairline first:border-t-0"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-fluid-h3 font-display text-navy hover:text-gold-dark transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
