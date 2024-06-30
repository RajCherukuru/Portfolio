import { motion } from "framer-motion";
import React from "react";


export const Skillstab= (props:{name: string, url:string})=>{

    const name=props.name;
    const url=props.url;



    return (
        <motion.div  whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        transition={{
            duration: 0.1,
            scale: {
              type: "spring",
            }
          }}

          initial={{ opacity: 0, y: 50, scale: 0.3 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}

         className="flex flex-row gap-3 items-center justify-center p-3 rounded-3xl border-purple-700 border-b-8 border-r-8 w-60">
            <img src={url}/>
            <div>{name}</div>
        </motion.div>
    )
}