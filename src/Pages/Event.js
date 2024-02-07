import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'
import "./Event.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faClose } from '@fortawesome/free-solid-svg-icons'
import ScrollButton from '../Components/ScrollButton'

function Event({data}) {
    // console.log(data.technical)
    const [visible, setVisible] = useState(true)
    const hide = (i)=>{
        var element = document.getElementsByClassName("event-div")[i]
        var button = document.getElementsByClassName("event-btn")[i]
        // console.log(element.style.display)
        if(element.style.display === "" || element.style.display === "block"){
            // console.log(i)
            element.style.display = 'none'
            button.innerHTML = "<i class='fa fa-arrow-down'></i>"
            // element.style.marginTop = "-100%";
        }else{
            element.style.display = "block"
            button.innerHTML = "<i class='fa fa-arrow-up'></i>"
        }
    }
    const hide_non = (i)=>{
        var element = document.getElementsByClassName("non-event-div")[i]
        var button = document.getElementsByClassName("non-event-btn")[i]
        // console.log(element.style.display)
        if(element.style.display === "" || element.style.display === "block"){
            // console.log(i)
            element.style.display = 'none'
            button.innerHTML = "<i class='fa fa-arrow-down'></i>"
            // element.style.marginTop = "-100%";
        }else{
            element.style.display = "block"
            button.innerHTML = "<i class='fa fa-arrow-up'></i>"
        }
    }
  return (
    <div>
        <Navbar/>
        <div className='event_div mx-auto mb-5'>
            <div className='hrdiv mx-auto mb-5'>
                <h2 className='text-center'>Technical Events</h2>
                <hr className='hrline' />
            </div>

            {data.technical.map((event, i)=>{
                return (
                    <div className='my-4' style={{position: 'relative'}} key={i}>
                        <div className='event_heading mb-3 d-flex justify-content-between align-items-center'>
                            <h3 className='p-0 m-0'>{event.title}</h3>
                            <button className='event-btn' onClick={()=>hide(i)}>
                                <i className="fa fa-arrow-up"></i>
                            </button>
                        </div>
                        <div className='event-div'>
                            <p className='pl-3'>{event.desc}</p>
                            {event.day?<p className='pl-3'>Day - {event.day}</p>:''}
                            {event.time?<p className='pl-3'>Time - {event.time}</p>:''}
                            {event.fee?<p className='pl-3'>Fee - {event.fee}</p>:''}
                            {event.venue?<p className='pl-3'>Venue - {event.venue}</p>:''}
                            {event.prize?<p className='pl-3'>Prize pool - {event.prize}</p>:''}
                            {event.faculty?<p className='pl-3'>Faculty Coordinator - {event.faculty}</p>:''}
                            {event.student?<p className='pl-3'>Student Coordinator - {event.student}</p>:''}
                            {event.sub?
                                <div>
                                    <h4 className='text-center my-4'>Sub Events</h4>
                                    <div>
                                        {event.sub.map((sub, j)=>{
                                            return (
                                                <div className='pl-3 my-3' key={j}>
                                                    <div className='event_heading mb-3 d-flex justify-content-start align-items-center'>
                                                        <h4 className='p-0 m-0'>{sub.title}</h4>
                                                    </div>
                                                    {/* <h4 className='event_heading mb-3'>{sub.title}</h4> */}
                                                    <p className='pl-3'>{sub.desc}</p>
                                                    {sub.day?<p className='pl-3'>Day - {sub.day}</p>:''}
                                                    {sub.time?<p className='pl-3'>Time - {sub.time}</p>:''}
                                                    {sub.fee?<p className='pl-3'>Fee - {sub.fee}</p>:''}
                                                    {sub.venue?<p className='pl-3'>Venue - {sub.venue}</p>:''}
                                                    {sub.prize?<p className='pl-3'>Prize pool - {sub.prize}</p>:''}
                                                    {sub.faculty?<p className='pl-3'>Faculty Coordinator - {sub.faculty}</p>:''}
                                                    {sub.student?<p className='pl-3'>Student Coordinator - {sub.student}</p>:''} 
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                
                            :
                            ''
                            }
                        </div>
                    </div>
                )
            })}

            <div className='hrdiv mx-auto my-5'>
                <h2 className='text-center'>Non Technical Events</h2>
                <hr className='hrline' />
            </div>

            {data.non.map((event, i)=>{
                return (
                    <div className='my-4' style={{position: 'relative'}} key={i}>
                        <div className='event_heading mb-3 d-flex justify-content-between align-items-center'>
                            <h3 className='p-0 m-0'>{event.title}</h3>
                            <button className='non-event-btn' onClick={()=>hide_non(i)}>
                                <i className="fa fa-arrow-up"></i>
                            </button>
                        </div>
                        {/* <h3 className='event_heading mb-3'>{event.title}</h3>
                        <button className='non-event-btn' onClick={()=>hide_non(i)}>
                        <i className="fa fa-arrow-up"></i>
                        </button> */}
                        <div className='non-event-div'>
                            <p className='pl-3'>{event.desc}</p>
                            {event.day?<p className='pl-3'>Day - {event.day}</p>:''}
                            {event.time?<p className='pl-3'>Time - {event.time}</p>:''}
                            {event.fee?<p className='pl-3'>Fee - {event.fee}</p>:''}
                            {event.venue?<p className='pl-3'>Venue - {event.venue}</p>:''}
                            {event.prize?<p className='pl-3'>Prize pool - {event.prize}</p>:''}
                            {event.faculty?<p className='pl-3'>Faculty Coordinator - {event.faculty}</p>:''}
                            {event.student?<p className='pl-3'>Student Coordinator - {event.student}</p>:''}
                            {event.sub?
                                <div>
                                    <h4 className='text-center my-4'>Sub Events</h4>
                                    <div>
                                        {event.sub.map((sub, j)=>{
                                            return (
                                                <div className='pl-3 my-3' key={j}>
                                                    <h4 className='event_heading mb-3'>{sub.title}</h4>
                                                    <p className='pl-3'>{sub.desc}</p>
                                                    {sub.day?<p className='pl-3'>Day - {sub.day}</p>:''}
                                                    {sub.time?<p className='pl-3'>Time - {sub.time}</p>:''}
                                                    {sub.fee?<p className='pl-3'>Fee - {sub.fee}</p>:''}
                                                    {sub.venue?<p className='pl-3'>Venue - {sub.venue}</p>:''}
                                                    {sub.prize?<p className='pl-3'>Prize pool - {sub.prize}</p>:''}
                                                    {sub.faculty?<p className='pl-3'>Faculty Coordinator - {sub.faculty}</p>:''}
                                                    {sub.student?<p className='pl-3'>Student Coordinator - {sub.student}</p>:''} 
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                
                            :
                            ''
                            }
                        </div>
                    </div>
                )
            })}
        </div>
        <ScrollButton/>
        <Contact/>
    </div>
  )
}

export default Event