import React from 'react'
import "../styles/Skills.css"
const MySkills = () => {
  return (
    <div className='mainSkills'>
    <img style={{width:"250px"}} src='/assets/skills.png' alt='skills'/>
    <div className='mySkills'>
    <div>
     <p> HTML/CSS - 8/10</p>
     <p>JavaScript -8/10</p>
     <p>React -9/10</p>
    </div>
    <div>
     <p>Redux - 8/10</p>
     <p>Node/Express -9/10</p>
     <p>Mongodb  -8/10</p>
    </div>
    </div>
    </div>
   
  )
}

export default MySkills