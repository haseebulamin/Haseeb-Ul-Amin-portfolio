import React from "react";
import "./Home.scss";
import "../Common/Button.scss"
export default function Home() {
  return (
    <div id="home" className="h-full text-white">
      <div className="row h-full">
        <div className="col-md-5 col-sm-12 flex flex-column justify-content-center ">
          <div className="content pl-6">
          <div className="msg_box my-2">
            <span className="box main-bg text-white">Hello</span>
            <span className="icon main-color"><i class="fa-solid fa-caret-down"></i></span>
          </div>
          <h1 className="text-6xl font-bold">I'm Haseeb Ul Amin</h1>
          <div className="inline-block">
          <h4 className="text text-4xl font-medium">Frontend Developer</h4>
          </div>
          <p className="mt-2 ">Experienced front-end Developer with a demonstrated history of working in the computer software industry.</p>
          <div className="button inline-block mr-2 mt-2" ><a type="button" href="/" className="no-underline main-color px-4 py-2 font-normal text-md border-round-3xl bg-transparent overflow-hidden relative ">More About me</a></div>
          <div className="button inline-block ml-2 mt-2" ><a type="button" href="/CV.pdf" download="Mycv.pdf"  className="no-underline main-color px-4 py-2 font-normal text-md border-round-3xl bg-transparent overflow-hidden relative ">Download CV</a></div>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 "> col 8</div>
      </div>
    </div>
  );
}
