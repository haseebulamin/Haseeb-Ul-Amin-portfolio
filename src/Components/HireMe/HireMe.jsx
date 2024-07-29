import React from 'react'
import '../Common/Variables.scss'
import '../Common/Button.scss'
import './HireMe.scss'
import { Link } from 'react-router-dom'
export default function HireMe() {
  return (
   <div id="hireMe">
     <div className='p-8 overflow-hidden'>
        <div data-aos="zoom-in" data-aos-offset="200" className=' border-round-lg flex justify-content-center py-3 bg-low '>
         <div className="w-9 text-center my-3">
         <p className=' main-color font-semibold mb-0 py-2'>Do You Have Any Project ?</p>
         <p className='text-6xl text-white font-bold'>Available for Web development projects, utilizing expert programming tools and skills.</p>
         <div className="button inline-block" ><Link type="button"  to="/contact" className="bt no-underline bg-low main-color px-4 py-2 font-normal text-md border-round-3xl bg-transparent overflow-hidden relative " >Hire Me</Link></div>
         </div>
        </div>
    </div>
   </div>
  )
}
