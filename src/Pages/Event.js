import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'
import "./Event.css"

function Event({data}) {
    // console.log(data.technical)
  return (
    <div>
        {/* <Navbar/> */}
        <div className='event_div mx-auto'>
            <div className='hrdiv mx-auto mb-5'>
                <h2 className='text-center'>Technical Events</h2>
                <hr className='hrline' />
            </div>

            {data.technical.map((event)=>{
                return (
                    <div className='my-4'>
                        <h3 className='event_heading'>{event.title}</h3>
                        <p>{event.desc}</p>
                        {event.day?<p>Day - {event.day}</p>:''}
                        {event.time?<p>Time - {event.time}</p>:''}
                        {event.fee?<p>Fee - {event.fee}</p>:''}
                        {event.venue?<p>Venue - {event.venue}</p>:''}
                        {event.prize?<p>Prize pool - {event.prize}</p>:''}
                        {event.faculty?<p>Faculty Coordinator - {event.faculty}</p>:''}
                        {event.student?<p>Student Coordinator - {event.student}</p>:''}
                        {event.sub?
                            <div>
                                <h4 className='text-center my-4'>Sub Events</h4>
                                <ul>
                                    {event.sub.map((sub)=>{
                                        {console.log(sub)}
                                        return (
                                            <li className='px-4 my-3'>
                                                <h4 className='event_title'>{sub.title}</h4>
                                                <p>{sub.desc}</p>
                                                {sub.day?<p>Day - {sub.day}</p>:''}
                                                {sub.time?<p>Time - {sub.time}</p>:''}
                                                {sub.fee?<p>Fee - {sub.fee}</p>:''}
                                                {sub.venue?<p>Venue - {sub.venue}</p>:''}
                                                {sub.prize?<p>Prize pool - {sub.prize}</p>:''}
                                                {sub.faculty?<p>Faculty Coordinator - {sub.faculty}</p>:''}
                                                {sub.student?<p>Student Coordinator - {sub.student}</p>:''} 
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            
                        :
                        ''
                        }
                    </div>
                )
            })}
        </div>
        <Contact/>
    </div>
  )
}

export default Event