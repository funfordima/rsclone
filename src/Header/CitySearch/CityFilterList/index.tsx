import React from 'react';
import './CityFilterList.scss';

interface CityFilterListProps {
  cities: any[];
}

const CityFilterList: React.FC<CityFilterListProps> = ({ cities }) => {

  function handlerClickCity(): void {
    console.log('1');
  }

  return (
    <div className="city-filter__container">
      {cities.map(({ description, id }) => {
        return (
          <div
            className="city-filter__item"
            key={id}
            onClick={handlerClickCity}
          >
            {description}
          </div>
        );
      })}
    </div>
  );
};

export default CityFilterList;
