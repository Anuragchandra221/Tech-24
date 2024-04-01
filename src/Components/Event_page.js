import React from 'react'
import "./Event_page.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function Event_page(props) {
  return (
    <div style={{position: ''}}>
      
    <div className='event-page-overlay '>
      <div className='event-page-content row d-flex justify-content-start'>
        <button onClick={props.onClose} className=' closing_btn d-flex justify-content-center align-items-center mr-3 px-3 py-2'>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div className='col-12 col-lg-6'>
          <img src={props.src} alt="Event" className='col-12 col-lg-6 mx-auto' />
        </div>
        <div className='d-flex flex-column col-12 col-lg-6 justify-content-between m-0'>
            <div className='pt-4'>
                <h3 className='text-left event_title'>{props.title}</h3>
                <p className='text-left'>{props.date}</p>
                <p className='text-left event_desc'>{props.description}</p>
                <p className='text-left event_desc' style={{fontWeight: '900'}}>{props.topic?`Topic - ${props.topic}`:''}</p>
                {console.log(props.contact)}
                <p className='text-left event_desc'>Contact </p>
                {
                  props.contact.map((con)=>{
                    return <p className='text-left mb-1'>{con}</p>
                  })
                }
            </div>
            <div className='ml-auto d-flex mt-3'>
                <a target='__blank'><button className='close_btn d-flex justify-content-center align-items-center px-3 py-2' style={{opacity: '0.6', cursor: 'not-allowed'}}>Register</button></a>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Event_page