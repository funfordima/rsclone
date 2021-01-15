import React from 'react';
import styled from 'styled-components';
import { Form, InputText, FormField, TogglePassword, InputBtnSignIn } from '../styledComponents';

const FormFieldCaption = styled.div`
  margin-top: 8px;
  font-size: 13px;
  line-height: 16px;
  color: rgba(0,0,0,0.5);
`;

// const InputBtnSignIn = styled.input`
//   background-color: #1b8dfb;
//   height: 48px;
//   font-size: 15px;
//   font-weight: 500;
//   margin-top: 20px;
//   border-radius: 2px;
//   border: none;
//   color: #fff;
//   width: 100%;
//   cursor: pointer;
//   transition: background-color 0.2s ease-in-out;
//   background-clip: padding-box;
// `;

export const RegistrationPage: React.FC = () => {

  const toggleVisiblePassword = (event: React.MouseEvent): void => {
    const span = event.target;
    span.previousElementSibling.setAttribute('type', span.previousElementSibling.getAttribute('type') === 'text' ? 'password' : 'text');
  };

  return (
    <React.Fragment>
      <Form>
        <InputText
          type="text"
          placeholder="Enter your name"
          name="firstName"
        />
        <InputText
          type="text"
          placeholder="Enter lastname"
          name="lastName"
        />
        <InputText
          type="text"
          placeholder="Enter E-mail"
          name="email"
          autocomplete="email"
        />
        <FormField>
          <InputText
            type="password"
            placeholder="Password"
            name="password"
            autocomplete="new-password"
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        <FormFieldCaption>
          Password must contain letters, numbers and be at least 8&nbsp;characters.
        </FormFieldCaption>
        <FormField>
          <InputText
            type="password"
            placeholder="Password confirm"
            name="password-confirm"
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        <InputBtnSignIn
          type="submit"
          value="Register"
        />
      </Form>
    </React.Fragment>
  );
};
