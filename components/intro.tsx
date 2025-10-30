"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsArrowRight } from "react-icons/bs";
import { LuSparkles } from "react-icons/lu";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[70vh] w-full max-w-5xl flex-col items-center justify-center text-center pt-16 sm:pt-24"
    >
      <motion.div
        className="pointer-events-none absolute -top-12 left-0 h-48 w-48 rounded-full blur-3xl opacity-50 sm:h-64 sm:w-64"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255, 199, 95, 0.6), rgba(255, 70, 205, 0) 70%)",
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-24 right-0 h-56 w-56 rounded-full blur-3xl opacity-60 sm:h-72 sm:w-72"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(83, 224, 255, 0.55), rgba(55, 15, 110, 0) 65%)",
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.75, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0.35, rotate: 0 }}
        animate={{ opacity: 0.65, rotate: 360 }}
        transition={{ duration: 55, ease: "linear", repeat: Infinity }}
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(255, 233, 132, 0.12), rgba(255, 255, 255, 0) 55%), radial-gradient(circle at 100% 30%, rgba(134, 82, 255, 0.12), rgba(255, 255, 255, 0) 60%)",
        }}
      />

      <motion.div
        className="mb-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-2 text-sm uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <LuSparkles className="text-base" />
        Neon nights · Cosmic pours
      </motion.div>

      <motion.h1
        className="px-4 text-4xl font-semibold leading-[1.05] sm:text-6xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to <span className="text-glow">Tara Bar</span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl px-6 text-lg text-white/80 sm:text-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        A celestial hideaway perched above the city. Sip starlit cocktails, chase neon dreams, and lose track of time in our immersive soundscape.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col items-center gap-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="#visit"
          className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ff73d0] via-[#9f6bff] to-[#58d9ff] px-10 py-3 text-base font-semibold text-[#0b0615] shadow-[0_18px_60px_rgba(151,77,255,0.45)] transition-transform hover:scale-[1.03] focus:scale-[1.03]"
          onClick={() => {
            setActiveSection("Visit Us");
            setTimeOfLastClick(Date.now());
          }}
        >
          Book a table
          <BsArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="#sips"
          className="flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-10 py-3 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
          onClick={() => {
            setActiveSection("Signature Sips");
            setTimeOfLastClick(Date.now());
          }}
        >
          Explore the menu
        </Link>
      </motion.div>

      <motion.div
        className="mt-12 flex flex-col gap-2 text-sm uppercase tracking-[0.3em] text-white/50 sm:flex-row sm:gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
      >
        <span>Open daily · 5pm – late</span>
        <span>Rooftop · 49 Tara Street</span>
        <span>Reservations recommended</span>
      </motion.div>
    </section>
  );
}
