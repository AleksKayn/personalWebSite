import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight uppercase mb-12">
      <span className="bg-gradient-to-r from-[#ffe29f] via-[#ff5ac4] to-[#70d9ff] bg-clip-text text-transparent drop-shadow-[0_12px_35px_rgba(255,96,207,0.35)]">
        {children}
      </span>
    </h2>
  );
}
