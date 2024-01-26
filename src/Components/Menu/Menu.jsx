import React, {useState} from 'react'
import './Menu.scss'
export default function Menu() {
  const [wrapperBg, setWrapperBg] = useState("blue")
  // const wrapperBg = document.getElementById("wrapper");

  const resetbg = ()=>{
    setWrapperBg("rgb(196, 194, 191)");
  }
  const aisle =()=>{
    setWrapperBg("orange");
    // palegreen color
  }
  const about = ()=>{
    setWrapperBg("#F9E625");
  }
  const work = ()=>{
    setWrapperBg("#09E9D3");
  }
  const career = ()=>{
    setWrapperBg("#F7B9AD");
  }
  const contact = ()=>{
    setWrapperBg("#8247FF");
  }
  return (
    <>
    <input type="checkbox" id='active' className='hidden'/>
    <label htmlFor='active' className="menu-btn absolute text-center cursor-pointer z-2 rounded-circle"><i class="fa-solid fa-equals fa-xl text-black"></i></label>
    <div style={{backgroundColor: `${wrapperBg}`}} className="wrapper fixed top-0 left-0 h-full w-full">
        <ul className="menu list-none p-0 m-0 absolute left-50 text-center">
            <li className='mb-3  '><h1 onMouseEnter={aisle} onMouseLeave={resetbg}  className='item inline-block  no-underline text-black font-bold  aisle'>Aisle</h1></li>
            <li className='my-3 '><h1 onMouseEnter={about} onMouseLeave={resetbg} className='item inline-block  no-underline text-black font-bold  about'>About</h1></li>
            <li className='my-3 '><h1 onMouseEnter={work} onMouseLeave={resetbg} className='item inline-block  no-underline text-black font-bold  work'>Work</h1></li>
            <li className='my-3 '><h1 onMouseEnter={career} onMouseLeave={resetbg} className='item inline-block  no-underline text-black font-bold  career'>Careers</h1></li>
            <li className='my-3 '><h1 onMouseEnter={contact} onMouseLeave={resetbg} className='item inline-block  no-underline text-black font-bold  contact'>Contact</h1></li>
        </ul>
    </div>
    </>
  )
}
