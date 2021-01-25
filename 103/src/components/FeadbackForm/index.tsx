import React, { useState } from 'react';
import styled from 'styled-components';
import { AlertSuccess } from '../../Header/styledComponents';

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

const ButtonSave = styled.button`
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

const FeedbackForm: React.FC = () => {
  const [isError, setError] = useState('');
  const [isSuccess, setSuccess] = useState(false);

  return (
    <>
      <FeedbackFormWrapper>
        <FormElement>
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
            />
            {isError && <AlertError>{isError}</AlertError>}
          </FeedbackInputContainer>
          <FeedbackInputContainer>
            <TextArea
              maxLength='1000'
              name='feedback-text'
              placeholder='Leave review'
              title='This field is required'
              required
            />
            {isError && <AlertError>{isError}</AlertError>}
          </FeedbackInputContainer>
          <FeedbackInputContainer>
            <InputReview
              type='tel'
              name='feedback-phone'
              placeholder='Phone'
              title='This field is required'
              required
            />
            {isError && <AlertError>{isError}</AlertError>}
          </FeedbackInputContainer>
          <FeedbackInputContainer>
            <ButtonSave>
              Submit comment
            </ButtonSave>
          </FeedbackInputContainer>
        </FormElement>
        {isSuccess && <AlertSuccess>Your review has been accepted. Thank you!</AlertSuccess>}
      </FeedbackFormWrapper>
    </>
  );
};

export default FeedbackForm;
