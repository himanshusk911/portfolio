import React from 'react'
import projects from "../assets/data/projects.json"
import "../styles/Projects.css"
const Projects = () => {
  return (
    <div className='mainProject'>
      <img style={{width:"250px"}} src='/assets/projects.png' alt='projects'/>
      <div className='projectComps'>
       {projects.map((project)=>{
        return (
          <div className='projectDiv'>
            <div className='firstProject'>
              <img style={{width:"100px"
              }} src={project.img} alt='project'/>
            </div>
            <div className='secondProject'>
              <h3>{project.name}</h3>
              <p><a href={project.gitLink} target="_blank" rel="noopener noreferrer">Check GitHub</a></p>
              <p><a href={project.vercel} target="_blank" rel="noopener noreferrer">Check Vercel Deployment</a></p>
              <p>{project.desc}</p>
            </div>
          </div>
        )
       })}
      </div>
    </div>
  )
}

export default Projects