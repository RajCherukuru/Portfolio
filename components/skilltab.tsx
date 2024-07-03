import { motion } from "framer-motion";
import React from "react";

interface SkillstabProps {
    name: string;
    url: string;
    color: string;
    icon: React.ReactNode;
}

export const Skillstab: React.FC<SkillstabProps> = ({ name, url, color, icon }) => {
    return (
        <motion.div 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            className="relative "
        >
            <div  className={`absolute left-2 top-2 z-10  w-40 h-full ${color} rounded-lg`}>fd </div>

            <div className=" relative z-20  flex flex-row gap-2 items-center justify-center bg-black p-4 rounded-xl border-white border-2 w-40 ">
                {icon}
                <div>{name}</div>
            </div>
        </motion.div>
    );
}
