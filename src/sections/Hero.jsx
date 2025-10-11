import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import Dither from "../components/Dither";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlignCenter } from "lucide-react";
import Resume from "../components/Resume";


const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Create parallax effect — plasma moves slower, text moves slightly faster
  const yPlasma = useTransform(scrollY, [0, 300], [0, 100]);
  const yText = useTransform(scrollY, [0, 300], [0, -50]);

    const isMobile = useMediaQuery({maxWidth: 800 });
  return (
    <section id="hero" className=" flex flex-row relative w-full items-start min-h-screen overflow-hidden ">
      <motion.div style={{y:yPlasma}} className="absolute w-full h-full flex items-center justify-center">
         
        <Dither
          waveColor={[0.4, 0, 0.8 ]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      <div className="z-10 absolute flex items-start justify-center md:justify-start px-4 md:px-20">
        <HeroText style={{y:yText, textAlign: 'center'}} />

        </div>
  </motion.div>
        <motion.div style={{y:yPlasma}} className="absolute bottom-15 md:bottom-7.5 w-full flex justify-center z-10">
        <Resume  />
        </motion.div>
      
    </section>
  );
};

export default Hero;
// --- IGNORE ---
