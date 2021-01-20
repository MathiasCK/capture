import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Helmet>
        <title>Portfolio | Contact</title>
      </Helmet>
      <ScrollTop />
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get In Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a mailTo="#" href="#" target="_blank">
              Send Us A Message
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a mailTo="#" href="#" target="_blank">
              Send Us An Email
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a mailTo="#" href="#" target="_blank">
              Social Media
            </a>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  a {
    text-decoration: none;
    font-weight: lighter;
    font-size: 4rem;
    color: black;
    margin: 0 1rem 2rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled(motion.div)`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const Hide = styled(motion.div)`
  overflow: hidden;
`;

const Circle = styled(motion.div)`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background: #353535;
  margin: 0 1rem 2rem;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
