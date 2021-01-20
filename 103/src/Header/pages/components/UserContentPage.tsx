import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentTitle, UserForm, FormField, ButtonSave, AlertError } from '../../styledComponents';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const UserPhotoWrapper = styled.div`
  display: flex;
  max-width: 100px;
  max-height: 100px;
`;

const UserPhoto = styled.img`
  display: inline-block;
  width: 100%;
`;

const FormInput = styled.input`
  border-radius: 2px;
  border: 1px solid rgba(0,0,0,0.16);
  padding: 12px 16px;
  font-size: 15px;
  line-height: 22px;
  height: 48px;
  margin-top: 20px;
  color: #000;
  width: 100%;
  background-clip: padding-box;
`;

const FormFields = styled.div`
  display: flex;
`;

const ButtonCancel = styled(ButtonSave)`
  color: #000;
  background-color: rgba(0,0,0,0.04);
`;

export const UserContentPage: React.FC = () => {
  const user = firebase.auth().currentUser;
  let name = '';
  let surname = '';
  if (user?.displayName !== null) {
    [name, surname] = user?.displayName.split(' ');
  }
  const mail = user?.email || '';
  const photo = user?.photoURL || '';
  const [firstName, setFirstName] = useState(name);
  const [lastName, setLastName] = useState(surname);
  const [email, setEmail] = useState(mail);
  const [isPhoto, setPhoto] = useState(photo);
  const [isError, setError] = useState('');

  const changeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFirstName(event.target.value);
    setError('');
  };

  const changeLastName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value);
    setError('');
  };

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
    setError('');
  };

  const changePhoto = (): void => {
    console.log('load photo');
  };

  const handleBtnSaveClick = (): void => {
    console.log('Save click');
    const minNameLength = 3;
    if (!firstName || firstName.trim().length < minNameLength || firstName[0].match(/\d/)) {
      setError('Name should be at least 4 symbols, don\'t starts with decimal!');
    }
    if (!lastName || lastName.trim().length < minNameLength || lastName[0].match(/\d/)) {
      setError('LastName should be at least 4 symbols, don\'t starts with decimal!');
    }
    if (!email || email.trim().length < minNameLength || !email.includes('@') || !email.split('@')[1].includes('.')) {
      setError('Email should be at least 4 symbols, must contain @, and contain ends with "."');
    }

    user.updateProfile({
      displayName: `${firstName} ${lastName}`,
      photoURL: `${isPhoto}`,
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
  };

  const handleBtnCancelClick = (): void => {
    setFirstName(name);
    setLastName(name);
    setEmail(mail);
  };

  return (
    <>
      <UserPhotoWrapper>
        <UserPhoto
          src={isPhoto}
          alt={`${firstName}'s photo`}
        />
      </UserPhotoWrapper>
      <ContentTitle>
        Personal Information
      </ContentTitle>
      <UserForm>
        <FormField>
          <FormInput
            type='text'
            id='firstName'
            placeholder='Name'
            name='firstName'
            value={firstName}
            onChange={changeName}
          />
        </FormField>
        {isError && <AlertError>{isError}</AlertError>}
        <FormField>
          <FormInput
            type='text'
            id='lastName'
            placeholder='LastName'
            name='lastName'
            value={lastName}
            onChange={changeLastName}
          />
        </FormField>
        <FormField>
          <FormInput
            type='text'
            id='user-email'
            placeholder='E-mail'
            name='email'
            value={email}
            onChange={changeEmail}
          />
        </FormField>
        <FormField>
          <FormInput
            type='file'
            id='user-photo'
            placeholder='Add your photo'
            name='userPhoto'
            accept='image/*'
            onChange={changePhoto}
          />
        </FormField>
        <FormFields>
          <ButtonSave
            type='button'
            name='submitAction'
            value='Save'
            onClick={handleBtnSaveClick}
          >
            Save
          </ButtonSave>
          <ButtonCancel
            type='button'
            name='submitAction'
            value='Cancel'
            onClick={handleBtnCancelClick}
          >
            Cancel
          </ButtonCancel>
        </FormFields>
      </UserForm>
    </>
  );
};
