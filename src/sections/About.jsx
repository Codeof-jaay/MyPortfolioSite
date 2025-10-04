import { useRef } from "react"
import Cards from "../components/Cards"
import { Globe } from "../components/Globe";
import CompyEmailButton from "../components/CompyEmailButton";
import {Framework} from "../components/Framework";

export const About = () => {
    const grid2Container = useRef();
  return (
    <section className='c-space section-spacing' id="about" >
      <h2 className='text-heading'>About Me</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
            <img src="assets/coding-pov.png" 
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />

            <div className="z-10">
                <p className="headtext">Hi, I'm Jude Anyanwu</p>
                <p className="subtext">
                Over the last 4 years, I developed my frontend and backend dev
                skills to deliver dynamic and software and web applications.
                </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>


        </div>
         {/* Grid 2 */}
        <div ref={grid2Container} className="flex items-end grid-default-color grid-2">
            <div className="flex items-center justify-center w-full h-full">
                <p className="flex items-end text-5xl text-gray-500"> 
                    Code is craft
                </p>
                <Cards containerRef={grid2Container} style={{rotate:"66deg",  top:"30%", left:"27%"}} text="GRASP"/>
                <Cards containerRef={grid2Container} style={{rotate:"-30deg",  top:"60%", left:"45%"}} text="SOLID"/>
                <Cards containerRef={grid2Container} style={{rotate:"90deg",  top:"30%", left:"70%"}} text="DESIGN PRINCIPLES"/>
                <Cards containerRef={grid2Container} style={{rotate:"45deg",  top:"55%", left:"0%"}} text="DESIGN PATTERNS"/>
                <Cards containerRef={grid2Container} style={{rotate:"20deg",  top:"10%", left:"38%"}} text="SRP"/>

                <Cards containerRef={grid2Container} style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/csharp-pink.png"/>
                <Cards containerRef={grid2Container} style={{ rotate: "-20deg", top: "70%", left: "25%" }} image="assets/logos/blazor-pink.png" />
                <Cards containerRef={grid2Container} style={{ rotate: "10deg", top: "5%", left: "10%" }} image="assets/logos/dotnet-pink.png" />
               </div>
        </div>
         {/* Grid 3 */}
        <div className="flex items-start grid-black-color grid-3">
            <div className="z-10 w-[50%]">
                <p className="headtext">Time Zone</p>
                <p className="subtext">
                I'm based in Mars, and open to remote work worldwide
                </p>
            </div>
            <figure className="absolute left-[30%] top-[10%]"> 
                <Globe />
            </figure>

        </div>
         {/* Grid 4 */}
        <div className="flex grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className="headtext text-center">do you want to build with me? <br/> Let's Connect</p>
                 <CompyEmailButton />
            </div>
        </div>
         {/* Grid 5 */}
        <div className="flex items-end grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext"> I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications </p> 
          </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full left-[50%] md:scale-125">
            <Framework />
          </div>
        </div>
      </div>
      <p className='max-w-2xl text-lg mb-6'>
        I'm a passionate developer with experience in building web applications using modern technologies. I love creating beautiful and functional user experiences.
       
      </p>
      <a href="#contact" className='px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Contact Me</a>
    </section>
  )
}
