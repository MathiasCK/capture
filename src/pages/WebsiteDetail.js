import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Websites } from '../websites';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';
import { Helmet } from 'react-helmet';

const WebsiteDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(Websites);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter(stateMovie => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animate='show'
        >
          <Helmet>
            <title>Portfolio | {movie.title}</title>
          </Helmet>
          <ScrollTop />
          <HeadLine>
            <h2>{movie.title}</h2>
            <a href={movie.website} target='_blank' rel='noreferrer'>
              Visit
            </a>
          </HeadLine>
          <Image>
            <img src={movie.mainImg} alt='movie' />
          </Image>
          <Awards>
            {movie.description.map(desc => (
              <Description>
                <h3>{desc.title}</h3>
                <div className='line'></div>
                <p>{desc.description}</p>
              </Description>
            ))}
          </Awards>
          <ImageDisplay>
            {movie.images.map(image => (
              <div className='image'>
                <img src={image.src} alt='movie' />
              </div>
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
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const Awards = styled.div`
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
const ImageDisplay = styled.div`
  height: 50vh;
  display: flex;
  .image {
    padding: 1rem;
    flex: 53%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default WebsiteDetail;
