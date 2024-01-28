import React from 'react'
import vastava from "../assets/images/VASTATVA 2024.jpg"
import elecspire from "../assets/images/ELECSPIRE logo.jpg"
import "./DepartmentEvents.css"
import D_Event from './D_Event'

function DepartmentEvents() {
  return (
    <div id="department_events" className='pt-5 pb-5'>
        <h4 className='text-center mb-4'>Department Events</h4>
        <div className='d-flex justify-content-around flex-wrap px-0 px-lg-4' style={{rowGap:'15px'}}>
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
          <D_Event src={elecspire} dep="ELECTRONICS AND COMMUNICATION ENGINEERING" />
          <D_Event src={elecspire} dep="ELECTRONICS AND COMMUNICATION ENGINEERING" />
          <D_Event src={elecspire} dep="ELECTRONICS AND COMMUNICATION ENGINEERING" />
        </div>
    </div>
  )
}

export default DepartmentEvents