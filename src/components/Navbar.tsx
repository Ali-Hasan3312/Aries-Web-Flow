import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { FadeUp } from "../utils/animation";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [phoneActive, setPhoneActive] = useState<boolean>(
      window.innerWidth < 1100
    );
 
  
    const resizeHandler = () => {
      setPhoneActive(window.innerWidth < 1100);
    };
  
    const handleCloseMenu = () => {
      setIsOpen(false);
    };
  
    useEffect(() => {
      window.addEventListener("resize", resizeHandler);
      window.addEventListener("click", handleCloseMenu);
      
      
  
      return () => {
        window.removeEventListener("resize", resizeHandler);
        window.removeEventListener("click", handleCloseMenu);
      };
    }, []);
  
  return (
    <div className="flex items-center relative justify-between text-sm px-16 pt-6">
        {phoneActive? (<>
            <div className="flex items-center justify-between">
            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 2C0 0.895431 0.89543 0 2 0H17C18.1046 0 19 0.895431 19 2V9H11C9.89543 9 9 9.89543 9 11V16C9 17.1046 8.10457 18 7 18H2C0.895431 18 0 17.1046 0 16V2ZM19 9V16C19 17.1046 19.8954 18 21 18H26C27.1046 18 28 17.1046 28 16V11C28 9.89543 27.1046 9 26 9H19Z" fill="#000"></path>
        </svg>
            </div>
       {isOpen? (<>
        <button onClick={() => setIsOpen(false)}>
        <IoClose className=" text-2xl" />
       </button>
       <motion.div
         initial="hidden"
         whileInView={"visible"}
         variants={FadeUp(0.2)}
       className=" h-[300px] z-50 w-[100vw] absolute top-14 pt-4 px-4 right-0 bg-black flex flex-col gap-4 text-white">
       <div className="flex items-center justify-between gap-4">
                <button>Home</button>
                <IoIosArrowDown />
            </div>
            <div className="flex items-center justify-between gap-4">
                <button>About Us</button>
                <IoIosArrowDown />
            </div>
            <div className="flex items-center justify-between gap-4">
                <button>Work</button>
                <IoIosArrowDown />
            </div>
            <div className="flex items-center justify-between gap-4">
                <button>Other</button>
                <IoIosArrowDown />
            </div>
            <div className="flex items-center gap-4">
                <button>What's New</button>
                
            </div>
            <div className="flex items-center gap-4">
                <button>Pricing</button>
               
            </div>
       </motion.div>
       </>): ( <button  onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}>
        <IoMdMenu className=" text-2xl" />
       </button>)}
        </>) : (<>
            <div className="flex items-center gap-6">
            <div>
            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 2C0 0.895431 0.89543 0 2 0H17C18.1046 0 19 0.895431 19 2V9H11C9.89543 9 9 9.89543 9 11V16C9 17.1046 8.10457 18 7 18H2C0.895431 18 0 17.1046 0 16V2ZM19 9V16C19 17.1046 19.8954 18 21 18H26C27.1046 18 28 17.1046 28 16V11C28 9.89543 27.1046 9 26 9H19Z" fill="#000"></path>
        </svg>
            </div>
            <div className="flex items-center gap-4">
                <button>Home</button>
                <IoIosArrowDown />
            </div>
            <div className="flex items-center gap-4">
                <button>About Us</button>
                <IoIosArrowDown />
            </div>
            <div className="flex items-center gap-4">
                <button>Work</button>
                <IoIosArrowDown />
            </div>
            <div className="flex items-center gap-4">
                <button>Other</button>
                <IoIosArrowDown />
            </div>
        </div>
        <div className="flex gap-6">
        <div className="flex items-center gap-4">
                <button>What's New</button>
                <IoIosArrowDown />
            </div>
            <div className="flex items-center gap-4">
                <button>Pricing</button>
                <IoIosArrowDown />
            </div>
            <div className="flex items-center justify-center gap-4 h-12 w-36 rounded-3xl border border-black border-solid">
               
                <div className="h-9 text-[12px] text-nowrap flex items-center justify-between px-4 bg-black w-[85%] text-white rounded-2xl">
                <FaArrowRightLong />
                <button>Get Started</button>
                </div>
               
                
            </div>
        </div>
        </>)}
       
    </div>
  )
}

export default Navbar