import React from 'react';
import './doctorItem.css';

interface onChangeProps {
  thisImage: Array<string> | null;
  thisName: string;
}

export default function DoctorItem({ thisImage, thisName }: onChangeProps) {
  if (!Array.isArray(thisImage) || typeof thisName !== 'string') {
    return null;
  }
  return (
    <a href="#" title={thisName} className="doctor-item">
      <img src={thisImage[0]} alt="doctor" />
    </a>
  );
}
