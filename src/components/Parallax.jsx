import {motion, useScroll, useTransform, useSpring} from "motion/react"

const Parallax = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, { damping: 50 });
    const mount3Y = useTransform(x, [0, .5], ["0%", "75%"]);
    const planetsX = useTransform(x, [0, .5], ["0%", "20%"]);
    const mount2Y = useTransform(x, [0, .5], ["0%" , "30%"]);
    const mount1Y = useTransform(x, [0, .5], ["0%" , "0%"]);
  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            {/* SKY*/}
            <div className='absolute w-full inset-0 h-screen -z-50' style={{
                backgroundImage: "url('/assets/sky.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                filter: 'grayscale(1)',
            }} />
             {/* mount later 3*/}
            <motion.div className='absolute inset-0 -z-40' style={{
                backgroundImage: "url('/assets/mountain-3.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                filter: 'grayscale(.75)',
                y: mount3Y,
            }} />
             {/* mount layer 2*/}
            <motion.div className='absolute inset-0 -z-30' style={{
                backgroundImage: "url('/assets/planets.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                filter: 'grayscale(.8)',
                x: planetsX,
            }} />
             {/* mount layer 1*/}
            <motion.div className='absolute inset-0 -z-20' style={{
                backgroundImage: "url('/assets/mountain-2.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                filter: 'grayscale(.5)',
                y: mount2Y,
            }} />
             {/* SKY*/}
            <motion.div className='absolute inset-0 -z-10' style={{
                backgroundImage: "url('/assets/mountain-1.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                filter: 'grayscale(.5)',
                y: mount1Y,
            }} />
        </div>
    </section>
  )
}

export default Parallax