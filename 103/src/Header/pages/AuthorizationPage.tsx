import React, { Fragment, useEffect } from 'react';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';
import './AuthorizationPage.scss';
import styled from 'styled-components';
import { RegistrationForm } from './RegistrationForm';
import { RegistrationPage } from '../pages/RegistrationPage';
import { MainPage } from '../pages/MainPage';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 450px;
  max-width: 100%;
`;

const Content = styled.div`
  border-radius: 8px;
`;

const Header = styled.div`

`;

const BackButton = styled.a`
  color: #fff;
  padding: 16px 16px 16px 0;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 15px;
  line-height: 24px;
  transition-property: background-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  cursor: pointer;

  & span {
    margin-left: 5px;
  }

  & svg {
    fill: #000;
    vertical-align: bottom;
    transform-origin: center;
    transform: rotate(180deg);
    border-radius: 50%;
    background-color: #ccc;
  }

  &:hover {
    color: rgba(255,255,255,0.8);
  }
`;

const ContentHeader = styled.div`
  background-color: #fff;
  padding: 24px 40px 0 40px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  border-radius: 8px 8px 0 0;

  & div {
    display: flex;
  }

  .tabsItem {
    flex: 1 1 50%;
    padding: 0 0 16px 0;
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    color: rgba(0,0,0,0.48);
    position: relative;
    display: block;
    text-decoration: none;
    text-align: center;

    &.active,
    &:hover {
      color: #000;
    }

    &.active:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      background-color: #1b8dfb;
      height: 3px;
      width: 100%;
      border-radius: 3px 3px 0 0;
    }
  }
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 0 40px 24px 40px;
  border-radius: 0 0 8px 8px;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  text-align: right;

  & a {
    color: #0095cc;
    text-decoration: none;
  }
`;

export const AuthorizationPage: React.FC = () => {
  const addBodyClass = (className: string): void => document.body.classList.add(className);
  const removeBodyClass = (className: string): void => document.body.classList.remove(className);

  useEffect(() => {
    addBodyClass('body');

    return () => {
      removeBodyClass('body');
    }
  }, ['body']);

  return (
    <Fragment>
      <BrowserRouter>
        <Wrapper>
          <Content>
            <Header>
              <BackButton href="/">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.3 7.5a.4.4 0 010-.7c.3-.2.6-.1.8 0l4.6 4.9v.6L10 17.1c-.2.2-.5.3-.7 0a.4.4 0 010-.6l4.2-4.5-4.3-4.5z" />
                </svg>
                <span>103.ua</span>
              </BackButton>
            </Header>
            <ContentHeader>
              <div>
                <NavLink className="tabsItem" to="/authorization">LogIn</NavLink>
                <NavLink className="tabsItem" to="/registration">SignIn</NavLink>
              </div>
            </ContentHeader>
            <ContentWrapper>
              <Switch>
                <Route exact path="/authorization" component={RegistrationForm} />
                <Route path="/registration" component={RegistrationPage} />
                {/* <Route path="/restore" component={MainPage} /> */}
              </Switch>
              {/* <RegistrationForm /> */}
              {/* <NavLink to="/restore">Forgot password?</NavLink> */}
            </ContentWrapper>
          </Content>
        </Wrapper>
      </BrowserRouter>
    </Fragment >
  );
};
