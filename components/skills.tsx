

import React from "react";
import { Skillstab } from "./skilltab";





export const Skills= ()=>{


    const skills1 = [
        { name: "JavaScript", url: "dfdfdfd" },
        { name: "Python", url: "dfdfdfd" },
        { name: "C", url: "dfdfdfd" },
        { name: "C++", url: "dfdfdfd" }
    ];
    
    const skills2 = [
        { name: "Typescript", url: "dfdfdfd" },
        { name: "React.js", url: "dfdfdfd" },
        { name: "Node.js", url: "dfdfdfd" },
        { name: "Next.js", url: "dfdfdfd" }
    ];
    
    const skills3 = [
        { name: "Redux", url: "dfdfdfd" },
        { name: "Recoil", url: "dfdfdfd" },
        { name: "flask", url: "dfdfdfd" }
    ];
    
    const skills4 = [
        { name: "MongoDB", url: "dfdfdfd" },
        { name: "Redis", url: "dfdfdfd" },
        { name: "PostgreSQL", url: "dfdfdfd" }
    ];
    
    const skills5 = [
        { name: "CI/CD", url: "dfdfdfd" },
        { name: "Jenkins", url: "dfdfdfd" }
    ];
    
    const skills6 = [
        { name: "Ansible", url: "dfdfdfd" },
        { name: "Kubernetes", url: "dfdfdfd" }
    ];
    
    const skills7 = [
        { name: "more", url: "dfdfdfd" }
    ];
    


    return (
       <div className="flex flex-col gap-10 items-center">

        <div className="text-5xl font-bold">Skills</div>


            <div className="grid grid-cols-4 w-3/4 mx-auto">  
                    {
                        skills1.map((skill1, index) =>(
                            <Skillstab name={skill1.name} url={skill1.url}></Skillstab>
                        ))
                    }
            </div>

            <div className="grid grid-cols-4 w-8/12 mx-auto">  
                    {
                        skills2.map((skill1, index) =>(
                            <Skillstab name={skill1.name} url={skill1.url}></Skillstab>
                        ))
                    }
            </div>

            <div className="grid grid-cols-3 w-7/12 mx-auto">  
                    {
                        skills3.map((skill1, index) =>(
                            <Skillstab name={skill1.name} url={skill1.url}></Skillstab>
                        ))
                    }
            </div>

            <div className="grid grid-cols-3 w-6/12 mx-auto">  
                    {
                        skills4.map((skill1, index) =>(
                            <Skillstab name={skill1.name} url={skill1.url}></Skillstab>
                        ))
                    }
            </div>

            <div className="grid grid-cols-2 w-5/12 mx-auto">  
                    {
                        skills5.map((skill1, index) =>(
                            <Skillstab name={skill1.name} url={skill1.url}></Skillstab>
                        ))
                    }
            </div>
            <div className="grid grid-cols-2 w-4/12 mx-auto">  
                    {
                        skills6.map((skill1, index) =>(
                            <Skillstab name={skill1.name} url={skill1.url}></Skillstab>
                        ))
                    }
            </div>
            <div className="grid grid-cols-1 mx-auto">  
                    {
                        skills7.map((skill1, index) =>(
                            <Skillstab name={skill1.name} url={skill1.url}></Skillstab>
                        ))
                    }
            </div>




       </div>
    )
}