import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentTitle, UserForm, FormField, ButtonSave, AlertError, AlertSuccess } from '../../styledComponents';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

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
  const storageRef = firebase.storage().ref().child(user?.email + '/profile.jpg');
  let name = '';
  let surname = '';
  if (user?.displayName !== null) {
    [name, surname] = user?.displayName.split(' ');
  }
  const mail = user?.email || '';
  // const photo = user?.photoURL || '';
  // console.log(photo);
  console.log(user);
  // const [firstName, setFirstName] = useState(name);
  // const [lastName, setLastName] = useState(surname);
  // const [email, setEmail] = useState(mail);

  const [stateUser, setStateUser] = useState({
    'firstName': name,
    'lastName': surname,
    'email': mail
  });

  const [isPhoto, setPhoto] = useState(user?.photoURL);
  const [isError, setError] = useState('');
  const [isSuccess, setSuccess] = useState('');

  const downloadData = (): void => {
    storageRef.getDownloadURL()
      .then((url) => {
        setPhoto(url);
      })
      .catch((error) => {
        console.error(`Something went wrong, ${error.message}`);
        setPhoto(user?.photoURL);
      });
  };

  downloadData();

  const changeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStateUser(() => ({ ...stateUser, 'firstName': event.target.value.trim() }));
    // setFirstName(event.target.value.trim());
    setError('');
  };

  const changeLastName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStateUser(() => ({ ...stateUser, ...{ 'lastName': event.target.value.trim() } }));
    // setLastName(event.target.value.trim());
    setError('');
  };

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStateUser(() => ({ ...stateUser, ...{ 'email': event.target.value.trim() } }));
    // setEmail(event.target.value.trim());
    setError('');
  };

  const handleBtnSaveClick = (): void => {
    const minNameLength = 3;
    if (!stateUser.firstName || stateUser.firstName.trim().length < minNameLength || stateUser.firstName[0].match(/\d/)) {
      setError('Name should be at least 4 symbols, don\'t starts with decimal!');
    }
    if (!stateUser.lastName || stateUser.lastName.trim().length < minNameLength || stateUser.lastName[0].match(/\d/)) {
      setError('LastName should be at least 4 symbols, don\'t starts with decimal!');
    }
    if (!stateUser.email || stateUser.email.trim().length < minNameLength || !stateUser.email.includes('@') || !stateUser.email.split('@')[1].includes('.')) {
      setError('Email should be at least 4 symbols, must contain @, and contain ends with "."');
    }

    user.updateProfile({
      displayName: `${stateUser.firstName} ${stateUser.lastName}`,
      photoURL: `${isPhoto}`,
    }).then(() => {
      // setFirstName(firstName.toString());
      // setLastName(lastName.toString());
      // set Image Name
    }).catch((error) => {
      setError(error.message);
    });

    user.updateEmail(`${stateUser.email}`).then(() => {
      // setEmail(email);
      //set Email
    }).catch((error) => {
      setError(error.message);
    });

    setSuccess('Personal information changed');

    setTimeout(() => setSuccess(''), 1000);
  };

  const handleBtnCancelClick = (): void => {
    setStateUser({
      'firstName': name,
      'lastName': surname,
      'email': mail
    });
    // setFirstName(name);
    // setLastName(name);
    // setEmail(mail);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = event.target!.files[0];
    const reader = new FileReader();

    if (!selectedFile.type.match('image.*')) {
      setError("Image only please....");
    }

    reader.onload = function (e) {
      const b64 = e.target.result.split(',')[1];
      const byteCharacters = atob(decodeURIComponent(b64));
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i += 1) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      const blob = new Blob([byteArray], { type: 'text/plain' });
      // const imageUrl = URL.createObjectURL(blob, { type: 'text/plain' });

      // Create a Storage Ref w/ username
      const storageRef = firebase.storage().ref().child(user?.email + '/profile.jpg');

      // Upload file
      const task = storageRef.put(byteArray).then(() => setPhoto(reader.result));
    };
    reader.readAsDataURL(selectedFile);
  }

  return (
    <>
      <UserPhotoWrapper>
        <UserPhoto
          src={isPhoto}
          alt={`${stateUser.firstName}'s photo`}
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
            value={stateUser.firstName}
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
            value={stateUser.lastName}
            onChange={changeLastName}
          />
        </FormField>
        <FormField>
          <FormInput
            type='text'
            id='user-email'
            placeholder='E-mail'
            name='email'
            value={stateUser.email}
            onChange={changeEmail}
          />
        </FormField>
        {isSuccess && <AlertSuccess>{isSuccess}</AlertSuccess>}
        <FormField>
          <FormInput
            type='file'
            id='user-photo'
            placeholder='Add your photo'
            name='userPhoto'
            accept='image/*'
            onChange={handleFileSelect}
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
