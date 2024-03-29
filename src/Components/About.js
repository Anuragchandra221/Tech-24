import React from 'react'
import "./About.css"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import vast from "../assets/images/vast.jpeg"

function About() {
  return (
    <div id="about" className='d-flex flex-column align-items-center mt-3 pt-0 mt-lg-5 mb-3 mb-lg-5 pt-lg-5'>
        {/* <AnimationOnScroll animateIn='animate__tada'> */}
        <h2 className='mb-3'>
            About Vidya
        </h2>
        {/* </AnimationOnScroll> */}
      <div className='row justify-content-center align-items-center p-0 p-3 px-lg-5'>
        <div className='col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end'>
          <img src={vast} className='about-image'/>
        </div>
        <div className='col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start '>
          <p className='about-text mt-3 mt-lg-0'>
              Vidya Academy of Science & Technology (VAST) is a state-of-the-art engineering college conforming to international standards. This model engineering college is approved by AICTE vide approval NO./06/ KER/ENGG/2002/91 dated 12/05/03 and affiliated to APJ Abdul Kalam Technological University. In few years VAST has evolved and achieved recognition as a notable School of Engineering with its competent and committed faculty, high quality infrastructure and high technology teaching aids, and by providing a serene atmosphere that complements academic life. VAST has a holistic approach to education where academic training goes hand in hand with offerings that develop the body,mind and soul to prepare its graduates to be future leaders.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About