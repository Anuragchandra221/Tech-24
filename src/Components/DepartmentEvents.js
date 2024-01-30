import React from 'react'
import vastava from "../assets/images/VASTATVA 2024.jpg"
import elecspire from "../assets/images/ELECSPIRE logo.jpg"
import respawn from "../assets/images/respawn.jpg"
import adwaitha from "../assets/images/ADWAYTHA-1.png"
import haulin from "../assets/images/haulin.png"
import "./DepartmentEvents.css"
import D_Event from './D_Event'

function DepartmentEvents() {
  return (
    <div id="department_events" className='pt-5 pb-5 mt-5'>
        <h2 className='text-center mb-4'>Department Events</h2>
        <div className='d-flex justify-content-around flex-wrap px-0 px-lg-4 mt-5 mb-3' style={{rowGap:'15px', color: 'var(--secondary'}}>
            <div className=''>AIML</div>
            <div className=''>CE</div>
            <div className=''>CSE</div>
            <div className=''>ECE</div>
            <div className=''>EEE</div>
            <div className=''>MCA</div>
            <div className=''>ME</div>
        </div>
        <div className='d-flex justify-content-center mt-4 p-0 flex-wrap mt-4'>
          <D_Event src={vastava} dep="CIVIL ENGINEERING" />
          <D_Event src={respawn} dep="COMPUTER SCIENCE AND ENGINEERING" to="/cse" />
          <D_Event src={haulin} dep="ELECTRONICS AND COMMUNICATION ENGINEERING" />
          <D_Event src={elecspire} dep="ELECTRICAL AND ELECTRONICS ENGINEERING" />
          <D_Event src={adwaitha} dep="MASTER OF COMPUTER APPLICATION" />
        </div>
    </div>
  )
}

export default DepartmentEvents