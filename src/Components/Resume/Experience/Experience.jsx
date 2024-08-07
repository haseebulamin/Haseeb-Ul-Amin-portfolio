import React from 'react'
import './Experience.scss'
import '../../Common/Variables.scss'
export default function Experience() {
  return (
   <div id='experience' >
      <div className="py-4 text-center"> <p data-aos="zoom-in"  data-aos-offset="200" className='title-line text-xl inline-block font-bold uppercase main-color pl-6'>Experience</p></div>
     <div className="row text-white  g-0 ">
     <div className="col-lg-5 order-lg-last p-5  flex flex-column justify-content-center">
    <h1 className='font-semibold text-6xl' data-aos="fade-left">More than one year experience as a <span className='main-color'>Frontend Developer</span></h1>
  </div>
  <div className="col-lg-7 order-lg-first p-5 ">
  <div class="card mb-3 w-full bg-low text-white border-0" data-aos="fade-down">
  <div class="row g-0 p-2 ">
    <div class="col-2 flex justify-content-center align-items-center border-right-1 border-color">
      <span className='main-color text-5xl font-bold p-2'>01</span>
    </div>
    <div class="col-10 p-0 ">
      <div class="card-body py-0 pr-0 pl-3 mt-2">
      <div className='text-2xl font-bold'>TestPioneers - <span className='font-medium'>Frontend</span></div>
      <span className='text-sm  mb-0 main-color ms-auto'>Feb 2023 - present</span>
      </div>
    </div>
  </div>
</div>
  <div class="card mb-3 w-full bg-low text-white border-0" data-aos="fade-down">
  <div class="row g-0 p-2 ">
    <div class="col-2 flex justify-content-center align-items-center border-right-1 border-color">
      <span className='main-color text-5xl font-bold p-2'>02</span>
    </div>
    <div class="col-10 p-0">
      <div class="card-body py-0 pr-0 pl-3 mt-2">
      <div className='text-2xl font-bold'>Impassive Sol - <span className='font-medium'>Frontend</span></div>
      <span className='text-sm  mb-0 main-color ms-auto'>Sep 2022 - Jan 2023</span>
      </div>
    </div>
  </div>
</div>
  <div class="card mb-3 w-full bg-low text-white border-0" data-aos="fade-down">
  <div class="row g-0 p-2 ">
    <div class="col-2 flex justify-content-center align-items-center border-right-1 border-color">
      <span className='main-color text-5xl font-bold p-2'>03</span>
    </div>
    <div class="col-10 p-0">
      <div class="card-body py-0 pr-0 pl-3 mt-2">
      <div className='text-2xl font-bold'>TechDev - <span className='font-medium'>UI Designer</span></div>
      <span className='text-sm  mb-0 main-color ms-auto'>Mar 2022 - Aug 2022</span>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
   </div>
  )
}
