import React from 'react';
import './ProjectCard.css';
import defaultImage from '../../assets/images/projects/project.jpg'
const ProjectCard = (props) => {
  return (
    <div className='projectCard'>
      <div className="projectCard_image_container">
        {
          props.website === "#" ?
            <img className="projectCard_image" src={props.img? props.img:defaultImage} alt=" " />
            :
            <a href={props.website} target="_blank" rel="noopener noreferrer">
              <img className="projectCard_image" src={props.img? props.img:defaultImage} alt=" " />
            </a>
        }
      </div>
      <div className="projectCard_content_container">
        {
          props.website === "#" ?
            <div className="projectCard_title">{props.title}</div>
            :
            <a href={props.website} target="_blank" rel="noopener noreferrer">
              <div className="projectCard_title">{props.title}</div>
            </a>
        }
        <div className="projectCard_techs_container">
          {props.techs.map((tech,index) => {
            return (
              <div className="tech" key={tech+'-'+index} >{tech}</div>
            );
          })}
        </div>
        <div className="projectCard_description">{props.description}</div>
        <div className="projectCard_links">
          {props.github  ? <a href={props.github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github "></i></a> : null}
          {props.website  ? <a href={props.website} target="_blank" rel="noopener noreferrer"><i className="fa fa-external-link"></i></a> : null }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard