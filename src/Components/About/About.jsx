import React from 'react'
import './About.scss'
import "../Common/Button.scss"
import aboutpic from '../../Images/about.jpg'
export default function About() {
  return (
    <div id="about" className="h-full text-white">
    <div className="row h-full">
      <div className="col-md-5 col-sm-12 flex align-items-center justify-content-center ">
       <img src={aboutpic} alt="Description of the about section" className='shadow-8 border-round-3xl' />
      </div>
      <div className="col-md-7 col-sm-12 flex flex-column justify-content-center px-7">
        <h1 className='font-bold'>About Me</h1>
        <p>I'm Haseeb ul Amin, a Computer Science student at COMSATS University, Sahiwal Campus, Pakistan. Proficient in C, C++, HTML, CSS, JavaScript, and Java, I recently completed a Frontend Developer Course from Great Learning.</p>
        <p>Actively applying my skills, I've initiated minor projects to further enhance my capabilities. Beyond academics, I thrive in extracurriculars, participating in hackathons, coding competitions, and bootcamps, fostering collaboration and innovative problem-solving.</p>
        <h3 className='main-color font-semibold'>My Vision</h3>
        <p>I'm driven to blend theoretical insights with hands-on innovation. My goal is to craft visually stunning interfaces that redefine user experiences. I aspire to architect dynamic applications, pushing the boundaries of interactivity and contributing to the forefront of web development.</p>
        <div className="button inline-block my-3 " ><a type="button" href="/" className="no-underline main-color px-4 py-2 font-normal text-lg border-round-3xl bg-transparent bg-low overflow-hidden relative ">Contect me</a></div>
        
      </div>
    </div>
  </div>
  )
}