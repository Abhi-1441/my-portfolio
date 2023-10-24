import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = (props) => {
    return (
        <div className='experienceCard'>
            {
                props.website === "#" ?
                    <img src={props.logo} alt=" " className="company_logo" />
                    :
                    <a href={props.website} target="_blank" rel="noopener noreferrer">
                        <img src={props.logo} alt=" " className="company_logo" />
                    </a>
            }
            <div className="experienceCard_content">
                <div className="job_role">{props.role}</div>
                {
                    props.website === "#" ?
                        <div className="company_name">{props.company}</div>
                        :
                        <a href={props.website} target="_blank" rel="noopener noreferrer"><div className="company_name">{props.company}</div></a>
                }
                <div className="details">{props.details}</div>
            </div>
        </div>
    )
}

export default ExperienceCard