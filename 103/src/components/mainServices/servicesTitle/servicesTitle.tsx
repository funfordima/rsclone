import React from 'react';
import './servicesTitle.scss';

interface servicesTitleProps {
  title: string
}

export default function ServicesTitle({
    title,
}: servicesTitleProps) {
  return (
    <div className='service-name'>
      <h4>{title}</h4>
    </div>
  )
}