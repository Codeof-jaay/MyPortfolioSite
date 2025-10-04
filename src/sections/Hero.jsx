import {Astro} from "../components/Astro";
import HeroText from "../components/HeroText";
import Parallax from "../components/Parallax";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Float } from "@react-three/drei";
import { Suspense } from "react"
import Loader from "../components/Loader";

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth: 800 });
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center md:items-start md:justify-start overflow-hidden c-space">
        <HeroText />
        <Parallax />
        <figure className="absolute inset-0" style={{ height: '100vh', width: '100vw' }}>
        <Canvas style={{
          filter: "grayscale(1) brightness(0.7) sepia(1) hue-rotate(270deg)",
          width: "100vw",
          height: "100vh"
        }}
          camera={{ position: [0, 1, 3], fov: 50 }}>
                
            <Suspense fallback={<Loader />}>
            <Float >
            <Astro scale={isMobile && 0.23} position={isMobile && [0, -1.5 , 0 ]} />
            </Float>
            </Suspense>
        </Canvas>

        </figure>
    </section>
  );
};

export default Hero;