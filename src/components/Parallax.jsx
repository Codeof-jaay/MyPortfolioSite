import {motion, useScroll, useTransform, useSpring} from "motion/react"
import { useEffect, useState } from "react"

const Parallax = () => {
    const [isReady, setIsReady] = useState(false);
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, { damping: 50 });
    const mount3Y = useTransform(x, [0, .5], ["0%", "75%"]);
    const planetsX = useTransform(x, [0, .5], ["0%", "20%"]);
    const mount2Y = useTransform(x, [0, .5], ["0%" , "30%"]);
    const mount1Y = useTransform(x, [0, .5], ["0%" , "0%"]);

    useEffect(() => {
        // Small delay to ensure the component is properly mounted
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Debug: Log scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            console.log("Scroll progress:", latest);
        });
        return unsubscribe;
    }, [scrollYProgress]);
  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            {/* SKY*/}
            <div className='absolute w-full inset-0 h-screen -z-50' style={{
                backgroundImage: "url('assets/sky.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                filter: 'grayscale(1)',
            }} />
            {/* Debug: Show if ready */}
            {!isReady && (
                <div className="absolute top-4 left-4 text-white bg-red-500 p-2 rounded">
                    Parallax not ready
                </div>
            )}
             {/* mount later 3*/}
            {isReady && (
                <motion.div className='absolute inset-0 -z-40' style={{
                    backgroundImage: "url('assets/mountain-3.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    filter: 'grayscale(.75)',
                    y: mount3Y,
                }}>
                    {/* Debug: Show motion div is rendering */}
                    <div className="absolute top-4 right-4 text-white bg-green-500 p-2 rounded text-xs">
                        Mountain 3
                    </div>
                </motion.div>
            )}
             {/* mount layer 2*/}
            {isReady && (
                <motion.div className='absolute inset-0 -z-30' style={{
                    backgroundImage: "url('assets/planets.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    filter: 'grayscale(.8)',
                    x: planetsX,
                }} />
            )}
             {/* mount layer 1*/}
            {isReady && (
                <motion.div className='absolute inset-0 -z-20' style={{
                    backgroundImage: "url('/assets/mountain-2.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    filter: 'grayscale(.5)',
                    y: mount2Y,
                }} />
            )}
             {/* SKY*/}
            {isReady && (
                <motion.div className='absolute inset-0 -z-10' style={{
                    backgroundImage: "url('/assets/mountain-1.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    filter: 'grayscale(.5)',
                    y: mount1Y,
                }} />
            )}
        </div>
    </section>
  )
}

export default Parallax