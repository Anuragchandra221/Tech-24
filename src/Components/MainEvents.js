import React, { useContext, useState } from 'react'
import shutter from "../assets/images/shutter up logo WHITE background.png"
import expremiere from "../assets/images/logoexpremiere.jpg"
import "./MainEvents.css"
import Event_page from './Event_page'
import shutter_png from "../assets/images/shutter up logo no background.png"
import { BlurContext } from '../Pages/Home'

function MainEvents() {
  
  const [isBlurred, setIsBlurred] = useContext(BlurContext)
  const shutter_des = {
    "title": "Shutter Up",
    "src": shutter_png,
    "date": "Feb 29",
    "desc": "Vidya Academy of Science & Technology (VAST) is a state-of-the-art engineering college conforming to international standards. This model engineering college is approved by AICTE vide approval NO./06/ KER/ENGG/2002/91 dated 12/05/03 and affiliated to APJ Abdul Kalam Technological University. In few years VAST has evolved and achieved recognition as a notable School of Engineering"
  }
  const [visible, setVisible] = useState(false)
  const [obj, setObj] = useState(null)
  const show_events = (obj)=>{
    setIsBlurred(true)
    setVisible(true)
    setObj(obj)
  }
  const onClose = ()=>{
    setIsBlurred(false)
    setVisible(false)
    setObj(null)
  }
  return (
    <div className='d-flex flex-column' id="main_events" >
      <h3 className='text-center mb-3'>Main Events</h3>
      <div className='d-flex justify-content-center justify-content-lg-around p-0 p-lg-3 flex-wrap'>
        <img onClick={()=>show_events(shutter_des)} className='main_images my-3 my-lg-3' src={shutter} />
        <img className='main_images my-3 my-lg-3' src={expremiere} />
        <img className='main_images my-3 my-lg-3' src={shutter} />
      </div>
      {visible && obj?<Event_page date={obj.date} title={obj.title} src={obj.src} description={obj.desc} onClose={onClose}/>:""}
    </div>
  )
}

export default MainEvents