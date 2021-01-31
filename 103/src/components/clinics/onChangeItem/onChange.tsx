import React from 'react';
import './onChange.css';

interface onChangeProps {
  thisComplete: boolean;
}

export default function OnChange({ thisComplete }: onChangeProps) {
  if (thisComplete) {
    return null;
  }
  return (
    <div className="on-check" title="On check">
      <img
        src="https://img.icons8.com/pastel-glyph/64/000000/pen--v2.png"
        alt="check"
      />
    </div>
  );
}
