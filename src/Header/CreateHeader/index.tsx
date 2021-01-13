import React from 'react';
import './CreateHeader.scss';
import LogoLink from '../LogoLink';
import CitySearch from '../CitySearch';
import MainSearch from '../MainSearch';
import UserBar from '../UserBar';
// import { setConstantValue } from 'typescript';
// import Modal from '../Modal';

const CreateHeader: React.FC = () => {
  return (
    <header className="header">
      <LogoLink />
      <CitySearch />
      {/* <Modal /> */}
      <MainSearch />
      <UserBar />
    </header>
  );
};

export default CreateHeader;
