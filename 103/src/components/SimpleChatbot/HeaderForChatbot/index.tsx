import React from 'react';
import styled from 'styled-components';
import chatbotHeaderImg from '../../../assets/images/chatbot/header-img.jpg';

const HeaderWrapper = styled.div`
  position: relative;
  min-height: 60px;
  margin-bottom: 4px;
  margin-top: 4px;
  padding-top: 6px;
  padding-left: 70px;
  color: #97a7bd;
  user-select: none;
  text-shadow: 0 1px 1px #6172a4;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    border-radius: 2px;
    transition: background .2s, width .3s;
  }

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

const AvatarWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 5px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: none;
  box-shadow: none;
  margin: 0;
  opacity: 1;
  transition: transform .3s;
`;

const AvatarInnerContainer = styled.div`
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50% !important;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 140%;
    height: 100%;
    top: 120%;
    left: -20%;
    opacity: 0.6;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0), #ffffff 40%, rgba(255, 255, 255, 0.6) 60%, rgba(255, 255, 255, 0));
    transform: rotate(20deg) translateZ(0);
    animation: ava-blick 5s infinite cubic-bezier(0, 0.3, 1, 0.7);
    will-change: transform;
  }

  @keyframes ava-blick {
    0% {
      top: 120%;
    }
    100% {
      top: -120%;
    }
  }

  & img {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  padding: 4px 0;
`;

const Text = styled.div`
  color: #ffffff;
  font-style: normal;
  font-size: 16px;
  font-family: Helvetica, Arial !important;
  line-height: 1.2;
`;

const LinkToEmail = styled.a`
  margin: 0;
  font-size: 12px;
  font-weight: normal;
  color: white;
  line-height: 1;
  font-family: Helvetica, Arial;
`;

const HeaderForChatbot: React.FC<HeaderForChatbotProps> = () => {
  return (
    <>
      <HeaderWrapper>
        <AvatarWrapper>
          <AvatarInnerContainer>
            <img
              src={chatbotHeaderImg}
              alt='chatbot header image'
            />
          </AvatarInnerContainer>
        </AvatarWrapper>
        <TextContainer>
          <Text>
            Write to the administrator 103.ua
          </Text>
          <LinkToEmail
            href="mailto:103.ua@gmail.com?subject=Advertising on 103.ua"
            target="_blank"
          >
            Advertising on 103.ua
          </LinkToEmail>
        </TextContainer>
      </HeaderWrapper>
    </>
  );
};

export default HeaderForChatbot;
