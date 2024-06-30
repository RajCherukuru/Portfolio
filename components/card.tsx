import { motion, useViewportScroll, useTransform, spring } from "framer-motion";
import React from "react";





export const Card = (props:{title: string, desc: string, skills:string[]})=>{

    // const {scrollYProgress}= useViewportScroll();
    // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);



    const title=props.title;
    const desc= props.desc;
    const skills= props.skills

    return (
        <motion.div 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        initial={{ opacity: 0}}
        animate={{ type: spring}}
        transition={{ duration: 0.5 }}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
       
         className="flex flex-row justify-center gap-16 items-center rounded-3xl border-purple-700 border-b-8 border-r-8 ">

            <div className="flex flex-col gap-16">

                <div className="flex flex-col gap-4">
                    <div>{title}</div>
                    <div className="w-96">{desc}</div>
                </div>


                <div className="flex gap-3 ">

                    {
                        skills.map((skill, index)=>(
                            <div className="uppercase" key={index}>{skill}</div>
                        ))
                    }

                </div>


               
            </div>

            <img height="600" width="500" className="rounded-lg" src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1"/>



        </motion.div>
    )
}