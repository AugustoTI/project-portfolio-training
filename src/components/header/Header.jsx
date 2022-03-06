import React from 'react';
import * as Styled from './headerStyled';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as MenuMobile } from '../../assets/menuMobile.svg';
import { useMedia } from '../../hooks/useMedia';

export const Header = () => {
  const [mobileActive, setMobileActive] = React.useState(false);
  const mobile = useMedia('(max-width:700px)');

  const handleMobile = () => setMobileActive(!mobileActive);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileActive(false);
  }, [pathname]);

  return (
    <Styled.Header>
      <Styled.Nav className="container">
        {mobile && (
          <button onClick={handleMobile}>
            <MenuMobile />
          </button>
        )}

        <ul
          className={`${mobile ? 'mobile' : 'desktop'} ${
            mobileActive && 'mobileActive'
          }`}
        >
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/works">Works</NavLink>
          </li>
        </ul>
      </Styled.Nav>
    </Styled.Header>
  );
};
