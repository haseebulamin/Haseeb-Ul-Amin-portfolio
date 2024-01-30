import React from 'react'
import './Navbar.scss'
import hlogo from '../../Images/Hlogo.png'
import '../Common/Variables.scss'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent navbar-dark relative top-0 fixed">
  <div className="container animate__fadeInDown animate__animated">
    <Link className="navbar-brand " to="/"><img src={hlogo} height={40} width={40} alt="logo not insert" /></Link>
    <Link to='/menu'><button className='px-2 py-1 bg-low border-0'><i class="fa-solid fa-bars text-2xl text-white"></i></button></Link>
  </div>
</nav>
  )
}
