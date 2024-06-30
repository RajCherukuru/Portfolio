import { motion } from "framer-motion";
import { Card } from "./card";
import { Heading } from "./heading";





const  Projects = ()=>{

    const projects=[
        {
            title:"project1",
            desc:"A learning management system, where users can create or enroll for courses. Has a robust admin panel and progress tracking functionality for each course.",
            skills:["REACT", "TAILWIND"]

        },
        {
            title:"project1",
            desc:"A learning management system, where users can create or enroll for courses. Has a robust admin panel and progress tracking functionality for each course.",
            skills:["REACT", "TAILWIND"]

        },
        {
            title:"project1",
            desc:"A learning management system, where users can create or enroll for courses. Has a robust admin panel and progress tracking functionality for each course.",
            skills:["REACT", "TAILWIND"]

        },


    ]

    return (
        <div className="flex flex-col items-center gap-10">

            <Heading heading="Projects"></Heading>

            <div className="flex flex-col gap-8">
                {
                    projects.map((project, index)=>(
                        <Card key={index} title={project.title} desc={project.desc} skills={project.skills}></Card>
                    ))
                }
            </div>



        </div>
    )
}

export default Projects