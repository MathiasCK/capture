import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Animations
import { motion } from 'framer-motion';
import {
  fade,
  lineAnim,
  pageAnimation,
  photoAnim,
  slider,
  sliderContainer,
} from '../animation';

import ScrollTop from '../components/ScrollTop';
import { Helmet } from 'react-helmet';
import { MovieState } from '../movieState';

const OurWork = () => {
  const projects = MovieState();

  return (
    <Work
      style={{ background: '#fff' }}
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <Helmet>
        <title>Potfolio | Work</title>
      </Helmet>
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      {projects.map(project => (
        <Movie>
          <motion.h2 variants={fade}>{project.title}</motion.h2>
          <motion.div variants={lineAnim} className='line'></motion.div>
          <Link to={project.url}>
            <Hide>
              <motion.img
                variants={photoAnim}
                src={project.mainImg}
                alt='athlete'
              />
            </Hide>
          </Link>
        </Movie>
      ))}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ff033e;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

// Farame Animations
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
