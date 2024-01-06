import React from 'react'
import './Resume.scss'
export default function Resume() {
  return (
    <div id="resume" className="h-full text-white px-6 py-3">
        <h1 className='font-bold'>Haseeb Ul Amin</h1>
        <p className='font-bold'>Frontend Developer</p>
        <p>Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in JavaScript, React.js, ES6, Git, React State, JSX, React Hooks, Frontend Developer. Strong engineering professional with a Bachelor of Science - BS focused in Computer Software Engineering from COMSTAS University Islamabad (Sahiwal Campus) of Pakistan.</p>
      <div className="flex flex-wrap justify-content-around bg-low py-3">
        <p className='m-0 '><i class="fa-solid fa-envelope mr-3 pt-1"></i>haseebulamin07@gmail.com</p>
        <p className='m-0 '><i class="fa-solid fa-phone mr-3 pt-1"></i>+92 342 3739624</p>
        <a className='m-0 no-underline text-white' href='https://www.linkedin.com/in/haseebulamin/'><i class="text-xl fa-brands fa-linkedin mr-3 pt-1"></i>Haseeb Ul Amin</a>
        <p className='m-0 '><i class="fa-solid fa-location-dot mr-3 pt-1"></i>Sahiwal/Pakistan</p>
      </div>
    </div>
  )
}
