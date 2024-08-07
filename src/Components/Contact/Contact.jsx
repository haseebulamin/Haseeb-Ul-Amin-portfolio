import React,{useState,useEffect} from 'react'
import './Contact.scss'
import '../Common/Button.scss'
import '../Common/Variables.scss'
import Information from './Information'
import Footer from '../Footer/Footer'
import Header from '../Navbar/Header'
import { useFormik } from 'formik'
import { submitSchema } from '../Schemas/Index'
import Loader from '../Loader/Loader'

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
}
export default function Contact() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
   setLoading(true);
   setInterval(() => {
    setLoading(false);
   }, 1000);

  },[])

  const {values, errors, handleBlur, touched, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: submitSchema,
    onSubmit: (values, action)=>{
      console.log("value", values);
      action.resetForm();
    },
  });

  return (
    <>
  {
    loading? <Loader/> :
    <>
    <Header/>
    <div id="contact" className="h-full text-white">
    <div className='text-center py-4'><p data-aos="zoom-in" className='title-line text-xl inline-block font-bold uppercase main-color pl-6'>Get In touch.</p></div>
      <Information />
    <div className="row h-full g-0 ">
      <div className=" col-md-4 flex flex-column align-items-center p-5 ">
      <div className='text-center py-4'><p data-aos="zoom-in" className='title-line text-xl inline-block font-bold uppercase main-color pl-6'>Let's connect</p></div>
     <div data-aos="fade-right" className="icon flex flex-column">
     <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/haseebulamin/" className='no-underline text-white my-2 '><i className="text-xl fa-brands fa-linkedin-in  p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'> LinkedIn</span></a>
      <a target='_blank' rel="noreferrer" href="https://github.com/haseebulamin" className='no-underline text-white my-2'><i className="text-xl fa-brands fa-github p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'>Github</span></a>
      <a target='_blank' rel="noreferrer" href="https://www.instagram.com/hasii_choudhary/" className='no-underline text-white my-2'><i className="text-xl fa-brands fa-instagram p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'> Instagram</span></a>
      <a target='_blank' rel="noreferrer" href="https://twitter.com/Hasii_choudhary" className='no-underline text-white my-2'><i className="text-xl fa-brands fa-twitter p-3 rounded-circle bg-low"></i><span className='text-lg font-medium  ml-4'>Twitter</span></a>
     </div>
      </div>
      <div className="col-md-8 col-sm-12 flex flex-column p-5 ">
      <div className='text-center py-4'><p data-aos="zoom-in" className='title-line text-xl inline-block font-bold uppercase main-color pl-6'>Send me a message</p></div>
      <form data-aos="fade-left" onSubmit={handleSubmit}>
        <div className="row mt-1">
        <div className="col-md-6 mt-3">
            <input name="name" autoComplete='off' id="name"  type="text" className='w-100 bg-low input text-white px-3 border-round-3xl text-lg' placeholder='Name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
           { errors.name && touched.name ? <p className='ml-4 text-danger text-sm mb-0 '>{errors.name}</p>: null}
        </div>
        <div className="col-md-6 mt-3">
        <input  name="email" autoComplete='off' id="email" type="email" className='w-100 bg-low input text-white px-3 border-round-3xl text-lg'  placeholder='Email'value={values.email} onChange={handleChange} onBlur={handleBlur}/>
        { errors.email && touched.email ? <p className='ml-4 text-danger text-sm mb-0 '>{errors.email}</p>: null}
        </div>
        <div className="col-md-12 mt-3">
        <input  name="subject" autoComplete='off' id="subject" type="text" className='w-100 bg-low input px-3 text-white border-round-3xl text-lg'  placeholder='Subject'value={values.subject} onChange={handleChange} onBlur={handleBlur}/>
        { errors.subject && touched.subject ? <p className='ml-4 text-danger text-sm mb-0 '>{errors.subject}</p>: null}
        </div>
        <div className="col-md-12 mt-3">
        <textarea name="message" autoComplete='off' id="message" className='w-100 bg-low textarea text-white px-3 py-2 border-round-3xl text-lg' cols="30" rows="4" placeholder='Create a message here' value={values.message} onChange={handleChange} onBlur={handleBlur}></textarea>
        { errors.message && touched.message ? <p className='ml-4 text-danger text-sm mb-0 '>{errors.message}</p>: null}

        </div>
        <div className="col-md-12 mt-3 mb-2">
        <div className="button inline-block " ><button type="submit" className="bt main-color px-4 py-2  border-0 font-medium font-normal text-lg border-round-3xl overflow-hidden relative ">Submit</button></div>
        </div>                
         </div>
       </form>
      </div>
      <div id='map' className="col-12">
      <div className='p-5 h-20rem overflow-hidden'>
        <iframe data-aos="zoom-in" className='w-full h-full border-round-xl opacity-50' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13607.362757429244!2d74.3215625!3d31.5010625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919055f653840d3%3A0x41ec31c45b542850!2sBarkat%20Market!5e0!3m2!1sen!2s!4v1722070937616!5m2!1sen!2s"  allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
    </div>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  }
   </>
  )
}
