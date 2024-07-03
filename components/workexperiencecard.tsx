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

        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}  initial={{scale:0.7}} whileInView={{scale:1}} className="relative w-8/12  mx-auto font-mono">

                <div className="absolute w-full h-full rounded-xl bg-purple-500 left-3 top-3 -z-10 ">
                        

                </div>

                <div className="w-full mx-auto flex flex-col gap-4 bg-black rounded-3xl p-5 border ">


                <div className="flex flex-row justify-between">
                    <div className=""></div>

                    <div className="flex flex-row gap-4 text-xl  text-green-400">
                        <div className="">{country}</div>
                        <div  className="">.</div>
                        <div  className="">{startDate}</div>
                        <div  className="">-</div>
                        <div  className="">{endDate}</div>
                    </div>
                </div>



                <div className="text-3xl text-yellow-400">{company}</div>

                <div  className="text-2xl text-purple-300">{role}</div>

                <ul className="list-disc list-inside text-sm font-sans ">
                    {
                        desc.map((d, index) =>(
                            <li key={index}>{d}</li>
                        ))
                    }
                </ul>

                <div className="text-lg  text-cyan-400 ">{skills}</div>

                


            </div>
        </motion.div>

     )
}