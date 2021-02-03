import React from 'react';
import './phoneBtn.css';

interface phoneBtnProps {
  thisPhone: string | null;
}

export default function PhoneBtn({ thisPhone }: phoneBtnProps) {
  if (typeof thisPhone !== 'string') {
    return null;
  }
  return (
    <a href={'tel:' + thisPhone} title="Позвонить?" className="phone-button">
      <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" />
    </a>
  );
}
