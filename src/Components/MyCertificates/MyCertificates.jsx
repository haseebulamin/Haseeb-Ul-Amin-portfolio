import React from 'react'
import './MyCertificates.scss'
import html from '../../Images/HTML.jpg';
import css from '../../Images/CSS.jpg';
import js from '../../Images/JS.jpg';
import react from '../../Images/React.jpg';
import htmlcss from '../../Images/waveHTMLCSS.png';
import wavejs from '../../Images/waveJS.png';
export default function MyCertificates() {
  return (
    <section id="portfolio"  className='pt-4'>
    <div className="container ">
        {/* 1st row  */}
        <div className="row justify-content-center">
        <div className="col-md-7 mb-4 animate__animated animate__fadeInUp">
        <p className='para text-primary my-2 d-block text-center text-uppercase '>portfolio</p>
        <h1 className=' head text-center lh-base  mb-4 '>My Latest Work</h1>
        </div>
        </div>
    {/* 2nd row  */}
    <div className="row mt-2 justify-content-center">
        {/* -----------1 */}
            <div className="col-md-4 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${react})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
        {/* -----------2 */}
        <div className="col-md-4 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${js})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
        {/* -----------3 */}
            <div className="col-md-4 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${wavejs})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
        {/* -----------4 */}
        <div className="col-md-4 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${htmlcss})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
        {/* -----------5 */}
            <div className="col-md-4 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${css})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
        {/* -----------6 */}
        <div className="col-md-4 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${html})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
            </div>
</div>
</section>
  )
}
