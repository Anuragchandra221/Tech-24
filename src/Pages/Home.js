import React, { createContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import logo from '../assets/images/vyvidh2024.png'
import "./Home.css"
import About from '../Components/About'
import DepartmentEvents from '../Components/DepartmentEvents'
import Contact from '../Components/Contact'
import MainEvents from '../Components/MainEvents'
import ScrollButton from '../Components/ScrollButton'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Typewriter from "typewriter-effect";


function Home() {
    
    useEffect(()=>{
        const windowHeight = window.innerHeight;
        var ele = document.getElementsByClassName('front-page')[0]
        ele.style.height = windowHeight + "px";
    })
    
    
  return (
    <div>
        {/* <div className='background'></div> */}
        <div className='cube-container'>
            <div className="cube">
                <div className="s1"></div>
                <div className="s2"></div>
                <div className="s3"></div>
                <div className="s4"></div>
                <div className="s5"></div>
                <div className="s6"></div>
            </div>
        </div>
        {/* <Navbar_custom/> */}
        <div style={{width: '100vw', height:'100vh'}} className='d-flex'>
            <div className='d-flex front-page flex-column justify-content-center my-auto align-items-center mx-lg-5'>
                <Navbar/>
                <img src={logo} className='logo' />
                <h2 className='text-center mb-3 px-2 px-lg-0' style={{fontWeight: '800'}}>
                    <span className='diff_color'>TECHNO </span> 
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("CULTURAL FEST")
                                .start();
                        }}
                    />
                </h2>
                <h5 className="sub-text mb-3">Feb 29 - Mar 1</h5>
                <a href='#about' className='sub-text'><button className='explore_btn'>Explore</button></a>
            </div>
        </div>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                
            <div className='mission-vission mt-3 mt-lg-5 pt-lg-5 d-flex align-items-center justify-content-center flex-wrap mb-4 pb-lg-5 mb-lg-5'>
                    <div className='vission-box d-flex flex-column justify-content-center mx-0 mx-md-4 my-3 my-lg-0'>
                        <h3 className='text-center'>OUR VISSION</h3>
                        <p className='mx-auto text-center m-0 para-vission'>Progress Through Education.</p>
                    </div>
                <div className='vission-box d-flex flex-column justify-content-center mx-0 mx-md-4 my-3 my-lg-0'>
                    <h3 className='text-center'>OUR MISSION</h3>
                    <p className='mx-auto text-center m-0 para-vission'>To seek, strive for and scale greater heights of quality education.</p>
                </div>
                {/* <div className='vission-box d-flex flex-column justify-content-center mx-0 mx-md-3 my-3 my-lg-0'>
                    <h3 className='text-center'>OUR PLAN</h3>
                    <p className='mx-auto text-center m-0 para-vission'>To seek, strive for and scale greater heights of quality education.</p>
                </div> */}
            </div>
            </AnimationOnScroll>
        <About/>

        <MainEvents/>
        <DepartmentEvents/>
        <Contact/>
        <ScrollButton/>
    </div>
  )
}

export default Home