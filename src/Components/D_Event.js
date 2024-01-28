import React from 'react'
import "./DepartmentEvents.css"

function D_Event(props) {
  return (
    <div className='flex my-2 flex-column align-items-center justify-content-center d_event ' >
        <img className='department_images mx-3 mx-lg-3' src={props.src} />
        <p className='mt-2 dep_name mx-3 mx-lg-3 text-center'>{props.dep}</p>
    </div>
  )
}

export default D_Event