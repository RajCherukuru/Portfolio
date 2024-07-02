"use client"


import React from "react";
import { TypeAnimation } from 'react-type-animation';


export const TypeAnimate= ()=>{

    return (
        <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Weaving Spells with Typescript.',
                      2000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Weaving Spells with Next.js.',
                      2000,
                      'Weaving Spells with Recoil.',
                      2000,
                      'Weaving Spells with PostgresSQL.',
                      2000,
                      'Weaving Spells with AWS.',
                      2000,
                      'Weaving Spells with Kubernetes.',
                      2000,
                    ]}
                    wrapper="span"
                    speed={15}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                    className="text-green-400"
                  />
    )

}