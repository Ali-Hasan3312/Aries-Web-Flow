import { motion } from 'framer-motion';
import { ThreeDCardDemo } from './threedCard';
const Cards = () => {
  return (
    <div className='h-[900px] relative w-full bg-black overflow-hidden'>
         <div className="absolute top-[30%] max-sm:top-4 left-1/2 max-sm:left-8 max-sm:-translate-x-0 max-sm:-translate-y-0 transform -translate-x-1/2 -translate-y-1/2">
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
        <p className="text-white text-lg max-sm:text-[12px]">AVAILABLE FOR WORK</p>
        <div className="h-2 w-2 rounded-full bg-orange-500">
        </div>
        <p className="text-white text-lg max-sm:text-[12px]">AVAILABLE FOR WORK</p>
    </motion.div>
    <div className=" text-[40px] max-sm:text-[20px] leading-tight text-white tracking-wider mt-8 w-[70vw]">
        <h1 className=''>We blend 
<span className='bg-cutomOrange text-black px-2'>creativity with purpose,</span>
creating visuals that are as functional as they are beautiful, ensuring that they contribute to the overall success of the brand.</h1>
    </div>
   </div>
   <div className='absolute top-[45%] w-[60%] left-12 grid grid-cols-3 max-sm:grid-cols-1 items-center gap-6'>
    <ThreeDCardDemo title='Branding' description='Ensure your data is always safe and secure.
' image='https://plus.unsplash.com/premium_photo-1661328251929-c530c82c59a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJhbmRpbmd8ZW58MHx8MHx8fDA%3D' />
    <ThreeDCardDemo title='Web Desing' description='Ensure your data is always safe and secure.
' image='https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww' />
    <ThreeDCardDemo title='Web Development' description='Ensure your data is always safe and secure.
' image='https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww' />
   </div>
    </div>
  )
}

export default Cards