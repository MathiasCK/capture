import { AnimateSharedLayout } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
//import { scrollReveal } from "../animation";
import { PageSection } from '../styles';
import Toggle from './Toggle';
//import useScroll from "./useScroll";

const FaqSection = () => {
  // const [element, controls] = useScroll();
  return (
    <Faq /*variants={scrollReveal} ref={element} animate={controls}*/>
      <h2>
        Any Questions ? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I Start?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>
        <Toggle title='Daily Schedule'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>
        <Toggle title='Different Payment Methods'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>
        <Toggle title='What Products do you offer.'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(PageSection)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ff033e;
    height: 0.2rem;
    margin: 2rem 0rem;
    max-width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
