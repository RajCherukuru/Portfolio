"use client"


import React from "react";
import { TypeAnimation } from 'react-type-animation';


export const TypeAnimate= ()=>{

    return (
        <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'I am a professional Software Developer. I love to code and I love to create. Finished my Masters from Arizona State University, actively looking for full-time opportunities.',
                      2000, // wait 1s before replacing "Mice" with "Hamsters"
                      
                    ]}
                    wrapper="span"
                    speed={15}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                    className="text-green-400 w-[300px] font-mono italic text-sm leading-7"
                  />
    )

}