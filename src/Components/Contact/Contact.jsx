import React from 'react'
import './Contact.scss'
import '../Common/Button.scss'
export default function Contact() {
  return (
    <div id="contact" className="h-full text-white ">
    <div className="row h-full">
      <div className="col-md-8 col-sm-12 flex flex-column justify-content-center bd-danger px-5">
      <form action="">
        <div className="row mt-1">
        <div className="col-md-6 mt-3">
            <input type="text" className='w-100 bg-low input text-white px-3 border-round-3xl text-lg' placeholder='Name'/>
        </div>
        <div className="col-md-6 mt-3">
        <input type="email" className='w-100 bg-low input text-white px-3 border-round-3xl text-lg'  placeholder='Email'/>
        </div>
        <div className="col-md-12 mt-3">
        <input type="email" className='w-100 bg-low input px-3 text-white border-round-3xl text-lg'  placeholder='Subject'/>
        </div>
        <div className="col-md-12 mt-3">
        <textarea name="message" className='w-100 bg-low textarea text-white px-3 py-2 border-round-3xl text-lg' id="message" cols="30" rows="4" placeholder='Create a message here'></textarea>
        </div>
        <div className="col-md-12 mt-3 mb-2">
        <div className="button inline-block " ><a type="submit" href="/" className="no-underline main-color px-4 py-2  font-normal text-lg border-round-3xl overflow-hidden relative ">Submit</a></div>
        </div>                
         </div>
       </form>
      </div>
      <div className="col-md-4 col-sm-12 bg-waring"> col 8</div>
    </div>
  </div>
  )
}
