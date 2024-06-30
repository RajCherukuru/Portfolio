"use client"
import Navbar from "@/components/navbar";
import { Button } from "@/components/button";
import { Introduction } from "@/components/introduction";

import { motion, useScroll } from "framer-motion"
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";


export default function Home() {


  return (


    <div className="w-screen h-screen overflow-auto flex">


        <div className="w-10/12 h-full mx-auto flex flex-col gap-40">
            

            <Navbar/>


            <Introduction></Introduction>

            <Skills></Skills>

          <Projects></Projects>
         
        </div>

    </div>
  );
}
