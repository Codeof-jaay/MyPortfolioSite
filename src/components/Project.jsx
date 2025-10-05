import React from 'react'
import ProjectDetails from './ProjectDetails'
import { useState } from 'react'


const Project = ({ title, tags , description ,subDescription, href, image}) => {
    const [isHidden, setIsHidden] = useState(false);
    return (
        <>
        <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
            <div>
                <p className='text-2xl font-bold'>
                    {title}
                </p>
                <div className='gap-5 mt-2 flex text-sand'>
                    {tags.map((tag, idx) => (
                        <span key={tag.id} className='text-lg'>{tag.name}</span>
                    ))}
                </div>
            </div>
            <button onClick={() => setIsHidden(true)} className="flex items-center gap-1 cursor-pointer hover-animation">
                    Read More
                <img src="assets/arrow-right.svg" className='w-5'/>
            </button>
            <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full ' />
        {isHidden && (
            <ProjectDetails title={title} description={description} image={image} subDescription={subDescription} href={href} tags={tags} closeModal={() => setIsHidden(false)} />

        )}
        </div>
        </>
    )
}

export default Project