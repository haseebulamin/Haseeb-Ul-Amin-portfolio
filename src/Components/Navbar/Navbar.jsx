import React from 'react'
import './Navbar.scss'
import hlogo from '../../Images/Hlogo.png'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent navbar-dark relative top-0 ">
  <div className="container animate__fadeInDown animate__animated">
    <a className="navbar-brand " href="/"><img src={hlogo} height={40} width={40} alt="logo not insert" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon mb-1 me-1"> </span>
      <span className="menu">MENU</span></button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li className="nav-item text-center"><a className="nav-link pt-2 pb-0 px-4 text-white font-medium text-md mx-1" aria-current="page" href="/">Home</a></li>
        <li className="nav-item text-center"><a className="nav-link pt-2 pb-0 px-4 text-white font-medium text-md mx-1" href="/about">About</a></li>
        <li className="nav-item text-center"><a className="nav-link pt-2 pb-0 px-4 text-white font-medium text-md mx-1" href="/portfolio">Resume</a></li>
        <li className="nav-item text-center"><a className="nav-link pt-2 pb-0 px-4 text-white font-medium text-md mx-1" href="/pricing">Certificate</a></li>
        <li className="nav-item text-center"><a className="nav-link pt-2 pb-0 px-4 text-white font-medium text-md mx-1" href="/blog">Portfolio</a></li>
        <li className="nav-item text-center"><a className="nav-link pt-2 pb-0 px-4 text-white font-medium text-md " href="/contact">Contact</a></li>
        </ul>
    </div>
  </div>
</nav>
  )
}
