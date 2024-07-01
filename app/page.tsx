"use client"
import Navbar from "@/components/navbar";
import { Button } from "@/components/button";
import { Introduction } from "@/components/introduction";

import { motion, useScroll } from "framer-motion"
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";
import { Workx } from "@/components/workx";
import { Workexperience } from "@/components/workexperience";


export default function Home() {


  return (


    <div className="w-screen h-screen overflow-auto flex flex-col">


        <div className="w-10/12 h-full mx-auto flex flex-col gap-60">
            

            <Navbar/>

            <Introduction></Introduction>

            <Skills></Skills>

            <Workexperience></Workexperience>

            <Projects></Projects>

            <Workx></Workx>

         
        </div>

    </div>
  );
}
