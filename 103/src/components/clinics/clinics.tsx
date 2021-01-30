import React from 'react';
import ClinicItem from './clinicItem/clinicItem';
import './clinic.css';
import { ClinicType } from '../../types';

interface clinicsProps {
  clinics: Array<ClinicType>;
}

export default function Clinics({
  clinics,
}: clinicsProps) {
  return (
    <div className="clinic-container">
      <div className="place-list">
        {clinics.map((item, index) => {
          return (
            <ClinicItem
              key={index}
              whatIsIt={'Медицинский центр'}
              thisName={item.title}
              thisAddress={`${item.city}, ${item.address}`}
              thisPhone={item.tel}
              thisDescription={item.description}
              thisPictures={item.pictures}
              thisWorkingHours={item.workingHours}
              thisComplete={item.complete}
            />
          );
        })}

        {/* <ClinicItem whatIsIt={whatIsIt} thisName={thisName} thisAddress={thisAddress} thisPhone={thisPhone} thisDescription={thisDescription}/> */}
      </div>
    </div>
  );
}
