import React from 'react'
import './Education.scss'
import '../../Common/Variables.scss'
export default function Education() {
return (
<div id="education" >
    <div className="py-4 text-center"><p className='title-line text-xl main-color inline-block font-bold uppercase pl-6 animate__animated animate__fadeInDown'>Education</p></div>
<div className="row text-white  g-0 ">
  <div className="col-lg-6 p-5 flex flex-column justify-content-center animate__animated animate__fadeInLeft">
    <h1 className='font-semibold text-6xl'>Learning experiance in a <span className='main-color'>Various institutions</span></h1>
  </div>
  <div className="col-lg-6 flex justify-content-center  px-3 animate__animated animate__fadeInRight">
    <div className='educate relative p-5'>
      <h1 className='text-2xl font-bold'><i class="fa-solid fa-circle fa-2xs me-3"></i>Graduation</h1>
      <p className='text-sm ml-5 mb-0 main-color'>BSCS(2022 - Present)</p>
      <p className='text-lg font-bold ml-5'>COMSATS University, Sahiwal Campus</p>
      <h1 className='text-2xl font-bold'><i class="fa-solid fa-circle fa-2xs me-3"></i>Intermediate</h1>
      <p className='text-sm ml-5 mb-0 main-color'>ICS(2020 - 2022)</p>
      <p className='text-lg font-bold ml-5'>Informatics Colleges, Kamalia Campus</p>
      <h1 className='text-2xl font-bold'><i class="fa-solid fa-circle fa-2xs me-3"></i>Matriculation</h1>
      <p className='text-sm ml-5 mb-0 main-color'>Science(2018 - 2020)</p>
      <p className='text-lg font-bold ml-5'>Govt High School, 739 GB jakhar</p>
    </div>
  </div>
</div>
</div>
  )
}
