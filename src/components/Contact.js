import React from 'react';
import "../styles/Contact.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Contact = ({id}) => {
  const email = "himanshusk911@gmail.com";
  const phone = "+91 7668286754";

  return (
    <div id={id} className="contact-container">
      <img style={{width:"250px"}} src='/assets/contact2.png' alt='contact'/>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email:</h3>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Phone:</h3>
          <p>
            <a href={`tel:${phone}`}>{phone}</a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Socials</h3>
          <div className='socialDiv'>
            <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{marginRight:"15px"}} />
            </a>
          <a href='https://www.linkedin.com/in/himanshu-singh-koshyari-jackpot/' target="_blank" rel="noopener noreferrer">
          <FaLinkedin  style={{marginRight:"15px"}}/>
          </a>
          <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
          <FaInstagram  style={{marginRight:"15px"}}/> 
          </a>
          <a href='https://x.com/i/flow/login' target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter  style={{marginRight:"15px"}}/>
          </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
