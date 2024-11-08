import AnimText from "./AnimText";
import Navbar from "./Navbar"
import { motion } from 'framer-motion';
const HeroSection = () => {
  // const icon = {
  //   hidden: {
  //     pathLength: 0,
  //     fill: "rgba(255, 255, 255, 0)"
  //   },
  //   visible: {
  //     pathLength: 1,
  //     fill: "rgba(255, 255, 255, 1)"
  //   }
  // }
  return (
    <div className="aries h-[100vh] overflow-hidden w-[100vw] relative">
     <Navbar />
   <div className="absolute top-[50%] overflow-hidden left-32 max-sm:left-8 transform -translate-y-1/2">
   <motion.div
     animate={{ x: '20%' }} // Move to the left
     initial={{ x: '-20%' }} // Start from the right
     transition={{
       duration: 10, // Adjust based on how fast you want the text to slide
       repeat: Infinity, // Infinite loop
       ease: 'linear', // Smooth continuous animation
     }}
   className="flex items-center gap-4 justify-center lg:w-[500px] max-sm:w-[320px] overflow-hidden whitespace-nowrap">
        <div className="h-2 w-2 rounded-full bg-orange-500">
        </div>
        <p className="text-black text-lg max-sm:text-sm">AVAILABLE FOR WORK</p>
        <div className="h-2 w-2 rounded-full bg-orange-500">
        </div>
        <p className="text-black text-lg max-sm:text-sm">AVAILABLE FOR WORK</p>
    </motion.div>
    <div className="text-[55px] max-sm:text-[30px] w-[500px] font-normal leading-tight text-black -mt-16">
        <h1></h1>
        <AnimText delay={1} />
    </div>
   </div>
   <div className=" mt-8 ml-8">
   {/* <svg width="500" height="100">
  <motion.line
   d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
   variants={icon}
   initial="hidden"
   whileInView="visible"
  x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg> */}
   </div>
    </div>
  )
}

export default HeroSection