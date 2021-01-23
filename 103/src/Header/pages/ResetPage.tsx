import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AlertError, InputText, ButtonSave, Form, Wrapper, Content, ContentHeader, ContentWrapper } from '../styledComponents';
import svgArrowLeft from '../public/arrow-left.svg';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const StyledNav = styled(NavLink)`
  margin-top: -4px;
  margin-left: -8px;
  margin-right: 16px;
  width: 32px;
  height: 32px;
  display: inline-block;
  float: left;
  background: rgba(0,0,0,0.08) url(${svgArrowLeft}) no-repeat center center;
  background-size: 24px 24px;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
  transform: rotateY(180deg);

  &:hover {
    background-color: rgba(0,0,0,0.16);
  }
`;

const PageTitle = styled.div`
  padding-bottom: 16px;
  color: #000;
  font-size: 24px;
  line-height: 26px;
  font-weight: 500;
  margin: 0;
`;

const FormInfo = styled.div`
  margin-top: 20px;
`;

interface ResetPageProps {
  onResetPassword: () => void;
}

export const ResetPage: React.FC<ResetPageProps> = ({ onResetPassword }) => {
  const addBodyClass = (className: string): void => document.body.classList.add(className);
  const removeBodyClass = (className: string): void => document.body.classList.remove(className);
  const [isErrorSignIn, setErrorSignIn] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    addBodyClass('body');

    return () => {
      removeBodyClass('body');
    }
  }, ['body']);

  const toggleErrorComponent = (isError: boolean): void => {
    setErrorSignIn(isError);
  }

  const changeUserEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const clickSendBtnHandler = (): void => {
    const minEmailLength = 5;

    if (!email || email.trim().length < minEmailLength || !email.includes('@') || !email.split('@')[1].includes('.')) {
      setErrorSignIn('Email should be at least 5 symbols, must contain @, and contain ends with "."');
    } else {
      firebase.auth().sendPasswordResetEmail(email).then(() => {
        onResetPassword('You should receive an email with further instructions shortly.');

        setTimeout(() => onResetPassword(''), 2000);
      }).catch((error) => {
        setErrorSignIn(error.message);
      });
    }
  };

  return (
    <>
      <Wrapper>
        <Content>
          <ContentHeader>
            <StyledNav exact to="/authorization" />
            <PageTitle>
              Password Recovery
            </PageTitle>
          </ContentHeader>
          <ContentWrapper>
            {isErrorSignIn
              && (<AlertError>{isErrorSignIn}</AlertError>)
            }
            <Form>
              <FormInfo>
                Enter your E-mail and we will send you a link to reset your password.
              </FormInfo>
              <InputText
                type='text'
                name='username'
                placeholder='E-mail'
                autoFocus
                onChange={changeUserEmail}
              />
              <ButtonSave
                type='button'
                value='Send'
                onClick={clickSendBtnHandler}
              >
                Send E-mail
              </ButtonSave>
            </Form>
          </ContentWrapper>
        </Content>
      </Wrapper>
    </>
  );
};
