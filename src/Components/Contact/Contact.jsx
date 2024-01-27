import React from 'react'
import './Contact.scss'
import '../Common/Button.scss'
import Information from './Information'
export default function Contact() {
  return (
    <>
    <div id="contact" className="h-full text-white bg-dark">
      <h1 className='text-6xl py-5 main-color text-center font-bold'>Get in Touch.</h1>
      <Information/>
    <div className="row h-full g-0 ">
      <div className=" col-md-4 flex flex-column align-items-center p-5">
      <h3 className='main-color'>Let's Connect!</h3>
     <div className="icon flex flex-column">
     <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/haseebulamin/" className='no-underline text-white my-2 '><i className="text-xl fa-brands fa-linkedin-in  p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'> LinkedIn</span></a>
      <a target='_blank' rel="noreferrer" href="https://github.com/haseebulamin" className='no-underline text-white my-2'><i className="text-xl fa-brands fa-github p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'>Github</span></a>
      <a target='_blank' rel="noreferrer" href="https://www.instagram.com/hasii_choudhary/" className='no-underline text-white my-2'><i className="text-xl fa-brands fa-instagram p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'> Instagram</span></a>
      <a target='_blank' rel="noreferrer" href="https://twitter.com/Hasii_choudhary" className='no-underline text-white my-2'><i className="text-xl fa-brands fa-twitter p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'>Twitter</span></a>
     </div>
      </div>
      <div className="col-md-8 col-sm-12 flex flex-column p-5">
      <h3 className='main-color'>Send Me a Message</h3>
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
        <div className="button inline-block " ><a type="submit" href="/" className="no-underline main-color px-4 py-2 font-medium font-normal text-lg border-round-3xl overflow-hidden relative ">Submit</a></div>
        </div>                
         </div>
       </form>
      </div>
    </div>
  </div>
  </>
  )
}
