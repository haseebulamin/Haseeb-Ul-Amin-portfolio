import React, { useEffect } from 'react'
import './About.scss'
import aboutpic from '../../Images/about.JPG'
import '../Common/Variables.scss'
import './About'
import { Link } from 'react-router-dom'
export default function About() {
  
  useEffect(() => {
    const tiltEls = document.querySelectorAll('.tilt')

    const tiltMove = (x, y) => `perspective(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`
    
    tiltEls.forEach(tilt => {
        const height = tilt.clientHeight
        const width = tilt.clientWidth
    
        tilt.addEventListener('mousemove', (e) => {
            const x = e.layerX
            const y = e.layerY
            const multiplier = 40
    
            const xRotate = multiplier * ((x - width / 2) / width)
            const yRotate = -multiplier * ((y - height / 2) / height)
    
            tilt.style.transform = tiltMove(xRotate, yRotate)
        })
    
        tilt.addEventListener('mouseout', () => tilt.style.transform = tiltMove(0, 0))
    })
    
  })
  
  return (
    <div id="about" className="h-full overflow-hidden text-white pt-6">
    <div className="row h-full g-0">
    <div className='text-center py-4'><p className='title-line text-xl inline-block font-bold uppercase main-color pl-6'>About me</p></div>
      <div className="col-lg-5  flex align-items-center justify-content-center py-6">
       <img src={aboutpic} alt="Description of the about section" className='tilt shadow-8 border-round-3xl'/>
      </div>
      <div className="col-lg-7  flex flex-column justify-content-center px-7 py-5">
        <p>I'm Haseeb ul Amin, a Computer Science student at COMSATS University, Sahiwal Campus, Pakistan. Proficient in C, C++, HTML, CSS, JavaScript, and Java, I recently completed a Frontend Developer Course from Great Learning.</p>
        <p>Actively applying my skills, I've initiated minor projects to further enhance my capabilities. Beyond academics, I thrive in extracurriculars, participating in hackathons, coding competitions, and bootcamps, fostering collaboration and innovative problem-solving.</p>
        <p className='main-color font-bold uppercase text-lg'>My Vision</p>
        <p>I'm driven to blend theoretical insights with hands-on innovation. My goal is to craft visually stunning interfaces that redefine user experiences. I aspire to architect dynamic applications, pushing the boundaries of interactivity and contributing to the forefront of web development.</p>
        <div className="button inline-block mr-2 mt-2" ><Link type="button" to="/resume" className="bt no-underline main-color px-4 py-2 bg-low font-normal text-md border-round-3xl bg-transparent overflow-hidden relative ">Resume</Link></div>
      </div>
    </div>
  </div>
  )
}
