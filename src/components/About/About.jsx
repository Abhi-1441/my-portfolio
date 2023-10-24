import React from 'react';
import './About.css';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import TeamAutomatonsLogo from '../../assets/images/company/team_Automatons_logo.png';
import SkillsBox from '../SkillsBox/SkillsBox';

const skills = {
  general: ["C", "C++", "Java", "DSA", "OOP", "Git/Github"],
  front_end: ["html/css", "js", "React js", "MUI", "Bootstrap", "Tailwind", "Redux"],
  back_end: ["node js", "MongoDB", "Firebase", "express"],
  machine_dev: ["Arduino", "python", "Rasberry Pi", "Sensors"]
}

const Experience = [
  {
    company: "Team Automatons",
    website: "https://teamautomatons.in/",
    logo: TeamAutomatonsLogo,
    role: "Web & Robotics System Developer",
    details: "Experience in robotics and electronic."
  },
]

// const Education = [
//   {
//     name : "Maharishi Vidya Mandir",
//     city:"Bhandara",
//     level:"10th CBSE",
//     year : 2019,
//     grade : "93.33 %",
//     status : "completed"
//   },
//   {
//     name : "Nirala Jr. College",
//     city : "Nagpur",
//     level : "12th HSC Board",
//     year : 2021,
//     grade : "95.60 %",
//     status : "completed"
//   }, 
//   {
//     name : "Pimpri Chinchwad College of Engineering",
//     city : "Pune",
//     level : "B-tech in IT",
//     year : 2025,
//     grade : "8.9 cgpa",
//     status : "Ongoing ..."
//   }
// ]

const About = () => {
  return (
    <div className='about'>
      <p className='about_heading'>About Me</p>
      < div className="about_content">
        <p className='content_start'>
          Hello! I'm Abhishek Pakhmode, and I am a passionate Full Stack Web Developer. Currently, I am honing my skills and expanding my knowledge in the world of web development. Apart from my love for web development, I am a devoted Robotics Enthusiast.
        </p>
        <p>
          I thrive in environments that push me to learn and grow, and I am dedicated to delivering high-quality work in every endeavor I undertake. I possess a solid foundation in various web development technologies, including <b>HTML, CSS, JavaScript, React, Node.js, Express</b> and more. As I continue my journey, I look forward to pushing boundaries, solving challenging problems, and contributing to the exciting world of technology.
        </p>
        <p>
          Thank you for taking the time to get to know me a little better. If you share a passion for web development, problem-solving, or simply want to connect, feel free to reach out. Let's collaborate and make the digital world a better place together!
        </p>
      </div>

      {/* Skills Container */}
      <p className="container_heading">Skills</p>
      <hr />
      <div className="skills_container">
        <SkillsBox skills={skills} />
      </div>

      {/* Experience container */}
      <p className="container_heading">Experience</p>
      <hr />
      <div className="experience_container">
        {
          Experience.map((job, index) =>
            <ExperienceCard key={`job-${index}`} company={job.company} website={job.website} logo={job.logo} role={job.role} details={job.details} />
          )
        }
      </div>
    </div>
  )
}

export default About