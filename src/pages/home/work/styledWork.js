import styled from 'styled-components';

export const UlArticles = styled.ul`
  display: grid;
  gap: 3rem;

  > li {
    &::after {
      display: block;
      content: '';
      width: 100%;
      height: 1px;
      background: #e0e0e0;
      margin-top: 1.5rem;
    }
  }
`;

export const Header = styled.header`
  h2 {
    text-align: ${({ mobile }) => (mobile ? 'center' : 'initial')};
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 2.7;
    color: var(--dark);
  }
`;
