import React from 'react'
import "../styles/Intro.css"
import ImageComp from './ImageComp'
const Intro = () => {
  return (
    <div className='introClass'>
        <div className='secondClass'>
     
        <img  className="zombie" src='/assets/flyzom.png' alt='zombie'/>
        <h1 style={{fontSize:"50px"}}>Himanshu Singh</h1>
        <h1 style={{fontSize:"50px"}}>Koshyari</h1>
        <h3 style={{fontSize:"40px"}}>[Full Stack Developer]</h3>
        </div>
        <div className='imgDiv'>
            <ImageComp/>
        </div>
    </div>
  )
}

export default Intro