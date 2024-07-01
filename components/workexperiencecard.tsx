import { motion } from "framer-motion";
import React from "react";

interface workprops{
    work:{
        country: string,
    startDate: string,
    endDate:string,
    company: string,
    role:string,
    desc:string[],
    skills:string
    }
}





export const Workexperiencecard: React.FC<workprops> = ({work})=>{


    const {country, startDate, endDate, company, role, desc, skills}= work;


     return (

        <motion.div initial={{scale:0.5}} whileInView={{scale:1}} className="w-6/12 mx-auto flex flex-col gap-10  rounded-3xl p-8 border-t-2 border-l-2 border-e-8 border-b-8 border-purple-600 ">


            <div className="flex flex-row justify-between">
                <div className="">Raj Here</div>

                <div className="flex flex-row gap-4 ">
                    <div>{country}</div>
                    <div>.</div>
                    <div>{startDate}</div>
                    <div>-</div>
                    <div>{endDate}</div>
                </div>
            </div>



            <div>{company}</div>

            <div>{role}</div>

            <ul>
                {
                    desc.map((d, index) =>(
                        <li key={index}>{d}</li>
                    ))
                }
            </ul>

            <div>{skills}</div>

            


        </motion.div>
     )
}