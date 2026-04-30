import { myProjects } from "../constants";
import ProjectCard from "../components/ProjectCard";

const AllProjects = () => {
  const handleBackClick = () => {
    window.location.hash = '';
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="relative c-space section-spacing pt-20">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-heading">All Projects</h1>
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer"
          >
            Back
            <img src="assets/arrow-up.svg" className="w-4 rotate-180" alt="back" />
          </button>
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-12" />

        {/* Grid Layout - E-commerce Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
