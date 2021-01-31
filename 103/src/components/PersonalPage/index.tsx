import React from 'react';
import styled from 'styled-components';
// import staffDefaultPhotoSvg from '../../assets/images/doctor/staff-default-photo.svg';
import { DoctorType, ClinicType } from '../../types';
import { StaffWorkClinic } from './components/StaffWorkClinic';

const PersonalWrapper = styled.div`
  // width: ${props => props.isOpen ? '100%' : '0'};
  // height: ${props => props.isOpen ? '100%' : '0'};
  width: 100%;
  top: ${props => props.isOpen ? '0' : '-100%'};
  left: ${props => props.isOpen ? '0' : '-100%'};
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  position: relative;
  background: #f2f2f2;
  overflow: hidden;
  transition-duration: .3s;
  transition-property: width, height, top, left;
  transition-timing-function: ease-in-out; 
  will-change: transform;
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
`;

const ButtonClose = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 25px;
  right: 50px;
  cursor: pointer;

  &:before, &:after {
    position: absolute;
    content: '';
    width: 2px;
    height: 17px;
    background: #000;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

interface PersonalPageProps {
  personalInfo: DoctorType;
  clinicInfo: ClinicType;
  isOpen: boolean;
}

const PersonalPage: React.FC<PersonalPageProps> = ({ personalInfo, clinicInfo, isOpen }) => {
  const { pictures, name, profession, experience, category } = personalInfo;
  return (

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
        <ButtonClose />
      </PersonalHeaderWrapper>
      <StaffWorkPlace>
        <StaffWorkClinic clinicInfo={clinicInfo} />
      </StaffWorkPlace>
    </PersonalWrapper>

  );
};

export default PersonalPage;


// category: "Первая категория, Кандидат медицинских наук"
// city: "Минск"
// complete: true
// country: "Беларусь"
// education: null array
// experience: "33 года"
// idWork: "600e0b815ce4c700172e327a"
// name: "Осипова Антонина Владимировна"
// pictures: null
// placeWork: "Реабилитационный центр «Элеос»"
// profession: "Аллерголог"
// section: "Аллерголог"
// tel: null
// _id: "600057d2eb627b03cc021f90"