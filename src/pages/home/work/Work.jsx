import React from 'react';
import * as Styled from './styledWork';
import { data } from '../../../data';
import { WorkContent } from '../../../components/workContent/WorkContent';
import { useMedia } from '../../../hooks/useMedia';

export const Work = () => {
  const match = useMedia('(max-width:760px)');

  return (
    <section className="container" style={{ padding: '0 1.6rem 3.2rem' }}>
      <Styled.Header mobile={match}>
        <h2>Featured works</h2>
      </Styled.Header>
      <Styled.UlArticles>
        {data.map((props) => (
          <li key={props.id}>
            <WorkContent mobile={match} {...props} />
          </li>
        ))}
      </Styled.UlArticles>
    </section>
  );
};
