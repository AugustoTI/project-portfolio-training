import React from 'react';
import { Main } from './main/Main';
import { useMedia } from '../../hooks/useMedia';
import { Posts } from './posts/Posts';

export const Home = () => {
  const match = useMedia('(max-width:760px)');

  return (
    <>
      <Main />
      <Posts match={match} />
    </>
  );
};
