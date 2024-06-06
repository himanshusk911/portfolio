import React from 'react'
import "../styles/Header.css"

const Header = () => {
    const handleScrollToAbout = () => {
      document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' });
    }
    const handleScrollToContact = () => {
      document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <div>
        <nav className='navHeader'>
            <img src='/assets/plant1.png' alt='mylogo'/>
            <img className="pea" src='/assets/pea.webp' alt='pea'/>
            <div className='navLinks'>
             <img src='/assets/about.png' alt='about' onClick={handleScrollToAbout}/>
             <img src='/assets/contact.png' alt='contact' onClick={handleScrollToContact}/>
            </div>
        </nav>
    </div>
  )
}

export default Header