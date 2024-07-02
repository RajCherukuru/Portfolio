import React from "react";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const Footer = ()=>{

    return (
        <div className="flex flex-row justify-between items-center border-t p-20 ">
            <div className="flex flex-row gap-5">
            <a href="https://www.linkedin.com/in/raj-cherukuru/" target="_blank"> <FaLinkedin size={40} className=""/></a>
            <a href="https://github.com/RajCherukuru" target="blank"><FaGithub size={40} className=" " /></a>
            </div>

            <div className="text-3xl text-purple-300">Made with Love, Raj Cherukuru</div>
        </div>
    )
}