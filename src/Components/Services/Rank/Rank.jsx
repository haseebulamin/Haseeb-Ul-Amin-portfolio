import React from 'react'
import './Rank.scss'
import '../../Common/Variables.scss'
export default function Rank() {
  return (
    <section id="rank" className='bg-low'>
        <div className="container p-6">
            <div className="row animate__animated animate__fadeInUp">
                <div className="col-sm-6  col-md-4 flex justify-content-center">
                    <div className="wrap text-white d-flex py-2">
                        <div className="icon">
                        <i class="fa-solid fa-id-card text-6xl mt-4"></i>
                        </div>
                        <div className="text ml-3">
                            <h1 className='font-bold'>15+</h1>
                            <span className='font-bold uppercase'>HAPPY CUSTOMER</span>
                        </div>
                    </div>

                </div>
                <div className="col-sm-6  col-md-4 flex justify-content-center">
                    <div className="wrap text-white d-flex py-2">
                        <div className="icon">
                        <i class="fa-solid fa-diagram-project text-6xl mt-4"></i>
                        </div>
                        <div className="text ml-3">
                            <h1 className='font-bold'>10+</h1>
                            <span className='font-bold uppercase'>PROJECT COMPLETED</span>
                        </div>
                    </div>

                </div>
                <div className="col-sm-6  col-md-4 flex justify-content-center ">
                    <div className="wrap text-white d-flex py-2">
                        <div className="icon">
                        <i class="fa-solid fa-star text-6xl mt-4"></i>
                        </div>
                        <div className="text ml-3">
                            <h1 className='font-bold'>40+</h1>
                            <span className='font-bold uppercase'>POSITIVE REVIEWS</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
