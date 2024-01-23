import React from "react";
import "./MyCertificates.scss";
// import html from "../../Images/HTML.jpg";
// import css from "../../Images/CSS.jpg";
// import js from "../../Images/JS.jpg";
import react from "../../Images/React.jpg";
// import htmlcss from "../../Images/waveHTMLCSS.png";
// import wavejs from "../../Images/waveJS.png";
import '../Common/Variables.scss';
export default function MyCertificates() {
  return (
    <section id="mycertificate" className="pt-4 bg-danger">
      <div className="container ">
        {/* 1st row  */}
        <div className="row justify-content-center">
          <div className="col-md-7 mb-4 animate__animated animate__fadeInUp">
            <p className="para text-primary my-2 d-block text-center text-uppercase ">
              portfolio
            </p>
            <h1 className=" head text-center lh-base  mb-4 ">My Latest Work</h1>
          </div>
        </div>
        {/* 2nd row  */}
        <div className="row mt-2 justify-content-center">
          {/* -----------1 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow animate__animated animate__fadeInUp my-3  border-0 border-round-bottom-lg">
              <img src={react} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://olympus.mygreatlearning.com/courses/52045/certificate" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
