import React from 'react';
import './doctorItem.css';

type toggleFuncParam = {
  clinicId: string,
  doctorId: string,
  complete: boolean,
}

interface doctorItemProps {
  thisImage: Array<string> | null;
  thisName: string;
  dataId: string;
  toggleOpenPersonalInformation: (value: toggleFuncParam) => void;
  idClinic: string;
}

export default function DoctorItem({ thisImage, thisName, dataId, toggleOpenPersonalInformation, idClinic }: doctorItemProps) {
  let image = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png';
  if (Array.isArray(thisImage)) {
    image = thisImage[0];
  }

  const handleClickIcon = (): void => {
    toggleOpenPersonalInformation(({ 'clinicId': idClinic, 'doctorId': dataId, 'complete': true }));
  };

  return (
    <span title={thisName} className="doctor-item" onClick={handleClickIcon} data-id={dataId}>
      <img src={image} alt="doctor" />
    </span>
  );
}
