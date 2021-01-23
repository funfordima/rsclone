import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentTitle, UserForm, FormField, InputText, TogglePassword, FormFieldCaption, ButtonSave, AlertError, AlertSuccess } from '../../styledComponents';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const InputPassword = styled(InputText)`
  padding-right: 48px;
`;

export const UserPasswordPage: React.FC = () => {
  const user = firebase.auth().currentUser;
  const [isError, setError] = useState('');
  const [isSuccess, setSuccess] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const toggleVisiblePassword = (event: React.MouseEvent): void => {
    const span = event.target;
    span.previousElementSibling.setAttribute('type', span.previousElementSibling.getAttribute('type') === 'text' ? 'password' : 'text');
  };

  const handleSetNewPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(event.target.value.trim());
    setError('');
  };

  const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmedPassword(event.target.value.trim());
    setError('');
  };

  const handleBtnSaveClick = (): void => {
    const minLengthPassword = 8;
    const regExp = new RegExp(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([^_])([a-zA-Z0-9]){${minLengthPassword},}$`);

    if (!newPassword.match(regExp)) {
      setError('Password must contains a lowercase letters, an uppercase letters, number and be at least 8 characters.');
    }

    if (confirmedPassword !== newPassword) {
      setError('Passwords do not match');
    }

    user.updatePassword(newPassword).then(() => {
      setSuccess('Password changed');

      setTimeout(() => setSuccess(''), 1000);
    }).catch((error) => {
      setError(error.message);
    });
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
            value={newPassword}
            onChange={handleSetNewPassword}
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        <FormFieldCaption>
          Password must contains a lowercase letters, an uppercase letters, number and be at least 8&nbsp;characters.
        </FormFieldCaption>
        <FormField>
          <InputPassword
            type='password'
            id='password-confirm'
            name='password-new'
            autocomplete='password-confirm'
            placeholder='Confirm new password'
            value={confirmedPassword}
            onChange={handleConfirmPassword}
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        {isError && <AlertError>{isError}</AlertError>}
        {isSuccess && <AlertSuccess>{isSuccess}</AlertSuccess>}
        <ButtonSave
          type='button'
          name='submitAction'
          value='Save'
          onClick={handleBtnSaveClick}
        >
          Save
          </ButtonSave>
      </UserForm>
    </>
  );
};
