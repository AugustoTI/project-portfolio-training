import React from 'react';
import { UlBlog } from './styledBlog';
import { BlogContent } from '../../components/blogContent/BlogContent';
import { useMedia } from '../../hooks/useMedia';

export const Blog = () => {
  const match = useMedia('(max-width:760px)');

  return (
    <section className="container" style={{ padding: '2.4rem 1.6rem' }}>
      <header>
        <h1 className="title">Blog</h1>
      </header>
      <UlBlog mobile={match}>
        <li>
          <BlogContent />
        </li>
        <li>
          <BlogContent />
        </li>
        <li>
          <BlogContent />
        </li>
        <li>
          <BlogContent />
        </li>
      </UlBlog>
    </section>
  );
};
