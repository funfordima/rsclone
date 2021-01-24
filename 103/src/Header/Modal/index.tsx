import React, { useState } from 'react';
import styled from 'styled-components';
import CityFilterSearch from '../CitySearch/CityFilterSearch';
import CityFilterList from '../CitySearch/CityFilterList';

const ModalContainer = styled.div`
  position: fixed;
  inset: 48px auto auto 172px;
  transform-origin: left top;
  width: 216px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.32);
  border-radius: 2px;
  background-color: #fff;
  will-change: transform;
  z-index: 2;

  @media only screen and (max-width: 767px) and (min-width: 0) {
    inset: 48px auto auto 1px;
  }

  @media only screen and (max-width: 479px) and (min-width: 0) {
    opacity: 1;
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform-origin: center;

  }
`;

const ModalElement = styled.div`
  flex: 0 1 auto;
  max-height: 360px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
  }
`;

const ModalHeader = styled.div`
  display: none;
  color: #000;

  @media only screen and (max-width: 479px) {
    position: relative;
    box-sizing: border-box;
    display: block;
    padding: 0 47px;
    flex: 0 0 56px;
    height: 56px;
    line-height: 56px;
    font-size: 18px;
    text-align: center;
    border-bottom: 1px solid rgba(0,0,0,.08);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media only screen and (max-width: 479px) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
}
`;

const ModalTitle = styled.span`
`;

const ModalIcon = styled.div`
  position: absolute;
  padding: 8px;
  line-height: 0;
  font-size: 2rem;
  cursor: pointer;
  touch-action: manipulation;

  & span {
    display: flex;
    align-items: center;
    fill: currentColor;
    color: currentColor;
    width: 20px;
    height: 20px;
    min-width: 20px;
    touch-action: manipulation;
    transform-origin: center center;
  }

  @media only screen and (max-width: 479px) {
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
  }
`;

export type cities = {
  description: string;
  id: number;
};

interface ModalProps {
  updateCityValue: () => void;
  closeModalCity: () => void;
}

const Modal: React.FC<ModalProps> = ({ updateCityValue, closeModalCity }) => {
  let cities: cities[] = [{
    description: 'Минск',
    id: 0,
  }];
  const [value, setValue] = useState([]);

  const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
  const token = '05b831548bcf77bb6504bc8cc001cdd9ede2da28';
  const [cityValue, setCityValue] = useState('минск');
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Token ' + token
    },
    body: JSON.stringify({
      query: cityValue,
      "locations": [
        {
          "country": "*"
        }
      ]
    })
  }

  const changeCity = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCityValue(() => event.target.value);

    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        cities = result.suggestions.map((city) => {
          return ({
            description: city.data.city,
            id: city.data.geo_lat + city.data.geo_lon,
          });
        }).reduce((acc, item) => !acc.some((el) => el.description === item.description || item.description === null) ? (acc.push(item), acc) : acc, []);
        setValue(() => cities);
      })
      .catch(error => console.error(error.message));
  }

  return (
    <ModalContainer>
      <ModalElement>
        <ModalHeader>
          <ModalTitle>
            Location
          </ModalTitle>
          <ModalIcon onClick={closeModalCity}>
            <span>&times;</span>
          </ModalIcon>
        </ModalHeader>
        <ModalBody>
          <CityFilterSearch changeCityInput={changeCity} />
          <CityFilterList cities={value} updateCity={updateCityValue} closeModalCity={closeModalCity} />
        </ModalBody>
      </ModalElement>
    </ModalContainer>
  );
};

export default Modal;
