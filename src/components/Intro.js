import React from 'react'
import "../styles/Intro.css"
import ImageComp from './ImageComp'
const Intro = () => {
  return (
    <div className='introClass'>
        <div className='secondClass'>
     
        <img  className="zombie" src='/assets/flyzom.png' alt='zombie'/>
        <p  className="mainH" style={{fontSize:"50px"}}>Himanshu Singh</p>
        <p className="mainH" style={{fontSize:"50px"}}>Koshyari</p>
        <p className="minH" style={{fontSize:"40px"}}>[Full Stack Developer]</p>
        </div>
        <div className='imgDiv'>
            <ImageComp/>
        </div>
    </div>
  )
}

export default Intro