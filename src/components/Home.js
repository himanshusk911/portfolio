import React from 'react'
import Intro from './Intro'
import About from './About'
import MySkills from './MySkills'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <div className='intro'>
        <Intro/>
        <About id="aboutSection"/>
        <MySkills/>
        <Projects/>
        <Contact id="contactSection"/>
        </div>
    </div>
  )
}

export default Home