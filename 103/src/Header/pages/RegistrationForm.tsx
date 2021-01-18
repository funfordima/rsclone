import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import svgHide from '../public/hide.svg';
import svgShow from '../public/visibility.svg';

const Form = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #000;
`;

const InputEmail = styled.input`
  border-radius: 2px;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 12px 16px;
  font-size: 15px;
  line-height: 22px;
  height: 48px;
  margin-top: 20px;
  color: #000;
  width: 100%;
  background-clip: padding-box;
  box-sizing: border-box;
`;

const FormField = styled.div`
  margin-top: 20px;
  position: relative;

  input[type="password"] + span {
    background: url(${svgHide}) center center no-repeat;
  }

  input[type="text"] + span {
    background: url(${svgShow}) center center no-repeat;
  }
`;

const InputPassword = styled(InputEmail)`
  padding-right: 48px;
`;

const TogglePassword = styled.span`
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
  }
`;

const FormOptions = styled.div`
  margin: 16px 0 0 0;
  font-size: 15px;
  text-align: right;

  & div {
    display: none;
  }

  & a {
    color: #0095cc;
    text-decoration: none;
  }
`;

export const RegistrationForm: React.FC = () => {

  const toggleChecked = (): void => {
    console.log(1);
  };

  return (
    <Form>
      <InputEmail
        tabIndex="1"
        id="userName"
        name="username"
        placeholder="E-mail"
        type="text"
        autocomplete="off"
      />
      <FormField>
        <InputPassword
          tabIndex="2"
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          autocomplete="off"
        />
        <TogglePassword />
      </FormField>
      <FormOptions>
        <div>
          <label htmlFor="rememberMe">
            <input
              tabIndex="3"
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked
              onChange={toggleChecked}
            />
            Remember Me
          </label>
        </div>
        <NavLink to="/">Forgot password?</NavLink>
      </FormOptions>
    </Form>
  );
};
