import React from 'react';
import { data } from '../../data';
import { WorkContent } from '../../components/workContent/WorkContent';
import { UlArticles } from '../home/work/styledWork';
import { useMedia } from '../../hooks/useMedia';

export const Works = () => {
  const match = useMedia('(max-width:760px)');

  return (
    <section className="container" style={{ padding: '2.4rem 1.6rem' }}>
      <header style={{ marginBottom: `${match ? '3rem' : '3.4rem'}` }}>
        <h1 className="title">Works</h1>
      </header>
      <UlArticles>
        {data.map((props) => (
          <WorkContent mobile={match} key={props.id} {...props} />
        ))}
      </UlArticles>
    </section>
  );
};
