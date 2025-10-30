"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Signature Sips", 0.5);

  return (
    <section
      ref={ref}
      id="sips"
      className="scroll-mt-28 mb-28 w-full max-w-5xl sm:mb-40"
    >
      <SectionHeading>Signature Sips</SectionHeading>
      <p className="mx-auto max-w-2xl text-center text-white/70">
        Our bar team crafts each cocktail like a celestial story—layered with rare infusions, luminous garnishes, and a healthy dose of imagination. Stir up a few of our nightly favorites.
      </p>
      <div className="mt-14 space-y-12 sm:space-y-16">
        {projectsData.map((project, index) => (
          <React.Fragment key={project.title}>
            <Project {...project} index={index} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
