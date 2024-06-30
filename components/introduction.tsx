import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { TypeAnimate } from "@/components/typeanimate";
import { Button } from "@/components/button";


export const Introduction = ()=>{
    return (
        <section className="flex justify-evenly">

        <div className="flex flex-col gap-10">

            <div className=" text-purple-700 text-5xl">Raj Cherukuru</div>
            <TypeAnimate></TypeAnimate>

            <div className="flex flex-row gap-4">
              <Button text="Work Exp"></Button>
              <Button text="Projects"></Button>
            </div>

            <div className="flex flex-row gap-4 items-center">
                <div className="flex flex-col gap-3 justify-center items-center">
                  <hr className="bg-purple-700 w-1 h-14"/>
                  <FaLinkedin size={40} className=""/>
                  <FaGithub size={40} className=" " />
                </div>
                <div className="w-[300px] font-mono italic leading-9">
                  Hi, I'm Raj Cherukuru. I'm a 25 yrs old Full Stack Developer.I love to code and I love to create. I'm a creative thinker and I love to solve problems.
                </div>
            </div>

        </div>

        <img height="600" width="500" className="rounded-lg" src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1"/>

     </section>
    )
}