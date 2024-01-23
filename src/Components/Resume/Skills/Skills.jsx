import React from 'react'
import './Skills.scss'
import '../../Common/Variables.scss'
export default function Skills() {
  return (
    <div id='skills' className='bg-dark text-white'>
     <div className="row g-0">
        <div className="col-md-6 p-3 flex flex-column justify-content-center">
        <p className='skill-title text-xl main-color pl-6'>Skills</p>
        <h1 className='font-semibold text-6xl'>Every <span className='main-color'>skill</span> you acquire doubles your odds of <span className='main-color'>success</span></h1>
        </div>
        <div className="col-md-6 p-3">
            <div className="row g-0">
            <div className="col-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2 '><span>React JS</span><span >75%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated main-bg" role="progressbar" aria-label="Basic example" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>JavaScript</span><span >80%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated main-bg" role="progressbar" aria-label="Basic example" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>Bootstrap</span><span >98%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated main-bg " role="progressbar" aria-label="Basic example" style={{width: "98%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>SASS</span><span >85%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated main-bg" role="progressbar" aria-label="Basic example" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>CSS/HTML</span><span >90%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated main-bg" role="progressbar" aria-label="Basic example" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>Git/Github</span><span >70%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated main-bg" role="progressbar" aria-label="Basic example" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>OOP</span><span >83%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated main-bg" role="progressbar" aria-label="Basic example" style={{width: "83%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>DSA</span><span >79%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated main-bg" role="progressbar" aria-label="Basic example" style={{width: "79%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>C++</span><span >80%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated main-bg" role="progressbar" aria-label="Basic example" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>Java/GUI</span><span >65%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated main-bg" role="progressbar" aria-label="Basic example" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            </div>
        </div>
     </div>
    </div>
  )
}
