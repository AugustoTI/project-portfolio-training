import React from 'react';
import * as Styled from './footerStyled';
import { ReactComponent as Insta } from '../../assets/insta.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';

export const Footer = () => {
  return (
    <Styled.Footer className="container">
      <ul className="footer-links">
        <li>
          <a href="https://www.instagram.com/guzz_52/">
            <Insta />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/augusto-césar-07114421b/">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Guzz_TI">
            <Twitter />
          </a>
        </li>
      </ul>
      <p>Copyright ©2020 All rights reserved </p>
    </Styled.Footer>
  );
};
