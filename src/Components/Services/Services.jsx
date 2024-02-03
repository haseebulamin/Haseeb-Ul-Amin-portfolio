import React from 'react'
import './Services.scss'
import '../Common/Variables.scss'
import Rank from './Rank/Rank'
import Review from './Review/Review'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
export default function Services() {
  return (
    <>
    <Navbar/>
    <section id="service" className='pt-4 overflow-hidden'>
        <div className="container ">
            {/* 1st row  */}
            <div className="row justify-content-center">
                <div className="col-md-7 mb-5 animate__animated animate__fadeInUp">
                <div className='text-center py-2'><p className='service-title text-xl inline-block font-bold uppercase main-color pl-6'>Services</p></div>
            <h1 className='text-center  mb-4 text-white font-bold'>This is My Expertise, The Services I'll Provide My Clientss</h1>
            </div>
            </div>
        {/* 2nd row  */}
        <div className="row mt-3 justify-content-center">
                <div className="col-md-4 px-4">
                <div className="card w-100 bg-low  animate__animated animate__fadeInUp shadow mt-3" >
                    <div className="card-body text-start p-5">
                    <div className="box"><i className="fa-solid fa-layer-group"></i></div>
                    <h4 className="card-title main-color font-semibold main-color ">UI & UX Design</h4>
                    <p className="card-text text-lg text-white mb-4">Elevate user engagement through engaging design. My UI & UX expertise ensures intuitive interfaces that leave a lasting impression, driving customer satisfaction and loyalty.</p>
                     </div>
                    </div>
                </div>
                <div className="col-md-4 px-4">
                <div className="card w-100 bg-low  animate__animated animate__fadeInUp shadow mt-3" >
                    <div className="card-body text-start p-5">
                    <div className="box"><i className="fa-solid fa-code"></i></div>
                    <h4 className="card-title main-color font-semibold main-color ">Web Development</h4>
                    <p className="card-text text-lg text-white mb-4">Crafting seamless digital experiences. From dynamic websites to powerful e-commerce solutions, i bring your online vision to life with the latest web development.</p>
                     </div>
                    </div>
                </div>
                <div className="col-md-4 px-4">
                <div className="card w-100 bg-low  animate__animated animate__fadeInUp shadow mt-3" >
                    <div className="card-body text-start p-5">
                    <div className="box"><i className="fa-solid fa-chart-line"></i></div>
                    <h4 className="card-title main-color font-semibold main-color ">Marketing</h4>
                    <p className="card-text text-lg text-white mb-4">Boost your brand's visibility and influence. My comprehensive marketing strategy, spanning digital, content and social media, is designed to tell your unique story and drive tangible results.</p>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Review/>
    <Rank/>
    <Footer/>
    </>
  )
}
