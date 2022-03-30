import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bellefair', serif;
    font-family: 'Barlow Condensed', sans-serif;
  }

  body, html {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
