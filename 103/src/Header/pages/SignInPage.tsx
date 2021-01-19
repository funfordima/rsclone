import React from 'react';
import styled from 'styled-components';
import { Form, InputText, FormField, TogglePassword, InputBtnSignIn, FormFieldCaption } from '../styledComponents';

export const SignInPage: React.FC = () => {

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
