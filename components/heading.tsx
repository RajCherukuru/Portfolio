import { motion } from "framer-motion";
import React from "react";


export const Heading= (props:{heading: string})=>{


    const heading= props.heading;

    return (
        <div className="flex ">

            <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}}  className="text-4xl text-purple-400"> {'<'} </motion.div>
            <motion.div initial={{opacity:0, scale:0.5}} whileInView={{opacity:1, scale:1}} className="text-4xl font-bold text-cyan-400">{heading}</motion.div>
            <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} className="text-4xl text-purple-400"> {' />'} </motion.div>

        </div>
    )
}