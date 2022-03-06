import React from 'react';
import HeroPhoto from '../../assets/heroPhoto.png';
import * as Styled from './homeStyled';
import { Posts } from '../../components/posts/Posts';
import { useMedia } from '../../hooks/useMedia';

export const Home = () => {
  const match = useMedia('(max-width:760px)');

  return (
    <>
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
      <section style={{ backgroundColor: '#EDF7FA' }}>
        <Styled.Div mobile={match} className="container">
          <Posts title="Making a design system from scratch" />
          <Posts title="Creating pixel perfect icons in Figma" />
        </Styled.Div>
      </section>
    </>
  );
};
