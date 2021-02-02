import React, { useState } from 'react';
import DoctorCard from './doctorCard/doctorCard';
import './doctors.css';
import { DoctorType } from '../../types';
import { Subcategory } from '../../types';
import Filter from '../Filter';

interface doctorsProps {
  doctors: Array<DoctorType>;
  filterList: Array<Subcategory>;
  currentPageId: string | null;
}

export default function Doctors({
  doctors,
  filterList,
  currentPageId,
}: doctorsProps) {
  const [filterCriterion, setFilterCriterion] = useState<string>('');

  const currentCity = localStorage.getItem('myCity');

  const filteredDoctors = doctors.filter(item =>
    filterCriterion
      ? item.city === currentCity && item.section === filterCriterion
      : item.city === currentCity,
  );
  
  return (
    <div className="doctor-container">
      <Filter
        currentPageId={currentPageId}
        filterList={filterList}
        onclick={setFilterCriterion}
      />
      <div className="doctors-list">
        {filteredDoctors
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
