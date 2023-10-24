import React from 'react';
import './Resume.css';
import ResumeImage from '../../assets/images/resume/Resume.png';
import Resumepdf from '../../assets/images/resume/Abhishek\'s Resume.pdf'

const Resume = () => {

    const downloadImage = () => {
        const imageSrc = Resumepdf;
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = 'Abhishek_Resume.pdf';
        link.click();
    }

    return (
        <div className="resume">
            <div className="resume_heading">
                Resume
            </div>
            <button className='resume_download_btn' onClick={downloadImage}>Download  <i className='fa fa-download'></i></button>
            <div className="resume_image_container">
                <img className='resume_image' src={ResumeImage} alt="" />
            </div>
        </div>
    )
}

export default Resume