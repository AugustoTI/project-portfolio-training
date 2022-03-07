import styled from 'styled-components';

export const DivPosts = styled.div`
  display: grid;
  grid-template-columns: ${({ mobile }) => (mobile ? '1fr' : '1fr 1fr')};
  gap: 2rem;
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: ${({ mobile }) => (mobile ? 'center' : 'space-between')};
  align-items: center;

  h2 {
    font-size: 2.2rem;
    color: var(--dark);
    font-weight: 400;
    line-height: 2.7;
  }

  span {
    color: var(--secondary);
    cursor: pointer;
  }
`;
