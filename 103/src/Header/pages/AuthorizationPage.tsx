import React, { Fragment, useEffect, useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './AuthorizationPage.scss';
import styled from 'styled-components';
import { LogInPage } from './LogInPage';
import { SignInPage } from './SignInPage';
import { SocialBefore, AlertError, BackButton, Wrapper, Content, ContentHeader, ContentWrapper } from '../styledComponents';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Header = styled.div`

`;

const config = {
  apiKey: "AIzaSyCaU0-FbnHAag9PF8IbRrHAfNnrP9G-xXw",
  authDomain: "react-app-rsclone.firebaseapp.com",
  databaseURL: "https://react-app-rsclone-default-rtdb.firebaseio.com",
  projectId: "react-app-rsclone",
  storageBucket: "react-app-rsclone.appspot.com",
  messagingSenderId: "488595044140",
  appId: "1:488595044140:web:88056b9ed8c5a660dc5e89"
};

firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  },
};

interface AuthorizationPageProps {
  onToggleEnterUser: (isUser: boolean) => void;
}

export const AuthorizationPage: React.FC<AuthorizationPageProps> = ({ onToggleEnterUser }) => {
  const addBodyClass = (className: string): void => document.body.classList.add(className);
  const removeBodyClass = (className: string): void => document.body.classList.remove(className);
  const [isErrorSignIn, setErrorSignIn] = useState(false);

  useEffect(() => {
    addBodyClass('body');

    return () => {
      removeBodyClass('body');
    }
  }, ['body']);

  const toggleErrorComponent = (isError: boolean): void => {
    setErrorSignIn(isError);
  }

  return (
    <Fragment>
      <Wrapper>
        <Content>
          <Header>
            <BackButton to="/">
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
              <NavLink exact className="tabsItem" to="/authorization">LogIn</NavLink>
              <NavLink className="tabsItem" to="/authorization/registration">SignIn</NavLink>
            </div>
          </ContentHeader>
          <ContentWrapper>
            {isErrorSignIn
              && (<AlertError> Invalid E-mail or password!</AlertError>)
            }
            <Switch>
              <Route exact path="/authorization" render={() => <LogInPage onToggleErrorComponent={toggleErrorComponent} toggleEnterUser={onToggleEnterUser} />} />
              <Route path="/authorization/registration" component={SignInPage} />
            </Switch>
            <SocialBefore>sign in via social networks</SocialBefore>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </ContentWrapper>
        </Content>
      </Wrapper>
    </Fragment >
  );
};
