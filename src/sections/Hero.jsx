import {Astro} from "../components/Astro";
import HeroText from "../components/HeroText";
import Parallax from "../components/Parallax";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Float } from "@react-three/drei";

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth: 800 });
  return (
    <section id="hero" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
        <div className="z-10">
        <HeroText />
        <Parallax />
        </div>
        <figure className="absolute inset-0 z-10" style={{ height: '100vh', width: '100vw' }}>
        <Canvas style={{
          filter: "grayscale(1) brightness(0.6) sepia(1) hue-rotate(270deg)",
          width: "100vw",
          height: "100vh"
        }}
          camera={{ position: [0, 1, 3], fov: 50 }}>
                
            
            <Float >
            <Astro scale={isMobile && 0.23} position={isMobile && [0, -1.5 , 0 ]} />
            
            </Float>
            
        </Canvas>

        </figure>
    </section>
  );
};

export default Hero;