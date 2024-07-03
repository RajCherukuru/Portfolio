"use client"


import React from "react";
import { TypeAnimation } from 'react-type-animation';


export const TypeAnimate= ()=>{

    return (
        <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Crafting Spells with Typescript.',
                      2000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Crafting Spells with Next.js.',
                      2000,
                      'Crafting Spells with Recoil.',
                      2000,
                      'Crafting Spells with PostgresSQL.',
                      2000,
                      'Crafting Spells with AWS.',
                      2000,
                      'Crafting Spells with Kubernetes.',
                      2000,
                    ]}
                    wrapper="span"
                    speed={15}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                    className="text-green-400 text-2xl"
                  />
    )

}