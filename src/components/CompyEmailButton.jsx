import { useState } from "react";
import { motion } from "motion/react";

const CompyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "anyanwujude435@gmail.com"
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 20000);
    }
  return (
      <button onClick={copyToClipboard} className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer hover:scale-105 transition-transform overflow-hidden">
      {copied? (
          <motion.p className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y:-10 }}
          animate={{ opacity: 1, y: 0}}
          exit= {{opacity: 0, y:-10 }}
          transition={{duration: 0.1,ease: "easeInOut"}}>
            <img src="assets/copy-done.svg" alt="copy icon" className="w-5"/>
            Copied! </motion.p>        
    ):( 
        <motion.p className="flex items-center justify-center gap-2"
         initial={{ opacity: 0, y:-10 }}
          animate={{ opacity: 1, y: 0}}
          exit= {{opacity: 0, y:-10 }}
          transition={{duration: 0.1,ease: "easeInOut"}}>
        <img src="assets/copy.svg" alt="copy icon" className="w-5"/>
        Copy my Email!
        </motion.p>)}
    </button>
  )
}

export default CompyEmailButton