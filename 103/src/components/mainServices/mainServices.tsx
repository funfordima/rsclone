import React from 'react';
import './services.scss';
import ServicesTitle from './servicesTitle/servicesTitle';
import ServicesContent from './servicesContent/servicesContent';

export interface mainServicesProps {
  serviceName: string;
  serviceLinks: string[];
  serviceImagesLinks: string[];
}

const MainServices: React.FC<mainServicesProps> = ({
  serviceName,
  serviceLinks,
  serviceImagesLinks,
}) => {
  return (
    <div className="services-wrapper">
      <div className="services-container">
        <ServicesTitle title={serviceName} />
        <ServicesContent links={serviceLinks} images={serviceImagesLinks} />
      </div>
    </div>
  );
};

export default MainServices;
