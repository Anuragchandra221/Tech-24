import React from 'react'
import "./DepartmentEvents.css"
import { Link } from 'react-router-dom'

function D_Event(props) {
  return (
    <Link to={props.to} onClick={() => window.scrollTo(0, 0)}>
      <div className='flex my-2 flex-column align-items-center justify-content-center d_event ' >
        <div className='d-event-div  mx-3 mx-lg-3'>

          <img className='department_images' src={props.src} />
        </div>
          <p className='mt-2 dep_name mx-auto text-center'>{props.dep}</p>
      </div>
    </Link>
  )
}

export default D_Event