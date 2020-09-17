import styled from 'styled-components';
import TextReveal from '../../components/TextReveal';

// custom styles on top of the TextReveal component to have
// specific styles for the subheader (just underneath the main logo)
export default styled(TextReveal)`
  font-family: ${({ theme }) => theme.subheaderFont};
  font-size: 2em;
  color: white;
  padding-left: 15%;
  margin-bottom: 5vh;

  a {
    position: relative;
    color: white;

    &:link {
      color: white;
    }

    &:visited {
      color: black;
    }

    &:before {
      /*
        link underline reveal anim... hardcoded delay to match up with
        framer-motion staggered animations for now until a better solution
        can be found
      */
      @keyframes underline-reveal {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }

      content: '';
      position: absolute;
      bottom: 0.15em;
      left: 0;

      background-color: white;

      width: 0%;
      height: 2px;

      animation-name: underline-reveal;
      animation-duration: 0.8s;
      animation-delay: 2.6s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
    }

    &:after {
      content: attr(data-content);
      position: absolute;
      top: 0;
      left: 0;

      background-color: white;
      color: #7d7d7d;

      width: 0%;
      height: 85%;
      white-space: pre;
      overflow: hidden;

      transition-property: width;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;
