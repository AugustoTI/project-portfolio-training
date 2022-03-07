import React from 'react';
import { Main } from './main/Main';
import { Posts } from './posts/Posts';
import { Work } from './work/Work';

export const Home = () => {
  return (
    <>
      <Main />
      <Posts />
      <Work />
    </>
  );
};
