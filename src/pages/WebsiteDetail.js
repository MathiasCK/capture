import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Websites } from '../websites';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, scrollReveal, titleAnim } from '../animation';
import ScrollTop from '../components/ScrollTop';
import { Helmet } from 'react-helmet';
import useScroll from '../components/useScroll';

const WebsiteDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [websites] = useState(Websites);
  const [website, setWebsite] = useState(null);
  const [languages, setLanguages] = useState({});

  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  //UseEffect
  useEffect(() => {
    const currentWebsite = websites.filter(
      stateWebsite => stateWebsite.url === url,
    );
    setWebsite(currentWebsite[0]);
  }, [websites, url]);

  useEffect(() => {
    if (website) {
      fetch(
        `https://api.github.com/repos/MathiasCK/${website.repo_name}/languages`,
      )
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(console.log());
    }
  }, [website]);

  return (
    <>
      {website && (
        <Details
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animate='show'
        >
          <Helmet>
            <title>Portfolio | {website.title}</title>
          </Helmet>
          <ScrollTop />
          <motion.div
            variants={scrollReveal}
            animate={controls3}
            ref={element3}
            initial='hidden'
          >
            <HeadLine>
              <motion.h2 variants={titleAnim} className='header'>
                {website.title}
              </motion.h2>
            </HeadLine>
            <Image>
              <a href={website.website} target='_blank' rel='noreferrer'>
                <img src={website.mainImg} alt='website' />
              </a>
            </Image>
          </motion.div>
          <Detail
            variants={scrollReveal}
            animate={controls1}
            ref={element1}
            initial='hidden'
          >
            {website.description.map(desc => (
              <Description className='paragraph'>
                <h3>{desc.title}</h3>
                <div className='line'></div>
                <p>{desc.description}</p>
              </Description>
            ))}
          </Detail>
          <ImageDisplay>
            {website.images.map(image => (
              <motion.div
                className='image'
                variants={scrollReveal}
                animate={controls2}
                ref={element2}
              >
                <img src={image.src} alt='website' />
              </motion.div>
            ))}
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 10vh;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled(motion.div)`
  background: white;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: 0.3s ease;
    &:hover {
      opacity: 0.9;
    }
  }
`;
const Detail = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 0rem;
  }
`;
const Description = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #ff033e;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled(motion.div)`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  .image {
    padding: 1rem;
    height: auto;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default WebsiteDetail;
