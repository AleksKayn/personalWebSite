"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_12px_40px_rgba(12,3,30,0.45)] backdrop-blur-xl transition-transform hover:scale-[1.1] active:scale-95"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
