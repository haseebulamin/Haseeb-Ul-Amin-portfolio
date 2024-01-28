import React from 'react'
import './Footer.scss'
import '../Common/Variables.scss'
import hlogo from '../../Images/Hlogo.png'
export default function Footer() {
  return (
      <>
    <div id="footer" className='text-white'>
        <hr />
        <div className='py-5 text-center' >
          <a href="/home"> <img src={hlogo} alt="not" height={70} /></a>
           <p className='font-medium'>Copyright  2023 All rights reserved | <a href="/" className='no-underline main-color'> Haseeb Ul Amin</a></p>

        </div>

    </div>
      </>
  )
}
