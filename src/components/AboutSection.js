import React from 'react';
import home1 from '../img/profile-dark.jpg';
import { PageSection } from '../styles';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <PageSection>
      <div className='description'>
        <motion.div>
          <div className='hide'>
            <motion.h2 variants={titleAnim}>Hi, </motion.h2>
          </div>
          <div className='hide'>
            <motion.h2 variants={titleAnim}>i'm Mathias </motion.h2>
          </div>
          <div className='hide'>
            <motion.h2 variants={titleAnim}>
              <span>full stack</span> JavaScript developer.
            </motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Link to='/work'>
          <motion.button variants={fade} href='/work'>
            Explore
          </motion.button>
        </Link>
      </div>
      <div className='image'>
        <motion.img variants={photoAnim} src={home1} alt='profile' />
      </div>
      {/* <Wave /> */}
    </PageSection>
  );
};

//Styled Components

export default AboutSection;
