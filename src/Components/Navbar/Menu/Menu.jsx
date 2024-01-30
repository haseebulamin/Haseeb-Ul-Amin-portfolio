import React from 'react'
import './Menu.scss'
import '../../Common/Variables.scss'
export default function Menu() {
  return (
   <div id="menu">
    <div className='overlay h-screen w-screen p-7 overflow-hidden'>
     <div className="bg-low border-round-lg border-0 flex align-items-center justify-content-center h-full border-1">
    <ul className="list-none text-center pl-0 m-0">
        <li className='mb-3 '><h1 className='item cursor-pointer inline-block  no-underline text-white  font-bold  '>Home</h1></li>
        <li className='mb-3 '><h1 className='item cursor-pointer inline-block  no-underline text-white  font-bold  '>Resume</h1></li>
        <li className='my-3 '><h1 className='item  cursor-pointer inline-block  no-underline text-white  font-bold  '>Services</h1></li>
        <li className='my-3 '><h1 className='item  cursor-pointer inline-block  no-underline text-white  font-bold  '>Certificate</h1></li>
        <li className='my-3 '><h1 className='item  cursor-pointer inline-block  no-underline text-white  font-bold  '>Portofolio</h1></li>
        <li className='my-3 '><h1 className='item  cursor-pointer inline-block  no-underline text-white  font-bold  '>Contact</h1></li>
    </ul>
</div> 
   </div>
   </div>
  )
}
