import { motion } from 'framer-motion';
const Projects = () => {
  return (
    <div className='h-[900px] relative w-full bg-gray-200'>
      <div className=' absolute top-[10%] left-8'>
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
    <div className=" text-[40px] leading-tight text-black tracking-wider mt-8 w-[70vw]">
        <h1 className=''>We blend
creating visuals that are as functional as they are beautiful, ensuring that they contribute to the overall success of the brand.</h1>
    </div>
      </div>
    </div>
  )
}

export default Projects