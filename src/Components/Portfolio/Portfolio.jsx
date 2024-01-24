import React from 'react'
import './Portfolio.scss'
import '../Common/Variables.scss';
import protreact from '../../Images/portreact.png'
export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-2 pb-5 bg-dark">
    <div className="container ">
      {/* row 1 */}
      <div className="row justify-content-center">
        <div className="col-md-7 animate__animated animate__fadeInUp">
          <p className="  my-2 d-block text-center text-uppercase mt-3 font-bold main-color">portfolio</p>
          <h1 className=" text-center font-bold  mb-4 text-white">Work i have done. </h1>
        </div>
      </div>
      {/* row 2 */}
      <div className="row">
        <div className="col-md-4">
          <div className="card w-100 shadow animate__animated animate__fadeInUp mt-5">
            <img src={protreact} className="card-img-top" alt="..." />
            <div className="card-body bg-low">
              <div className="flex justify-content-between ">
                <span className="font-bold text-secondary ">React Portfolio</span>
                <a href='https://github.com/haseebulamin/Portfolio' className='text-white'><i className="text-2xl fa-brands fa-github"></i></a>
              </div>
              <p className="card-text">Single page Portfolio using React JS</p>
            </div>
          </div>
        </div>
       
      </div>
      
      
    </div>
  </section>
  )
}
