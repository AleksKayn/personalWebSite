import React from "react";
import { GiMartini, GiMusicalNotes, GiPartyPopper } from "react-icons/gi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Our Story",
    hash: "#story",
  },
  {
    name: "Signature Sips",
    hash: "#sips",
  },
  {
    name: "The Vibe",
    hash: "#vibe",
  },
  {
    name: "Live Nights",
    hash: "#nights",
  },
  {
    name: "Visit Us",
    hash: "#visit",
  },
] as const;

export const experiencesData = [
  {
    title: "Golden Hour Aperitivo",
    location: "Fridays · 5 – 7 PM",
    description:
      "Sip welcome spritzers as the DJ eases into a sunset groove. Limited snacks pair with citrus-forward cocktails.",
    icon: React.createElement(GiMartini),
    date: "Every Friday",
  },
  {
    title: "Skyline Sessions",
    location: "Saturdays · 8 – 11 PM",
    description:
      "Guest vinyl selectors spin nu-disco and house while the bar releases off-menu cosmic pours all night long.",
    icon: React.createElement(GiMusicalNotes),
    date: "Saturdays",
  },
  {
    title: "Midnight Ritual",
    location: "Full Moon · 10 PM – Late",
    description:
      "We dim the lights, ignite the aromatics, and roll out a sensory tasting flight led by Tara’s head alchemist.",
    icon: React.createElement(GiPartyPopper),
    date: "Monthly",
  },
] as const;

export const projectsData = [
  {
    title: "Starlight Spritz",
    description:
      "Sparkling yuzu, butterfly pea gin, and a citrus cloud that shifts color as you stir. It’s golden hour in a glass.",
    tags: ["Yuzu gin", "Galaxy bubbles", "Citrus cloud"],
    gradient: "linear-gradient(135deg, #ffd966 0%, #ff7ad4 50%, #7a67ff 100%)",
  },
  {
    title: "Aurora Highball",
    description:
      "Coconut washed rye, pandan vermouth, and neon tonic poured over a glowing ice column. Tropical, bold, luminous.",
    tags: ["Rye", "Pandan", "Neon tonic"],
    gradient: "linear-gradient(140deg, #5ef3ff 0%, #5c8dff 45%, #c26dff 100%)",
  },
  {
    title: "Nebula Negroni",
    description:
      "Smoked cacao bitters, blood orange aperitif, and galaxy dust. Finished with a spice mist for the perfect nightcap.",
    tags: ["Smoked cacao", "Blood orange", "Galaxy dust"],
    gradient: "linear-gradient(130deg, #ff8a65 0%, #ff4a9c 50%, #6f4bff 100%)",
  },
] as const;

export const skillsData = [
  "Neon-drenched lounge & skyline views",
  "Immersive scent + sound design",
  "Seasonal chef-driven small plates",
  "Zero-proof cocktails that still glow",
  "Resident vinyl DJs & surprise guests",
  "Private hideaway booths & bottle service",
  "Interactive mixology classes",
  "Late-night dessert pairings",
] as const;
