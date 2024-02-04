import React,{useState,useEffect} from 'react'
import './Portfolio.scss'
import '../Common/Variables.scss';
import protreact from '../../Images/portreact.png'
import newshour from '../../Images/news.png';
import returent from '../../Images/Returant app.png';
import socialmedia from '../../Images/Social media.png';
import devhack from '../../Images/devhack.png'
import gym from '../../Images/gym.png';
import htmlport from '../../Images/html portfolio.png';
import lifebuild from '../../Images/life build.png';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
export default function Portfolio() {
  return (
    <>
    <Navbar/>
    <section id="portfolio" className="pt-2 pb-5">
    <div className="container ">
      {/* row 1 */}
      <div className="row justify-content-center">
        <div className="col-md-7 animate__animated animate__fadeInDown">
        <div className='text-center pt-3'><p className='port-title text-xl inline-block font-bold uppercase main-color pl-6'>portfolio</p></div>
          <h1 className=" text-center font-bold  mb-4 text-white">Work i have done. </h1>
        </div>
      </div>
      {/* row 2 */}
      <div className="row justify-content-center">
        {/* ......... 1 */}
        <div className="col-md-4">
          <div className="card w-100 animate__animated animate__fadeInUp mt-5 overflow-hidden">
            <img src={protreact} className="card-img-top " alt="..." />
            <div className="card-body text-white border-round-bottom-md    ">
              <div className="flex justify-content-between ">
                <span className="font-bold  ">React Portfolio</span>
                <a target="_blank" rel="noreferrer" href='https://github.com/haseebulamin/Portfolio' className='text-white'><i className="text-2xl fa-brands fa-github"></i></a>
              </div>
              <p className="card-text">Single page Portfolio using React JS</p>
            </div>
          </div>
        </div>
        {/* ..........2 */}
        <div className="col-md-4">
          <div className="card w-100  animate__animated animate__fadeInUp mt-5 overflow-hidden">
            <img src={lifebuild} className="card-img-top" alt="..." />
            <div className="card-body text-white border-round-bottom-md  ">
              <div className="flex justify-content-between ">
                <span className="font-bold  ">Housing Scheme</span>
                <a target="_blank" rel="noreferrer" href='https://github.com/haseebulamin/Housing_scheme_project' className='text-white'><i className="text-2xl fa-brands fa-github"></i></a>
              </div>
              <p className="card-text">Landing page using Bootstrap</p>
            </div>
          </div>
        </div>
        {/* .........3 */}
        <div className="col-md-4">
          <div className="card w-100  animate__animated animate__fadeInUp mt-5 overflow-hidden">
            <img src={returent} className="card-img-top" alt="..." />
            <div className="card-body text-white border-round-bottom-md  ">
              <div className="flex justify-content-between ">
                <span className="font-bold  ">Restaurant Page</span>
                <a target="_blank" rel="noreferrer" href='https://github.com/haseebulamin/Resturant-site' className='text-white'><i className="text-2xl fa-brands fa-github"></i></a>
              </div>
              <p className="card-text">Landing page using Bootstrap</p>
            </div>
          </div>
        </div>
        {/* .......4   */}
        <div className="col-md-4">
          <div className="card w-100  animate__animated animate__fadeInUp mt-5 overflow-hidden">
            <img src={gym} className="card-img-top" alt="..." />
            <div className="card-body text-white border-round-bottom-md  ">
              <div className="flex justify-content-between ">
                <span className="font-bold  ">Gym Form</span>
                <a target="_blank" rel="noreferrer" href='https://github.com/haseebulamin/GYM-wbsite' className='text-white'><i className="text-2xl fa-brands fa-github"></i></a>
              </div>
              <p className="card-text">Form using HtML & CSS</p>
            </div>
          </div>
        </div>
        {/* ........ 5  */}
        <div className="col-md-4">
          <div className="card w-100  animate__animated animate__fadeInUp mt-5 overflow-hidden">
            <img src={newshour} className="card-img-top" alt="..." />
            <div className="card-body text-white border-round-bottom-md  ">
              <div className="flex justify-content-between ">
                <span className="font-bold  ">News App</span>
                <a target="_blank" rel="noreferrer" href='https://github.com/haseebulamin/hournews-app' className='text-white'><i className="text-2xl fa-brands fa-github"></i></a>
              </div>
              <p className="card-text">Single page app using React JS</p>
            </div>
          </div>
        </div>
        {/* ........ 6  */}
        <div className="col-md-4">
          <div className="card w-100  animate__animated animate__fadeInUp mt-5 overflow-hidden">
            <img src={socialmedia} className="card-img-top" alt="..." />
            <div className="card-body text-white border-round-bottom-md  ">
              <div className="flex justify-content-between ">
                <span className="font-bold  ">Socail Media</span>
                <a target="_blank" rel="noreferrer" href='https://github.com/haseebulamin/My-Social-Media' className='text-white'><i className="text-2xl fa-brands fa-github"></i></a>
              </div>
              <p className="card-text">Social media page using Bootstrap</p>
            </div>
          </div>
        </div>
        {/* ......... 7  */}
        <div className="col-md-4">
          <div className="card w-100  animate__animated animate__fadeInUp mt-5 overflow-hidden">
            <img src={htmlport} className="card-img-top" alt="..." />
            <div className="card-body text-white border-round-bottom-md  ">
              <div className="flex justify-content-between ">
                <span className="font-bold  ">Portfolio</span>
                <a target="_blank" rel="noreferrer" href='https://github.com/haseebulamin/Simple-Portfolio-html-css' className='text-white'><i className="text-2xl fa-brands fa-github"></i></a>
              </div>
              <p className="card-text">Porfolio landing page using HTML & CSS</p>
            </div>
          </div>
        </div>
        {/* ......... 8  */}
        <div className="col-md-4">
          <div className="card w-100  animate__animated animate__fadeInUp mt-5 overflow-hidden">
            <img src={devhack} className="card-img-top" alt="..." />
            <div className="card-body text-white border-round-bottom-md  ">
              <div className="flex justify-content-between ">
                <span className="font-bold  ">DevHack</span>
                <a target="_blank" rel="noreferrer" href='https://github.com/haseebulamin/work-for-DevHack' className='text-white'><i className="text-2xl fa-brands fa-github"></i></a>
              </div>
              <p className="card-text">Work for Devhack using Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  </section>
  <Footer/>
  </>
  )
}
