import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import svgHide from './public/hide.svg';
import svgShow from './public/visibility.svg';
import svgError from './public/error.svg';
import svgSuccess from './public/success.svg';

export const Form = styled.form`
  font-size: 16px;
  line-height: 24px;
  color: #000;
`;

export const InputText = styled.input`
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

export const FormField = styled.div`
  margin-top: 20px;
  position: relative;

  input[type="password"] + span {
    background: url(${svgHide}) center center no-repeat;
  }

  input[type="text"] + span {
    background: url(${svgShow}) center center no-repeat;
  }
`;

export const TogglePassword = styled.span`
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

export const InputBtnSignIn = styled.input`
  background-color: #1b8dfb;
  height: 48px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 20px;
  border-radius: 2px;
  border: none;
  color: #fff;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  background-clip: padding-box;
`;

export const SocialBefore = styled.div`
  display: block;
  margin-top: 20px;
  padding: 0 12px;
  position: relative;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  background-color: #fff;
  color: rgba(0,0,0,0.48);

  &:before {
    content: '';
    position: absolute;
    border-top: 1px solid rgba(0,0,0,0.08);
    left: 0;
    width: 100%;
    top: 50%;
  }
`;

export const SocialProviders = styled.div`
  margin-top: 20px
`;

export const AlertError = styled.div`
  margin-top: 20px;
  padding: 8px 16px 8px 48px;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  color: #fe5652;
  text-align: left;
  border-radius: 2px;
  border: 1px solid rgba(0,0,0,0.16);
  background-color: rgba(254,86,82,0.08);
  border-color: rgba(254,86,82,0.4);

  &:after {
    content: '';
    position: absolute;
    left: 12px;
    top: 8px;
    width: 24px;
    height: 24px;
    background-image: url(${svgError});
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const AlertSuccess = styled.div`
  margin-top: 20px;
  padding: 8px 16px 8px 48px;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  color: #64dd17;
  text-align: left;
  border-radius: 2px;
  border: 1px solid rgba(0,0,0,0.16);
  background-color: rgba(204,255,144, 0.08);
  border-color: rgba(204,255,144,0.4);

  &:after {
    content: '';
    position: absolute;
    left: 12px;
    top: 8px;
    width: 24px;
    height: 24px;
    background-image: url(${svgSuccess});
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const BackButton = styled(NavLink)`
  color: #fff;
  padding: 16px 16px 16px 0;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 15px;
  line-height: 24px;
  transition-property: background-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  cursor: pointer;

  & span {
    margin-left: 5px;
  }

  & svg {
    fill: #000;
    vertical-align: bottom;
    transform-origin: center;
    transform: rotate(180deg);
    border-radius: 50%;
    background-color: #ccc;
  }

  &:hover {
    color: rgba(255,255,255,0.8);
  }
`;

export const ExitButton = styled.button`
  display: block;
  width: 100%;
  background-color: #fff;
  padding: 12px 48px 12px 56px;
  border: none;
  border-top: 1px solid rgba(0,0,0,.08);
  transition-duration: .12s;
  transition-timing-function: ease-in-out;
  transition-property: background-color;
  position: relative;
  color: #000;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: rgba(0,0,0,.04);
  }

  & svg {
    display: inline-block;
    vertical-align: middle;
    fill: rgba(0,0,0,0.48);
    color: currentColor;
    width: 24px;
    height: 24px;
    min-width: 24px;
    touch-action: manipulation;
    transform-origin: center center;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ContentTitle = styled.h1`
  font-size: 30px;
  line-height: 40px;
  padding: 48px 0 24px 0;
  margin: 0;
  font-weight: normal;
  margin-bottom: 32px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-bottom: 1px solid rgba(0,0,0,0.08);
`;

export const UserForm = styled.form`
  margin-bottom: 0;
  font-size: 16px;
  line-height: 24px;
  color: #000;
`;

export const UserFormField = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%;
  max-width: 380px;
`;

export const FormFieldCaption = styled.div`
margin-top: 8px;
font-size: 13px;
line-height: 16px;
color: rgba(0,0,0,0.5);
`;

export const ButtonSave = styled.button`
  background-color: #1b8dfb;
  height: 48px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 20px;
  border-radius: 2px;
  margin-right: 8px;
  border: none;
  color: #fff;
  padding: 0 24px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  background-clip: padding-box;
`;