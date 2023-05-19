import React from "react";
import Typed from 'react-typed';

export default function Hero()
{
  return (
    <div className='text-white'>
         <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
           <p className='text-[#00df9a] font-bold'> GROWING WITH DATA ANALYTICS</p>
           <h1 className='font-bold sm:text-6xl md:text-7xl text-5xl md:p-4 sm: py-4 '> Grow with Data.</h1>
           <div>
             <p className='md: text-5xl sm: text-4xl text-xl font-bold'>Fast, flexible financing for <Typed className='md: text-5xl sm: text-4xl text-xl font-bold text-[#00df9a]' strings={['B2B', 'D2C', 'B2C', 'SAAS']}
               typeSpeed={120}
               backSpeed={150} loop/> </p>
           </div>
           <p className='p-4 md:xl text-l font-bold text-gray-400 w-full'> Monitor your data analytics to increase revenue for B2B, D2C, B2C & SAAS platforms.</p>
           <div>
             <button className='p-2 bg-[#00df9a] font-bold md:w-[200px] w-[160px] rounded-md text-black m-1'> Get Started </button>
           </div>
         </div>
    </div>
  );
}

