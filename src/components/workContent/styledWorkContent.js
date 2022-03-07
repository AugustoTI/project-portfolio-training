import styled from 'styled-components';

export const Article = styled.article`
  display: grid;
  grid-template-columns: ${({ mobile }) => (mobile ? '1fr' : '3fr 7fr')};
  gap: 1.8rem;
  color: var(--dark);

  h3 {
    font-size: ${({ mobile }) => (mobile ? '2.4rem' : '3rem')};
    font-weight: bold;
  }

  p {
    margin-top: 2.5rem;
  }
`;

export const Ul = styled.ul`
  margin-top: 0.9rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  li:last-child {
    font-size: ${({ mobile }) => (mobile ? '1.6rem' : '2rem')};
    color: var(--light);
  }
`;

export const Span = styled.span`
  background: #142850;
  padding: 0 1rem;
  font-size: 1.8rem;
  font-weight: 900;
  color: #fff;
  border-radius: 1.6rem;
`;
