import { motion } from "framer-motion";
import { Card } from "./card";
import { Heading } from "./heading";

interface SectionRefs {
    workx: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    intro: React.RefObject<HTMLDivElement>;
  
  }
  
  interface Projects {
    sectionRefs: SectionRefs;}



const  Projects: React.FC<Projects>  = ({sectionRefs})=>{

    const projects=[
        {
            title:"StudyNotion",
            desc:"StudyNotion is an innovative and dynamic EdTech platform designed to revolutionize the way students learn and instructors teach. Students can purchase courses seamlessly through Razorpay, while instructors have the flexibility to create and structure their courses with ease.",
            skills:"Express.js, Mongoose ODM, Node.js, Tailwind CSS, MongoDB"

        },
        {
            title:"CloudVisage",
            desc:"Cloud Visage is an advanced image recognition application featuring a auto scalable web tier and also an app-tier. The web tier sends the images to SQS and the app tier stores the final result in S3 bucket.",
            skills:"Flask, AWS, DevOps"

        },
        {
            title:"FinConnect",
            desc:"FinConnect is a robust financial application enabling users to send money to banks  where transactions are validated and processed. Additionally, the application supports peer-to-peer money transfers within the platform.",
            skills:"Prisma ORM, Docker, CI/CD, NextAuth, Recoil, Next.js, TypeScript, PostgreSQL"

        },


    ]

    return (
        <div ref={sectionRefs.projects} className="flex flex-col items-center gap-10 w-10/12 mx-auto">

            <Heading heading="Projects"></Heading>

            <div className="grid grid-cols-2 gap-20">
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