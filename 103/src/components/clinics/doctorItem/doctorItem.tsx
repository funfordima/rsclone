import React from 'react';
import './doctorItem.css';

interface doctorItemProps {
  thisImage: Array<string> | null;
  thisName: string;
}

export default function DoctorItem({ thisImage, thisName }: doctorItemProps) {
  let image = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png';
  if (Array.isArray(thisImage)) {
    image = thisImage[0];
  }
  return (
    <a href="#" title={thisName} className="doctor-item">
      <img src={image} alt="doctor" />
    </a>
  );
}
