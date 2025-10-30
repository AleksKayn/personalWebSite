"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Visit Us");

  return (
    <motion.section
      id="visit"
      ref={ref}
      className="mb-24 w-full max-w-3xl scroll-mt-28 rounded-[2.5rem] border border-white/10 bg-white/5 px-6 py-14 text-center shadow-[0_25px_90px_rgba(15,4,35,0.45)] backdrop-blur-xl sm:px-14"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionHeading>Visit Us</SectionHeading>

      <p className="mx-auto max-w-xl text-white/75">
        Ready to float through the Tara universe? Reserve your table, plan a celebration, or ask about private takeovers. We&apos;ll respond within the same orbit.
      </p>

      <div className="mt-6 text-sm uppercase tracking-[0.35em] text-white/50">
        <span>49 Tara Street · Rooftop level</span>
        <span className="mx-3 hidden sm:inline">•</span>
        <span>Daily · 5pm – late</span>
      </div>

      <form
        className="mt-12 flex flex-col gap-4 text-left"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Your reservation request is on its way! ✨");
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            className="h-14 rounded-2xl border border-white/15 bg-white/10 px-5 text-white/80 placeholder:text-white/40 outline-none transition focus:border-white/40 focus:bg-white/15"
            name="guestName"
            type="text"
            required
            maxLength={120}
            placeholder="Your name"
          />
          <input
            className="h-14 rounded-2xl border border-white/15 bg-white/10 px-5 text-white/80 placeholder:text-white/40 outline-none transition focus:border-white/40 focus:bg-white/15"
            name="senderEmail"
            type="email"
            required
            maxLength={150}
            placeholder="Email for confirmations"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            className="h-14 rounded-2xl border border-white/15 bg-white/10 px-5 text-white/80 placeholder:text-white/40 outline-none transition focus:border-white/40 focus:bg-white/15"
            name="visitDate"
            type="date"
            required
          />
          <input
            className="h-14 rounded-2xl border border-white/15 bg-white/10 px-5 text-white/80 placeholder:text-white/40 outline-none transition focus:border-white/40 focus:bg-white/15"
            name="partySize"
            type="number"
            min={1}
            max={12}
            placeholder="Party size"
          />
        </div>
        <textarea
          className="min-h-[10rem] rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white/80 placeholder:text-white/40 outline-none transition focus:border-white/40 focus:bg-white/15"
          name="message"
          placeholder="Let us know about your celebration, dietary notes, or preferred seating."
          required
          maxLength={1500}
        />
        <SubmitBtn />
      </form>

      <p className="mt-10 text-sm text-white/60">
        Prefer to call? Reach our host stand at <a className="underline" href="tel:+13135550123">+1 (313) 555-0123</a> or email <a className="underline" href="mailto:hello@tarabar.com">hello@tarabar.com</a>.
      </p>
    </motion.section>
  );
}
