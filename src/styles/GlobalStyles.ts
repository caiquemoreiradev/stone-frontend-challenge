// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {

    min-height: 100vh;
    max-width: 100vw;
    position: relative;

    margin: 0;
    padding: 64px;
    box-sizing: border-box;

    font-family: Roboto, Sans-Serif;

    background-image: url('../src/assets/background-mask.png');
    background-size: contain;
    background-repeat: no-repeat;

    background-position: right top;
  }
`;

export default GlobalStyle;