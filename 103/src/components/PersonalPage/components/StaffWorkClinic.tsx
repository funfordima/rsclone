import React from 'react';
import styled from 'styled-components';
import { ClinicType } from '../../../types';
import { ReactComponent as IconCalendarSvg } from '../../../assets/images/doctor/icon-calendar.svg';
import { ReactComponent as IconCallSvg } from '../../../assets/images/doctor/icon-call.svg';

const ContentBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgb(0 0 0 / 4%);
  margin-bottom: 16px;
  padding: 16px 24px;
  z-index: 0;
`;

const StaffPagePlace = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: auto 100fr auto auto;
  grid-template-rows: auto;
  grid-template-areas:
      "logo content button contacts"
      ".footer footer footer"
      ".integration integration integration";
  padding: 8px 0;

  @media only screen and (min-width: 0) and (max-width: 720px) {
    grid-template-areas:
        "content content contacts"
        "footer footer footer"
        "integration integration integration"
        "button button button";
  }
`;

const AriaLogo = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 48px;
  border: 1px solid rgba(0,0,0,.08);
  margin-right: 16px;
  z-index: 2;
  position: relative;

  @media only screen and (min-width: 0) and (max-width: 720px) {
    display: none;
  }
`;

const ImgLogo = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const AriaContent = styled.div`
  grid-area: content;
  overflow: hidden;
`;

const PlaceTitle = styled.div`
  transition-duration: .12s;
  transition-timing-function: ease-in-out;
  text-decoration: none;
  transition-property: color;
  cursor: pointer;
  color: #00a8b4;
  font-size: 16px;
  line-height: 20px;
  display: block;
  z-index: 2;
  position: relative;
  text-overflow: ellipsis;
  max-height: 40px;
  overflow: hidden;
  margin-bottom: 4px;

  &:hover {
    color: #ff1446;
  }
`;

const PlaceAddress = styled.div`
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
  opacity: .64;
  vertical-align: middle;
`;

const PlaceTime = styled.span`
  margin-left: 21px;
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
  z-index: 2;
  opacity: .64;
  position: relative;
  vertical-align: middle;
`;

const TimeMarker = styled.span`
  margin-top: -1px;
  display: inline-block;
  width: 4px;
  height: 4px;
  font-size: 15px;
  line-height: 24px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -13px;
  background-color: #ed4343;
  vertical-align: middle;
`;

const AriaButton = styled.div`
  margin-left: 16px;
  grid-area: button;
  align-self: center;
  z-index: 2;
  position: relative;

  @media only screen and (min-width: 0) and (max-width: 479px) {
    margin: 0 -16px -24px;
    padding: 16px 16px 24px;
    background-color: rgba(0,0,0,.04);
  }
`;

const AriaButtonElement = styled.button`
  padding: 13px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  color: rgba(0,0,0,.96);
  background-color: #ffd550;
  background-clip: padding-box;
  border: 1px solid #ffd550;
  border-radius: 24px;
  position: relative;
  transition-duration: .12s;
  transition-property: color,background-color,border-color;
  transition-timing-function: ease-in-out;

  & svg {
    margin-right: 8px;
    margin-left: -4px;
    margin-top: 0;
    width: 20px;
    min-width: 24px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    color: currentColor;
    touch-action: manipulation;
    transform-origin: center center;
  }

  &:hover {
    color: rgba(0,0,0,.96);
    background-color: #ffe183;
    border-color: #ffe183;
  }
`;

const ButtonText = styled.span`
`;

const AriaContacts = styled.div`
  margin-left: 8px;
  grid-area: contacts;
  justify-self: end;
  z-index: 2;
  position: relative;
  align-self: center;
`;

const ButtonCall = styled.button`
  padding: 0;
  width: 48px;
  height: 48px;
  display: inline-block;
  box-sizing: border-box;
  transition-duration: .12s;
  transition-timing-function: ease-in-out;
  transition-property: color,background-color,border-color;
  border: 0;
  border-radius: 50%;
  font-weight: 400;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  background-color: #46cdd6;
  background-clip: padding-box;
  color: #fff;
  touch-action: manipulation;
  user-select: none;
  outline: none;
  cursor: pointer;  
  position: relative;
  z-index: 1;

  &:hover {
    background-color: #31c7d1;
  }

  & svg {
    width: 20px;
    height: 20px;
    min-width: 20px;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    color: currentColor;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    touch-action: manipulation;
    transform-origin: center center;
  }
`;

const AriaFooter = styled.div`
  margin-top: 16px;
  grid-area: footer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: end;
  overflow: hidden;
`;

interface StaffWorkClinicProps {
  clinicInfo: ClinicType;
}

export const StaffWorkClinic: React.FC<StaffWorkClinicProps> = ({ clinicInfo }) => {
  const { pictures, title, address, workingHours } = clinicInfo;
  return (
    <ContentBox>
      <StaffPagePlace>
        <AriaLogo>
          <ImgLogo
            src={pictures ? pictures[0] : ''}
            alt={title}
          />
        </AriaLogo>
        <AriaContent>
          <PlaceTitle>
            {title}
          </PlaceTitle>
          <PlaceAddress>
            {address}
          </PlaceAddress>
          <PlaceTime>
            <TimeMarker />
            {workingHours}
          </PlaceTime>
        </AriaContent>
        <AriaButton>
          <AriaButtonElement>
            <IconCalendarSvg />
            <ButtonText>
              Записаться
            </ButtonText>
          </AriaButtonElement>
        </AriaButton>
        <AriaContacts>
          <ButtonCall>
            <IconCallSvg />
          </ButtonCall>
        </AriaContacts>
        <AriaFooter>

        </AriaFooter>
      </StaffPagePlace>
    </ContentBox>
  );
};
