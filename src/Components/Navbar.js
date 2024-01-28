import React, { useContext, useState } from 'react'
import './Navbar.css'
import { BlurContext } from '../Pages/Home'

function Navbar() {
    const [active, setActive] = useState('home')
    const [isBlurred, setIsBlurred] = useContext(BlurContext)
  return (
    <nav id="navbar" class="navbar navbar-expand-lg py-4 navbar-light " style={{opacity:isBlurred? "1":"1"}}>
        <a class="navbar-brand" id="navbar-brand" href="#">VYVIDH 24</a>
        <button class="navbar-toggler" style={{backgroundColor: 'var(--primary)', border: 'none', color: '#fff'}} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav mt-2 mt-lg-0">
                <li class={`nav-item mx-3 d-flex justify-content-center align-items-center ${active=="home"?'active':''}`}>
                    <a class=" nav-link nlink text-center" href="#" onClick={()=>setActive('home')} id="nlink" >HOME <span class="sr-only">(current)</span></a>
                </li>
                <li class={`nav-item mx-3 d-flex justify-content-center align-items-center ${active=="main_events"?'active':''}`}>
                    <a class="nav-link nlink text-center" href="#main_events" id="nlink" onClick={()=>setActive('main_events')}>MAIN EVENTS</a>
                </li>
                <li class={`nav-item mx-3 d-flex justify-content-center align-items-center ${active=="about"?'active':''}`}>
                    <a class="nav-link text-center" id="nlink" href="#about" onClick={()=>setActive('about')}>ABOUT US</a>
                </li>
                <li class={`nav-item mx-3 d-flex justify-content-center align-items-center ${active=="department_events"?'active':''}`}>
                    <a class="nav-link text-center" href="#department_events" id="nlink" onClick={()=>setActive('department_events')}>DEPARTMENT EVENTS</a>
                </li>
                {/* <li class={`nav-item mx-3 d-flex align-items-center ${active=="gallery"?'active':''}`}>
                    <a class="nav-link text-center" href="#" id="nlink" onClick={()=>setActive('gallery')}>GALLERY</a>
                </li> */}
                {/* <li class={`nav-item mx-3 d-flex align-items-center ${active=="d_addiction"?'active':''}`}>
                    <a class="nav-link text-center" href="#" id="nlink" onClick={()=>setActive('d_addiction')}>D ADDICTION</a>
                </li> */}
                {/* <li class={`nav-item mx-3 d-flex align-items-center ${active=="collector"?'active':''}`}>
                    <a class="nav-link text-center" href="#" id="nlink" onClick={()=>setActive('collector')}>COLLECTOR MESSAGE</a>
                </li> */}
                <li class={`nav-item ml-3 d-flex justify-content-center align-items-center ${active=="contact"?'active':''}`}>
                    <a class="nav-link text-center" href="#contact" id="nlink" onClick={()=>setActive('contact')}>CONTACT</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar