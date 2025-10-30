"use client";

import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("The Vibe");

  return (
    <section
      id="vibe"
      ref={ref}
      className="mb-28 w-full max-w-5xl scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>The Vibe</SectionHeading>
      <p className="mx-auto max-w-2xl text-white/70">
        Tara Bar is more than cocktails—it&apos;s a kaleidoscope of light, sound, and flavor designed to keep you orbiting long past midnight.
      </p>
      <ul className="mt-12 grid gap-4 text-left sm:grid-cols-2">
        {skillsData.map((experience, index) => (
          <motion.li
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-[0_18px_45px_rgba(18,4,38,0.35)]"
            key={experience}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            {experience}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
