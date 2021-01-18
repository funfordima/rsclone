<<<<<<< HEAD:src/components/mainServices/servicesTitle/servicesTitle.tsx
import React from 'react';
import './servicesTitle.css';

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
=======
import React from 'react';
import './servicesTitle.css';

export interface servicesTitleProps {
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
>>>>>>> e99d01775c001135ed46040dd75934be36c2c7be:103/src/components/mainServices/servicesTitle/servicesTitle.tsx
}