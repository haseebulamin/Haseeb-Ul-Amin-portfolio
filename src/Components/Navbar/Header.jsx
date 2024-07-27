import React,{useState} from 'react'
import './Header.scss'
import hlogo from '../../Images/Hlogo.png'
import '../Common/Variables.scss'
import { Link } from 'react-router-dom';
export default function Header() {
    const [icon, setIcon] = useState("fa-bars")
  return (
    <nav class="navbar bg-low">
    <div class="container flex justify-content-between">
    <Link to="/"><img src={hlogo} height={40} width={40} alt="logo not insert" /></Link>
    <Link  to='/menu'><button onMouseEnter={()=>setIcon("fa-grip-lines")} onMouseLeave={()=>setIcon("fa-bars")} className='px-2 py-1 bg-low border-0'><i class={`fa-solid ${icon} text-2xl text-white`}></i></button></Link>
  </div>
</nav>
  )
}
