import React from 'react';
import * as Styled from './styledMain';
import HeroPhoto from '../../../assets/heroPhoto.png';

export const Main = () => {
  return (
    <Styled.Main className="container">
      <div className="main-content">
        <h1 className="title">
          Hi, I am John, <br /> Creative Technologist
        </h1>
        <p className="main-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className="main-btn">Download Resume</button>
      </div>
      <div className="main-img">
        <img src={HeroPhoto} alt="The professional" />
      </div>
    </Styled.Main>
  );
};
