import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 6rem;
  padding: 8rem 2.4rem;

  .main-content {
    .main-text {
      font-weight: 400;
      color: var(--dark);
      margin-top: 4rem;
    }

    .main-btn {
      background: var(--primary);
      border: 2px solid transparent;
      outline: none;
      color: #fff;
      font-size: 2rem;
      font-weight: 500;
      padding: 0.9rem 2rem;
      margin-top: 3.2rem;
      border-radius: 0.2rem;
      cursor: pointer;
      transition: 0.2s;

      &:hover,
      &:focus {
        border-color: #ff9292;
        box-shadow: 0 0 0 3px #ff3333;
      }
    }
  }

  .main-img {
    justify-self: center;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 6rem 2.4rem;
    gap: 3rem;

    .main-content {
      .main-text {
        margin-top: 2rem;
      }

      .main-btn {
        margin-top: 2.7rem;
      }
    }

    .main-img {
      grid-row: 1;
    }
  }
`;
