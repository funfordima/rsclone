import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  min-height: 32px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #fff;
  margin-top: 4px;
  padding-top: 6px;
  padding-left: 40px;
  user-select: none;
  text-shadow: 0 1px 1px #6172a4;

  & * {
    z-index: auto;
    text-shadow: none;
    text-align: left;
    font-family: Helvetica, Arial !important;
    font-size: 13px;
    padding: 0;
    margin: 0;
    color: #000000;
    line-height: 1.2;
    text-transform: none;
    letter-spacing: normal;
    font-weight: normal;
    box-sizing: border-box;
    transition: none;
    transform-origin: center center;
    white-space: normal;
    word-spacing: 0;
    font-variant: normal;
  }
`;

const FormWrapper = styled.div`
  position: relative;
  z-index: 0;
  display: inline-block;
  padding: 12px 15px;
  font-size: 13px;
  line-height: 16px;
  border: 1px solid #dddcd7;
  color: #000;
  background-color: #fafafa;
  border-radius: 13px;
  word-wrap: break-word;
`;

const Form = styled.form`
  width: 244px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Input = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  padding: 0 10px;
  border: 1px solid #dedcd6;
  font: 13px Helvetica, Arial;
  box-sizing: border-box;
  text-transform: none;
  box-shadow: ${props => props.error ? '0 0 6px -1px #FF7A7A' : ''};
`;

const BorderBottom = styled.div`
  padding-bottom: 10px
`;

const BtnSubmit = styled.input`
  margin-top: 15px;
  padding: 5px 0;
  width: 40%;
  font-weight: normal;
  text-align: center;
`;

interface FormForChatbotProps {
  triggerNextStep: () => { value: Record<string, unknown>, trigger: string };
}

const FormForChatbot: React.FC<FormForChatbotProps> = ({ triggerNextStep }) => {
  const [isError, setError] = useState(false);
  const [userMsg, setUserMsg] = useState({
    name: '',
    email: '',
    city: ''
  });

  const inputUserHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputTarget = event.target.name;

    switch (inputTarget) {
      case ('emailMsg'): {
        setUserMsg(() => ({ ...userMsg, 'email': event.target.value.trim() }));
        setError(false);
        break;
      }
      case ('authorMsg'): {
        setUserMsg(() => ({ ...userMsg, 'name': event.target.value.trim() }));
        setError(false);
        break;
      }
      case ('cityMsg'): {
        setUserMsg(() => ({ ...userMsg, 'city': event.target.value.trim() }));
        setError(false);
        break;
      }
    }
  };

  const handleSubmitForm = (event: ChangeEvent<HTMLFormElement>): boolean => {
    // event.preventDefault();
    const { name, city, email } = userMsg;
    const minNameLength = 3;

    if (name.length < minNameLength
      || city.match(/\d+/)
      || !email.match(/\S+@\S+\.\S+/)) {

      setError(true);

      return false;
    } else {
      console.log('Send request');
      setError(false);
      // Обработка отправки сообщения на почту админа
      triggerNextStep({ value: userMsg, trigger: 'Finish' });

      return true;
    }
  };

  return (
    <Wrapper>
      <FormWrapper>
        <div>
          Fill in the form, please.
        </div>
        <Form onSubmit={handleSubmitForm}>
          <Input
            type="text"
            name="emailMsg"
            placeholder="E-mail"
            value={userMsg.email}
            onChange={inputUserHandler}
            error={isError}
          />
          <Input
            type="text"
            name="authorMsg"
            placeholder="Name"
            value={userMsg.name}
            onChange={inputUserHandler}
            error={isError}
          />
          <Input
            type="text"
            name="cityMsg"
            placeholder="City"
            value={userMsg.city}
            onChange={inputUserHandler}
            error={isError}
          />
          <BtnSubmit
            type="submit"
            value="Send"
          />
        </Form>
        <BorderBottom />
      </FormWrapper>
    </Wrapper>
  );
};

export default FormForChatbot;
