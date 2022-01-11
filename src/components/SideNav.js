import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollTop from './ScrollTop';

const SideNav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);
  const { pathname } = useLocation();
  return (
    <>
      <Navbar>
        <h1>
          <Link id='logo' to='/'>
            Mathias Kolberg
          </Link>
        </h1>
        <Link to='#' className='menu-icon'>
          <i onClick={showSideBar}>
            {' '}
            {sidebar ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
          </i>
        </Link>
      </Navbar>
      <StyledNav>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul>
            <li>
              <Link to='/' onClick={showSideBar}>
                About Me
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{ width: pathname === '/' ? '50%' : '0%' }}
              />
            </li>
            <li>
              <Link to='/work' onClick={showSideBar}>
                Our Work
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{ width: pathname === '/work' ? '50%' : '0%' }}
              />
            </li>
            <li>
              <Link to='/contact' onClick={showSideBar}>
                Contact Us
              </Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
              />
            </li>
          </ul>
        </nav>
      </StyledNav>
      <ScrollTop />
    </>
  );
};

const Navbar = styled(motion.div)`
  @media (min-width: 550px) {
    display: none;
  }
  background: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 10vh;
  min-width: 100%;
  .menu-icon {
    font-size: 2rem;
    color: white;
    margin: 0 1rem;
  }
  #logo {
    margin: 0 1rem;
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const StyledNav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .menu-icon {
    margin-right: 2rem;
    font-size: 2rem;
    color: white;
  }
  ul {
    list-style: none;
  }
  a {
    color: white;
    text-decoration: none;
  }
  li {
    position: relative;
    padding: 2rem 0;
  }
  .nav-menu {
    z-index: 20;
    background: #000000;
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 9%;
    right: -100%;
    transition: 850ms;
    &.active {
      right: 0;
      transition: 350ms;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #ff033e;
  width: 0%;
  position: absolute;
  bottom: 10% !important;
  left: 0%;
`;

export default SideNav;
