import React from 'react';
import ClinicSlider from '../clinicSlider/clinicSlider';
import './clinicItem.css';

interface clinicItemProps {
  whatIsIt: string;
  thisName: string;
  thisAddress: string;
  thisPhone: string | null;
  thisDescription: string | null;
  thisWorkingHours: string | null;
  thisPictures: Array<string> | null;
  thisComplete: boolean;
}

export default function ClinicItem({
  whatIsIt,
  thisName,
  thisAddress,
  thisPhone,
  thisDescription,
  thisPictures,
  thisWorkingHours,
  thisComplete,
}: clinicItemProps) {
  return (
    <div className="clinic-wrapper">
      {/* {
        if (!thisComplete) {
          <div className="on-check"></div>
        }
      } */}
      <p className="clinic-what-is-it">{whatIsIt}</p>
      <div className="clinic-info-wrapper">
        <div className="clinic-info">
          <div className="clinic-name-div">
            <p className="clinic-name">{thisName}</p>
          </div>
          <div className="other-info-div">
            <span className="this-address">{thisAddress}</span>
            <span className="this-time">
              <span className="work-marker work-marker--opened"></span> {/* менять цвет */}
              {thisWorkingHours}
            </span>
          </div>
        </div>
      </div>
      <ClinicSlider thisPictures={thisPictures}/>
      <div className="description-div">{thisDescription}</div>
      {/* <div className="connection-div">{thisPhone}</div> */}
    </div>
  );
}
