import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';


import { TypeAnimate } from "@/components/typeanimate";
import { Button } from "@/components/button";
import { motion } from "framer-motion";

import { FloatingImg } from "./floatingImg";

export const Introduction = ({scrollAction, sectionRefs})=>{


    return (

        <section ref={sectionRefs.intro} className="w-full flex  font-mono ">

            <div className="flex flex-row gap-10 mx-auto w-full justify-evenly items-start">

                  <div className="flex flex-col gap-8">


                      <div className=" text-cyan-400 text-5xl">Raj Kishan Cherukuru</div>
                      <div className="text-4xl text-green-400">Code Magician.</div>
                      <TypeAnimate></TypeAnimate>

                      <div className="flex flex-row gap-4">
                          <button onClick={()=>scrollAction("workx")} className="p-3 border-purple-400 border text-purple-400 bg-black hover:bg-purple-500 hover:text-black font-bold  text-2xl rounded-2xl">My Work</button>
                          <button onClick={()=> scrollAction("projects")} className="p-3 border-purple-400 border text-purple-400 bg-black hover:bg-purple-500 hover:text-black font-bold  text-2xl rounded-2xl">Projects</button>
                      </div>

                      <div className="flex flex-row gap-4 items-center">
                              <div className="flex flex-col gap-3 justify-center items-center">
                                <hr className="bg-purple-700 w-1 h-14"/>
                                <a href="https://www.linkedin.com/in/raj-cherukuru/" target="_blank"> <FaLinkedin size={40} className=""/></a>
                                <a href="https://github.com/RajCherukuru" target="blank"><FaGithub size={40} className=" " /></a>
                                
                              </div>
                              <div className="w-[300px] font-mono italic leading-9">
                                I'm a professional Software Developer. I love to code and I love to create. Finished my Masters from Arizona State University, actively looking for full-time opportunities.
                              </div>
                        </div>
                              

                  </div>

                  <FloatingImg></FloatingImg>


            </div>

        

        </section>
    )
}