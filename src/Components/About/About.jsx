import React from 'react'
import './About.scss'
import aboutpic from '../../Images/about.jpg'
export default function About() {
  return (
    <div id="about" className="h-full text-white">
    <div className="row h-full">
      <div className="col-md-5 col-sm-12 flex flex-column justify-content-center ">
       <img src={aboutpic} alt="Description of the about section" className='' />
      </div>
      <div className="col-md-7 col-sm-12 "> col 8</div>
    </div>
  </div>
  )
}
