import React from 'react';
import ClinicSlider from '../clinicSlider/clinicSlider';
import OnChange from '../onChangeItem/onChange';
import PhoneBtn from '../../doctors/phoneBtn/phoneBtn';
import DoctorItem from '../doctorItem/doctorItem';
import ClinicLogo from '../clinicLogo/clinicLogo';
import { DoctorType } from '../../../types';
import './clinicItem.css';

type toggleFuncParam = {
  clinicId: string,
  doctorId: string,
  complete: boolean,
}

interface clinicItemProps {
  whatIsIt: string;
  thisName: string;
  thisAddress: string;
  thisPhone: string | null;
  thisDescription: string | null;
  thisWorkingHours: string | null;
  thisPictures: Array<string> | null;
  thisComplete: boolean;
  thisDoctors: Array<DoctorType>;
  toggleOpenPersonalInformation: (value: toggleFuncParam) => void;
  idClinic: string;
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
  thisDoctors,
  toggleOpenPersonalInformation,
  idClinic,
}: clinicItemProps) {
  const onCheck = thisComplete ? '' : 'clinic-wrapper--oncheck';
  let openedClass = '';
  if (currentTime(thisWorkingHours)) {
    openedClass = 'work-marker--opened';
  }
  return (
    <div className={'clinic-wrapper ' + onCheck}>
      <OnChange thisComplete={thisComplete} />
      <div className="info-with-logo">
        <div className="clinic-main-info">
          <p className="clinic-what-is-it">{whatIsIt}</p>
          <div className="clinic-info-wrapper">
            <div className="clinic-info">
              <div className="clinic-name-div">
                <p className="clinic-name">{thisName}</p>
              </div>
              <div className="other-info-div">
                <span className="this-address">{thisAddress}</span>
                <span className="this-time">
                  <span className={'work-marker ' + openedClass}></span>
                  {thisWorkingHours}
                </span>
              </div>
            </div>
          </div>
        </div>
        <ClinicLogo thisPictures={thisPictures} />
      </div>
      <ClinicSlider thisPictures={thisPictures} />
      <div className="description-div">{thisDescription}</div>
      <div className="staff-div">
        <div className="staff">
          <div className="staff-items">
            {thisDoctors.map((item, index) => {
              return (
                <DoctorItem
                  key={index}
                  thisImage={item.pictures}
                  thisName={item.name}
                  dataId={item._id}
                  toggleOpenPersonalInformation={toggleOpenPersonalInformation}
                  idClinic={idClinic}
                />
              );
            })}
          </div>
          <p className="staff-button">
            Специалисты
          </p>
        </div>
        <div className="click-buttons">
          <PhoneBtn thisPhone={thisPhone} />
          {/* <a href="#" title="Добавить в избранное?" className="star-button">
            <img src="https://img.icons8.com/ios-filled/96/000000/bookmark-ribbon.png" />
          </a> */}
        </div>
      </div>
    </div>
  );
}
