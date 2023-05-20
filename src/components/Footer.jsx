import React from 'react'
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'

export default function Footer(){
  return(
    <div className='w-full bg-black py-8 px-4 max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] py-6 px-4'> React </h1>
        <p className=' px-4 w-full'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='flex py-6 gap-4 px-4'>
          <FaFacebook size={30} color={'white'} className='cursor-pointer hover:scale-150 duration-300'/>
          <FaTwitter size={30} color={'white'} className='cursor-pointer hover:scale-150 duration-300'/>
          <FaGithub size={30} color={'white'} className='cursor-pointer hover:scale-150 duration-300'/>
          <FaInstagram size={30} color={'white'} className='cursor-pointer hover:scale-150 duration-300'/>
          <FaDribbble size={30} color={'white'} className='cursor-pointer hover:scale-150 duration-300'/>
        </div>
      </div >
      <div className='lg:col-span-2 flex justify-between mt-8'>
        <div>
          <h6 className='font-[500] text-gray-300'> Solutions</h6>
          <ul className='mt-2'>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
          </ul>
        </div>

        <div>
          <h6 className='font-[500] text-gray-300'> Support</h6>
          <ul className='mt-2'>
            <li className='py-2 text-sm'> Pricing </li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>

        <div>
          <h6 className='font-[500] text-gray-300'> Company</h6>
          <ul className='mt-2'>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blogs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>

        <div className='px-4 text-center' >
          <h6 className='font-[500] text-gray-300'> Legal</h6>
          <ul className='mt-2'>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>

      </div>

    </div>
  )
}
