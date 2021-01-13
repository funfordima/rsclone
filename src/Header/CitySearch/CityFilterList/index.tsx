import React from 'react';
import './CityFilterList.scss';
import { cities as citiesType } from '../../Modal';

interface CityFilterListProps {
  cities: citiesType[];
  updateCity: () => void;
  closeModalCity: () => void;
}

const CityFilterList: React.FC<CityFilterListProps> = ({ cities, updateCity, closeModalCity }) => {

  function handlerClickCity(event: React.MouseEvent<HTMLDivElement>): void {
    console.log(event.target.textContent);
    updateCity(event.target.textContent);
    closeModalCity();

    localStorage.setItem('myCity', event.target.textContent);
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
