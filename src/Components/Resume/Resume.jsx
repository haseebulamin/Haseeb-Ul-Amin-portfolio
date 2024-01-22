import React from 'react'
import './Resume.scss'
import clientDp from '../../Images/profile.jpg'
export default function Resume() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide overflow-hidden" data-bs-ride="false" >
      <h1>My Resume</h1>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"  aria-label="Slide 2" ></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" ></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4" ></button>
    </div>

    <div className="grid">
      <div className="col-1 h-screen flex justify-content-center align-items-center">
        <button className="carousel-control-prev opacity-100" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
        <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
          <span className="visually-hidden">Previous</span>
        </button>
      </div>

      <div className=" col-10  ">
        <div className="carousel-inner">
        <div className="carousel-item active ">
        <div className="h-screen flex flex-column align-items-center justify-content-center">
        <h1 className="text-7xl my-5 font-bold">Our Client Say</h1>
        <img src={clientDp} className="clienttImg border-circle my-5" height={250} width={250} alt="" />
        <p className="text-xl text-center">
        Tom and Jerry were created without voices primarily for comedic effect. The creators of the cartoon series, William Hanna and Joseph Barbera, believed that the characters' actions and expressions would be more effective in telling a story than their voices.
        </p>
        <h5 className="text-3xl font-bold">Tom Morris</h5>
        </div>
        </div>
        <div className="carousel-item">
        <div className="h-screen flex flex-column align-items-center justify-content-center">
        <h1 className="text-7xl my-5 font-bold">Our Client Say</h1>
        <img src={clientDp} className="clienttImg border-circle my-5" height={250} width={250} alt="" />
        <p className="text-xl text-center">
        Tom and Jerry were created without voices primarily for comedic effect. The creators of the cartoon series, William Hanna and Joseph Barbera, believed that the characters' actions and expressions would be more effective in telling a story than their voices.
        </p>
        <h5 className="text-3xl font-bold">Ben Shawn</h5>
        </div>
        </div>

        <div className="carousel-item">
        <div className="h-screen flex flex-column align-items-center justify-content-center">
        <h1 className="text-7xl my-5 font-bold">Our Client Say</h1>
        <img src={clientDp} className="clienttImg border-circle my-5" height={250} width={250} alt="" />
        <p className="text-xl text-center">
        Tom and Jerry were created without voices primarily for comedic effect. The creators of the cartoon series, William Hanna and Joseph Barbera, believed that the characters' actions and expressions would be more effective in telling a story than their voices.
        </p>
        <h5 className="text-3xl font-bold">Jhon Don</h5>
        </div>
        </div>
        <div className="carousel-item">
        <div className="h-screen flex flex-column align-items-center justify-content-center">
        <h1 className="text-7xl my-5 font-bold">Our Client Say</h1>
        <img src={clientDp} className="clienttImg border-circle my-5" height={250} width={250} alt="" />
        <p className="text-xl text-center">
        Tom and Jerry were created without voices primarily for comedic effect. The creators of the cartoon series, William Hanna and Joseph Barbera, believed that the characters' actions and expressions would be more effective in telling a story than their voices.
        </p>
        <h5 className="text-3xl font-bold">chingo mingo</h5>
        </div>
        </div>
        </div>
      </div>

      <div className="col-1 h-screen flex justify-content-center align-items-center">
        <button className="carousel-control-next opacity-100" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  )
}
