import { FaArrowRightLong } from 'react-icons/fa6'
import { WavyBackground } from './ui/wavy-background'

const Brand = () => {
  
  return (
    <div className='h-[600px] relative w-full bg-black'>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
     
    </WavyBackground>
        <div className='absolute top-20 left-[25%] w-[50%] max-sm:w-full max-sm:top-48 max-sm:left-[2%] max-sm:gap-12 flex flex-col gap-8'>
            <h1 className='text-white text-center text-[60px] max-sm:text-[35px] uppercase font-bold leading-tight'>Ready to elevate your brand with aries?</h1>
            <div className="h-12 flex items-center justify-between cursor-pointer transition-transform duration-300 ease-out px-4 bg-zinc-800 w-40 mx-auto text-white rounded-2xl">
               <div className='p-2 rounded-lg bg-white -ml-2 origin-left'>
               <FaArrowRightLong className=' text-zinc-800' />
               </div>
                <button>Get Started</button>
                </div>
        </div>
    </div>
  )
}

export default Brand