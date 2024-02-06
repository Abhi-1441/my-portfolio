import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import keepnotesImage from '../../assets/images/projects/note-keep_Image.png'
import secretsImage from '../../assets/images/projects/SecretsImage.png';
import teamAutomatonsWebsiteImage from '../../assets/images/projects/teamAutomatonsWebsiteImage.png'
import todoImage from '../../assets/images/projects/todoList.png';
import tictactoeImage from '../../assets/images/projects/tictactoe_Image.png';
import robots from '../../assets/images/projects/TeamAutomatonsRobots2023.png';

const ProjectsArray = [
  {
    title: "Keep-notes",
    img: keepnotesImage,
    description: "The project helps the user to keep track of the notes.",
    techs: ["nodejs", "ejs", "express"],
    github: "https://github.com/Abhi-1441/keep-notes",
    website: "https://abhi-1441.github.io/keep-notes/"
  },
  {
    title: "To-do List",
    img: todoImage,
    description: "The project comprises of dynamic to-do list, where the user can make there personalised list.",
    techs: ["nodejs", "mongoose", "mongoDB", "express"],
    github: "https://github.com/Abhi-1441/To-do-List",
    website: "https://to-do-list-abhi.vercel.app/"
  },
  {
    title: "Tic-tac-toe",
    img: tictactoeImage,
    description: "The game tic-tac-toe created by using React with basic UI/UX.",
    techs: ["React", "html", "css", "js"],
    github: "https://github.com/Abhi-1441/Tic-tac-toe",
    website: "https://abhi-1441.github.io/Tic-tac-toe/"
  },
  {
    title: "Secrets",
    img: secretsImage,
    description: "The project uses the signIn with google facility or user account registration and login. User can share and read the secrets anonymously.",
    techs: ["nodejs", "mongoose", "mongoDB", "passport", "OAuth 2.0", "express"],
    github: "https://github.com/Abhi-1441/Anonymously-Secrets-",
    website: "https://anonymous-secrets-3dcx.onrender.com/"
  },
  {
    title: "Team Automatons",
    img: teamAutomatonsWebsiteImage,
    description: "Contribution in developing the Team Automatons's Website.",
    techs: ["html/css", "bootstrap", "firebase"],
    website: "https://teamautomatons.in/"
  },
  {
    title: "Elephant & Rabit Robot",
    img: robots,
    description: "The two robots are manufactured for competition \"ABU Robocon\". The task is to pick the rings, navigate and throw the rings into the poles.",
    techs: ["python", "arduino", "sensors", "Rasberry pi", "Nvidia-jetson"]
  }
]

const Projects = () => {
  return (
      <motion.div className='projects' key="projects"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="projects_heading">Projects</p>
        <div className="projects_container">
          {ProjectsArray.map(project => {
            return (
              <ProjectCard 
              key={project.title}
              title={project.title}
              img={project.img} 
              description={project.description} 
              techs={project.techs} 
              github={project.github}
              website={project.website} 
              />
            );
          })}
        </div>
      </motion.div>
  )
}

export default Projects