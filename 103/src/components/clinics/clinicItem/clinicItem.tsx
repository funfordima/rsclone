import React from 'react';
import ClinicSlider from '../clinicSlider/clinicSlider';
import OnChange from '../onChangeItem/onChange';
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

function currentTime(workTime: string | null) {
  if (!workTime || typeof workTime !== 'string') return false;
  const date = new Date();
  const currentHour = date.getHours();
  const currentMin = date.getMinutes();
  const currentTime = `${currentHour}.${currentMin}`;
  const workTimeArr = workTime.split(' ');
  const [start, end] = [workTimeArr[0], workTimeArr[2]];
  if (+currentTime > +start && +currentTime < +end) return true;
  return false;
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
  const onCheck = thisComplete ? '' : 'clinic-wrapper--oncheck';
  let openedClass = '';
  if (currentTime(thisWorkingHours)) {
    openedClass = 'work-marker--opened'; 
  }
  return (
    <div className={"clinic-wrapper " + onCheck}>
      <OnChange thisComplete={thisComplete}/>
      <p className="clinic-what-is-it">{whatIsIt}</p>
      <div className="clinic-info-wrapper">
        <div className="clinic-info">
          <div className="clinic-name-div">
            <p className="clinic-name">{thisName}</p>
          </div>
          <div className="other-info-div">
            <span className="this-address">{thisAddress}</span>
            <span className="this-time">
              <span className={"work-marker " + openedClass}></span>
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
