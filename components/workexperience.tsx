import React from "react";
import { Workexperiencecard } from "./workexperiencecard";
import { Heading } from "./heading";

interface SectionRefs {
    workx: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    intro: React.RefObject<HTMLDivElement>;
  
  }

type ScrollAction = (section: keyof SectionRefs) => void;

interface WorkexperienceProps {
  sectionRefs: SectionRefs;
  scrollAction: ScrollAction;
}

export const Workexperience: React.FC<WorkexperienceProps> = ({ sectionRefs, scrollAction }) => {
  const workx = [
    {
      country: "US",
      startDate: "July 2024",
      endDate: "Present",
      company: "Radiance",
      role: "Software Developer",
      desc: [
        "Created a dynamic video news platform featuring an AI-powered virtual anchor capable of narrating real-time headlines, laying the groundwork for expressive, talking characters.",
        "Leveraged tools like Runway for video synthesis and Midjourney for asset generation, enabling rapid prototyping of visual and character-driven content.",
        "Built scalable video delivery pipelines and interactive interfaces, demonstrating the ability to ship end-to-end video applications fast — a key asset for a founding engineer in the AI video space."
      ],
      skills: "TypeScript, Next.js, Midjourney, Runway",
    },
    {
      country: "US",
      startDate: "Nov 2023",
      endDate: "May 2024",
      company: "Arizona State University",
      role: "Software Developer",
      desc: [
        "Developed a full-stack faculty evaluation application using React, Express.js, and MongoDB, enabling daily use by 1,000+ faculty members within a 10-week timeline.",
        "Engineered an efficient RESTful API to streamline data exchange and support thousands of transactions. Diagnosed, documented, and fixed 30+ major backend issues.",
        "Built an LLM-powered chatbot using OpenAI, LangChain, and FAISS, improving response accuracy by 40% and enabling 24/7 support for online students.",
        "Reduced evaluation time by 30% across 4 departments, resulting in successful integration into Arizona State University’s production environment."
      ],
      skills: "Langchain, FAISS, Open AI, Javascript, Node.js, Express.js, Mongodb,",
    },
    {
      country: "India",
      startDate: "May 2020",
      endDate: "July 2022",
      company: "Agastha Software Pvt Ltd",
      role: "Software Developer",
      desc: [
        "Developed and deployed a high-availability, customizable dashboard using Java, Spring Boot, and Hibernate, supporting 3+ user types and improving task efficiency by 40% across healthcare operations.",
        "Redesigned the database schema and indexing strategy to summarize patient health records efficiently, increasing data retrieval throughput by 60%.",
        "Implemented and managed CI/CD pipelines with Jenkins, automating deployments for vital healthcare applications and cutting manual efforts and deployment errors by 50%.",
        "Designed and launched key EHR mobile features using React Native, including real-time alerts, QR check-ins, and offline access, increasing user engagement by 50% and reducing no-shows by 30%.", 
        "Collaborated in Agile development using DevOps workflows and Scrum ceremonies, promoting team alignment and driving efficient software delivery."
      ],
      skills: "Java, SpringBoot, Hibernate, CI/CD, Jenkins, React Native",
    },
  ];

  return (
    <div ref={sectionRefs.workx} className="flex flex-col items-center gap-20">
      <Heading heading="Work Experience"></Heading>

      <div className="w-full flex flex-col gap-20">
        {workx.map((work, index) => (
          <Workexperiencecard key={index} work={work}></Workexperiencecard>
        ))}
      </div>
    </div>
  );
};
