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
    <label htmlFor='active' className="menu-btn fixed  bg-danger shadow-8 text-center cursor-pointer z-2"><i class="fa-solid fa-equals fa-xl text-black"></i></label>
    <div className="wrapper fixed bg-white top-0 h-full w-full">
        <ul className="menu list-none flex flex-column text-center">
            <li className='mb-3 '><h1 className='item inline-block  no-underline text-black font-bold  aisle'>Home</h1></li>
            <li className='my-3 '><h1  className='item inline-block  no-underline text-black font-bold  about'>About</h1></li>
            <li className='my-3 '><h1  className='item inline-block  no-underline text-black font-bold  work'>Resume</h1></li>
            <li className='my-3 '><h1  className='item inline-block  no-underline text-black font-bold  career'>Portfolio</h1></li>
            <li className='my-3 '><h1  className='item inline-block  no-underline text-black font-bold  contact'>Contact</h1></li>
        </ul>
    </div>
    </>
  )
}