import React from 'react';
import './CreateHeader.scss';
import LogoLink from '../LogoLink';
import CitySearch from '../CitySearch';
import MainSearch from '../MainSearch';
import UserBar from '../UserBar';

const CreateHeader = () => {
  return (
    <header className="header">
      <LogoLink />
      <CitySearch />
      <MainSearch />
      <UserBar />
    </header>
  );
};

export default CreateHeader;
