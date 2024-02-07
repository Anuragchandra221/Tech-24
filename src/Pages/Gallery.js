import React, { useEffect, useRef, useState } from 'react'
import "./Gallery.css"
import Navbar from '../Components/Navbar';
import ScrollButton from '../Components/ScrollButton';
import Contact from '../Components/Contact';
import Show_img from '../Components/Show_img';


function importAll(r) {
    return r.keys().map(r);
  }
  
  // Import all files from the 'FolderWithFiles' folder
  const files = importAll(require.context('../assets/images/gallery', false, /\.(jpg|jpeg)$/));
function Gallery() {

    const [show, setShow] = useState(false)
    const [src, setSrc] = useState(null)
    const showImg = (im)=>{
        if(show){
            setShow(false)
            document.getElementById("navbar").style.display = "block"
            setSrc(null)
        }else{
            setShow(true)
            document.getElementById("navbar").style.display = "none"
            setSrc(im)
        }
        console.log(show, src)
    }

    const close_img = ()=>{
        setShow(false)
        document.getElementById("navbar").style.display = "block"
        setSrc(null)
    }
  return (
    <div className='gallery'>
        <Navbar/>
        <div className='hrdiv imghr mx-auto mb-3'>
                <h2 className='text-center'>Gallery</h2>
                <hr className='hrline' />
            </div>
        <div className='image-gallery px-lg-5 mb-5'>
            {files?files.map((im)=>{
                return (
                    <li className='m-4' onClick={()=>showImg(im)}>
                        <img src={im} />
                    </li>
                ) 
            }):''}
        </div>
        {/* <hr className='hrline my-5' style={{width: '60%'}} /> */}
        <ScrollButton/>
        {show && src?<Show_img onClose={close_img} img={src}/>:''}
        <Contact/>
    </div>
  )
}

export default Gallery