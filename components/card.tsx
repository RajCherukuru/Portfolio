import { motion, useViewportScroll, useTransform, spring } from "framer-motion";
import React from "react";


import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";



export const Card = (props:{title: string, desc: string, skills:string})=>{

    // const {scrollYProgress}= useViewportScroll();
    // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);



    const title=props.title;
    const desc= props.desc;
    const skills= props.skills

    return (
        <motion.div whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{scale:0.7, opacity: 0}}
        whileInView={{ scale:1 , opacity: 1}} className="relative w-full mx-auto font-mono">


            <div className="absolute w-full h-full bg-purple-400 left-3 top-3 -z-10 rounded-xl ">
                dfd
            </div>

            {/* <div className="flex flex-col justify-between items-center w-full h-full gap-16 items-center rounded-3xl bg-black border-white border p-10 "> */}

                    <div className="flex flex-col gap-16 bg-black border-white border p-10 rounded-3xl w-full h-full justify-between ">

                        <div className="flex flex-col gap-4">

                            <div className="flex justify-between">
                                <div className="text-4xl text-yellow-400">{title}</div>
                                <div className="flex gap-3">   
                                <a href="https://github.com/RajCherukuru" target="blank"><FaGithub size={40} className=" " /></a>
                                
                                {
                                    title=="StudyNotion" ?  <a href="https://github.com/RajCherukuru" target="blank"><CgWebsite size={40} className=" " /></a>: <div></div>
                                }
                               

                                </div>
                                

                            </div>
                           


                            <div className="w-96">{desc}</div>
                        </div>


                        <div className="text-xl  text-cyan-400 ">

                            {skills}

                        </div>


                    
                    {/* </div> */}

                    {/* <img    height="600" width="500" className="rounded-lg border-green-400 border-4" src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1"/> */}



                </div>
        </motion.div>
    )
}