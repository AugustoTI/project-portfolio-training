import React from 'react';
import * as Styled from './styledPosts';
import { PostsContent } from '../../../components/postsContent/PostsContent';

export const Posts = ({ match }) => {
  return (
    <section style={{ backgroundColor: '#EDF7FA' }}>
      <div className="container" style={{ padding: '0 1.6rem 3.2rem 1.6rem' }}>
        <Styled.DivTitle mobile={match}>
          <h2>Recent posts</h2>
          {!match && <span>View all</span>}
        </Styled.DivTitle>
        <Styled.DivPosts mobile={match}>
          <PostsContent title="Making a design system from scratch" />
          <PostsContent title="Creating pixel perfect icons in Figma" />
        </Styled.DivPosts>
      </div>
    </section>
  );
};
