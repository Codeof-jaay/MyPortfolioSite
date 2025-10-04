import { FlipWords } from "./FlipWords"
import { motion } from "framer-motion";
const words = ["Smart", "Productive", "Ethical"];
const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left bg-clip-text"> 
       {/*Desktop View*/}
       <div className="hidden md:flex flex-col c-space"> 
            <motion.h1 initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ maxHeight:"100vh" }} className="text-4xl font-medium text-white">Hi, I'm Jude!</motion.h1>
            <div className="flex flex-col items-start">
                <motion.p initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 4 }} style={{ maxHeight:"100vh" }} className="text-5xl font-medium text-neutral-300">  A dedicated Dev</motion.p>
            
            <div initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 5 }} style={{ maxHeight:"100vh" }}>
               <FlipWords className="font-black text-8xl text-white"words={words}/> 
            </div>

            <motion.p initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 5 }} style={{ maxHeight:"100vh" }} className="text-4xl font-medium text-neutral-300"> Web solutions </motion.p>
            </div>

       </div>
        {/*Mobile View*/}
        <div className="flex- flex-col md:hidden space-y-6 mt-10">
            <motion.p initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ maxHeight:"100vh" }} className="text-4xl font-medium">
                Hi, I'm Jude!
            </motion.p>
            <div>
                <p className="text-5xl font-black text-neutral-300">
                    Building 
                    <motion.div initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ maxHeight:"100vh" }}>
                        <FlipWords className="font-black text-7xl text-white" words={words}/>
                    </motion.div>
                    <motion.p initial={{ opacity: 0, x:-10,  }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ maxHeight:"100vh" }} className="text-4xl font-black text-neutral-300"> web Applications</motion.p>
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeroText