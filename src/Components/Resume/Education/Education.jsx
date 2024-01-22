import React from 'react'
import './Education.scss'
import '../../Common/Variables.scss'
export default function Education() {
  return (
    <div id='education'>
        <div className="col-8 bg-danger text-white">
            <div className="row">
                <div className="col-6">
                    <p className='text-xl main-color'>Education</p>
                    <h1 className='font-semibold text-6xl'>Learning experiance in a <span className='main-color'>Various institutions</span></h1>
                </div>
                <div className="col-6 bg-warning flex justify-content-center">
                   <div>
                   <ul>
                        <li className='text-3xl font-bold'>Graduation</li>
                        <p className='text-sm'>2022 - Present</p>
                        <p className='text-3xl font-bold'>COMSATS University, Sahiwal Campus</p>
                        <li className='text-3xl font-bold'>Intermediate</li>
                        <p className='text-sm'>2022 - Present</p>
                        <p className='text-3xl font-bold'>Informatics Colleges, Kamalia Campus</p>
                        <li className='text-3xl font-bold'>Matriculation</li>
                        <p className='text-sm'>2022 - Present</p>
                        <p className='text-3xl font-bold'>Govt High School, jakhar</p>
                    </ul>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}
