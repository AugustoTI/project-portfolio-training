import styled from 'styled-components';

export const Article = styled.article`
  color: var(--dark);

  h2 {
    font-size: ${({ mobile }) => (mobile ? '2.6rem' : '3rem')};
    font-weight: 500;
  }
`;

export const UlList = styled.ul`
  display: flex;
  gap: 1.5rem;
  font-size: ${({ mobile }) => (mobile ? '1.6rem' : '2rem')};
  font-weight: 400;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  li:last-child {
    position: relative;
    color: var(--light);
    display: flex;
    gap: 1.5rem;
    align-items: center;

    &::before {
      display: block;
      background-color: #000;
      content: '';
      width: 1px;
      height: 21px;
    }
  }
`;
