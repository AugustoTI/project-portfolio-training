import styled from 'styled-components';

export const UlBlog = styled.ul`
  display: grid;
  gap: 3.2rem;
  margin-top: ${({ mobile }) => (mobile ? '2rem' : '5rem')};

  > li::after {
    display: block;
    content: '';
    background: #e0e0e0;
    width: 100%;
    height: 1px;
    margin-top: 2.4rem;
  }
`;
