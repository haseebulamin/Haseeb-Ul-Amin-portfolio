import React from 'react'
import './Navbar.scss'
import hlogo from '../../Images/Hlogo.png'
import '../Common/Variables.scss'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent navbar-dark relative top-0 ">
  <div className="container animate__fadeInDown animate__animated">
    <a className="navbar-brand " href="/"><img src={hlogo} height={40} width={40} alt="logo not insert" /></a>
    <button className='px-2 py-1 bg-low border-0'><i class="fa-solid fa-bars text-2xl text-white"></i></button>
  </div>
</nav>
  )
}
