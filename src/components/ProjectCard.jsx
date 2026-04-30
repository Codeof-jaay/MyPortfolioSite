import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const ProjectCard = ({ title, tags, description, subDescription, href, image }) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 cursor-pointer">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden bg-black">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-64 justify-between">
          {/* Title and Tags */}
          <div>
            <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-neutral-200 transition-colors">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag.id}
                  className="text-xs px-2 py-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors text-white/70"
                >
                  {tag.name}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-white/60 line-clamp-2 mb-4">
            {description}
          </p>

          {/* Button */}
          <button
            onClick={() => setIsHidden(true)}
            className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group/btn"
          >
            View Details
            <img
              src="assets/arrow-right.svg"
              className="w-4 group-hover/btn:translate-x-1 transition-transform"
              alt="arrow"
            />
          </button>
        </div>
      </div>

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          image={image}
          subDescription={subDescription}
          href={href}
          tags={tags}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
