import React from 'react'
import './Resume.scss'
// import clientDp from '../../Images/profile.jpg'
import Skills from './Skills/Skills'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Footer from '../Footer/Footer'
export default function Resume() {
  return (
    <div id="Resume" className=" overflow-hidden bg-dark" data-bs-ride="false" >
    <Education/>
    <Experience/>
    <Skills/>
    <Footer/>
  </div>
  )
}
