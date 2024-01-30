import React from 'react'
import './About.scss'
import aboutpic from '../../Images/about.jpg'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div id="about" className="h-full overflow-hidden text-white">
    <div className="row h-full g-0">
    <h1 className='about font-bold text-center main-color text-6xl mb-5 mt-4'>About Me</h1>
      <div className="col-lg-5  flex align-items-center justify-content-center py-5">
       <img src={aboutpic} alt="Description of the about section" className='shadow-8 border-round-3xl' />
      </div>
      <div className="col-lg-7  flex flex-column justify-content-center px-7 py-5">
        <p>I'm Haseeb ul Amin, a Computer Science student at COMSATS University, Sahiwal Campus, Pakistan. Proficient in C, C++, HTML, CSS, JavaScript, and Java, I recently completed a Frontend Developer Course from Great Learning.</p>
        <p>Actively applying my skills, I've initiated minor projects to further enhance my capabilities. Beyond academics, I thrive in extracurriculars, participating in hackathons, coding competitions, and bootcamps, fostering collaboration and innovative problem-solving.</p>
        <h3 className='main-color font-semibold'>My Vision</h3>
        <p>I'm driven to blend theoretical insights with hands-on innovation. My goal is to craft visually stunning interfaces that redefine user experiences. I aspire to architect dynamic applications, pushing the boundaries of interactivity and contributing to the forefront of web development.</p>
        <div className="button inline-block mr-2 mt-2" ><Link type="button" to="/resume" className="no-underline main-color px-4 py-2 bg-low font-normal text-md border-round-3xl bg-transparent overflow-hidden relative ">Resume</Link></div>
      </div>
    </div>
  </div>
  )
}
