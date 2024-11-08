import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaArrowRightLong, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='h-[450px] max-sm:h-[1100px] w-full bg-black px-32 pt-8 max-sm:pt-36'>
    <div className="flex justify-between max-sm:flex-col max-sm:justify-normal max-sm:gap-8 max-sm:-ml-16">
        <div className="w-[400px] flex flex-col items-start gap-8 max-sm:-ml-10 max-sm:w-[320px]">
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  d="M0 2C0 0.895431 0.89543 0 2 0H17C18.1046 0 19 0.895431 19 2V9H11C9.89543 9 9 9.89543 9 11V16C9 17.1046 8.10457 18 7 18H2C0.895431 18 0 17.1046 0 16V2ZM19 9V16C19 17.1046 19.8954 18 21 18H26C27.1046 18 28 17.1046 28 16V11C28 9.89543 27.1046 9 26 9H19Z" fill="#fff"></path>
        </svg>
            <h3 className="text-white">We place great emphasis on providing designers, artists, and brands with designs that elevates their visual communication.</h3>
            <div className="flex gap-8">
            <div className="h-12 flex items-center justify-between px-4 bg-white w-40 mx-auto text-white rounded-2xl">
               <div className='p-2 rounded-lg bg-zinc-800  text-white -ml-2'>
               <FaArrowRightLong className='' />
               </div>
                <button className="text-zinc-800">Get Started</button>
                </div>
                <button className="text-white">Our Portfolio</button>
            </div>
        </div>
        <div className=" grid grid-cols-4 max-sm:grid-cols-3 gap-16 max-sm:gap-28 max-sm:mt-8 text-white">
           <div className="flex flex-col items-center gap-4">
           <span className=" uppercase text-sm text-nowrap text-gray-400">Explore</span>
           <button>Home</button>
           <button>Team</button>
           <button>Pricing</button>
           </div>
           <div className="flex flex-col items-center gap-4">
           <span className=" uppercase text-sm text-nowrap text-gray-400">More Pages</span>
           <button>Work</button>
           <button>Contact</button>
           
           </div>
           <div className="flex flex-col items-center gap-4">
           <span className=" uppercase text-sm text-nowrap text-gray-400">About</span>
           <button>About</button>
           <button>Blog</button>

           </div>
           <div className="flex flex-col items-center gap-4 max-sm:-mt-12">
           <span className=" uppercase text-sm text-nowrap text-gray-400">Other</span>
           <button className=" text-nowrap">Stylish Guide</button>
           <button>License</button>
           <button>Changelog</button>
           </div>
        </div>
    </div>
        <div className="flex items-center justify-between mt-32 max-sm:mt-16 max-sm:justify-center max-sm:flex-col max-sm:gap-8">
           <div className="flex items-center text-nowrap max-sm:flex-wrap text-white gap-4 font-medium">
            <span>© Copyright 2024</span>
            <button className=" hover:opacity-65 transition-all max-sm:text-sm duration-300">Developed by<span className="text-white"> CMYK Research</span></button>
            {/* <button className=" hover:opacity-65 transition-all max-sm:text-sm duration-300">Powered by<span className="text-white"> Webflow</span></button> */}
           </div>
           <div className="flex items-center gap-8">
            <FaYoutube className=' text-white text-2xl cursor-pointer hover:opacity-65 transition-all duration-300' />
            <RiInstagramFill className=' text-white text-2xl cursor-pointer hover:opacity-65 transition-all duration-300' />
            <FaTiktok className=' text-white text-2xl cursor-pointer hover:opacity-65 transition-all duration-300' />
            <FaFacebookF className=' text-white text-2xl cursor-pointer hover:opacity-65 transition-all duration-300' />
            <FaXTwitter className=' text-white text-2xl cursor-pointer hover:opacity-65 transition-all duration-300' />
            <FaLinkedin className=' text-white text-2xl cursor-pointer hover:opacity-65 transition-all duration-300' />
           </div>
        </div>
    </div>
  )
}

export default Footer