import React from 'react';
import * as Styled from './styledContent.js';
import { useMedia } from '../../hooks/useMedia';

export const BlogContent = () => {
  const match = useMedia('(max-width:760px)');

  return (
    <Styled.Article mobile={match}>
      <h2>UI Interactions of the week</h2>
      <Styled.UlList mobile={match}>
        <li className="year">12 Feb 2019</li>
        <li>Express, Handlebars</li>
      </Styled.UlList>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </Styled.Article>
  );
};
