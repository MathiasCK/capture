import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <ul>
        <li>
          <Link id='logo' to='/'>
            Mathias Kolberg
          </Link>
        </li>
        <li>
          <Link to='/'>About Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/work'>My Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  @media (min-width: 549px) {
    display: flex;
  }
  position: sticky;
  top: 0;
  z-index: 20;
  min-height: 5vh;
  width: 100%;
  display: none;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #000000;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem;
    ul {
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
  @media (max-width: 550px) {
    display: none;
    ul {
      flex-direction: column;
      align-items: center;
      li {
        padding: 1rem 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #ff033e;
  width: 0%;
  position: absolute;
  bottom: -10%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
