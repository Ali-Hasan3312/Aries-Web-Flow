import { motion } from 'framer-motion';
const Projects = () => {

  return (
    <div className='h-[2050px] relative w-full bg-gray-200'>
      <div className=' absolute top-[10%] left-[20%]'>
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
        <h1 className=''>Unlock new opportunities and drive innovation with our expert solutions. Whether you're looking to enhance your digital presence</h1>
    </div>
      </div>
   <div className=' absolute top-[30%] left-[4%]'>
   <img className='w-[90vw] object-cover h-[450px]' src="https://cdn.prod.website-files.com/66c6873eb89c4fbac3e22a6e/66c8dfa9d4d57c85c6ad8fed_Home%201%20Images%2005-p-800.jpg" alt="" />
   
  <div className='flex gap-2 mt-2'>
  <video className='w-[45vw] object-cover h-[450px]' autoPlay loop muted src="https://videos.pexels.com/video-files/10613972/10613972-hd_1920_1080_24fps.mp4"></video>
  <img className='w-[44.3vw] object-cover h-[450px]' src="https://cdn.prod.website-files.com/66c6873eb89c4fbac3e22a6e/66c8dfe057644a8b6de00720_Home%201%20Images%2006-p-1600.jpg" alt="" />

  </div>
  <img className='w-[90vw] object-cover h-[450px] mt-2' src="https://cdn.prod.website-files.com/66c6873eb89c4fbac3e22a6e/66c8e08ebb67cb9f89a3417f_Home%202-p-1600.jpg" alt="" />





   </div>
      {/* <motion.div
       animate={{ rotate: 180 }}
       transition={{ type: 'spring', duration: 0.8  }} style={{ x, y }} ref={ref}
      >Click Here</motion.div> */}
   
    </div>
  )
}

export default Projects