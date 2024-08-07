import React,{useState,useEffect} from "react";
import "./MyCertificates.scss";
import css from "../../Images/HTML.jpg";
import html from "../../Images/CSS.jpg";
import js from "../../Images/JS.jpg";
import react from "../../Images/React.jpg";
import htmlcss from "../../Images/waveHTMLCSS.png";
import wavejs from "../../Images/waveJS.png";
import frontend from "../../Images/frontend.jpg";
import azure from "../../Images/Azure MS.jpg";
import JSsimpli from "../../Images/JS simple.jpg";
import fundamental from "../../Images/fundamental.jpg"
import awesome from "../../Images/awesome.jpg"
import attend from "../../Images/attend.jpg"
import '../Common/Variables.scss';
import Footer from "../Footer/Footer";
import Header from "../Navbar/Header";
import Loader from "../Loader/Loader";
export default function MyCertificates() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
   setLoading(true);
   setInterval(() => {
    setLoading(false);
   }, 1500);

  },[])
  return (
    <>
    {
      loading? <Loader/> :
      <>
    <Header/>
    <section id="mycertificate" className="pt-4">
      <div className="container ">
        {/* 1st row  */}
        <div className="row justify-content-center ">
          <div className="col-md-7 mb-4">
          <div className='text-center py-2'><p data-aos="zoom-in" className='title-line text-xl inline-block font-bold uppercase main-color pl-6'>CERTIFICATES</p></div>
            <h1 data-aos="zoom-in" className=" font-bold text-white text-center mb-2 ">Courses I have done.</h1>
          </div>
        </div>
        {/* 2nd row  */}
        <div className="row mt-2 justify-content-center px-3">
          {/* -----------1 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3  border-0 border-round-bottom-lg" data-aos="fade-down">
              <img src={react} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://olympus.mygreatlearning.com/courses/52045/certificate" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------2*/}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3  border-0 border-round-bottom-lg" data-aos="fade-down">
              <img src={azure} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://drive.google.com/file/d/1m6LIul3wBzQVOgiy_YJz8mZl9NgHYd0A/view?usp=sharing" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------3 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3  border-0 border-round-bottom-lg" data-aos="fade-down">
              <img src={frontend} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://certificates.simplicdn.net/share/4844427_1706885415.pdf" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------4 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3  border-0 border-round-bottom-lg" data-aos="fade-down" data-aos-offset="100">
              <img src={js} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://olympus.mygreatlearning.com/courses/38643/certificate" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------5 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3 border-0 border-round-bottom-lg" data-aos="fade-down" data-aos-offset="100">
              <img src={JSsimpli} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://certificates.simplicdn.net/share/4857331_1707319558.pdf" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------6 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3 border-0 border-round-bottom-lg" data-aos="fade-down" data-aos-offset="100">
              <img src={css} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://olympus.mygreatlearning.com/courses/12800/certificate" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------7 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3  border-0 border-round-bottom-lg" data-aos="fade-down">
              <img src={html} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://olympus.mygreatlearning.com/courses/12761/certificate" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------8 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3  border-0 border-round-bottom-lg" data-aos="fade-down">
              <img src={wavejs} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://kandi.verified.cv/en/verify/65414708620262?ref=email" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* -----------9 */}
          <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3  border-0 border-round-bottom-lg" data-aos="fade-down">
              <img src={htmlcss} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://drive.google.com/file/d/1a7oIL3m0E8_JyVqbJN7DbVhgVYszJJBs/view?usp=sharing" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
            {/* -----------10 */}
            <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3  border-0 border-round-bottom-lg" data-aos="fade-down">
              <img src={awesome} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://drive.google.com/file/d/1_uWcdWpxDqEBI0g90Zkir6Vi3J6Fsg5M/view?usp=sharing" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
           {/* -----------11 */}
           <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3  border-0 border-round-bottom-lg" data-aos="fade-down">
              <img src={fundamental} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://drive.google.com/file/d/1l9hEXM51JH_aH0otfiofryCqvTe2QO3P/view?usp=sharing" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
           {/* -----------12 */}
           <div className="col-md-4 my-3 ">
            <div className="card w-100 shadow  my-3  border-0 border-round-bottom-lg" data-aos="fade-down">
              <img src={attend} className="card-img-top border-round-lg" alt="..." />
              <div className="overlay border-round-lg">
                <div className="flex align-items-center justify-content-center h-full">
                <a href="https://drive.google.com/file/d/1l9hEXM51JH_aH0otfiofryCqvTe2QO3P/view?usp=sharing" target="_blank" rel="noreferrer" className="text-white"><i class="fa-solid fa-eye text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  }
   </>
  );
}
