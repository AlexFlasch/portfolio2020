import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const RevealContainer = styled(motion.div)`
  mix-blend-mode: overlay;
`;

const containerVariants = (delay = 0) => ({
  initial: {},
  revealed: { transition: { delayChildren: delay, staggerChildren: 0.05 } },
});

const sentenceVariants = {
  initial: {},
  revealed: { transition: { staggerChildren: 0.02 } },
};

const letterVariants = {
  initial: {
    display: 'inline-block',
    opacity: 0,
    x: -5,
    scale: 0.6,
  },
  revealed: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', damping: 16, stiffness: 200 },
  },
};

const TextReveal = props => {
  let sentences;

  if (typeof props.children === 'string') {
    sentences = [props.children.split('')];
  } else if (props.children.length) {
    sentences = props.children.map(s =>
      s.length
        ? { content: s.split(''), el: 'div', props: {} }
        : { content: s.content.split(''), el: s.el, props: s.props },
    );
  }

  return (
    <RevealContainer
      className={props.className}
      variants={containerVariants(props.delay)}
      initial="initial"
      animate="revealed"
    >
      {sentences.map((sentence, i) => {
        const Sentence = motion[sentence.el];

        return (
          <Sentence
            key={`${sentence.content}-${i}`}
            variants={sentenceVariants}
            {...sentence.props}
          >
            {sentence.content.map((letter, i) => (
              <motion.span key={`${letter}-${i}`} variants={letterVariants}>
                {/* replace any spaces with a non-breaking space */}
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </Sentence>
        );
      })}
    </RevealContainer>
  );
};

TextReveal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          el: PropTypes.node,
          props: PropTypes.object,
          content: PropTypes.string,
        }),
      ]),
    ),
  ]),
  className: PropTypes.string,
  delay: PropTypes.number,
};

export default TextReveal;
