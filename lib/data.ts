import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import itana1Img from "@/public/itana1.png";
import itana2Img from "@/public/itana2.png";
import h3Img from "@/public/h3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from YMU",
    location: "Ukraine",
    description:
      "I graduated from YMU and gained Master's degree in 'Organizational Management'. ",
    icon: React.createElement(LuGraduationCap),
    date: "2012", 
  },
  {
    title: "Front End Developer",
    location: "USA",
    description:
      "I worked in a start up that providing services to protect IP rights. The service is based on the Ethereum blockchain.",
    icon: React.createElement(FaReact),
    date: "May 2022 - September 2022",
  },
  {
    title: "Front End Developer",
    location: "USA, NYC",
    description:
      "I worked as a Front End web developer for more than a year. I was building websites based on the design provided.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "Itana",
    description:
      "I worked as a front end web developer on this startup project. The Itana business license is designed to enable tech and service-based businesses.",
    tags: ["HTML","CSS","Webflow", "JS", "MongoDB"],
    imageUrl: itana1Img,
  },
  {
    title: "Itana Africa",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["HTML","CSS","Webflow", "JS", "MongoDB"],
    imageUrl: itana2Img,
  },
  {
    title: "H3Entertainment",
    description:
      "WEB3 start up that focusing on protecting IP rights. It has features like NFT mining.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: h3Img,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Figma",
  "Framer Motion",
] as const;
