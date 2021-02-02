import React from 'react';
import './starBtn.css';

interface starBtnProps {
  thisComplete: boolean;
}

export default function StarBtn({ thisComplete }: starBtnProps) {
  if (!thisComplete) {
    return null;
  }
  return (
    <p title="Добавить в избранное?" className="star-button">
      <img src="https://img.icons8.com/ios-filled/96/000000/bookmark-ribbon.png" />
    </p>
  );
}
