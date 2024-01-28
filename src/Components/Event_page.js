import React from 'react'
import "./Event_page.css"

function Event_page(props) {
  return (
    <div style={{position: ''}}>

    <div className='event-page-overlay'>
      <div className='event-page-content row d-flex justify-content-start'>
        <img src={props.src} alt="Event" className='col-12 col-md-6 mx-auto' />
        <div className='d-flex flex-column col-12 col-md-6 justify-content-between'>
            <div className='pt-4'>
                <h3 className='text-left event_title'>{props.title}</h3>
                <p className='text-left'>{props.date}</p>
                <p className='text-left event_desc'>{props.description}</p>
            </div>
            <div className='ml-auto d-flex'>
                <button onClick={props.onClose} className='close_btn closing_btn d-flex justify-content-center align-items-center mr-3 px-3 py-2'>Close</button>
                <button className='close_btn d-flex justify-content-center align-items-center px-3 py-2'>Register</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Event_page