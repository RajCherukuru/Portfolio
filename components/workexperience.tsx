
import React from "react";
import { Workexperiencecard } from "./workexperiencecard";
import { Heading } from "./heading";


export const Workexperience= ()=>{


    const workx= [
        {
            country: "India",
            startDate: "May 2024",
            endDate:"present",
            company: "Asu",
            role:"software engineer",
            desc:[
                
                "build my owj proejct build my owj proejct build my owj proejct build my owj proejct",
                "this i s2nd point build my owj proejct build my owj proejct build my owj proejct"
                
            ],
            skills:"Javascript, Typescirpt, Python"

        },
        {
            country: "India",
            startDate: "May 2024",
            endDate:"present",
            company: "Asu",
            role:"software engineer",
            desc:[
                
                "build my owj proejct build my owj proejct build my owj proejct build my owj proejct",
                "this i s2nd point build my owj proejct build my owj proejct build my owj proejct"
                
            ],
            skills:"Javascript, Typescirpt, Python"

        },
        {
            country: "India",
            startDate: "May 2024",
            endDate:"present",
            company: "Asu",
            role:"software engineer",
            desc:[
                
                "build my owj proejct build my owj proejct build my owj proejct build my owj proejct",
                "this i s2nd point build my owj proejct build my owj proejct build my owj proejct"
                
            ],
            skills:"Javascript, Typescirpt, Python"

        },

    ]

    return (

        <div className="flex flex-col items-center gap-20 ">

            <Heading heading="Work Experience"></Heading>

            <div className="w-full flex flex-col gap-20">

                {
                    workx.map((work, index) =>(
                        <Workexperiencecard key={index} work={work}></Workexperiencecard>
                    ))
                }
            

            </div>
        </div>


        
    )
}