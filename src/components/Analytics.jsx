import React from "react";
import Laptop from '../assets/laptop.jpg'

export default function Analytics()
{
  return (
    <div className='bg-white w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid items-center md:grid-cols-2 ' >
        <img src={Laptop} alt={'laptop'} className='w-[500px] mx-auto my-4' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold md:text-xl text-md'> DATA ANALYTICS DASHBOARD</p>
          <h1 className='font-bold md:text-3xl sm:text-2xl mt-2'> Manage Data Analytics Centrally</h1>
          <p className='mt-2 text-[#324963]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className='p-2 bg-[#00df9a] font-[500] md:w-[200px] w-[160px] rounded-md text-black mt-4'> Get Started </button>
        </div>
      </div>
    </div>
  );
};
