import React from "react";

interface SectionRefs {
    workx: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    intro: React.RefObject<HTMLDivElement>;
  
  }

type ScrollAction = (section: keyof SectionRefs) => void;

interface NavbarProps {
  scrollAction: ScrollAction;
}

const Navbar: React.FC<NavbarProps> = ({ scrollAction }) => {

  return (
    <div className="flex flex-row  justify-evenly w-1/2 lg:mx-auto  p-7 text-xl text-yellow-300 font-mono">

      <button onClick={()=> scrollAction("intro")} className="transform duration-300 hover:scale-150 p-4 rounded-2xl cursor-pointer">./</button>
      <button onClick={()=> scrollAction("skills")} className="transform duration-300 hover:scale-150 p-4 rounded-2xl cursor-pointer">Skills</button>

      <button
        onClick={() => scrollAction("workx")}
        className="transform duration-300 hover:scale-150 p-4 rounded-2xl cursor-pointer"
      >
        Work Experience
      </button>
      <button onClick={()=> scrollAction("projects")} className="transform duration-300 hover:scale-150 p-4 rounded-2xl cursor-pointer">Projects</button>
    </div>
  );
};

export default Navbar;
