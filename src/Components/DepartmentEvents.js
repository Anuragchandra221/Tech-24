import React from 'react'
import vastava from "../assets/images/VASTATVA 2024.jpg"
import elecspire from "../assets/images/ELECSPIRE logo.jpg"
import respawn from "../assets/images/respawn.jpg"
import adwaitha from "../assets/images/ADWAYTHA-1.png"
import haulin from "../assets/images/haulin.png"
import emmerzo from "../assets/images/EMMERZO THUNDER SLOGAN RTGRPNG.png"
import agnichakra from "../assets/images/agnichakra-2k24-logo-white-png.png"
import "./DepartmentEvents.css"
import D_Event from './D_Event'

function DepartmentEvents() {
  return (
    <div id="department_events" className='pt-5 pb-5 mt-5'>
        <h2 className='text-center mb-4'>Department Events</h2>
        <div className='d-flex justify-content-around flex-wrap px-0 px-lg-4 mt-5 mb-3' style={{rowGap:'15px', color: 'var(--secondary'}}>
            <div className='dep_txt p-3'>AIML</div>
            <div className='dep_txt p-3'>CE</div>
            <div className='dep_txt p-3'>CSE</div>
            <div className='dep_txt p-3'>ECE</div>
            <div className='dep_txt p-3'>EEE</div>
            <div className='dep_txt p-3'>MCA</div>
            <div className='dep_txt p-3'>ME</div>
        </div>
        <div className='d-flex justify-content-center mt-4 p-0 flex-wrap mt-4'>
          <D_Event src={emmerzo} dep="ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING" to="/aiml" />
          <D_Event src={vastava} dep="CIVIL ENGINEERING" to="/civil" />
          <D_Event src={respawn} dep="COMPUTER SCIENCE AND ENGINEERING" to="/cse" />
          <D_Event src={haulin} dep="ELECTRONICS AND COMMUNICATION ENGINEERING" to="/ece" />
          <D_Event src={elecspire} dep="ELECTRICAL AND ELECTRONICS ENGINEERING" to="/eee" />
          <D_Event src={adwaitha} dep="MASTER OF COMPUTER APPLICATIONS" to="/mca" />
          <D_Event src={agnichakra} dep="MECHANICAL ENGINEERING" to="/me" />
        </div>
    </div>
  )
}

export default DepartmentEvents