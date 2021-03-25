import React from "react";
import home1 from "../img/home1.png";
import { PageSection } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <PageSection>
      <div className="description">
        <motion.div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </div>
      <div className="image">
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </div>
      <Wave />
    </PageSection>
  );
};

//Styled Components

export default AboutSection;
