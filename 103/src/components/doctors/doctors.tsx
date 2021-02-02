import React from 'react';
import DoctorCard from './doctorCard/doctorCard';
import './doctors.css';
import { DoctorType } from '../../types';

interface doctorsProps {
  doctors: Array<DoctorType>;
}

export default function Doctors({ doctors }: doctorsProps) {
  const currentCity = localStorage.getItem('myCity') || 'Минск';
  return (
    <div className="doctor-container">
      <div className="doctors-list">
        {doctors
          .filter(item => item.city === currentCity)
          .map((item, index) => {
            return (
              <DoctorCard
                key={index}
                thisName={item.name}
                thisProfession={item.profession}
                thisPhone={item.tel}
                thisPlaceWork={item.placeWork}
                thisPictures={item.pictures}
                thisExperience={item.experience}
                thisCategory={item.category}
                thisComplete={item.complete}
              />
            );
          })}
      </div>
    </div>
  );
}
