import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';


import { TypeAnimate } from "@/components/typeanimate";
import { Button } from "@/components/button";
import { motion } from "framer-motion";

import { FloatingImg } from "./floatingImg";

interface SectionRefs {
  intro: React.RefObject<HTMLDivElement>;
  skills: React.RefObject<HTMLDivElement>;
  workx: React.RefObject<HTMLDivElement>;
  projects: React.RefObject<HTMLDivElement>;
}

type ScrollAction = (section: keyof SectionRefs) => void;

interface IntroductionProps {
  sectionRefs: SectionRefs;
  scrollAction: ScrollAction;
}


export const Introduction: React.FC<IntroductionProps>  = ({scrollAction, sectionRefs})=>{


    return (

        <section ref={sectionRefs.intro} className="w-full  flex  font-mono flex-wrap ">

            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-wrap lg:mx-auto  gap-10  w-full justify-evenly items-start">

                  <div className="flex flex-col gap-5">


                      <div className=" text-cyan-400 text-4xl">Raj Kishan Cherukuru</div>
                      <div className="text-3xl text-green-400">Code Magician.</div>

                        <div className="text-3xl text-green-400">Crafting Spells with Code.</div>

                      <div className="flex flex-row gap-4 text-xl">
                          <button onClick={()=>scrollAction("workx")} className="p-3 border-purple-400 border text-purple-400 bg-black hover:bg-purple-500 hover:text-black font-bold   rounded-2xl">My Work</button>
                          <button onClick={()=> scrollAction("projects")} className="p-3 border-purple-400 border text-purple-400 bg-black hover:bg-purple-500 hover:text-black font-bold   rounded-2xl">Projects</button>
                      </div>

                      <div className="flex flex-row gap-4 items-center">
                              <div className="flex flex-col gap-3 justify-center items-center">
                                <hr className="bg-purple-700 w-1 h-14"/>
                                <a href="https://www.linkedin.com/in/raj-cherukuru/" target="_blank"> <FaLinkedin size={30} className=""/></a>
                                <a href="https://github.com/RajCherukuru" target="blank"><FaGithub size={30} className=" " /></a>
                                
                              </div>


                              <TypeAnimate></TypeAnimate>
                              {/* <div className="w-[300px] font-mono italic text-sm leading-7">
                                I&apos;m a professional Software Developer. I love to code and I love to create. Finished my Masters from Arizona State University, actively looking for full-time opportunities.
                              </div> */}
                        </div>
                              

                  </div>

                  <FloatingImg></FloatingImg>


            </div>

        

        </section>
    )
}