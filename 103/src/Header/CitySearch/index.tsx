import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

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

  function clickCityHandler(): void {
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
          <svg
            viewBox="0 0 24 24"
            id="icon-city"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.8 5.7a6 6 0 0 1 8.4 0c1 1 1.7 2.6 1.7 4.1 0 4-5.3 9.8-5.5 10a.5.5 0 0 1-.4.2.5.5 0 0 1-.4-.2c-.2-.2-5.5-6-5.5-10 0-1.5.6-3 1.7-4.1zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
          <CitySearchText title={cityValue}>
            {cityValue}
          </CitySearchText>
          <svg
            id="icon-menu-down"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="dfXMLID_4_">
              <path id="dfXMLID_2_" d="M49 11.1l-5.5-5.4.5-.5 5 5.1 5-5.1.5.5z" />
            </g>
            <path id="dfXMLID_5_" className="dfst0" d="M-26 0h16v16h-16z" />
            <g id="dfXMLID_6_">
              <path
                id="dfXMLID_3_"
                className="dfst1"
                d="M-20.5 5.5l-5.3 5.2-5.2-5.2"
              />
              <path id="dfXMLID_1_" className="dfst2" d="M-26 0h16v16h-16z" />
            </g>
            <g id="dfXMLID_7_">
              <path id="dfXMLID_9_" d="M8 11L2.7 5.7l.6-.6L8 9.8l4.7-4.7.6.6z" />
            </g>
          </svg>
        </CitySearchElement>
      </CitySearchContainer>
      {active && <Modal updateCityValue={updateCityValue} closeModalCity={clickCityHandler} />}
    </>
  );
};

export default CitySearch;
