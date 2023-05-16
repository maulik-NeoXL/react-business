import {React, useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export function Navbar()
{
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className='text-white flex items-center pr-4 pl-4 h-16 max-w-[1240px] mx-auto'>
         <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4'> React </h1>
      <ul className='flex hidden'>
        <li className='p-4'>Home </li>
        <li className='p-4'> Company </li>
        <li className='p-4'> Resources </li>
        <li className='p-4'> About </li>
        <li className='p-4'> Contact </li>
      </ul>
      <div>
        <AiOutlineMenu size={24} className='hover:cursor-pointer'/>
      </div>
      <div className='fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-transparent' onClick={handleClick}>
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
