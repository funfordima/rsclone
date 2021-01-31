import React from 'react';
import OnChange from '../../clinics/onChangeItem/onChange';
import PhoneBtn from '../phoneBtn/phoneBtn';
import DoctorImage from '../doctorImage/doctorImage';
import './doctorCard.css';

interface doctorCardProps {
  thisName: string;
  thisProfession: string;
  thisPhone: string | null;
  thisPlaceWork: string | null;
  thisPictures: Array<string> | null;
  thisExperience: string | null;
  thisCategory: string | null;
  thisComplete: boolean;
}

export default function DoctorCard({
  thisName,
  thisProfession,
  thisPhone,
  thisPlaceWork,
  thisPictures,
  thisExperience,
  thisCategory,
  thisComplete,
}: doctorCardProps) {
  const onCheck = thisComplete ? '' : 'doctor-item--oncheck';
  return (
    <div className={'doctor-card ' + onCheck}>
      <OnChange thisComplete={thisComplete} />
      <div className="all_info">
        <DoctorImage thisImage={thisPictures} />
        <div className="right_info">
          <div className="info-with-buttons">
            <div className="main-info">
              <h3 className="this-name">{thisName}</h3>
              <p className="job-name">{thisProfession}</p>
              <p className="experience-p">
                Стаж {thisExperience} лет{' '}
                <span className="experience-marker"></span> {thisCategory}
              </p>
            </div>
            <div className="click-buttons">
              <PhoneBtn thisPhone={thisPhone} />
              <a href="#" title="Добавить в избранное?" className="star-button">
                <img src="https://img.icons8.com/ios-filled/96/000000/bookmark-ribbon.png" />
              </a>
            </div>
          </div>
          <hr />
          <p className="work-place-p">
            <span className="work-name">Место работы:</span> {thisPlaceWork}
          </p>
        </div>
      </div>
    </div>
  );
}
