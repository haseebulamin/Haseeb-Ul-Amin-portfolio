import React from "react";
import "./MyCertificates.scss";
import html from "../../Images/HTML.jpg";
import css from "../../Images/CSS.jpg";
import js from "../../Images/JS.jpg";
import react from "../../Images/React.jpg";
import htmlcss from "../../Images/waveHTMLCSS.png";
import wavejs from "../../Images/waveJS.png";
import '../Common/Variables.scss';
import Footer from "../Footer/Footer";
export default function MyCertificates() {
  return (
    <>
    <section id="mycertificate" className="pt-4">
      <div className="container ">
        {/* 1st row  */}
        <div className="row justify-content-center ">
          <div className="col-md-7 mb-4 animate__animated animate__fadeInDown">
          <div className='text-center py-3'><p className='certi-title text-xl inline-block font-bold uppercase main-color pl-6'>CERTIFICATES</p></div>
            <h1 className=" font-bold text-white text-center mb-2 ">Courses I have done.</h1>
          </div>
        </div>
        {/* 2nd row  */}
        <div className="row mt-2 justify-content-center px-3">
          {/* -----------1 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow animate__animated animate__fadeInLeft my-3  border-0 border-round-bottom-lg">
              <img src={react} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://olympus.mygreatlearning.com/courses/52045/certificate" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------2 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow animate__animated animate__fadeInLeft my-3  border-0 border-round-bottom-lg">
              <img src={js} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://olympus.mygreatlearning.com/courses/38643/certificate" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------3 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow animate__animated animate__fadeInLeft my-3 border-0 border-round-bottom-lg">
              <img src={css} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://olympus.mygreatlearning.com/courses/12800/certificate" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------4 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow animate__animated animate__fadeInRight my-3  border-0 border-round-bottom-lg">
              <img src={html} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://olympus.mygreatlearning.com/courses/12761/certificate" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------5 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow animate__animated animate__fadeInRight my-3  border-0 border-round-bottom-lg">
              <img src={wavejs} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://kandi.verified.cv/en/verify/65414708620262?ref=email" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------6 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow animate__animated animate__fadeInRight my-3  border-0 border-round-bottom-lg">
              <img src={htmlcss} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="/" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
