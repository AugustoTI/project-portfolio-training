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
    margin-top: 7rem ;
    height: 2000px ;
    font-family: 'Heebo';
    --primary: #FF6464;
    --secondry: #00A8CC;
    --dark: #21243D;
    --light: #8695A4;
  }

  a {
    text-decoration: none;
    display: inline-block;
    color: inherit ;
  }

  a.active {
    color: var(--primary)
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .title {
    font-size: 4.4rem;
    font-weight: bold;
    line-height: 1.36;
    color: var(--dark);
  }

  @media (max-width: 760px) {
    .title {
      font-size: 3.2rem;
    }
    
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
