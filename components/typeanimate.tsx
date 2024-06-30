"use client"


import React from "react";
import { TypeAnimation } from 'react-type-animation';


export const TypeAnimate= ()=>{

    return (
        <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'I am a full stack developer.',
                      3000, // wait 1s before replacing "Mice" with "Hamsters"
                      'I am a Devops Engineer.',
                      1000,
                    ]}
                    wrapper="span"
                    speed={15}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                  />
    )

}