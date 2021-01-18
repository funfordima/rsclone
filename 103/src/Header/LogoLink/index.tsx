import React from 'react';
import './LogoLink.scss';
import LogoSvg from '../LogoSvg';

const LogoLink: React.FC = () => {
  return (
    <>
      <a className="logoLink" href="/" title="logo" aria-label="logo">
        <LogoSvg />
      </a>
    </>
  );
};

export default LogoLink;
