import React from 'react'
import './Contact.scss'
export default function Information() {
  return (
    <div id='infomation' className="row p-3 g-0 animate__animated animate__fadeInDown">
    <div className="col-md-4 px-6">
    <div className="card mb-3 bg-low border-0 text-white">
    <div className="row g-0">
      <div className="col-md-3 flex justify-content-center align-items-center">
        <i className="fa-solid fa-envelope text-5xl m-2"></i>
      </div>
    <div className="col-md-9">
     <div className="card-body">
      <h5 className="card-title">Email</h5>
      <p className="card-text ">haseebulamin07@gmail.com</p>
     </div>
    </div>
    </div>
  </div>
  </div>
    <div className="col-md-4 px-6">
    <div className="card mb-3 bg-low border-0 text-white">
    <div className="row g-0">
      <div className="col-md-3 flex justify-content-center align-items-center">
      <i className="fa-solid fa-phone text-5xl m-2"></i>
      </div>
    <div className="col-md-9">
     <div className="card-body">
      <h5 className="card-title">Phone Number</h5>
      <p className="card-text">+92 342 3739634</p>
     </div>
    </div>
    </div>
  </div>
  </div>
    <div className="col-md-4 px-6">
    <div className="card mb-3 bg-low border-0 text-white">
    <div className="row g-0">
      <div className="col-md-3 flex justify-content-center align-items-center">
      <i className="fa-solid fa-location-dot text-5xl m-2"></i>
      </div>
    <div className="col-md-9">
     <div className="card-body">
      <h5 className="card-title">Address</h5>
      <p className="card-text">Sahiwal, Punjab, Pakistan</p>
     </div>
    </div>
    </div>
  </div>
  </div>
 </div>
  )
}
