import React from 'react';
import './clinicLogo.css';

interface LogoProps {
  thisPictures: Array<string> | null;
}

export default function ClinicLogo({ thisPictures }: LogoProps) {
  if (!Array.isArray(thisPictures)) {
    return null;
  }
  return (
    <div className="clinic-logo">
      <img src={thisPictures[0]} alt="logo" />
    </div>
  );
}
