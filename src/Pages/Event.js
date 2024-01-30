import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'
import "./Event.css"

function Event({data}) {
    // console.log(data.technical)
  return (
    <div>
        <Navbar/>
        <div className='event_div mx-auto mb-5'>
            <div className='hrdiv mx-auto mb-5'>
                <h2 className='text-center'>Technical Events</h2>
                <hr className='hrline' />
            </div>

            {data.technical.map((event)=>{
                return (
                    <div className='my-4'>
                        <h3 className='event_heading mb-3'>{event.title}</h3>
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
                                <ul>
                                    {event.sub.map((sub)=>{
                                        {console.log(sub)}
                                        return (
                                            <li className='px-4 my-3'>
                                                <h4 className='event_heading mb-3'>{sub.title}</h4>
                                                <p className='pl-3'>{sub.desc}</p>
                                                {sub.day?<p className='pl-3'>Day - {sub.day}</p>:''}
                                                {sub.time?<p className='pl-3'>Time - {sub.time}</p>:''}
                                                {sub.fee?<p className='pl-3'>Fee - {sub.fee}</p>:''}
                                                {sub.venue?<p className='pl-3'>Venue - {sub.venue}</p>:''}
                                                {sub.prize?<p className='pl-3'>Prize pool - {sub.prize}</p>:''}
                                                {sub.faculty?<p className='pl-3'>Faculty Coordinator - {sub.faculty}</p>:''}
                                                {sub.student?<p className='pl-3'>Student Coordinator - {sub.student}</p>:''} 
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

            <div className='hrdiv mx-auto my-5'>
                <h2 className='text-center'>Non Technical Events</h2>
                <hr className='hrline' />
            </div>

            {data.non.map((event)=>{
                return (
                    <div className='my-4'>
                        <h3 className='event_heading mb-3'>{event.title}</h3>
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
                                <ul>
                                    {event.sub.map((sub)=>{
                                        {console.log(sub)}
                                        return (
                                            <li className='px-4 my-3'>
                                                <h4 className='event_heading mb-3'>{sub.title}</h4>
                                                <p className='pl-3'>{sub.desc}</p>
                                                {sub.day?<p className='pl-3'>Day - {sub.day}</p>:''}
                                                {sub.time?<p className='pl-3'>Time - {sub.time}</p>:''}
                                                {sub.fee?<p className='pl-3'>Fee - {sub.fee}</p>:''}
                                                {sub.venue?<p className='pl-3'>Venue - {sub.venue}</p>:''}
                                                {sub.prize?<p className='pl-3'>Prize pool - {sub.prize}</p>:''}
                                                {sub.faculty?<p className='pl-3'>Faculty Coordinator - {sub.faculty}</p>:''}
                                                {sub.student?<p className='pl-3'>Student Coordinator - {sub.student}</p>:''} 
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