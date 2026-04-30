import { myProjects } from "../constants"
import Project from "../components/Project"
import { useState } from "react"

const Projects = () => {
const featuredProjects = myProjects.slice(0, 3);

return (
    <section id="projects" className="relative c-space section-spacing">
        <h2 className="text-heading">Featured Projects</h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full " />
  { featuredProjects.map((project) => (
   <Project key={project.id} {...project} />
  ))}
    
    {/* See More Button */}
    <div className="flex justify-center mt-16 mb-8">
      <a href="#/all-projects" className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer group font-semibold text-white/80 hover:text-white">
        See All Projects
        <img src="assets/arrow-right.svg" className="w-5 group-hover:translate-x-1 transition-transform" alt="arrow" />
      </a>
    </div>
    </section>
  )
}

export default Projects