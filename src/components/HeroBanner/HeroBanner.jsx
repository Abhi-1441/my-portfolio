import React from 'react';
import './HeroBanner.css';
import Typewriter from "typewriter-effect";
import MyPhoto from '../../assets/images/general/MyCartoon.png'
import WavingHand from '../../assets/images/general/wave-hello.gif'

const HeroBanner = () => {
  return (
    <div className="hero_banner">
        <div className="hero_banner_content">
          <div className="greeting">
            Hello there<img src={WavingHand} alt=" " className="waving_hand" />, &nbsp;My name is
          </div>
          <div className="name">
            Abhishek<br /> &nbsp;&nbsp;&nbsp;Pakhmode
          </div>

          <div className="profession">
            I'm a
            {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Full Stack Web Developer + Robotics Enthusiast 🤖")
                .start();
            }}
          /> */}
            <Typewriter
              options={{
                strings: ['Full Stack Web Developer🚀', 'Robotics Enthusiast 🤖', 'Coder🧑‍💻', 'Problem Solver😎'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="bio">
            Dedicated to crafting seamless digital experiences through code and innovation. Experienced in MERN stack, I strive to create efficient and elegant solutions for complex challenges in the web development world😊.
          </div>
        </div>
        <img src={MyPhoto} alt="Abhishek" className="photograph" />
      </div>
  )
}

export default HeroBanner