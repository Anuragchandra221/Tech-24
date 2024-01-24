import React from 'react'

function DepartmentEvents() {
  return (
    <div id="department_events" className='pt-5 pb-5'>
        <h4 className='text-center mb-4'>Department Events</h4>
        <div className='d-flex justify-content-center flex-wrap' style={{rowGap:'15px'}}>
            <div className='mx-5'>AIML</div>
            <div className='mx-5'>CE</div>
            <div className='mx-5'>CSE</div>
            <div className='mx-5'>ECE</div>
            <div className='mx-5'>EEE</div>
            <div className='mx-5'>MCA</div>
            <div className='mx-5'>ME</div>
        </div>
    </div>
  )
}

export default DepartmentEvents