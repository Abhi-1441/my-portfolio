import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import About from '../../components/About/About';
const Home = () => {
  return (
    <motion.div className="home" key="home"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroBanner />
      <About />
    </motion.div>
  )
}

export default Home