import React from 'react'
import './Footer.scss'
import '../Common/Variables.scss'
import Contact from '../Contact/Contact'
// import uplogo from '../../Images/uplogo.png'
import hlogo from '../../Images/Hlogo.png'
export default function Footer() {
  return (
      <>
      <Contact/>
    <div id="footer">
        <div className='bg-black py-6 text-center text-white' >
           <img src={hlogo} alt="not" height={70} />
           <p className='font-medium'>Copyright  2023 All rights reserved | <a href="/" className='no-underline main-color'> Haseeb Ul Amin</a></p>
           {/* <a href="/" ><img src={uplogo} alt="not insert" height={50} width={50}/></a> */}

        </div>

    </div>
      </>
  )
}
