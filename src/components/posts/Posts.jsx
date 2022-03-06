import React from 'react';
import * as Styled from './postsSyled';

export const Posts = ({ title }) => {
  return (
    <Styled.Article>
      <h2>{title}</h2>
      <Styled.Ul>
        <li>12 Feb 2020</li>
        <li>Design, Pattern</li>
      </Styled.Ul>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </Styled.Article>
  );
};
