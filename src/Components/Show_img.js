import React from 'react'
import "./Show_img.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function Show_img(props) {
  return (
    <div className='show_img d-flex justify-content-center align-items-center'>
        <div className='text-center'>
            <img src={props.img} className=''  />
            <button onClick={props.onClose} className='closing_btn ' style={{position:'absolute', top: '5px', right: '5px'}}>
            <FontAwesomeIcon icon={faClose} />
            </button>
        </div>
    </div>
  )
}

export default Show_img