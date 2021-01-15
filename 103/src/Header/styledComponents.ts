import React from 'react';
import styled from 'styled-components';
import svgHide from './public/hide.svg';
import svgShow from './public/visibility.svg';

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
