import { FlipWords } from "./FlipWords"
import { motion } from "framer-motion";
const words = ["Building the future",
"Building AI that learns",
"Building systems that scale",
"Building designs that inspire",
"Building Code that performs",
"Building tools that empower"];


const HeroText = () => {
  return (
    <div className="inset-y-35 z-10 mt-20 text-center md:mt-40 md:text-center absolute inset-0 bg-clip-text"> 
       {/*Desktop View*/}
       <div className="hidden md:flex flex-col c-space position-relative space-y-6 mt-10"> 
            <motion.h1 initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ maxHeight:"100vh" }} className="text-4xl font-medium text-white">Hi, I'm Jude!</motion.h1>
            <div className="flex flex-col">
                <motion.p initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 4 }} style={{ maxHeight:"100vh" }} className="text-5xl font-medium text-white text-center"> Dedicated to</motion.p>
            
                <div initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 5 }} style={{ maxHeight:"100vh" }}>
                <FlipWords className="font-black text-6xl text-white"words={words}/> 
                </div>

                <motion.p initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 5 }} style={{ maxHeight:"100vh" }} className="text-4xl font-medium text-neutral-300"> one line of code at a time.</motion.p>
            </div>

       </div>
        {/*Mobile View*/}
        <div className="flex- flex-col md:hidden space-y-6 mt-10">
            <motion.p initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ maxHeight:"100vh" }} className="text-4xl font-medium">
                Hi, I'm Jude!
            </motion.p>
            <div className="text-5xl font-black text-neutral-300">
                <span>Building </span>
                <motion.div initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ maxHeight:"100vh" }}>
                    <FlipWords className="font-black text-7xl text-white" words={words}/>
                </motion.div>
                <motion.span initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ maxHeight:"100vh" }} className="text-4xl font-black text-neutral-300"> web Applications</motion.span>
            </div>
        </div>
    </div>
  )
}

export default HeroText