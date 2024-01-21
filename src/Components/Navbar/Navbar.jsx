import React from 'react'
import './Navbar.scss'
import hlogo from '../../Images/Hlogo.png'
export default function Navbar() {
  return (
    <nav id='navbar' className="navbar navbar-expand-lg bg-light py-0">
    <div className="container">
      <a className="navbar-brand bg-black relative" href="/"><img src={hlogo} className='me-1' alt="not insert" height={35} width={35}/></a>
      <button className="navbar-toggler rounded-circle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-equals text-lg "></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto  mb-lg-0">
          <li className="nav-item mx-3">
            <a className="nav-link text-center font-medium text-black" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link bg-danger text-center font-medium text-black" href="/">About</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link text-center font-medium text-black" href="/">Quality</a>
          </li>
          <li className="nav-item mx-3 ml-5">
            <a className="nav-link text-center font-medium text-black" href="/">Contact</a>
          </li>
         
         
        </ul>
      </div>
    </div>
  </nav>
  )
}
