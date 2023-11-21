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
      <p className="mb-6">
        Currently enrolled in Undergrad in{" "}
        <span className="font-medium">B.Tech Computer Science at VIT Vellore, India</span>. I decided to pursue my
        passion for programming at the age of 17. I started with Python, Linux, C++ and then{" "}
        <span className="font-medium">web development</span>.{" "}
        <span className="italic">Soon, i started with understanding Servers, Cloud, Databases</span> which led to me DevOps. 
        I <span className="underline">love</span> building
        applications requiring DevOps practices !!
        {" "}
        . I am  familiar with CI/CD pipelines, containerisations, K8s clusters, APIs and I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a DevOps/SRE
        engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy teaching
        tech, writing screenplay, playing cricket.{" "}
        <span className="font-medium"></span>
      </p>
    </motion.section>
  );
}
