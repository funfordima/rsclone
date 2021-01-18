import React from 'react';
import './services.css';
import ServicesTitle from './servicesTitle/servicesTitle';
import ServicesContent from './servicesContent/servicesContent';

export interface mainServicesProps {
  serviceName: string
  serviceLinks: string[]
  serviceImagesLinks: string[]
}

export default function MainServices({
  serviceName,
  serviceLinks,
  serviceImagesLinks,
}: mainServicesProps) {
  return (
    <div className='services-wrapper'>
      <div className='services-container'>
        <ServicesTitle title = {serviceName}/>
        <ServicesContent links = {serviceLinks} images = {serviceImagesLinks} />
      </div>
    </div>
  )
}