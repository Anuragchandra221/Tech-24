import React from 'react'
import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import google from "../assets/images/google.png"
import linkedin from "../assets/images/linkedin.png"
import "./Contact.css"

function Contact() {
  return (
    <div id="contact" className=' mx-auto py-4 pt-lg-5 px-3 mb-3 d-flex flex-column justify-content-between'>
        {/* <div className='footer-background'></div> */}
        <div className='px-3 contact mx-auto d-flex justify-content-between mx-4 align-items-start'>
            <div className='d-flex flex-column'>
            <a className="navbar-brand mb-2" id="navbar-brand" style={{fontFamily:"autumn", fontWeight: "900", opacity: "0.9 "}} href="#">Vyvidh <span style={{color: "var(--secondary)"}}>24</span></a>
                <p>VIDYA ACADEMY OF SCIENCE AND TECHNOLOGY</p>
            </div>
            <div className='d-flex flex-column mt-3 mt-lg-0'>
                <h3 className='mb-3'>Useful Links</h3>
                <a href='https://www.vidyaacademy.ac.in/' className='mb-2'>Home</a>
                <a href='https://www.vidyaacademy.ac.in/' className='mb-2'>About Us</a>
                <a href='https://www.vidyaacademy.ac.in/photo_album.php' className=''>Vidya Gallery</a>
            </div>
            <div className='d-flex flex-column mt-3 mt-lg-0'>
                <h3 className='mb-3'>Contact Us</h3>
                <p>
                    Thalakottukara P.O <br/>
                    Kecheri, Thrissur
                    680501, Kerala, India
                </p>
                <p>Phone: +91 4885 287751, 287752</p>
                <p>Email: principal@vidyaacademy.ac.in</p>
            </div>
            <div className='d-flex flex-column mt-3 mt-lg-0'>
                <h3 className='mb-3'>Social Media</h3>
                <div className='d-flex justify-content-start'>
                    <a href='https://www.facebook.com/vidyatcr/' target='_blank'><img src={facebook} className='icon mr-3' /></a>
                    <a href='https://www.instagram.com/vidmediavast/' target='_blank'><img src={instagram} className='icon mr-3' /></a>
                    <a href='https://www.vidyaacademy.ac.in/' target='_blank'><img src={google} className='icon mr-3' /></a>
                    <a href='https://www.linkedin.com/school/vidyatcr/' target='_blank'><img src={linkedin} className='icon' /></a>
                </div>
            </div>
        </div>
        <div className='text-center mt-5 mt-md-4' style={{color: 'var(--secondary'}}>
            &copy; Copyright Vyvidh24. All rights reserved.
        </div>
    </div>
  )
}

export default Contact