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
      startDate: "Nov 2023",
      endDate: "May 2024",
      company: "Arizona State University",
      role: "Software Developer",
      desc: [
        "Developed a faculty evaluation application using the MERN stack within a 10-week time frame, facilitating daily use by over 100 faculty members.",
        "Facilitated a 50% reduction in evaluation time for 2 departments, optimizing efficiency and streamlining the evaluation process.",
        "Built a video analytics website that categorizes videos by location, fetching them from Amazon S3, and displaying total likes, shares, and video count for each category.",
      ],
      skills: "Javascript, Node.js, Express.js, Mongodb, Nodemailer, Cloudinary, Mongoose",
    },
    {
      country: "India",
      startDate: "June 2021",
      endDate: "July 2022",
      company: "Agastha Software Pvt Ltd",
      role: "Software Developer",
      desc: [
        "Led a 5-member team to migrate a multi-application system into a monorepo, developing shared UI components and PostgreSQL database to enhance code management and collaboration.",
        "Implemented Next.js with server actions, boosting efficiency by 25% and cutting page reload time by 3 seconds.",
        "Created a set of microservices using AWS Lambda and Amazon API Gateway that empowered 150 healthcare professionals, rising their efficiency by 20%.",
      ],
      skills: "Typescript, PostgresSQL, Next.js, AWS Lambda, Terraform",
    },
    {
      country: "India",
      startDate: "Feb 2021",
      endDate: "June 2021",
      company: "Agastha Software Pvt Ltd",
      role: "Software Developer Intern",
      desc: [
        "Employed Zod for request data validation, achieving a 30% reduction in data-related errors ensuring data integrity.",
        "Designed and maintained CI/CD pipelines using Jenkins, automating the deployment of critical healthcare applications,resulting in a 50% reduction in manual intervention and deployment errors.",
      ],
      skills: "Zod, CI/CD, Jenkins",
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
