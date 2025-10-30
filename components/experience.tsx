"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Live Nights");
  const { theme } = useTheme();

  return (
    <section
      id="nights"
      ref={ref}
      className="scroll-mt-28 mb-28 w-full max-w-5xl sm:mb-40"
    >
      <SectionHeading>Live Nights</SectionHeading>
      <VerticalTimeline
        lineColor={theme === "light" ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.25)"}
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={item.title}>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(255, 255, 255, 0.08)",
                boxShadow: "0 30px 80px rgba(18, 4, 38, 0.45)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                textAlign: "left",
                padding: "1.6rem 2.2rem",
                color: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(18px)",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.25)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.12)",
                color: "#fff",
                fontSize: "1.6rem",
                boxShadow: "0 10px 25px rgba(12, 2, 28, 0.4)",
              }}
            >
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                {item.location}
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-white/70">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
