import React, { useState } from 'react';
import styled from 'styled-components';
import { DoctorType, ClinicType } from '../../types';
import { StaffWorkClinic } from './components/StaffWorkClinic';
import BookingWidgetOnline from '../BookingWidgetOnline';

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 11;
  background-color: rgba(51, 50, 50, .5);
  transform: translate(-50%, -50%);
`;

const PersonalWrapper = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all .3s linear;
  z-index: 10;
`;

const PersonalHeaderWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  position: relative;
  background: #fff;
  z-index: 1;
`;

const StaffPageImgContainer = styled.div`
  margin: 24px auto;
  text-align: center;
  width: 208px;
  height: 208px;
  position: relative;
  background-image: url(../../assets/images/doctor/staff-default-photo.svg);
  background-size: cover;
`;

const StaffPageImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;
`;

const StaffPageImgShadow = styled.img`
  position: absolute;
  left: 0;
  z-index: 0;
  bottom: -8px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: scale(.9);
  transform-origin: center bottom;
  filter: blur(16px);
  opacity: .48;
`;

const StaffPageTitle = styled.h1`
  color: #000;
  font-size: 30px;
  line-height: 36px;
  margin: 0 0 8px;
  font-weight: 500;
  text-align: center;
`;

const StaffPageSpecialitie = styled.div`
  text-align: center;
  font-size: 17px;
  line-height: 32px;
  margin-bottom: 4px;
  color: #000;
`;

const StaffPageMeta = styled.div`
  color: rgba(0,0,0,.64);
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const StaffWorkPlace = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 24px;
  margin: 16px auto 0;

  @media only screen and (min-width: 0) and (max-width: 760px) {
    margin-top: 8px;
    padding: 0;
  }
`;

const ButtonClose = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;

  &:before, &:after {
    position: absolute;
    content: '';
    width: 2px;
    height: 17px;
    background: #000;
  }

  &:hover {
    &:before, &:after {
      background: #ff1446;
    }
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

type toggleFuncParam = {
  clinicId: string,
  doctorId: string,
  complete: boolean,
}

interface PersonalPageProps {
  personalInfo: DoctorType;
  clinicInfo: ClinicType;
  isOpen: boolean;
  toggleOpenPersonalInformation: (value: toggleFuncParam) => void;
}

const PersonalPage: React.FC<PersonalPageProps> = ({ personalInfo, clinicInfo, isOpen, toggleOpenPersonalInformation }) => {
  const { pictures, name, profession, experience, category } = personalInfo;
  const [isOpenWidget, setOpenWidget] = useState(false);

  const toggleOpenWidget = (): void => {
    setOpenWidget(() => !isOpenWidget);
  };
  return (
    <Overlay>
      <PersonalWrapper isOpen={isOpen} >
        <PersonalHeaderWrapper>
          <StaffPageImgContainer>
            <StaffPageImg
              src={pictures ? pictures[0] : ''}
              alt={name}
            />
            <StaffPageImgShadow
              src={pictures ? pictures[0] : ''}
              alt={name}
            />
          </StaffPageImgContainer>
          <StaffPageTitle>
            {name}
          </StaffPageTitle>
          <StaffPageSpecialitie>
            {profession}
          </StaffPageSpecialitie>
          <StaffPageMeta>
            {category}
            &nbsp;&nbsp;•&nbsp;&nbsp;
            {experience}
          </StaffPageMeta>
          <ButtonClose onClick={() => toggleOpenPersonalInformation({ 'clinicId': '', 'doctorId': '', 'complete': false })} />
        </PersonalHeaderWrapper>
        <StaffWorkPlace>
          <StaffWorkClinic clinicInfo={clinicInfo} toggleOpenWidget={toggleOpenWidget} />
        </StaffWorkPlace>
      </PersonalWrapper>
      {isOpenWidget && <BookingWidgetOnline personalInfo={personalInfo} isOpen={isOpenWidget} />}
    </Overlay>
  );
};

export default PersonalPage;
