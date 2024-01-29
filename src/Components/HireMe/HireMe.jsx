import React from 'react'
import '../Common/Variables.scss'
import '../Common/Button.scss'
import './HireMe.scss'
export default function HireMe() {
  return (
   <div id="hireMe">
     <div className='p-8 overflow-hidden w-screen'>
        <div className='border-1 border-round-lg border-white flex justify-content-center py-3'>
         <div className="w-9 text-center my-3">
         <p className=' main-color font-medium mb-0 py-2'>Do You Have Any Project ?</p>
         <p className='text-6xl text-white font-bold'>Available for Web development projects, utilizing expert programming tools and skills.</p>
         <div className="button inline-block" ><a type="button" href="/" className="no-underline bg-low main-color px-4 py-2 font-normal text-md border-round-3xl bg-transparent overflow-hidden relative ">Hire Me</a></div>
         </div>
        </div>
    </div>
   </div>
  )
}
