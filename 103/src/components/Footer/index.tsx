import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoSvg from '../Header/LogoSvg';
import YandexShare from 'react-yandex-share';
import { ReactComponent as GitSvg } from '../../assets/images/footer/git.svg';
import { ReactComponent as RSLogoSvg } from '../../assets/images/footer/rs_school_js.svg';

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

  @media (max-width: 500px) and (min-width: 0) {
    display: flex;
    flex-direction: column;
  }
`;

const FooterLogoLink = styled(NavLink)`
  margin-right: 1rem;
  flex: 0 0 124px;
  
  & svg {
    fill: #46cdd6;
  }
  
  &:hover {
    opacity: 0.9;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  font: 13px Roboto;
  text-align: right;
  font-family: Verdana, sans-serif;

  @media (max-width: 500px) and (min-width: 0) {
    justify-content: space-between;
    width: 60%;
  }
`;

const SchoolContainer = styled(AuthorContainer)`
  display: flex;
  font: 13px Roboto;
  text-align: right;
  font-family: Verdana, sans-serif;

  @media (max-width: 767px) and (min-width: 0) {
    display: none;
  }
`;

const AuthorWrapper = styled.div`
  padding: .5rem;

  & svg {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
    transition: .3s;

    @media (max-width: 560px) and (min-width: 0) {
      display: none;
    }
  }

  @media (max-width: 560px) and (min-width: 0) {
    padding-right: 0;
  }
`;

const Author = styled.a`
  display: flex;
  align-items: center;
  line-height: 1;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 5px;
  transition: color .3s ease-out;

  &:hover {
    color: #46cdd6;
  }
`;

const ShareContainer = styled.div`
  display: flex;

  @media (max-width: 500px) and (min-width: 0) {
    justify-content: space-between;
    width: 100%;
  }
`;

const Footer: React.FC = () => {
  return (
    <>
      <FooterWrapper>
        <FooterLineContainer>
          <ShareContainer>
            <FooterLogoLink to="/" title="logo" aria-label="logo">
              <LogoSvg />
            </FooterLogoLink>
            <YandexShare
              content={{ title: '103 RS Clone' }}
              theme={{ className: "ya-share2", lang: 'en', services: 'vkontakte,facebook,linkedin', dataLimit: "0", dataMoreButtonType: "short" }}
            />
          </ShareContainer>

          <AuthorContainer>
            <AuthorWrapper>
              <Author href='https://github.com/znakay'>
                Andrey Znak
              </Author>
              <Author href='https://github.com/AnastasiaFedotova'>
                AnastasiaFedotova
              </Author>
            </AuthorWrapper>
            <AuthorWrapper>
              <GitSvg />
            </AuthorWrapper>
            <AuthorWrapper>
              <Author href='https://github.com/funfordima'>
                Dima Litvinov
              </Author>
              <Author href='https://github.com/AndrewShamrey'>
                Andrey Shamrey
              </Author>
            </AuthorWrapper>
          </AuthorContainer>
          <SchoolContainer>
            <Author href='https://rs.school/js/'>
              <RSLogoSvg />
              RSClone by RS SCHOOL @&nbsp;2021
            </Author>
          </SchoolContainer>
        </FooterLineContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
