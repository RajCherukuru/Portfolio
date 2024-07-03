"use client"
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image"; 



export const FloatingImg= ()=>{
    return (
        <motion.div
            className="relative border border-4 rounded-3xl border-yellow-400"
            animate={{ y: [0, -20, 0] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            }}
        >
            <Image 
                className="rounded-3xl"
                src="/photo.jpg" 
                alt="Description of Photo" 
                width={300} 
                height={300} 
            />
        </motion.div>
    )
}