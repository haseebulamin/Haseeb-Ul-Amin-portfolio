import React from "react";
import "./Home.scss";
import "../Common/Button.scss"
import profile from "../../Images/profile.jpg"
// import Navbar from "../Navbar/Navbar";
export default function Home() {
  return (
    <div id="home" className="text-white h-screen overflow-hidden">
      {/* <Navbar/> */}
      <div className="container h-full">
      <div className="row h-full">
      <div className="col-lg-6 order-lg-last  flex align-items-center justify-content-center"> 
        <img src={profile} alt="not insert" height={300} width={300} className="profile rounded-circle"/>
        </div>
        <div className="col-lg-6  order-lg-first flex flex-column justify-content-center ">
          <div className="content pl-6">
          <div className="msg_box my-2">
            <span className="box main-bg text-white">Hello</span>
            <span className="icon main-color"><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <h1 className="text-6xl font-bold">I'm Haseeb Ul Amin</h1>
          <div className="inline-block">
          <h4 className="text text-4xl font-medium">Frontend Developer</h4>
          </div>
          <p className="mt-2 skill-line ">Experienced front-end Developer with a demonstrated history of working in the computer software industry.</p>
          <div className="button inline-block mr-2 mt-2" ><a type="button" href="/" className="no-underline main-color px-4 py-2 bg-low font-normal text-md border-round-3xl bg-transparent overflow-hidden relative ">More About me</a></div>
          <div className="button inline-block ml-2 mt-2" ><a type="button" href="/CV.pdf" download="Mycv.pdf"  className="no-underline bg-low main-color px-4 py-2 font-normal text-md border-round-3xl bg-transparent overflow-hidden relative ">Download CV</a></div>
          </div>
        </div>
       
      </div>
      </div>
    </div>
  );
}
