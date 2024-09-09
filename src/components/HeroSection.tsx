import Navbar from "./Navbar"
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <div className="h-[100vh] w-[100vw] relative bg-gradient-to-t from-cutomGrey to-cutomGrey2">
     <Navbar />
   <div className="absolute top-[50%] left-32 transform -translate-y-1/2">
   <motion.div
     animate={{ x: '20%' }} // Move to the left
     initial={{ x: '-20%' }} // Start from the right
     transition={{
       duration: 10, // Adjust based on how fast you want the text to slide
       repeat: Infinity, // Infinite loop
       ease: 'linear', // Smooth continuous animation
     }}
   className="flex items-center gap-4 justify-center w-[500px] overflow-hidden whitespace-nowrap">
        <div className="h-2 w-2 rounded-full bg-orange-500">
        </div>
        <p className="text-black text-lg">AVAILABLE FOR WORK</p>
        <div className="h-2 w-2 rounded-full bg-orange-500">
        </div>
        <p className="text-black text-lg">AVAILABLE FOR WORK</p>
    </motion.div>
    <div className=" text-[55px] font-semibold leading-tight text-black tracking-wider mt-8">
        <h1>We recognized a <br /> gap in the
        <span className="bg-cutomOrange"> creative <br /></span> industry</h1>
    </div>
   </div>
   <p className=" absolute top-[72%] text-sm left-[38%] w-[300px]">Develop compelling content that
engages and resonates with your audience,
enhancing your brand's storytelling and reach.</p>
    </div>
  )
}

export default HeroSection