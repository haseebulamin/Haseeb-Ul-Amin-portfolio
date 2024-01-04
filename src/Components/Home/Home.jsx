import React from "react";
import "./Home.scss";
export default function Home() {
  return (
    <div id="home" className="h-full">
      <div className="row h-full">
        <div className="col-md-5 col-sm-12 flex flex-column justify-content-center ">
          <div className="content pl-6">
          <div className="msg_box my-2">
            <span className="box main-bg text-white">Hello</span>
            <span className="icon main-color"><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <h1 className="text-6xl font-bold">I'm Haseeb Ul Amin</h1>
          <h4 className="text-4xl font-medium">I am frontend developer.</h4>
          <p>Experienced React.js Frontend Developer, transforming designs into sleek, user-friendly interfaces for optimal digital experiences.</p>
          <button className="py-2 px-3 mr-2 border-color bg-transparent outline-none font-normal text-md border-round-3xl"><a href="/" className="no-underline main-color">More About me</a></button>
          <button className="py-2 px-3 mx-2 border-color bg-transparent outline-none font-normal text-md border-round-3xl"><a href="/" className="no-underline main-color" >Download CV</a></button>
          </div>
        </div>

        <div className="col-md-7 col-sm-12 "> col 8</div>
      </div>
    </div>
  );
}
