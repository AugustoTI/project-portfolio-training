import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  html {
    font-size: 62.5% ;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Heebo';
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
