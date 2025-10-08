import HeroText from "../components/HeroText";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import Iridescence from "../components/Iridescense";

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth: 800 });
  return (
    <section id="hero" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
        <div className="z-10">
        <HeroText />
        
        </div>
        <Iridescence color={[.5, .4, .9]} mouseReact={false} amplitude={0.1} speed={1.0} />
        
      
    </section>
  );
};

export default Hero;