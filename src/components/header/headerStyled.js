import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  background: #fff;
`;

export const Nav = styled.nav`
  padding: 2rem 1.6rem;
  display: flex;
  justify-content: end;
  color: var(--dark);
  font-size: 2rem;
  font-weight: 500;

  button {
    display: flex;
    cursor: pointer;
    border: 2px solid #b5b5b5;
    border-radius: 0.2rem;
    background: #e8e8e8;

    svg > * {
      fill: var(--dark);
    }
  }

  .desktop {
    display: flex;
    gap: 3.2rem;
  }

  .mobile {
    display: grid;
    justify-items: center;
    gap: 1.6rem;
    position: absolute;
    top: 6.5rem;
    transform: translateX(30px);
    opacity: 0;
    pointer-events: none;
    background-color: #e8e8e8;
    padding: 2rem;
    border-radius: 0.4rem;
  }

  .mobileActive {
    animation: animeTop 0.3s forwards;
  }

  @keyframes animeTop {
    to {
      transform: initial;
      opacity: initial;
      pointer-events: initial;
    }
  }
`;