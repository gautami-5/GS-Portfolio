"use client";

import { useEffect, useRef, useState } from "react";

type Mentor = {
  name: string;
  designation: string;
  organization: string;
  image: string;
  description: string;
};

const mentors: Mentor[] = [
  {
    name: "Hon'ble Minister Ramdasji Athawale",
    designation: "Union Minister of Social Justice & Empowerment",
    organization: "Government of India",
    image:
      "/c6.jpeg",
    description:
      "His guidance on institutional leadership and student development shaped my understanding of responsibility beyond academics.",
  },
  {
    name: "Advocate Ujjwal Nikkam ",
    designation: "Member of Parliament",
    organization: "Rajyasabha",
    image:
      "/c5.jpeg",
    description:
      "His wisdom, simplicity and free-spirited nature taught me that lasting influence comes not from authority but from character and the values we uphold",
  },
  {
    name: "IRS Officer Sameer Wankhede",
    designation: "Additional Commissioner",
    organization: "Department of Revenue",
    image:
      "/c4.jpeg",
    description:
      "His fearless approach and unwavering commitment to protecting the youth inspire me to lead with integrity, take initiative and serve society with purpose",
  },
  {
    name: "Shri Bhagatsingh Koshyari",
    designation: "Former Governor of Maharashtra",
    organization: "Former Member of Rajya Sabha",
    image:
      "/c3.jpg",
    description:
      "Meeting his excellency reminded me that humility and a commitment to lifelong learning are the hallmarks of true leadership. His soft-spoken natue & thoughtful presence reinforced the value of knowledge & continuous self-improvement",
  }
];

/**
 * Lightweight, dependency-free scroll-reveal — mirrors the rest of the
 * site's motion language using only the native IntersectionObserver API.
 */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "-10% 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function MentorCard({
  mentor,
  ariaHidden,
}: {
  mentor: Mentor;
  ariaHidden?: boolean;
}) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="group shrink-0 w-[280px] sm:w-[300px] lg:w-[320px] rounded-[28px] bg-[#FBF8F2] border border-[#B9975B]/25 p-7 lg:p-8 shadow-[0_10px_34px_-18px_rgba(3,27,85,0.18)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.035] hover:border-[#B9975B]/55 hover:shadow-[0_30px_58px_-20px_rgba(3,27,85,0.28)]"
    >
      <div className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden mb-7">
        <img
          src={mentor.image}
          alt={ariaHidden ? "" : mentor.name}
          className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.04]"
        />
      </div>
      <h3 className="font-display text-xl lg:text-[1.4rem] text-[#031B55] leading-snug mb-1.5">
        {mentor.name}
      </h3>
      <p className="text-[11px] tracking-[0.18em] uppercase text-[#B9975B] font-semibold mb-1">
        {mentor.designation}
      </p>
      <p className="text-xs text-[#031B55]/45 mb-5">{mentor.organization}</p>
      <p className="text-sm text-[#031B55]/65 font-light leading-relaxed">
        {mentor.description}
      </p>
    </div>
  );
}

export default function Network() {
  const heading = useInView<HTMLDivElement>();
  const track = useInView<HTMLDivElement>();

  return (
    <section
      id="network"
      className="relative bg-[#F7F4EF] section-space overflow-hidden"
    >
      <style>{`
        @keyframes mentors-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .mentors-track {
          animation: mentors-marquee 58s linear infinite;
        }
        .mentors-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .mentors-track { animation: none; }
        }
        .mentors-scrollbar::-webkit-scrollbar { display: none; }
        .mentors-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="section-pad max-w-content mx-auto">
        <div
          ref={heading.ref}
          className={`transition-all duration-1000 ease-out ${
            heading.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <span className="block text-[11px] tracking-[0.32em] uppercase text-[#B9975B] font-semibold mb-6">
            Mentors &amp; Influences
          </span>
          <h2 className="font-display font-medium text-[#031B55] text-[clamp(2.2rem,1.5rem+3.2vw,4.4rem)] leading-[1.05] max-w-3xl">
            The People Who Shaped My Journey
          </h2>
          <p className="text-[#031B55]/60 font-light mt-7 max-w-xl leading-relaxed text-[clamp(1rem,0.95rem+0.25vw,1.15rem)]">
            Leadership grows through guidance, collaboration and learning
            from remarkable people.
          </p>
        </div>
      </div>

      {/* Desktop / tablet — infinite marquee, pauses on hover */}
      <div
        ref={track.ref}
        className={`hidden md:block mt-20 lg:mt-10 transition-opacity duration-1000 ease-out ${
          track.inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mentors-track flex gap-8 w-max py-2">
            {[0, 1].map((set) =>
              mentors.map((mentor, i) => (
                <MentorCard
                  key={`${set}-${mentor.name}-${i}`}
                  mentor={mentor}
                  ariaHidden={set === 1}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Mobile — horizontal swipe */}
      <div className="md:hidden mt-16">
        <div className="mentors-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory section-pad pb-4">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="snap-start shrink-0 w-[78vw] sm:w-[340px]"
            >
              <MentorCard mentor={mentor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}