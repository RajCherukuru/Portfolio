"use client";
import Navbar from "@/components/navbar";
import { Button } from "@/components/button";
import { Introduction } from "@/components/introduction";
import React, { useRef } from 'react';

import { motion, useScroll } from "framer-motion";
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";
import { Workx } from "@/components/workx";
import { Workexperience } from "@/components/workexperience";
import { Code } from "@/components/code";
import { Footer } from "@/components/footer";

interface SectionRefs {
  workx: React.RefObject<HTMLDivElement>;
  skills: React.RefObject<HTMLDivElement>;
  projects: React.RefObject<HTMLDivElement>;
  intro: React.RefObject<HTMLDivElement>;

}

type ScrollAction = (section: keyof SectionRefs) => void;

export default function Home() {
  const sectionRefs: SectionRefs = {
    workx: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    intro: useRef<HTMLDivElement>(null)
  };

  const scrollAction: ScrollAction = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen h-screen overflow-auto flex flex-col gap-28">
      <Navbar scrollAction={scrollAction} />

      <div className="w-8/12 h-full mx-auto flex flex-col gap-56">
        <Introduction sectionRefs={sectionRefs} scrollAction={scrollAction}  />

        <Skills sectionRefs={sectionRefs} />

        <Workexperience sectionRefs={sectionRefs} scrollAction={scrollAction} />

        <Projects sectionRefs={sectionRefs} />

        <Footer />
      </div>
    </div>
  );
}
