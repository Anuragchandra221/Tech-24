import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
// import { BlurContext } from '../App'

function Navbar() {
    const [active, setActive] = useState('home')
    // const [isBlurred, setIsBlurred] = useContext(BlurContext)
  return (
    <nav id="navbar" className="navbar py-4 py-lg-2 navbar-expand-xl navbar-light " >
        <a className="navbar-brand" id="navbar-brand" style={{fontFamily:"autumn", fontWeight: "900", opacity: "1 "}} href="#">Vyvidh <span style={{color: "var(--secondary)"}}>24</span></a>
        <button className="navbar-toggler" style={{backgroundColor: 'var(--primary)', border: 'none', color: '#fff'}} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav mt-2 mt-lg-0">
                <li className={`nav-item mr-xl-4 d-flex justify-content-center align-items-center mx-auto ${active=="home"?'active':''}`}> 
                    <a className=" nav-link nlink text-center  p-2 p-0" href="#" onClick={()=>setActive('home')} id="nlink" style={{cursor: 'pointer'}} >HOME <span className="sr-only">(current)</span></a>
                </li>
                
                <li className={`nav-item mr-xl-4 d-flex justify-content-center align-items-center ${active=="about"?'active':''}`}>
                    <a className="nav-link text-center p-2 p-0" id="nlink" href="/#about" onClick={()=>setActive('about')}>ABOUT US</a>
                </li>
                <li className={`nav-item mr-xl-4 d-flex justify-content-center align-items-center ${active=="main_events"?'active':''}`}>
                    <a className="nav-link nlink text-center p-2 p-0" href="/#main_events" id="nlink" onClick={()=>setActive('main_events')}>MAIN EVENTS</a>
                </li>
                <li className={`nav-item mr-xl-4 d-flex justify-content-center align-items-center ${active=="department_events"?'active':''}`}>
                    <a className="nav-link text-center p-2 p-0" href="#department_events" id="nlink" onClick={()=>setActive('department_events')}>DEPARTMENT EVENTS</a>
                </li>
                <li className={`nav-item mr-xl-4 d-flex justify-content-center align-items-center ${active=="gallery"?'active':''}`}>
                    <a className="nav-link text-center p-2 p-0" href="/gallery" id="nlink" onClick={()=>setActive('gallery')}>GALLERY</a>
                </li>
                <li className={`nav-item mr-xl-4 d-flex justify-content-center align-items-center ${active=="dance"?'active':''}`}>
                    <a className="nav-link text-center p-2 p-0" href="#daddiction" id="nlink" onClick={()=>setActive('dance')}>DADDICTION</a>
                </li>
                {/* <li className={`nav-item mx-xl-3 d-flex align-items-center ${active=="d_addiction"?'active':''}`}>
                    <a className="nav-link text-center" href="#" id="nlink" onClick={()=>setActive('d_addiction')}>D ADDICTION</a>
                </li> */}
                {/* <li className={`nav-item mx-xl-3 d-flex align-items-center ${active=="collector"?'active':''}`}>
                    <a className="nav-link text-center" href="#" id="nlink" onClick={()=>setActive('collector')}>COLLECTOR MESSAGE</a>
                </li> */}
                <li className={`nav-item mr-4 d-flex justify-content-center align-items-center ${active=="collector"?'active':''}`}>
                    <a className="nav-link text-center p-2 p-0" href="#contact" id="nlink" onClick={()=>setActive('collector')}>COLLECTOR MESSAGE</a>
                </li>
                <li className={`nav-item  d-flex justify-content-center align-items-center ${active=="contact"?'active':''}`}>
                    <a className="nav-link text-center p-2 p-0" href="#contact" id="nlink" onClick={()=>setActive('contact')}>CONTACT</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar