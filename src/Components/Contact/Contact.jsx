import React from 'react'
import './Contact.scss'
import '../Common/Button.scss'
import Information from './Information'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useFormik } from 'formik'

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
}
export default function Contact() {

  const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    onSubmit: (values)=>{
      console.log(values);
    },
  });

  return (
    <>
    <Navbar/>
    <div id="contact" className="h-full text-white">
    <div className='text-center py-4'><p className='get-title text-xl inline-block font-bold uppercase main-color pl-6 animate__animated animate__fadeInDown'>Get In touch.</p></div>
      <Information />
    <div className="row h-full g-0 ">
      <div className=" col-md-4 flex flex-column align-items-center p-5 animate__animated animate__fadeInLeft">
      <div className='text-center py-4'><p className='get-title text-xl inline-block font-bold uppercase main-color pl-6'>Let's connect</p></div>
     <div className="icon flex flex-column">
     <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/haseebulamin/" className='no-underline text-white my-2 '><i className="text-xl fa-brands fa-linkedin-in  p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'> LinkedIn</span></a>
      <a target='_blank' rel="noreferrer" href="https://github.com/haseebulamin" className='no-underline text-white my-2'><i className="text-xl fa-brands fa-github p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'>Github</span></a>
      <a target='_blank' rel="noreferrer" href="https://www.instagram.com/hasii_choudhary/" className='no-underline text-white my-2'><i className="text-xl fa-brands fa-instagram p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'> Instagram</span></a>
      <a target='_blank' rel="noreferrer" href="https://twitter.com/Hasii_choudhary" className='no-underline text-white my-2'><i className="text-xl fa-brands fa-twitter p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'>Twitter</span></a>
     </div>
      </div>
      <div className="col-md-8 col-sm-12 flex flex-column p-5 animate__animated animate__fadeInRight">
      <div className='text-center py-4'><p className='get-title text-xl inline-block font-bold uppercase main-color pl-6'>Send me a message</p></div>





      <form onSubmit={handleSubmit}>
        <div className="row mt-1">
        <div className="col-md-6 mt-3">
            <input name="name" autoComplete='off' id="name"  type="text" className='w-100 bg-low input text-white px-3 border-round-3xl text-lg' placeholder='Name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
        </div>
        <div className="col-md-6 mt-3">
        <input  name="email" autoComplete='off' id="email" type="email" className='w-100 bg-low input text-white px-3 border-round-3xl text-lg'  placeholder='Email'value={values.email} onChange={handleChange} onBlur={handleBlur}/>
        </div>
        <div className="col-md-12 mt-3">
        <input  name="subject" autoComplete='off' id="subject" type="text" className='w-100 bg-low input px-3 text-white border-round-3xl text-lg'  placeholder='Subject'value={values.subject} onChange={handleChange} onBlur={handleBlur}/>
        </div>
        <div className="col-md-12 mt-3">
        <textarea name="message" autoComplete='off' id="message" className='w-100 bg-low textarea text-white px-3 py-2 border-round-3xl text-lg' cols="30" rows="4" placeholder='Create a message here' value={values.message} onChange={handleChange} onBlur={handleBlur}></textarea>
        </div>
        <div className="col-md-12 mt-3 mb-2">
        <div className="button inline-block " ><button type="submit" className="bt main-color px-4 py-2  border-0 font-medium font-normal text-lg border-round-3xl overflow-hidden relative ">Submit</button></div>
        </div>                
         </div>
       </form>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}
