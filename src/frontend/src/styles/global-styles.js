import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Rationale';
    src: local('Rationale'), local('Rationale-Regular'),
        url('../../static/fonts/Rationale-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Expletus Sans';
    src: local('ExpletusSans'), local('ExpletusSans-Medium'), url('../../static/fonts/ExpletusSans-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

  @font-face {
    font-family: 'Work Sans';
    src: local('Work Sans Italic'), local('WorkSans-Italic'),
        url('../../static/fonts/WorkSans-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Work Sans';
    src: local('Work Sans Regular'), local('WorkSans-Regular'),
        url('../../static/fonts/WorkSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    width: 10px;
    border-radius: 7.5px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  * {
    box-sizing: border-box;
  }

  html {
    background: #fff; /* fixes mix-blend-mode weirdness in Chrome */
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.bg};

    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.2);

    background: ${({ theme }) =>
      css`linear-gradient(170deg, ${theme.bg} 0%, ${theme.pgGradient1} 25%, ${theme.pgGradient2} 50%, ${theme.pgGradient3} 75%, ${theme.pgGradient4} 100%);`};
    background-size: auto 500vh;

    /* temp */
    height: 500vh;

    overflow: overlay;

    font-family: ${({ theme }) => theme.bodyFont};
  }

  main {
    /* temp */
    height: 500vh;
    overflow: auto;
  }
`;
