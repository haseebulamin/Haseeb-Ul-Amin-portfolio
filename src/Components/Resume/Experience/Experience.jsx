import React from 'react'
import './Experience.scss'
import '../../Common/Variables.scss'
export default function Experience() {
  return (
   <div className="bg-dark h-full ">
     <div className="row text-white  g-0 ">
  <div className="col-md-6 p-3">
    <p className='text-xl main-color'>Experience</p>
    <h1 className='font-semibold text-6xl'>More than one year experience as a <span className='main-color'>Frontend Developer</span></h1>
  </div>
  <div className="col-md-6 flex justify-content-center  ">
    <div className='experi absolute p-3'>
      <h1 className='text-2xl font-bold'><i class="fa-solid fa-circle fa-2xs me-3"></i>TestPioneers - <span className='font-medium'>Frontend</span></h1>
      <p className='text-sm ml-5 mb-0 main-color'>Feb 2023 - present</p>
      <ul className=' ml-3'>
         <li>Developed responsive UIs for TestPioneers.</li>
         <li>Translated design prototypes into efficient web applications.</li>
         <li>Enhanced React skills and agile development expertise.</li>
      </ul>
      <h1 className='text-2xl font-bold'><i class="fa-solid fa-circle fa-2xs me-3"></i>Impassive Sol - <span className='font-medium'>Frontend</span></h1>
      <p className='text-sm ml-5 mb-0 main-color'>Sep 2022 - Jan 2023</p>
      <ul className=' ml-3'>
         <li>Developed proficiency working with a large filesystem.</li>
         <li>Acquired experience with JavaScript, JSX and react JS.</li>
         <li>Used technical tools git, NPX and NPM</li>
      </ul>
    </div>
  </div>
</div>
   </div>
  )
}
