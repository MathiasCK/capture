import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <Hide>
        <motion.div /*variants={lineAnim}*/ className="faq-line"></motion.div>
      </Hide>
    </motion.div>
  );
};

const Hide = styled(motion.div)`
  overflow: hidden;
`;

export default Toggle;
