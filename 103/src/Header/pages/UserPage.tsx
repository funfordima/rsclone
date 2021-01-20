import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { BackButton } from '../styledComponents';
import { ProfileMenu } from './components/ProfileMenu';
import { UserContentPage } from '../pages/components/UserContentPage';
import { UserPasswordPage } from '../pages/components/UserPasswordPage';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const Header = styled.header`
  display: block;
`;

const BackButtonStyled = styled(BackButton)`
  color: rgba(0,0,0,0.48);
  text-decoration: none;
  padding-left: 16px;

  &:hover {
    color: rgba(0,0,0,0.8);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1008px;
  box-sizing: border-box;
  margin: 0 auto 24px auto;
  padding: 0 24px;
  flex: 1;
`;

const Section = styled.div`
  display: flex;
`;

const Aside = styled.aside`
  flex: 0 0 auto;
  width: 208px;
  padding-top: 48px;
`;

const Content = styled.div`
  flex: 1 1 auto;
  padding-left: 48px;
  overflow: hidden;
`;

export const UserPage: React.FC = () => {
  const addBodyClass = (className: string): void => document.body.classList.add(className);
  const removeBodyClass = (className: string): void => document.body.classList.remove(className);

  useEffect(() => {
    addBodyClass('user-console');

    return () => {
      removeBodyClass('user-console');
    }
  }, ['body']);


  return (
    <>
      <Header>
        <BackButtonStyled to="/">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.3 7.5a.4.4 0 010-.7c.3-.2.6-.1.8 0l4.6 4.9v.6L10 17.1c-.2.2-.5.3-.7 0a.4.4 0 010-.6l4.2-4.5-4.3-4.5z" />
          </svg>
          <span>103.ua</span>
        </BackButtonStyled>
      </Header>
      <Container>
        <Section>
          <Aside>
            <ProfileMenu />
          </Aside>
          <Content>
            <Switch>
              <Route exact path={'/profile/account'} component={UserContentPage} />
              <Route path={'/profile/password'} component={UserPasswordPage} />
            </Switch>
          </Content>
        </Section>
      </Container>
    </>
  );
};
