import React from 'react';
import styled from 'styled-components';
import { ContentTitle, UserForm, FormField, InputText, TogglePassword, FormFieldCaption, ButtonSave } from '../../styledComponents';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const InputPassword = styled(InputText)`
  padding-right: 48px;
`;

export const UserPasswordPage: React.FC = () => {
  const toggleVisiblePassword = (event: React.MouseEvent): void => {
    const span = event.target;
    span.previousElementSibling.setAttribute('type', span.previousElementSibling.getAttribute('type') === 'text' ? 'password' : 'text');
  };

  return (
    <>
      <ContentTitle>
        Password
      </ContentTitle>
      <UserForm>
        <FormField>
          <InputPassword
            type='password'
            id='password-new'
            name='password-new'
            autocomplete='new-password'
            placeholder='New password'
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        <FormFieldCaption>
          Password must contain letters, numbers and be at least 8&nbsp;characters.
        </FormFieldCaption>
        <FormField>
          <InputPassword
            type='password'
            id='password-confirm'
            name='password-new'
            autocomplete='password-confirm'
            placeholder='Confirm new password'
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        <ButtonSave
          type='submit'
          name='submitAction'
          value='Save'
        >
          Save
          </ButtonSave>
      </UserForm>
    </>
  );
};
