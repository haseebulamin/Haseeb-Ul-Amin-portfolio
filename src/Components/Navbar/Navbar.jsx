import React from 'react'
import './Navbar.scss'
import hlogo from '../../Images/Hlogo.png'
export default function Navbar() {

  return (
    <div>
      <button class="btn btn-primary " type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  Toggle static offcanvas
     </button>
<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel"> <a className="navbar-brand bg-black " href="/"><img src={hlogo} className='me-1' alt="not insert" height={35} width={35}/></a></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
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
</div>
  )
}
