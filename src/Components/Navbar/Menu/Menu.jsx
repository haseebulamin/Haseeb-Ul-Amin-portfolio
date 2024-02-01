import React from 'react'
import './Menu.scss'
import '../../Common/Variables.scss'
import { useNavigate } from 'react-router-dom';
export default function Menu() {
  const page = useNavigate();
  const back =()=>{
    page(-1);
  }
  return (
   <div id="menu" className='animate__fadeInDown animate__animated'>
    <div className='overlay h-screen w-screen p-7 overflow-hidden'>
     <div className="bg-low border-round-lg border-0  h-full border-1">
    <div className='pt-2 pl-2 fixed closebtn'><button onClick={back} className='xout bg-low border-circle shadow-6 border-none'><i class="fa-solid fa-xmark fa-lg text-white"></i></button></div>
    <div className="flex align-items-center justify-content-center h-full">
    <ul className="list-none text-center pl-0 m-0">
        <li className='mb-3 '><h1 onClick={()=>page("/")} className='item cursor-pointer inline-block  no-underline text-white  font-bold  '>Home</h1></li>
        <li className='mb-3 '><h1 onClick={()=>page("/resume")} className='item cursor-pointer inline-block  no-underline text-white  font-bold  '>Resume</h1></li>
        <li className='my-3 '><h1 onClick={()=>page("/certificates")} className='item  cursor-pointer inline-block  no-underline text-white  font-bold  '>Certificates</h1></li>
        <li className='my-3 '><h1 onClick={()=>page("/services")} className='item  cursor-pointer inline-block  no-underline text-white  font-bold  '>Services</h1></li>
        <li className='my-3 '><h1 onClick={()=>page("/portfolio")} className='item  cursor-pointer inline-block  no-underline text-white  font-bold  '>Portfolio</h1></li>
        <li className='my-3 '><h1 onClick={()=>page("/contact")} className='item  cursor-pointer inline-block  no-underline text-white  font-bold  '>Contact</h1></li>
    </ul>
    </div>
</div> 
   </div>
   </div>
  )
}
