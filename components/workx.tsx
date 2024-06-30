"use client"
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Heading } from "./heading";


export const Workx= ()=>{

    const paragraph=[
        "GSA @ ASU  Statistical Machine Learning, Information Assurance and Security, Data Processing at Scale, Knowledge Representation and Reasoning, Human Computer Interaction, Data Mining, Mobile Computing, Software Verification Validation and Testing, Semantic Web Mining, Cloud Computing",
        "Software engineer @ ASU  Statistical Machine Learning, Information Assurance and Security, Data Processing at Scale, Knowledge Representation and Reasoning, Human Computer Interaction, Data Mining, Mobile Computing, Software Verification Validation and Testing, Semantic Web Mining, Cloud Computing",
        "software engineer intern Science @ ASU  Statistical Machine Learning, Information Assurance and Security, Data Processing at Scale, Knowledge Representation and Reasoning, Human Computer Interaction, Data Mining, Mobile Computing, Software Verification Validation and Testing, Semantic Web Mining, Cloud Computing",
    ]


    const [para, setPara]= useState(paragraph[0]);

    function buttonHanlder(value: string){
        if(value=="gsa"){
            setPara(paragraph[0]);
        }
        else  if(value=="agastha software"){
            setPara(paragraph[1]);
        }
        else  if(value=="agastha internship"){
            setPara(paragraph[2]);
        }

    }




    return (

        <div className="flex flex-col gap-4 items-center">


                <Heading heading="Work Experience"></Heading>
            

            <div className="w-6/12 mx-auto flex flex-col gap-4 items-center justify-center">

                    <div className="flex flex-row w-full justify-evenly ">
                        <button className="p-3 bg-purple-600 text-white font-bold text-2xl rounded-2xl"  onClick={()=>{buttonHanlder("gsa")}}>gsa</button>
                        <button className="p-3 bg-purple-600 text-white font-bold text-2xl rounded-2xl" onClick={()=>{buttonHanlder("agastha software")}} >agastha software</button>
                        <button className="p-3 bg-purple-600 text-white font-bold text-2xl rounded-2xl" onClick={()=>{buttonHanlder("agastha internship")}} >agastha internship</button>
                    </div>


                    <div className="w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={para}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {para}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

        </div>
    )
}