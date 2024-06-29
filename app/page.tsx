import Image from "next/image";


import Navbar from "@/components/navbar";
import { Button } from "@/components/button";



export default function Home() {
  return (
    <div className="w-screen h-screen overflow-auto flex">

        <div className="w-10/12 h-full mx-auto">


          <Navbar/>


          <section className="flex mt-5 justify-evenly bg-red-500">

              <div>

                  <div className="text-5xl">Raj Cherukuru</div>
                  <div className="text-3xl">I am a full stack developer</div>

                  <div className="flex flex-row gap-4">
                    <Button text="Work Exp"></Button>
                    <Button text="Projects"></Button>
                  </div>

                  <div className="flex flex-row gap-4">
                      <div>
                        icons
                      </div>
                      <div className="w-[200px]">
                        Hi, I'm Raj Cherukuru. I'm a 25 yrs old Full Stack Developer.I love to code and I love to create. I'm a creative thinker and I love to solve problems.
                      </div>
                  </div>

              </div>

              <img height="600" width="500" className="rounded-lg" src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1"/>
   
           </section>



        </div>




        
      

    </div>
  );
}
