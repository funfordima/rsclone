import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import { ReactComponent as IconCity } from '../public/icon-city.svg';
import { ReactComponent as ArrowDown } from '../public/arrow-down.svg';

const CitySearchContainer = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;
  justify-content: stretch;

  @media only screen and (max-width: 767px) and (min-width: 0) {
    margin-left: 0;
  }
`;

const CitySearchElement = styled.div`
  margin: 0;
  padding: 11px 40px;
  display: flex;
  height: 100%;
  border: 0;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  touch-action: manipulation;
  outline: none;
  cursor: pointer;
  transition-property: background-color, color;
  transition-duration: 0.12s;
  user-select: none;
  border-left: 1px solid hsla(0, 0%, 100%, 0.16);
  border-right: 1px solid hsla(0, 0%, 100%, 0.16);

  & svg {
    width: 24px;
    height: 24px;
    fill: rgba(255, 255, 255, 0.8);

    @media only screen and (max-width: 767px) and (min-width: 0) {
    margin: 0;
    padding: 0;
    position: static;
    }
  }

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.04);
  }

  @media only screen and (max-width: 767px) and (min-width: 0) {
    margin: 0;
    padding: 0;
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
`;

const CitySearchText = styled.span`
  padding-left: 12px;
  padding-right: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & + svg {
    transition: transform .3s;
    transform: ${props => props.active ? 'rotateZ(180deg)' : 'rotateZ(0)'};
  }

  & + svg {
    @media only screen and (max-width: 767px) and (min-width: 0) {
      display: none;
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 0) {
    display: none;
  }
`;

const CitySearch: React.FC = () => {
  const [active, setActive] = useState(false);

  const clickCityHandler = (): void => {
    setActive(!active);
  }

  const [cityValue, setCityValue] = useState('Минск');

  useEffect(() => {
    const saved = localStorage.getItem('myCity') || 'Минск';
    setCityValue(saved);
  }, []);

  const updateCityValue = (cityName: string) => {
    setCityValue(() => cityName);
  }

  return (
    <>
      <CitySearchContainer>
        <CitySearchElement
          role="presentation"
          onClick={clickCityHandler}
          onKeyPress={clickCityHandler}
        >
          <IconCity />
          <CitySearchText title={cityValue} active={active}>
            {cityValue}
          </CitySearchText>
          <ArrowDown />
        </CitySearchElement>
      </CitySearchContainer>
      {active && <Modal updateCityValue={updateCityValue} closeModalCity={clickCityHandler} />}
    </>
  );
};

export default CitySearch;
