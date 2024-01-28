import React, { useContext, useState } from 'react'
import './Navbar.css'
import { BlurContext } from '../Pages/Home'

function Navbar() {
    const [active, setActive] = useState('home')
    const [isBlurred, setIsBlurred] = useContext(BlurContext)
  return (
    <nav class="navbar navbar-expand-lg fixed-top py-4 navbar-light bg-light" style={{opacity:isBlurred? "0.8":"1"}}>
        <a class="navbar-brand" href="#">VYVIDH 24</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class={`nav-item mx-3 ${active=="home"?'active':''}`}>
                    <a class="nav-link" href="#" onClick={()=>setActive('home')}>HOME <span class="sr-only">(current)</span></a>
                </li>
                <li class={`nav-item mx-3 ${active=="main_events"?'active':''}`}>
                    <a class="nav-link" href="#main_events" onClick={()=>setActive('main_events')}>MAIN EVENTS</a>
                </li>
                <li class={`nav-item mx-3 ${active=="about"?'active':''}`}>
                    <a class="nav-link" href="#about" onClick={()=>setActive('about')}>ABOUT US</a>
                </li>
                <li class={`nav-item mx-3 ${active=="department_events"?'active':''}`}>
                    <a class="nav-link" href="#department_events" onClick={()=>setActive('department_events')}>DEPARTMENT EVENTS</a>
                </li>
                <li class={`nav-item mx-3 ${active=="gallery"?'active':''}`}>
                    <a class="nav-link" href="#" onClick={()=>setActive('gallery')}>GALLERY</a>
                </li>
                <li class={`nav-item mx-3 ${active=="d_addiction"?'active':''}`}>
                    <a class="nav-link" href="#" onClick={()=>setActive('d_addiction')}>D ADDICTION</a>
                </li>
                <li class={`nav-item mx-3 ${active=="collector"?'active':''}`}>
                    <a class="nav-link" href="#" onClick={()=>setActive('collector')}>COLLECTOR MESSAGE</a>
                </li>
                <li class={`nav-item mx-3 ${active=="contact"?'active':''}`}>
                    <a class="nav-link" href="#contact" onClick={()=>setActive('contact')}>CONTACT</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar