import React from 'react'
import daddiction from "../assets/images/daddiction.jpg"
import "./Daddiction.css"

function Daddiction() {
  return (
    <div className='d-flex flex-column daddiction mx-auto my-5' id="daddiction">
        <h2 className='text-center mb-4'>D'ADDICTION</h2>
        <div className='d-flex justify-content-center d-div align-items-center'>
            <div className='col-md-6 d-flex justify-content-center justify-content-lg-end '>
                <img className='d-img' src={daddiction} />
            </div>
            <div className='col-md-6 d-flex flex-column align-items-center align-items-lg-start mt-3 mt-md-0' >
                <p className='text'>Prepare to ignite the stage at D'Grooves '24, the ultimate OpenStyle dance battle competition hosted by D'addiction Dance Club of Vidya Academy of Science & Technology Thrissur! Get ready for an electrifying evening on March 1, 2024, where top-notch dancers will compete for victory and honor. Join us at Vidya Academy of Science & Technology for an unforgettable experience filled with astonishing moves, intense competition, and a vibrant atmosphere. Mark your calendars and get ready to witness dance history in the making! 💃🔥</p> 
                <div className='d-flex justify-content-between ddates my-4'>
                    <p>
                    Reporting time: 2.00 pm <br/> 
                    Event begins : 2.30 pm 
                    </p>
                    <p className=''>
                        Anusha: 6238006540<br/> Mathew: 7025305955
                    </p>
                </div>
                <a style={{opacity: '0.6', cursor: 'not-allowed'}}  className='d-btna'  target='_blank'><button  className='d-btn'>Register Now</button></a>
            </div>
        </div>
    </div>
  )
}

export default Daddiction