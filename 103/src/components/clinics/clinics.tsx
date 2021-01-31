import React from 'react';
import ClinicItem from './clinicItem/clinicItem';
import './clinic.css';
import { ClinicType, DoctorType } from '../../types';

interface clinicsProps {
  clinics: Array<ClinicType>;
  doctors: Array<DoctorType>;
}

export default function Clinics({ clinics, doctors }: clinicsProps) {
  const currentCity = localStorage.getItem('myCity');
  return (
    <div className="clinic-container">
      <div className="place-list">
        {clinics
          .filter(item => item.city === currentCity)
          .map((item, index) => {
            const currentDoctors = doctors.filter(
              doctor => doctor.idWork === item._id,
            );
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
                thisDoctors={currentDoctors}
              />
            );
          })}
      </div>
    </div>
  );
}
