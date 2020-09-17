import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StyledSection = styled(motion.section)`
  display: flex;
  justify-content: space-between;

  width: 100%;

  .title-container {
    position: relative;
  }

  .section-title {
    box-sizing: content-box;
    position: relative;
    top: 0;
    left: 0;
    font-family: 'Expletus Sans';
    font-size: 2.25rem;
    line-height: 1;

    margin: 0;
    margin-left: 1.5rem;
    padding: 0.5rem;

    color: ${({ theme }) => theme.pgGradient4};
    mix-blend-mode: overlay;

    border-top: 3px solid ${({ theme }) => theme.pgGradient4};
    border-left: 3px solid ${({ theme }) => theme.pgGradient4};
    box-shadow: 25px 25px 0 0 ${({ theme }) => theme.pgGradient4};

    &.blend-effect {
      /* (line height + (top padding + bottom padding)) - top border height */
      top: calc(-4.5rem - 3px);
    }

    &:first-letter {
      font-size: 3.5rem;
      letter-spacing: 10px;
      width: 1.5rem;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 1.5em;

      width: 100%;
      height: calc(4.5rem + 3px);
      line-height: 3.5rem;

      /* box-shadow: 25px 25px 0 0 ${({ theme }) => theme.pgGradient4}; */

      font-family: 'Expletus Sans';
      font-size: 2.25rem;

      &:first-letter {
        font-size: 3.5rem;
        letter-spacing: 10px;
      }
    }
  }

  .section-content {
    flex-basis: 65%;

    padding: 1.5em;
  }
`;

const AboutMe = props => {
  const { Component_Name, Title, Content } = props.content;

  const [ref, inView] = useInView({
    rootMargin: '0px -100px',
  });

  return (
    <StyledSection ref={ref}>
      <div className="title-container">
        <h2 id={Component_Name} className="section-title">
          {Title}
        </h2>
        <h2 className="section-title blend-effect" aria-hidden="true">
          {Title}
        </h2>
      </div>
      <p className="section-content">{Content}</p>
    </StyledSection>
  );
};

export default AboutMe;
