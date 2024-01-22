import React from 'react'
import './Education.scss'
import '../../Common/Variables.scss'
export default function Education() {
return (
<div className="row text-white bg-dark g-0 ">
  <div className="col-md-6 ">
    <p className='text-xl main-color'>Education</p>
    <h1 className='font-semibold text-6xl'>Learning experiance in a <span className='main-color'>Various institutions</span></h1>
  </div>
  <div className="col-md-6 flex justify-content-center bg-danger ">
    <div className='educate absolute'>
      <h1 className='text-2xl font-bold'><i class="fa-solid fa-circle fa-2xs me-3"></i>Graduation</h1>
      <p className='text-sm ml-5 mb-0'>BSCS(2022 - Present)</p>
      <p className='text-lg font-bold ml-5'>COMSATS University, Sahiwal Campus</p>
      <h1 className='text-2xl font-bold'><i class="fa-solid fa-circle fa-2xs me-3"></i>Intermediate</h1>
      <p className='text-sm ml-5 mb-0'>ICS(2020 - 2022)</p>
      <p className='text-lg font-bold ml-5'>Informatics Colleges, Kamalia Campus</p>
      <h1 className='text-2xl font-bold'><i class="fa-solid fa-circle fa-2xs me-3"></i>Matriculation</h1>
      <p className='text-sm ml-5 mb-0'>Science(2018 - 2020)</p>
      <p className='text-lg font-bold ml-5'>Govt High School, 739 jakhar</p>
    </div>
  </div>
</div>
  )
}
