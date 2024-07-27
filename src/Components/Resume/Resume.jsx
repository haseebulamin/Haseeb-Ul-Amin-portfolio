import React,{useState,useEffect} from 'react'
import './Resume.scss'
import Skills from './Skills/Skills'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Footer from '../Footer/Footer'
import Header from '../Navbar/Header'
import Loader from '../Loader/Loader'
export default function Resume() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
   setLoading(true);
   setInterval(() => {
    setLoading(false);
   }, 1000);

  },[])
  return (
    <>
    {
      loading? <Loader/> :
      <>
      <Header/>
    <div id="Resume" className=" overflow-hidden " data-bs-ride="false" >
    <Education/>
    <Experience/>
    <Skills/>
    <Footer/>
  </div>
  </>
   }
   </>
  )
}
