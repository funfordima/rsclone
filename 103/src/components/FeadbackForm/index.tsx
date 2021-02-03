import { type } from 'os';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { boolean } from 'yargs';
import { AlertSuccess } from '../Header/styledComponents';

const FeedbackFormWrapper = styled.div`
  margin: 24px auto 60px auto;
  padding: 15px;
  max-width: 640px;
  background: #E7F6F7;
  border-radius: 3px;
`;

const FormElement = styled.form`
  margin: 0;
  padding: 0;
  width: 100%;
  border-style: none;
`;

const FeedbackTitle = styled.h2`
  display: block;
  margin: 0 0 12px;
  text-transform: uppercase;
  font: 600 18px/20px Roboto;
  color: rgba(0,0,0,.9);
`;

const FeedbackInputContainer = styled.div`
  padding: 5px 0 5px;
  width: 225px;
  vertical-align: middle;
  font: 120% Roboto;

  &:nth-of-type(2) {
    width: 100%;
    max-width: 610px;
  }
`;

const InputReview = styled.input`
  padding: 0 10px;
  width: 215px;
  height: 30px;
  border: 1px solid #c0cdd2;
  font: 120%/1.2 Roboto;
  border-radius: 3px;
  box-shadow: 0 2px 1px -2px rgba(255,255,255,.75);
`;

const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  min-height: 160px;
  border: 1px solid #c0cdd2;
  font: 120%/1.2 Roboto;
  resize: none;
  border-radius: 3px;
  box-shadow: 0 2px 1px -2px rgba(255,255,255,.75);
  box-sizing: border-box;
`;

const ButtonSave = styled.input`
  padding: 13px 19px;
  display: inline-block;
  font-size: 14px;
  line-height: 16px;
  font-family: Roboto;
  font-weight: 400;
  color: #FFF;
  background-color: #46CDD6;
  border-color: #46CDD6;
  white-space: nowrap;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  outline: 0;
  vertical-align: middle;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: color .12s ease-in-out;
  transition-property: color, background, border-color;
  box-sizing: border-box;
  touch-action: manipulation;
  user-select: none;
`;

const AlertError = styled.div`
  margin: 2px 0 0 1px;
  color: red;
  font-size: 10px;
`;
interface Props {
  id: string;
}

const FeedbackForm: React.FC<Props> = (id) => {
  const [isErrorName, setErrorName] = useState('');
  const [isErrorText, setErrorText] = useState('');
  const [isErrorPhone, setErrorPhone] = useState('');
  const [isSuccess, setSuccess] = useState(false);
  const [userReview, setUserReview] = useState({
    name: '',
    text: '',
    phone: '',
  });

  const changeUserName = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserReview(() => ({ ...userReview, 'name': event.target.value }));
    setErrorName('');
  };

  const changeUserText = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserReview(() => ({ ...userReview, 'text': event.target.value }));
    setErrorText('');
  };

  const changeUserPhone = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserReview(() => ({ ...userReview, 'phone': event.target.value.toString() }));
    setErrorPhone('For Example: 380991453287');
  };

  const handleSubmitReview = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { name, text, phone } = userReview;
    const minTextLength = 5;

    switch (true) {
      case (!/[a-zA-Zа-яА-Я]{3,}/.test(name)): {
        setErrorName('This field is required');
        break;
      }
      case (text.length < minTextLength): {
        setErrorText('This field is required');
        break;
      }
      case (!/^\d{10,12}$/.test(phone)): {
        setErrorPhone('This field is required');
        break;
      }
      case (!/[a-zA-Zа-яА-Я]{3,}/.test(name) || text.length < minTextLength || !/^\d{10,12}$/.test(phone)): {
        setErrorName('This field is required');
        setErrorText('This field is required');
        setErrorPhone('This field is required');
        break;
      }
      default: {
        const post = async () => {
          const comment = {
            idArticle: id.id,
            userName: userReview.name,
            date: new Date().toLocaleDateString(),
            message: userReview.text,
            complete: true
          };
          await fetch('https://rs-wars-clone.herokuapp.com/comments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(comment)
          }).then(() => {
            setUserReview(() => ({ 'name': '', 'phone': '', 'text': '' }));
            setSuccess(true)
            setTimeout(() => setSuccess(false), 1000);
          }).catch((error) => {
            alert('Ошибка, попробуйте повторить запрос позже');
            throw new Error(error.message);
          });
        };

        post();
      }
    }
  };

  return (
    <>
      <FeedbackFormWrapper>
        <FormElement onSubmit={handleSubmitReview} action={'./sendMail.php'} method="POST">
          <FeedbackTitle>
            LEAVE A REVIEW
          </FeedbackTitle>
          <FeedbackInputContainer>
            <InputReview
              type='text'
              name='feedback-author'
              placeholder='Name'
              title='This field is required'
              required
              value={userReview.name}
              onChange={changeUserName}
            />
            {isErrorName && <AlertError>{isErrorName}</AlertError>}
          </FeedbackInputContainer>
          <FeedbackInputContainer>
            <TextArea
              maxLength='1000'
              name='feedbackText'
              placeholder='Leave review'
              title='This field is required'
              value={userReview.text}
              onChange={changeUserText}
            />
            {isErrorText && <AlertError>{isErrorText}</AlertError>}
          </FeedbackInputContainer>
          <FeedbackInputContainer>
            <InputReview
              type='tel'
              name='feedback-phone'
              placeholder='Phone'
              title='This field is required'
              required
              value={userReview.phone}
              onChange={changeUserPhone}
            />
            {isErrorPhone && <AlertError>{isErrorPhone}</AlertError>}
          </FeedbackInputContainer>
          <FeedbackInputContainer>
            <ButtonSave
              type='submit'
              value='Submit comment'
            />
          </FeedbackInputContainer>
        </FormElement>
        {isSuccess && <AlertSuccess>Your review has been accepted. Thank you!</AlertSuccess>}
      </FeedbackFormWrapper>
    </>
  );
};

export default FeedbackForm;
