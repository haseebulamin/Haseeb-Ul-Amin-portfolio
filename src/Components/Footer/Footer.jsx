import React from 'react'
import './Footer.scss'
import '../Common/Variables.scss'
import hlogo from '../../Images/Hlogo.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
      <>
    <div id="footer" className='text-white'>
        <hr />
        <div className='py-5 text-center' data-aos="zoom-in">
          <Link to="/"> <img src={hlogo} alt="not" height={70} /></Link>
           <p className='font-medium'>Copyright <i class="fa-regular fa-copyright"></i> 2023 All rights reserved | <a href="https://www.linkedin.com/in/haseebulamin/" target='_blank' className='no-underline main-color'> Haseeb Ul Amin</a></p>

        </div>

    </div>
      </>
  )
}
