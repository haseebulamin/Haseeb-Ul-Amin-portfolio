import React from 'react'
import './Menu.scss'
export default function Menu() {
//   const [wrapperBg, setWrapperBg] = useState("white")
  
//   const resetbg = ()=>{
//     setWrapperBg("white");
//   }
//   const aisle =()=>{
//     setWrapperBg("orange");
//   }
  return (
    <>
    <input type="checkbox" id='active' className='hidden'/>
    <label htmlFor='active' className="menu-btn fixed shadow-8 text-center cursor-pointer z-2"><i class="fa-solid fa-equals fa-xl text-black"></i></label>
    <div className="wrapper fixed bg-white top-0 h-full w-full">
        <ul className="menu list-none h-full flex flex-column justify-content-center align-items-center">
            <li className='mb-1 '><h1 className='item inline-block  no-underline text-white font-bold  aisle'>Home</h1></li>
            <li className='my-1 '><h1  className='item inline-block  no-underline text-white font-bold  about'>About</h1></li>
            <li className='my-1 '><h1  className='item inline-block  no-underline text-white font-bold  work'>Resume</h1></li>
            <li className='my-1 '><h1  className='item inline-block  no-underline text-white font-bold  career'>Portfolio</h1></li>
            <li className='my-1 '><h1  className='item inline-block  no-underline text-white font-bold  contact'>Contact</h1></li>
        </ul>
    </div>
    </>
  )
}