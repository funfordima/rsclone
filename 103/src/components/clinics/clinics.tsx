import React from 'react';
import ClinicItem from './clinicItem/clinicItem';
import './clinic.css';

export default function Clinics() {
  // let source: Array<Object>;
  async function getData() {
    const response = await fetch('https://rs-wars-clone.herokuapp.com/clinics');
    return await response.json();
  }
  const source = getData();

  return (
    <div className="clinic-container">
      <div className="place-list">
        {source.slice().map((item, index) => {
          return (
            <ClinicItem
              key={index}
              whatIsIt={'Медицинский центр'}
              thisName={item.title}
              thisAddress={`${item.city}, ${item.address}`}
              thisPhone={item.tel}
              thisDescription={item.description}
              thisPictures={item.pictures}
              thisWorkingHours={item.workingHours}
              thisComplete={item.complete}
            />
          );
        })}

        {/* <ClinicItem whatIsIt={whatIsIt} thisName={thisName} thisAddress={thisAddress} thisPhone={thisPhone} thisDescription={thisDescription}/> */}
      </div>
    </div>
  );
}
