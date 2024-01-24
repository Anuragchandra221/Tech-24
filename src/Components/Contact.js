import React from 'react'
import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import google from "../assets/images/google.png"
import linkedin from "../assets/images/linkedin.png"
import "./Contact.css"

function Contact() {
  return (
    <div id="contact">
        <div className='px-2 contact mx-auto d-flex justify-content-between mx-4 align-items-start pt-5'>
            <div className='d-flex flex-column'>
                <h3 className='mb-3'>
                    VYVIDH 24
                </h3>
                <p>VIDYA ACADEMY OF SCIENCE AND TECHNOLOGY</p>
            </div>
            <div className='d-flex flex-column mt-3 mt-lg-0'>
                <h3 className='mb-3'>Useful Links</h3>
                <a href='' className='mb-2'>Home</a>
                <a href='' className='mb-2'>About Us</a>
                <a href='' className=''>Vidya Gallery</a>
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
                <div className='d-flex justify-content-center'>
                    <img src={facebook} className='icon mr-2' />
                    <img src={instagram} className='icon mx-1' />
                    <img src={google} className='icon mx-2' />
                    <img src={linkedin} className='icon ml-1' />
                </div>
            </div>
        </div>
        <div className='text-center mb-2 mt-4'>
            &copy; Copyright Vyvidh24. All rights reserved.
        </div>
    </div>
  )
}

export default Contact