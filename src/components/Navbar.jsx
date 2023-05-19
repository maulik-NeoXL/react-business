import {React, useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export function Navbar()
{
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='text-white flex items-center pr-4 pl-4 h-17 max-w-[1240px] mx-auto'>
         <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4'> React </h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home </li>
        <li className='p-4'> Company </li>
        <li className='p-4'> Resources </li>
        <li className='p-4'> About </li>
        <li className='p-4'> Contact </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size = {24} className='cursor-pointer'/> : <AiOutlineMenu size={24} className='cursor-pointer'/> }
      </div>
      <div className={!nav? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4 ml-9'> React </h1>
        <ul className='pt-24 uppercase'>
          <li className='p-4 border-b border-gray-500'>Home </li>
          <li className='p-4 border-b border-gray-500'> Company </li>
          <li className='p-4 border-b border-gray-500'> Resources </li>
          <li className='p-4 border-b border-gray-500'> About </li>
          <li className='p-4'> Contact </li>
        </ul>
      </div>
    </div>
  );
};
