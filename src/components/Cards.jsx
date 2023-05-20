import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

export default function Cards(){
  return(
    <div className='w-full py-[10rem] px-14 bg-white'>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
         <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg border-2 hover:scale-105 duration-300'>
           <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt={'single-user'} />
           <h2 className='text-2xl font-bold text-center py-8'> Single User</h2>
           <p className='text-center text-4xl font-bold'> $149</p>
           <div className='text-center font-normal my-4'>
             <p className='py-2 mt-4'>500 GB Storage</p>
             <p className='py-2'> 1 Granted User</p>
             <p className='py-2'> Send upto 2 GB</p>
             <button className='p-2 bg-[#00df9a] md:w-[200px] w-[160px] rounded-md text-white ml-3 mt-4'> Start Trial</button>
           </div>
         </div>


         <div className='w-full shadow-xl flex flex-col py-4 my-4 md:my-0 rounded-lg border-2 hover:scale-105 duration-300 bg-gray-100'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt={'single-user'} />
                    <h2 className='text-2xl font-bold text-center py-8'> Partnership</h2>
                    <p className='text-center text-4xl font-bold'> $199</p>
                    <div className='text-center font-normal my-4'>
                      <p className='py-2 mt-4'>500 GB Storage</p>
                      <p className='py-2'> 1 Granted User</p>
                      <p className='py-2'> Send upto 2 GB</p>
                      <button className='p-2 bg-black md:w-[200px] w-[160px] rounded-md text-[#00df9a] ml-3 mt-4'> Start Trial</button>
                    </div>
                  </div>

         
         <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg border-2 hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt={'single-user'} />
                    <h2 className='text-2xl font-bold text-center py-8'> Group Account</h2>
                    <p className='text-center text-4xl font-bold'> $249</p>
                    <div className='text-center font-normal my-4'>
                      <p className='py-2 mt-4'>500 GB Storage</p>
                      <p className='py-2'> 1 Granted User</p>
                      <p className='py-2'> Send upto 2 GB</p>
                      <button className='p-2 bg-[#00df9a] md:w-[200px] w-[160px] rounded-md text-white ml-3 mt-4'> Start Trial</button>
                    </div>
                  </div>
       </div>
    </div>
  )
}
