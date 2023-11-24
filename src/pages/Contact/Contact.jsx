import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Contact.css';
import MyImage from '../../assets/images/general/my_photo-bgblue.png';

const Contact = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <motion.div className="contact"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact_heading">Contact</div>
      <div className="contact_container">
        <div className="my_image_container">
          <img src={MyImage} alt="Abhishek" className="my_image" />
        </div>
        <div className="freelancing_content">
          <div className="freelancing_text">
            I'm currently taking on freelance work. If you are interested in hiring me for your project please use the mail below to get in touch. Want to know how I work and what I can offer? Check out my <span className="direct_link" onClick={() => handleNavigation('/Projects')}> projects </span>  &nbsp;and&nbsp; <span className="direct_link" onClick={() => handleNavigation('/Resume')}>resume</span>.
          </div>
          <div className='find_me_text'>Find me on this</div>
          <div className="mail"><i className="fa fa-envelope" />&nbsp;&nbsp;&nbsp;pakhmodeabhishek1441@gmail.com</div>
          <div className="social_media_icons">
            <a href="https://github.com/Abhi-1441" target="_blank" rel="noopener noreferrer"><i className="fa fa-github "></i></a>
            <a href="https://www.instagram.com/itss_abhi_shek/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/abhishek-pakhmode-bbb76622b/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            <a href="https://t.me/Abhishek_1441" target="_blank" rel="noopener noreferrer"><i className="fa fa-telegram"></i></a>
            <a href="https://wa.me/7387782646" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact