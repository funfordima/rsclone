import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoSvg from '../LogoSvg';

const StyledLogoLink = styled(NavLink)`
  flex: 0 0 124px;

  &:hover {
    opacity: 0.9;
  }

  @media only screen and (max-width: 767px) and (min-width: 0) {
    position: absolute;
    z-index: 1;
    width: 124px;
    margin-left: -62px;
    height: 48px;
    left: 50%;
    top: 0;
    display: flex;
    align-items: center;
  }
`;

const LogoLink: React.FC = () => {
  return (
    <>
      <StyledLogoLink to="/" title="logo" aria-label="logo">
        <LogoSvg />
      </StyledLogoLink>
    </>
  );
};

export default LogoLink;
