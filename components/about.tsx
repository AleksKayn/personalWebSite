"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>



        <span className="font-medium">  </span> I decided to pursue my
        passion for tech and decided to get into coding. I approach coding challenges with enthusiasm and view each problem as an opportunity to learn and grow. {" "}
        <span className="font-medium"></span>{" "}
        <span className="italic">I find the problem-solving  </span> aspect of programming to be my favorite. I <span className="underline"> enjoy </span>satisfaction in successfully resolving challenges. The
        feeling of finally figuring out a solution to a problem. <span> My primary technology stack:{" "}</span>
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB.
        </span>
        I am also familiar with TypeScript and Figma.I am always looking to
        learn new technologies. {" "}
        <span className="font-medium"></span>
   


        <span className="italic">When I'm not figuring out how to make things finally work</span>, I enjoy playing
         guitar, go to the gym, and take care of my dog and a cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning how{" "}
        <span className="font-medium"> to make {" "}chinese dishes</span>.
      
      <span className="mb-3">
      <span className="italic" style={{ textAlign: 'right', fontSize: '.9rem' }}> <br/> <p>“Learning does not make one learned:there are those<br/> who have  knowledge and those who have understanding.<br/>  The first requires memory and the second philosophy.”</p> 
     <div style={{ textAlign: 'right' }}>― Alexandre Dumas, The Count of Monte Cristo{" "}</div> 
     </span>
</span>

    </motion.section>
  );
}
