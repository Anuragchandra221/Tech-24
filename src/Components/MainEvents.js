import React, { useContext, useState } from 'react'
import shutter from "../assets/images/shutter up logo WHITE background.png"
import expremiere from "../assets/images/logoexpremiere.jpg"
import "./MainEvents.css"
import Event_page from './Event_page'
import shutter_png from "../assets/images/shutter up logo no background.png"
import ideathon from "../assets/images/IDEATHON icon(updated).png"

import expo from "../assets/images/expo.png"
import avishkar from "../assets/images/avishkar_jpeg.jpg"
import { AnimationOnScroll } from 'react-animation-on-scroll'
// import { BlurContext } from '../App'

function MainEvents() {
  
  // const [isBlurred, setIsBlurred] = useContext(BlurContext)
  const idea_des = {
    "title": "Ideathon",
    "src": ideathon,
    "date": "Feb 29",
    "desc": "Ideathon is a brainstoriming event where participants from diverse backgrounds and interests to come up with innovative ideas to solve a complex specific real world problem.",
    "link": "https://forms.gle/8kSAkToZSwuiagu88",
    "contact": [
      "Salkala K S (AP, MCA) - 9747552526",
      "Ajay James (MCA) - 9207772379"
    ]
  }
  const expo_des ={
    "title": "Project Expo",
    "src": expo,
    "date": "Feb 29",
    "desc": "Technical feast for School students and also to show their talents at their early stages of studies!!! It is an opportunity for kids to find out their path in engineering field by knowing their own taste and to develop a basement of knowledge.",
    "link": "https://forms.gle/pyn2Qf37AnHZMdmS6",
    "contact": [
      "Rachana Sajeev (AP, AS) - 9895202403",
      "Adwaidh Sanil (AIML) - 9544515805"
    ]
  }

  const expremiere_des = {
    "title": "Expremiere",
    "src": expremiere,
    "date": "Feb 29",
    "desc": "Paper Presentation on a given topic.",
    "link": "https://forms.gle/E7hPvFPtMFosuGAq7",
    "contact": [
      "Jensy Babu (AP, CSE) - 7025363200",
      "Uthara Sunil Kumar (CSE) - 9074221233"
    ]
  }

  const avishkar_des = {
    "title": "Avishkar",
    "src": avishkar,
    "date": "Feb 29",
    "desc": "Avishkar Project Expo(A place of creativity and responsibility of an engineer gets exhibited.",
    "topic": "'Youth empowerment via enterprise, education and sustainable technology.'",
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSdO_s_PnaA_TDH6hUCA96VOGsJ2_wHo6XDdSg2xyNO-tWN4mQ/viewform",
    "contact": [
      "Arun Xavier (AP, EEE) - 9895658014",
      "Akhil Venugopal (AP, ME) - 7736248532",
      "Albin Shju (ECE) - 8383443275"
    ]
  }

  const [visible, setVisible] = useState(false)
  const [obj, setObj] = useState(null)
  const show_events = (obj)=>{
    // setIsBlurred(true)
    setVisible(true)
    setObj(obj)
  }
  const onClose = ()=>{
    // setIsBlurred(false)
    setVisible(false)
    setObj(null)
  }
  return (
    <div className='d-flex flex-column pt-lg-4' id="main_events" >
      <h2 className='text-center mb-3'>Main Events</h2>

      <div className='d-flex  justify-content-center p-0 p-lg-3 px-lg-5 flex-wrap'>
        <img onClick={()=>show_events(avishkar_des)} className='main_images my-3 mx-3 my-lg-3 ' src={avishkar} />
        <img onClick={()=>show_events(idea_des)} className='main_images my-3 mx-3 my-lg-3 ' src={ideathon} />
        <img onClick={()=>show_events(expremiere_des)} className='main_images my-3 mx-3 my-lg-3 ' src={expremiere} />
        <img onClick={()=>show_events(expo_des)} className='main_images my-3 mx-3 my-lg-3 ' src={expo} />
      </div>
      {visible && obj?<Event_page date={obj.date} link={obj.link} topic={obj.topic?obj.topic:null} title={obj.title} src={obj.src} description={obj.desc} onClose={onClose} contact={obj.contact}/>:""}
    </div>
  )
}

export default MainEvents