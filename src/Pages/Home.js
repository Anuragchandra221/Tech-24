import React, { createContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import logo from '../assets/images/vyvidh2024.png'
import "./Home.css"
import About from '../Components/About'
import DepartmentEvents from '../Components/DepartmentEvents'
import Contact from '../Components/Contact'
import MainEvents from '../Components/MainEvents'

export const BlurContext = createContext()
function Home() {
    const [isBlurred, setIsBlurred] = useState(false)
    
    
  return (
    <BlurContext.Provider value={[isBlurred, setIsBlurred]}>
        <Navbar/>
        <div className='d-flex front-page flex-column justify-content-center align-items-center'>
            <img src={logo} className='logo' />
            <h4>TECHNO CULTURAL FEST</h4>
            <p>Feb 29 - Mar 1</p>
            <a href='#about'><button className='explore_btn'>Explore</button></a>
        </div>
        <div className='mission-vission d-flex align-items-center justify-content-center pb-5'>
            <div className='vission-box d-flex flex-column justify-content-center mx-0 mx-lg-2'>
                <h3 className='text-center'>OUR VISSION</h3>
                <p className='mx-auto text-center m-0 para-vission'>Progress Through Education.</p>
            </div>
            <div className='vission-box d-flex flex-column justify-content-center mx-0 mx-lg-2'>
                <h3 className='text-center'>OUR MISSION</h3>
                <p className='mx-auto text-center m-0 para-vission'>To seek, strive for and scale greater heights of quality education.</p>
            </div>
            <div className='vission-box d-flex flex-column justify-content-center mx-0 mx-lg-2'>
                <h3 className='text-center'>OUR PLAN</h3>
                <p className='mx-auto text-center m-0 para-vission'>To seek, strive for and scale greater heights of quality education.</p>
            </div>
        </div>
        <About/>
        <MainEvents/>
        <DepartmentEvents/>
        <Contact/>
    </BlurContext.Provider>
  )
}

export default Home