import React from 'react'
import './Navbar.scss'
export default function Navbar() {
  return (
 <nav className="flex justify-content-center py-1">
      <ul className="flex justify-content-center list-none m-0 p-0  border-round-3xl border-primary">
        <li className="nav-item py-2 px-7 font-normal text-2xl border-round-3xl">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item py-2 px-7 font-normal text-2xl border-round-3xl">
          <a className="nav-link  "  href="/">About</a>
        </li>
        <li className="nav-item py-2 px-7 font-normal text-2xl border-round-3xl">
          <a className="nav-link"  href="/">Services</a>
        </li>
        <li className="nav-item py-2 px-7 font-normal text-2xl border-round-3xl">
          <a className="nav-link "  href="/">Contact</a>
        </li>
      </ul>
 </nav>
  )
}
