import styled from 'styled-components';

export const Article = styled.article`
  background-color: white;
  padding: 2.4rem;
  color: var(--dark);
  border-radius: 0.4rem;

  h2 {
    font-size: 2.6rem;
    font-weight: bold;
  }

  @media (max-width: 740px) {
    h2 {
      font-size: 2.2rem;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 3rem;
  margin-top: 2.5rem;
  margin-bottom: 2rem;

  li:last-child {
    position: relative;

    &::before {
      display: block;
      background-color: #000;
      content: '';
      width: 1px;
      height: 21px;
      position: absolute;
      left: -15px;
    }
  }
`;
