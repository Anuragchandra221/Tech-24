import React from 'react'
import "./Event_page.css"

function Event_page(props) {
  return (
    <div className='event-page-overlay'>
      <div className='event-page-content d-flex justify-content-start'>
        <img src={props.src} alt="Event" />
        <div className='d-flex flex-column justify-content-between'>
            <div className='pt-4'>
                <h3 className='text-left event_title'>{props.title}</h3>
                <p className='text-left'>{props.date}</p>
                <p className='text-left event_desc'>{props.description}</p>
            </div>
            <div className='ml-auto'>
                <button className='close_btn mr-3'>Register</button>
                <button onClick={props.onClose} className='close_btn'>Close</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Event_page