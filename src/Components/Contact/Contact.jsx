import React from 'react'
import './Contact.scss'
import '../Common/Button.scss'
export default function Contact() {
  return (
    <div id="contact" className="h-full text-white ">
    <div className="row h-full">
      <div className="col-md-8 col-sm-12 flex flex-column justify-content-center px-5">
        <h1 className='text-6xl mb-5'>Let's build something together.</h1>
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
      <div className="col-md-4 col-sm-12 flex justify-content-center align-items-center px-5 ">
        <div className=" shadow-8 w-full border-round-3xl px-5 py-3">
         <div className="flex justify-content-center flex-column align-items-center">
            <h6 className='text-5xl font-bold'>Haseeb Ul Amin</h6>
            <p>Frontend Developer</p>
         </div>
        <hr />
        <div class="mb-3 border-0 ">
          <div class="  text-white text-center">
          <h6 className='text-lg underline'>Email</h6>
          <p className='mb-0 inline'>haseebulamin07@gmail.com</p>
          </div>
        </div>
        <hr />
        <div class="mb-3  border-0 ">
          <div class=" text-white text-center">
          <h6 className='text-lg underline'>Phone Number</h6>
          <p className='mb-0'>+92 342 3739634</p>
          </div>
        </div>
        <hr />
        <div class="mb-3  border-0  ">
          <div class=" text-white text-center">
          <h6 className='text-lg underline'>Address</h6>
          <p className='mb-0'>Sahiwal, Punjab, Pakistan</p>
          </div>
        </div>
        <hr />
        <div class="mb-3  border-0 ">
          <div class="icon flex align-items-center justify-content-around">
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/haseebulamin/" className='no-underline flex align-items-center justify-content-center border-circle main-color'><i class="text-xl fa-brands fa-linkedin-in"></i></a>
          <a target='_blank' rel="noreferrer" href="https://github.com/haseebulamin" className='no-underline flex align-items-center justify-content-center border-circle main-color'><i class="text-xl fa-brands fa-github"></i></a>
          <a target='_blank' rel="noreferrer" href="https://www.instagram.com/hasii_choudhary/" className='no-underline flex align-items-center justify-content-center border-circle main-color'><i class="text-xl fa-brands fa-instagram"></i></a>
          <a target='_blank' rel="noreferrer" href="https://twitter.com/Hasii_choudhary" className='no-underline flex align-items-center justify-content-center border-circle main-color'><i class="text-xl fa-brands fa-twitter"></i></a>
          <a target='_blank' rel="noreferrer" href="https://www.facebook.com/profile.php?id=100051461030832" className='no-underline flex align-items-center justify-content-center border-circle main-color'><i class="text-xl fa-brands fa-facebook-f"></i></a>
          </div>
        </div>
       
        


         
        </div>
      </div>
    </div>
  </div>
  )
}
