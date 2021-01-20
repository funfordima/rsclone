import React, { useState } from 'react';
import { Form, InputText, FormField, TogglePassword, InputBtnSignIn, FormFieldCaption, AlertError, AlertSuccess } from '../styledComponents';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

export const SignInPage: React.FC = () => {
  const [isError, setError] = useState('');
  const [isSuccess, setSuccess] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const toggleVisiblePassword = (event: React.MouseEvent): void => {
    const span = event.target;
    span.previousElementSibling.setAttribute('type', span.previousElementSibling.getAttribute('type') === 'text' ? 'password' : 'text');
  };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFirstName(event.target.value.trim());
    setError('');
  };

  const changeLastName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value.trim());
    setError('');
  };

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value.trim());
    setError('');
  };

  const handleSetNewPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(event.target.value.trim());
    setError('');
  };

  const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmedPassword(event.target.value.trim());
    setError('');
  };

  const signInAccount = (): void => {
    const minNameLength = 3;
    const minLengthPassword = 8;
    const regExp = new RegExp(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([^_])([a-zA-Z0-9]){${minLengthPassword},}$`);

    if (!firstName || firstName.trim().length < minNameLength || firstName[0].match(/\d/)) {
      setError('Name should be at least 3 symbols, don\'t starts with decimal!');
    }
    if (!lastName || lastName.trim().length < minNameLength || lastName[0].match(/\d/)) {
      setError('LastName should be at least 4 symbols, don\'t starts with decimal!');
    }
    if (!email || email.trim().length < minNameLength || !email.includes('@') || !email.split('@')[1].includes('.')) {
      setError('Email should be at least 4 symbols, must contain @, and contain ends with "."');
    }

    if (!newPassword.match(regExp)) {
      setError('Password must contains a lowercase letters, an uppercase letters, number and be at least 8 characters.');
    }

    if (confirmedPassword !== newPassword) {
      setError('Passwords do not match');
    }

    firebase.auth().createUserWithEmailAndPassword(email, newPassword)
      .then(() => {
        const user = firebase.auth().currentUser;
        setSuccess('Successful login');

        user.updateProfile({
          displayName: `${firstName} ${lastName}`,
        }).then(() => {
          setFirstName(firstName.toString());
          setLastName(lastName.toString());
        }).catch((error) => {
          setError(error.message);
        });

        user.updateEmail(`${email}`).then(() => {
          setEmail(email);
        }).catch((error) => {
          setError(error.message);
        });

        setTimeout(() => setSuccess(''), 1000);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <React.Fragment>
      <Form>
        <InputText
          type="text"
          placeholder="Enter your name"
          name="firstName"
          onChange={changeName}
        />
        <InputText
          type="text"
          placeholder="Enter lastname"
          name="lastName"
          onChange={changeLastName}
        />
        <InputText
          type="text"
          placeholder="Enter E-mail"
          name="email"
          autocomplete="email"
          onChange={changeEmail}
        />
        <FormField>
          <InputText
            type="password"
            placeholder="Password"
            name="password"
            autocomplete="new-password"
            onChange={handleSetNewPassword}
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        <FormFieldCaption>
          Password must contains a lowercase letters, an uppercase letters, number and be at least 8 characters.
        </FormFieldCaption>
        {isError && <AlertError>{isError}</AlertError>}
        {isSuccess && <AlertSuccess>{isSuccess}</AlertSuccess>}
        <FormField>
          <InputText
            type="password"
            placeholder="Password confirm"
            name="password-confirm"
            onChange={handleConfirmPassword}
          />
          <TogglePassword onClick={toggleVisiblePassword} />
        </FormField>
        <InputBtnSignIn
          type="button"
          value="Register"
          onClick={signInAccount}
        />
      </Form>
    </React.Fragment>
  );
};
