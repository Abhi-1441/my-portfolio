import React from 'react';
import './Home.css';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import About from '../../components/About/About';
const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <About />
    </div>
  )
}

export default Home