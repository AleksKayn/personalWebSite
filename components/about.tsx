"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Our Story", 0.5);

  return (
    <motion.section
      ref={ref}
      id="story"
      className="scroll-mt-28 mb-28 w-full max-w-4xl text-center sm:mb-40"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <SectionHeading>Our Story</SectionHeading>

      <div className="glassy-card mx-auto rounded-3xl px-8 py-10 text-left text-base leading-7 text-white/80 sm:px-14 sm:py-12">
        <p className="text-lg text-white/85">
          Tara Bar was born from late-night conversations on a fire escape, dreaming of a rooftop that felt like golden hour long after the sun had set. Our founders fused their love for celestial storytelling, mixology, and immersive sound design into a single glowing hideaway above Tara Street.
        </p>

        <p className="mt-6 text-white/70">
          Every pour is crafted like a ritual, layered with homemade infusions, lunar botanicals, and a touch of theatre. We champion local growers, small-batch distillers, and a zero-waste garnish program so the planet stays as vibrant as our cocktails.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <h3 className="text-sm uppercase tracking-[0.35em] text-white/60">Founded</h3>
            <p className="mt-2 text-2xl font-semibold text-white">2017</p>
            <p className="mt-1 text-sm text-white/60">Still pouring every night since.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <h3 className="text-sm uppercase tracking-[0.35em] text-white/60">Signature</h3>
            <p className="mt-2 text-2xl font-semibold text-white">12 cosmic pours</p>
            <p className="mt-1 text-sm text-white/60">Seasonal menu with zero-proof twins.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <h3 className="text-sm uppercase tracking-[0.35em] text-white/60">Soundtrack</h3>
            <p className="mt-2 text-2xl font-semibold text-white">Vinyl + live sets</p>
            <p className="mt-1 text-sm text-white/60">Curated nightly by resident selectors.</p>
          </div>
        </div>

        <p className="mt-10 text-white/70">
          We believe nightlife should be playful, inclusive, and a little mysterious. Whether it’s your first rooftop rendezvous or a weekly ritual, Tara Bar is a constellation you can always return to.
        </p>
      </div>
    </motion.section>
  );
}
