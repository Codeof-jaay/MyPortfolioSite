import React from 'react'
import { mySocials } from '../constants'
const Footer = () => {
  return (
   <section className="flex flex-wrap items-center justify-between gap-5 pb-5 text-sm text-neutral-400 c-space ">
    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-4 h-[1px] w-full"/>

    <div className='flex gap-2'>
        <p>
            Terms and Conditions
        </p>
        <p>
            |
        </p>
        <p>
            Privacy Policy
        </p>
    </div>
    <div className='flex gap-5'>
        {mySocials.map((social, index) => (
            <a href={social.href} key={index} className='hover-animation'>
                <img src={social.icon} className='w-5 h-5' alt={social.name} />
            </a>
        ))}
    </div>
     <p>
            &copy; 2024 Jude Anyanwu. All rights reserved.
        </p>
        <p>
             Made with &#10084; in React  
        </p>
   </section>
  )
}

export default Footer