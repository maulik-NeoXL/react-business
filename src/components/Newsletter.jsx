import React from 'react'

export default function Newsletter(){
  return(
    <div className='w-full py-16 px-4 '>
      <div className='max-w-[1240px] mx-auto flex justify-between lg: grid-cols-3 '>
        <div className='pl-10 lg:col-span-2'>
          <h1 className='text-white font-bold text-xl md:text-2xl '> Want tips & tricks to optimsie your flow? </h1>
          <p className='text-white mt-2'> Signup for the newsletter and stay upto date.</p>
        </div>
        <div className='pr-7 flex items-center float-right'>
          <input type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email here.."
            required/>
          <button className='p-2 bg-[#00df9a] md:w-[200px] w-[160px] rounded-md text-white ml-3'> Notify me</button>
        </div>
      </div>
    </div>
  )
}
