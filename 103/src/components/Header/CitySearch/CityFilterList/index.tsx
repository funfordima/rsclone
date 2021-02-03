import React from 'react';
import styled from 'styled-components';
import './CityFilterList.scss';
import { cities as citiesType } from '../../Modal';

const CityFilterContainer = styled.div`
  flex: 1 1 auto;
  overflow-y: scroll;
`;

const CityFilterItem = styled.div`
  position: relative;
  font-size: 13px;
  line-height: 24px;
  padding: 8px 24px 8px 54px;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 54px;
    right: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
`;

interface CityFilterListProps {
  cities: citiesType[];
  updateCity: () => void;
  closeModalCity: () => void;
}

const CityFilterList: React.FC<CityFilterListProps> = ({ cities, updateCity, closeModalCity }) => {

  function handlerClickCity(event: React.MouseEvent<HTMLDivElement>): void {
    updateCity(event.target.textContent);
    closeModalCity();

    localStorage.setItem('myCity', event.target.textContent);
  }

  return (
    <CityFilterContainer>
      {cities.map(({ description, id }) => {
        return (
          <CityFilterItem
            key={id}
            onClick={handlerClickCity}
          >
            {description}
          </CityFilterItem>
        );
      })}
    </CityFilterContainer>
  );
};

export default CityFilterList;
