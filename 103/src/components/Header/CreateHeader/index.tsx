import React from 'react';
import styled from 'styled-components';
import LogoLink from '../LogoLink';
import CitySearch from '../CitySearch';
// import MainSearch from '../MainSearch';
import UserBar from '../UserBar';

const Header = styled.header`
  position: relative;
  z-index: 4;
  height: 48px;
  display: flex;
  align-items: center;
  align-content: flex-start;
  color: #fff;
  background-color: #46cdd6;
  padding-right: 0;
  padding-left: 24px;
  box-sizing: border-box;

  @media only screen and (max-width: 959px) and (min-width: 0) {
    justify-content: unset;
    padding-left: 0;
  }
`;

const CreateHeader: React.FC = () => {
  return (
    <Header>
      <LogoLink />
      <CitySearch />
      {/* <MainSearch /> */}
      <UserBar />
    </Header>
  );
};

export default CreateHeader;
