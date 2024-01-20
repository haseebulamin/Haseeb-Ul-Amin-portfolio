import React from 'react'

export default function Information() {
  return (
    <div id="contact" className="h-full text-white bg-dark">
    <div className="row p-3 g-0">
    <div className="col-md-4 px-6">
    <div class="card mb-3 bg-transparent border-white text-white">
    <div class="row g-0">
      <div class="col-md-3 flex justify-content-center align-items-center">
        <i class="fa-solid fa-envelope text-6xl m-2"></i>
      </div>
    <div class="col-md-9">
     <div class="card-body">
      <h5 class="card-title">Email</h5>
      <p class="card-text">haseebulamin07@gmail.com</p>
     </div>
    </div>
    </div>
  </div>
  </div>
    <div className="col-md-4 px-6">
    <div class="card mb-3 bg-transparent border-white text-white">
    <div class="row g-0">
      <div class="col-md-3 flex justify-content-center align-items-center">
      <i class="fa-solid fa-phone text-6xl m-2"></i>
      </div>
    <div class="col-md-9">
     <div class="card-body">
      <h5 class="card-title">Phone Number</h5>
      <p class="card-text">+92 342 3739634</p>
     </div>
    </div>
    </div>
  </div>
  </div>
    <div className="col-md-4 px-6">
    <div class="card mb-3 bg-transparent border-white text-white">
    <div class="row g-0">
      <div class="col-md-3 flex justify-content-center align-items-center">
      <i class="fa-solid fa-location-dot text-6xl m-2"></i>
      </div>
    <div class="col-md-9">
     <div class="card-body">
      <h5 class="card-title">Address</h5>
      <p class="card-text">Sahiwal, Punjab, Pakistan</p>
     </div>
    </div>
    </div>
  </div>
  </div>
 </div>
</div>
  )
}
