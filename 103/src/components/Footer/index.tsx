import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoSvg from '../Header/LogoSvg';

const FooterWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 -1px 0 0 rgb(0 0 0 / 8%);
  position: relative;
`;

const FooterLineContainer = styled.div`
  padding: 24px;
  min-height: 64px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const FooterLogoLink = styled(NavLink)`
  flex: 0 0 124px;
  
  & svg {
    fill: #46cdd6;
  }
  
  &:hover {
    opacity: 0.9;
  }
`;

const Footer: React.FC = () => {
  return (
    <>
      <FooterWrapper>
        <FooterLineContainer>
          <FooterLogoLink to="/" title="logo" aria-label="logo">
            <LogoSvg />
          </FooterLogoLink>
        </FooterLineContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
