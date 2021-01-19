import React from 'react';
import styled from 'styled-components';
import { ContentTitle, UserForm, FormField, ButtonSave } from '../../styledComponents';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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
  const changeValue = (): void => {
    console.log('change input');
  };

  return (
    <>
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
            value={firebase.auth().currentUser.displayName}
            onChange={changeValue}
          />
        </FormField>
        <FormField>
          <FormInput
            type='text'
            id='lastName'
            placeholder='LastName'
            name='lastName'
            value={firebase.auth().currentUser.displayName}
            onChange={changeValue}
          />
        </FormField>
        <FormField>
          <FormInput
            type='text'
            id='lastName'
            placeholder='E-mail'
            name='email'
            value={firebase.auth().currentUser.email}
            onChange={changeValue}
          />
        </FormField>
        <FormFields>
          <ButtonSave
            type='submit'
            name='submitAction'
            value='Save'
          >
            Save
          </ButtonSave>
          <ButtonCancel
            type='submit'
            name='submitAction'
            value='Cancel'
          >
            Cancel
          </ButtonCancel>
        </FormFields>
      </UserForm>
    </>
  );
};
