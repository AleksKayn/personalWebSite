"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  gradient,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.6", "0.8 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.65, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group"
    >
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-left text-white shadow-[0_25px_70px_rgba(16,3,35,0.45)] transition-transform hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(29,8,65,0.55)] sm:px-12 sm:py-14">
        <motion.div
          className="absolute -right-28 top-1/2 h-[22rem] w-[22rem] -translate-y-1/2 rounded-full blur-[120px] opacity-70 sm:-right-12"
          style={{ background: gradient }}
          initial={{ opacity: 0.4, scale: 0.9 }}
          animate={{
            opacity: 0.8,
            scale: 1,
            rotate: index % 2 === 0 ? 180 : -180,
          }}
          transition={{
            duration: 14,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div className="relative z-10 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.35em] text-white/60">
            Signature pour
          </span>
          <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h3>
          <p className="mt-4 text-white/75">{description}</p>

          <ul className="mt-6 flex flex-wrap gap-2 text-sm">
            {tags.map((tag) => (
              <li
                className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-white/75 backdrop-blur"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
