import React from "react";
import { Skillstab } from "./skilltab";
import { Heading } from "./heading";
import { SiJavascript, SiPython, SiCplusplus, SiTypescript, SiReact, SiNodedotjs, SiNextdotjs, SiRedux, SiRecoil, SiFlask, SiMongodb, SiRedis, SiPostgresql, SiJenkins, SiAnsible, SiKubernetes } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";


interface SectionRefs {
    workx: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    intro: React.RefObject<HTMLDivElement>;
  
  }
  
  interface Skills {
    sectionRefs: SectionRefs;}



export const Skills: React.FC<Skills> = ({sectionRefs}) => {

    const skills1 = [
        { name: "JavaScript", url: "", color: "bg-purple-400", icon: <SiJavascript className="h-8 w-8 text-white" /> },
        { name: "Python", url: "data:image/jpeg;base64,...", color: "bg-purple-400", icon: <SiPython className="h-8 w-8 text-white" /> },
        { name: "Java", url: "data:image/png;base64,...", color: "bg-purple-400", icon: <FaJava className="h-8 w-8 text-white" /> },
        { name: "C++", url: "data:image/png;base64,...", color: "bg-purple-400", icon: <SiCplusplus className="h-8 w-8 text-white" /> }
    ];

    const skills2 = [
        { name: "Typescript", url: "data:image/png;base64,...", color: "bg-blue-400", icon: <SiTypescript className="h-8 w-8 text-white" /> },
        { name: "React.js", url: "data:image/png;base64,...", color: "bg-blue-400", icon: <SiReact className="h-8 w-8 text-white" /> },
        { name: "Node.js", url: "dfdfdfd", color: "bg-blue-400", icon: <SiNodedotjs className="h-8 w-8 text-white" /> },
        { name: "Next.js", url: "dfdfdfd", color: "bg-blue-400", icon: <SiNextdotjs className="h-8 w-8 text-white" /> }
    ];

    const skills3 = [
        { name: "Redux", url: "dfdfdfd", color: "bg-green-400", icon: <SiRedux className="h-8 w-8 text-white" /> },
        { name: "Recoil", url: "dfdfdfd", color: "bg-green-400", icon: <SiRecoil className="h-8 w-8 text-white" /> },
        { name: "Flask", url: "dfdfdfd", color: "bg-green-400", icon: <SiFlask className="h-8 w-8 text-white" /> }
    ];

    const skills4 = [
        { name: "MongoDB", url: "dfdfdfd", color: "bg-yellow-400", icon: <SiMongodb className="h-8 w-8 text-white" /> },
        { name: "Redis", url: "dfdfdfd", color: "bg-yellow-400", icon: <SiRedis className="h-8 w-8 text-white" /> },
        { name: "PostgreSQL", url: "dfdfdfd", color: "bg-yellow-400", icon: <SiPostgresql className="h-8 w-8 text-white" /> }
    ];

    const skills5 = [
        { name: "CI/CD", url: "dfdfdfd", color: "bg-orange-400", icon: <SiCplusplus className="h-8 w-8 text-white" /> },
        { name: "Jenkins", url: "dfdfdfd", color: "bg-orange-400", icon: <SiJenkins className="h-8 w-8 text-white" /> }
    ];

    const skills6 = [
        { name: "Ansible", url: "dfdfdfd", color: "bg-orange-400", icon: <SiAnsible className="h-8 w-8 text-white" /> },
        { name: "Kubernetes", url: "dfdfdfd", color: "bg-orange-400", icon: <SiKubernetes className="h-8 w-8 text-white" /> }
    ];

    const skills7 = [
        { name: "more", url: "dfdfdfd", color: "bg-orange-400", icon: <HiCodeBracket className="h-8 w-8 text-white" /> }
    ];

    return (
        <section ref={sectionRefs.skills}>
            <div className="flex flex-col gap-10 items-center">
                <Heading heading="Skills" />
                <div className="grid grid-cols-4 w-3/4 mx-auto">
                    {skills1.map((skill, index) => (
                        <Skillstab key={index} name={skill.name} url={skill.url} color={skill.color} icon={skill.icon} />
                    ))}
                </div>
                <div className="grid grid-cols-4 w-8/12 mx-auto">
                    {skills2.map((skill, index) => (
                        <Skillstab key={index} name={skill.name} url={skill.url} color={skill.color} icon={skill.icon} />
                    ))}
                </div>
                <div className="grid grid-cols-3 w-7/12 mx-auto">
                    {skills3.map((skill, index) => (
                        <Skillstab key={index} name={skill.name} url={skill.url} color={skill.color} icon={skill.icon} />
                    ))}
                </div>
                <div className="grid grid-cols-3 w-6/12 mx-auto">
                    {skills4.map((skill, index) => (
                        <Skillstab key={index} name={skill.name} url={skill.url} color={skill.color} icon={skill.icon} />
                    ))}
                </div>
                <div className="grid grid-cols-2 w-4/12 mx-auto">
                    {skills6.map((skill, index) => (
                        <Skillstab key={index} name={skill.name} url={skill.url} color={skill.color} icon={skill.icon} />
                    ))}
                </div>
                <div className="grid grid-cols-1 mx-auto">
                    {skills7.map((skill, index) => (
                        <Skillstab key={index} name={skill.name} url={skill.url} color={skill.color} icon={skill.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
}
