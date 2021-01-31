import React from 'react';
import './doctorImage.css';

interface doctorImageProps {
  thisImage: Array<string> | null;
}

export default function DoctorImage({ thisImage }: doctorImageProps) {
  let image =
    'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png';
  if (Array.isArray(thisImage)) {
    image = thisImage[0];
  }
  return (
    <div className="doctor-img">
      <img src={image} alt="doctor" />
    </div>
  );
}
