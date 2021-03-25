import { motion } from "framer-motion";
import styled from "styled-components";

export const PageSection = styled(motion.div)`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-align: center;
  padding: 5rem 1rem;
  button {
    margin: 1rem 0;
  }
  h2 {
    //font-size: smaller;
  }
  .description {
    flex: 1;
    z-index: 10;
    h2 {
      font-weight: lighter;
      z-index: 10;
    }
  }
  .image {
    z-index: 2;
    flex: 1;
    overflow: hidden;
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
  }
  .hide {
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    justify-content: center;
    padding: 5rem;
    .image {
      padding: 0 2rem;
    }
  }
`;
