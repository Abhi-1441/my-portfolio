import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <p className="footer_text">
        Connect with me 😊
      </p>
      <div className="footer_social_media_icons">
        <a href="https://github.com/Abhi-1441" target="_blank" rel="noopener noreferrer"><i class="fa fa-github "></i></a> 
        <a href="https://www.instagram.com/itss_abhi_shek/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a> 
        <a href="https://www.linkedin.com/in/abhishek-pakhmode-bbb76622b/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
        <a href="https://t.me/Abhishek_1441" target="_blank" rel="noopener noreferrer"><i class="fa fa-telegram"></i></a>
        <a href="https://wa.me/7387782646" target="_blank" rel="noopener noreferrer"><i class="fa fa-whatsapp"></i></a>
      </div>
      <p className="copyright">©️ 2023 -24 Abhi-1441. All Right Reserved.</p>
    </div>
  )
}

export default Footer