import { IoIosArrowDown } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-lg px-16 pt-6">
        <div className="flex items-center gap-6">
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
            <div className="flex items-center justify-center gap-4 h-16 w-48 rounded-3xl border border-black border-solid">
               
                <div className="h-12 flex items-center justify-between px-4 bg-black w-[85%] text-white rounded-2xl">
                <FaLongArrowAltRight />
                <button>Get Started</button>
                </div>
               
                
            </div>
        </div>
    </div>
  )
}

export default Navbar